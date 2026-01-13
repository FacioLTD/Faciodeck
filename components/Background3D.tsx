"use client";

import React, { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const CustomShaderMaterial = {
    vertexShader: `
    uniform float uTime;
    uniform vec2 uMousePosition; // World space coordinates
    
    attribute vec3 positionInitial;
    attribute float aRandom;     // Random 0..1 for variety
    attribute float aSize;       // Random size factor
    
    varying float vAlpha;

    void main() {
      // 1. Base Position: Drift over time
      // Use simple noise-like movement based on initial pos
      vec3 pos = positionInitial;
      
      // Gentle floating (Brownian-like)
      float speed = 0.2;
      pos.x += sin(uTime * speed + aRandom * 10.0) * 0.5;
      pos.y += cos(uTime * speed * 0.8 + aRandom * 20.0) * 0.5;
      pos.z += sin(uTime * speed * 0.5 + aRandom * 30.0) * 0.5;

      // 2. Mouse Attraction (The "Magical" Part)
      // Calculate vector to mouse (uMousePosition is xy at specific z depth logic, but here we treat as 2D attractor in 3D space)
      
      // We assume mouse affects xy plane primarily, z is just depth
      float dist = distance(pos.xy, uMousePosition);
      
      // Attraction range - INCREASED for visibility
      float range = 25.0; 
      
      if (dist < range) {
        float strength = (range - dist) / range; // 0 to 1 (1 at center)
        strength = pow(strength, 2.0); // Non-linear falloff
        
        // Direction to mouse
        vec2 dir = normalize(uMousePosition - pos.xy);
        
        // Move towards mouse
        float attractionPower = 5.0 * strength; // Stronger pull
        pos.xy += dir * attractionPower;
        
        // Add a "Swirl" - perpendicular vector
        // Rotated 90 degrees: (x, y) -> (-y, x)
        vec2 swirlDir = vec2(-dir.y, dir.x);
        float swirlPower = 3.0 * strength; // Stronger swirl
        
        // Apply swirl based on which "side" or just global swirl
        // Let's vary swirl direction by particle random to create chaos or uniform for vortex
        // Uniform vortex feels more controlled/magical
        pos.xy += swirlDir * swirlPower;
        
        // Pull Z slightly towards camera or push away?
        // Let's pull slightly towards camera to make them "pop"
        pos.z += strength * 3.0;
      }

      vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * modelViewPosition;
      
      // Size attenuation
      gl_PointSize = (aSize * 60.0) / -modelViewPosition.z; 
      
      // Interactive size pulse
      // close to mouse -> bigger?
      // gl_PointSize *= 1.0 + (5.0 / (dist + 0.1)) * 0.2; // slight scale up near mouse

      // Fade out particles that are too far or behind camera (simple culling visual)
      vAlpha = 0.6 + 0.4 * sin(uTime + aRandom * 10.0);
    }
  `,
    fragmentShader: `
    varying float vAlpha;
    
    void main() {
      // Soft particle
      vec2 coord = gl_PointCoord - vec2(0.5);
      float dist = length(coord);
      
      if(dist > 0.5) discard;
      
      // Gradient scale for softness
      // 0.5 (edge) -> 0.0, 0.0 (center) -> 1.0
      float strength = 1.0 - (dist * 2.0);
      strength = pow(strength, 1.5); // Falloff curve
      
      // Color: "Magical" Blue/Purple/Cyan mix
      // Let's keep it very light/white with subtle tint
      vec3 color = vec3(0.8, 0.9, 1.0); 
      
      gl_FragColor = vec4(color, vAlpha * strength);
    }
  `
};

function MagicalParticles() {
    const pointsRef = useRef<THREE.Points>(null);

    // Initial Data Generation
    // Count: Reduced for "minimal" feel
    const count = 3000;

    const [positions, randoms, sizes] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const rand = new Float32Array(count);
        const sz = new Float32Array(count);

        // Distribution area
        const spread = 25; // Wide area to cover screen

        for (let i = 0; i < count; i++) {
            // Random distribution
            pos[i * 3] = (Math.random() - 0.5) * spread;     // x
            pos[i * 3 + 1] = (Math.random() - 0.5) * spread; // y
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;     // z depth

            rand[i] = Math.random();
            sz[i] = Math.random() * 1.5 + 0.5; // size multiplier
        }

        return [pos, rand, sz];
    }, []);

    // Use a ref for mouse position to avoid re-renders
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize to -1 to 1
            mouseRef.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1
            };
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMousePosition: { value: new THREE.Vector2(0, 0) }
    }), []);

    useFrame((state) => {
        const { clock, viewport } = state;

        if (pointsRef.current) {
            // @ts-ignore
            pointsRef.current.material.uniforms.uTime.value = clock.getElapsedTime();

            // Calculate world position based on global mouse ref and current viewport
            const x = (mouseRef.current.x * viewport.width) / 2;
            const y = (mouseRef.current.y * viewport.height) / 2;

            // @ts-ignore
            pointsRef.current.material.uniforms.uMousePosition.value.set(x, y);

            // Update debug marker
            const marker = state.scene.getObjectByName("debug-marker");
            if (marker) {
                marker.position.set(x, y, 0);
            }
        }
    });

    return (
        <group>
            {/* Visual Debug Marker - RED SPHERE to track mouse */}
            <mesh name="debug-marker" position={[0, 0, 0]}>
                <sphereGeometry args={[0.5, 16, 16]} />
                <meshBasicMaterial color="red" wireframe />
            </mesh>

            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-positionInitial"
                        args={[positions, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-aRandom"
                        args={[randoms, 1]}
                    />
                    <bufferAttribute
                        attach="attributes-aSize"
                        args={[sizes, 1]}
                    />
                </bufferGeometry>
                <shaderMaterial
                    vertexShader={CustomShaderMaterial.vertexShader}
                    fragmentShader={CustomShaderMaterial.fragmentShader}
                    uniforms={uniforms}
                    transparent
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </points>
        </group>
    );
}

export default function Background3D() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000', pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }} dpr={[1, 2]}> {/* Optimized DPR */}
                <MagicalParticles />
                <EffectComposer>
                    {/* Subtle bloom for the "magic" glow */}
                    <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={0.5} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
