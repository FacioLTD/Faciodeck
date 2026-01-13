"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const auth = Cookies.get("auth");
        if (auth === "true") {
            setAuthorized(true);
        } else {
            router.push("/login");
        }
    }, [router]);

    // Prevent flash of content
    if (!authorized) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                Loading...
            </div>
        );
    }

    return <>{children}</>;
}
