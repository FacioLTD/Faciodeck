"use client";

import React, { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const CustomShaderMaterial = {
    vertexShader: `
    uniform float uTime;
    uniform vec2 uMousePosition;
    uniform vec2 uResolution;
    
    attribute vec3 positionDNA;
    attribute vec3 positionSound;
    attribute float colorType; // 0.0 to 1.0
    
    varying float vColorType;
    varying vec3 vPos;

    // Simple pseudo-random noise
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {
      vColorType = colorType;

      // 1. Calculate Sound position (Wave)
      vec3 currentSoundPos = positionSound;
      // Complex wave motion
      float wave = sin(uTime * 1.5 + positionSound.x * 0.4) * 1.5;
      wave += cos(uTime * 2.2 + positionSound.x * 0.8) * 0.5;
      currentSoundPos.y += wave;
      currentSoundPos.z += sin(uTime * 0.5 + positionSound.y) * 0.5;

      // 2. DNA Position (Breathing/Living)
      vec3 currentDNAPos = positionDNA;
      // Gentle floating drift based on position and time
      float drift = sin(uTime * 0.5 + positionDNA.y * 0.5) * 0.1;
      currentDNAPos.x += drift;
      currentDNAPos.z += cos(uTime * 0.3 + positionDNA.x) * 0.1;

      // 3. Interaction
      // Map mouse from screen space (-height/2 to height/2 approx) to world
      // Assuming camera z=15, simple distance check.
      float dist = distance(uMousePosition, currentDNAPos.xy); 
      
      // Radius of influence - make it responsive
      float influence = smoothstep(5.0, 0.0, dist); 

      // 4. Mix
      vec3 finalPos = mix(currentDNAPos, currentSoundPos, influence);

      // 5. Repel/Disperse (Quantum Scatter)
      if (dist < 3.0) {
        vec2 repelDir = normalize(finalPos.xy - uMousePosition);
        float force = (3.0 - dist);
        // Add random scatter to force
        float noise = random(finalPos.xy + uTime) * 0.5;
        finalPos.xy += repelDir * force * 0.8 + noise;
        finalPos.z += force * 0.5;
      }
      
      vPos = finalPos;

      vec4 modelViewPosition = modelViewMatrix * vec4(finalPos, 1.0);
      gl_Position = projectionMatrix * modelViewPosition;
      
      // Size attenuation
      gl_PointSize = (120.0 / -modelViewPosition.z); 
      // Twinkle size
      gl_PointSize *= (0.8 + 0.4 * sin(uTime * 5.0 + finalPos.x));
    }
  `,
    fragmentShader: `
    varying float vColorType;
    
    void main() {
      // Create a nice round particle
      vec2 coord = gl_PointCoord - vec2(0.5);
      if(length(coord) > 0.5) discard;
      
      // Colors:
      // DNA bases colors (Cyan/Magenta/Blue-ish)
      vec3 color1 = vec3(0.0, 0.8, 1.0); // Cyan
      vec3 color2 = vec3(1.0, 0.0, 0.5); // Magenta
      
      vec3 finalColor = mix(color1, color2, vColorType);
      
      // Add a glow/intensity falloff
      float strength = 1.0 - (length(coord) * 2.0);
      strength = pow(strength, 1.5);
      
      gl_FragColor = vec4(finalColor * strength, 1.0);
    }
  `
};

function DNAWave() {
    const pointsRef = useRef<THREE.Points>(null);

    // Mouse tracking in Three.js coordinates
    // We'll normalize mouse to world coordinates approx (-10 to 10)
    const mouse = useRef(new THREE.Vector2(9999, 9999));

    useThree(({ camera, pointer, viewport }) => {
        // Update mouse ref on each frame or event if needed, 
        // but `pointer` from useThree is reactive-ish.
        // Actually we can just read `pointer` in useFrame.
    });

    // Generate Data
    const count = 10000;
    const positionsDNA = useMemo(() => new Float32Array(count * 3), []);
    const positionsSound = useMemo(() => new Float32Array(count * 3), []);
    const colorTypes = useMemo(() => new Float32Array(count), []);

    useMemo(() => {
        for (let i = 0; i < count; i++) {
            // DNA Helix Generation
            // A double helix along Y axis? Prompt said Y axis.
            const t = (i / count) * 40.0 - 20.0; // Y range -20 to 20
            const radius = 2.0;
            const angle = t * 2.0;

            // Strand 1 (odds) vs Strand 2 (evens)
            const strand = i % 2 === 0 ? 0 : Math.PI;

            const x = Math.cos(angle + strand) * radius;
            const y = t;
            const z = Math.sin(angle + strand) * radius;

            // Add some noise/scatter to give it volume
            const spread = 0.2;
            positionsDNA[i * 3] = x + (Math.random() - 0.5) * spread;
            positionsDNA[i * 3 + 1] = y + (Math.random() - 0.5) * spread;
            positionsDNA[i * 3 + 2] = z + (Math.random() - 0.5) * spread;

            // Sound/Wave Configuration
            // A grid or a long line? 
            // "Sound state: Where it should be as part of the wave"
            // Let's make a flat plane or line that will undulate
            // Spread across X axis
            const sx = (i / count) * 40.0 - 20.0; // X range -20 to 20
            const sy = (Math.random() - 0.5) * 5.0; // Random Y height band
            const sz = 0.0; // Flat on Z initially

            positionsSound[i * 3] = sx;
            positionsSound[i * 3 + 1] = sy;
            positionsSound[i * 3 + 2] = sz;

            // Color Type
            colorTypes[i] = Math.random();
        }
    }, [positionsDNA, positionsSound, colorTypes]);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMousePosition: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(100, 100) } // placeholder
    }), []);

    useFrame((state) => {
        const { clock, pointer, viewport } = state;

        // Update Time
        if (pointsRef.current) {
            // @ts-ignore
            pointsRef.current.material.uniforms.uTime.value = clock.getElapsedTime();

            // Update Mouse - Convert normalized pointer (-1 to 1) to approximate world coords
            // Assuming a camera at z=10 looking at 0,0,0, viewport width covers the view.
            const x = (pointer.x * viewport.width) / 2;
            const y = (pointer.y * viewport.height) / 2;

            // @ts-ignore
            pointsRef.current.material.uniforms.uMousePosition.value.set(x, y);
        }

        // Slowly rotate the whole DNA structure if in DNA mode? 
        // Or let the shader handle everything. 
        // Let's add slight rotation for visual interest
        // Slowly rotate the whole DNA structure
        if (pointsRef.current) {
            pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
            // Gentle floating oscillation
            pointsRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.5;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positionsDNA, 3]}
                />
                <bufferAttribute
                    attach="attributes-positionDNA"
                    args={[positionsDNA, 3]}
                />
                <bufferAttribute
                    attach="attributes-positionSound"
                    args={[positionsSound, 3]}
                />
                <bufferAttribute
                    attach="attributes-colorType"
                    args={[colorTypes, 1]}
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
    );
}

export default function Background3D() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000' }}>
            <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
                <DNAWave />
                <EffectComposer>
                    <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.5} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
