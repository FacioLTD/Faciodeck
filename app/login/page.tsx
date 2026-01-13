"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginPage() {
    const [code, setCode] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (code === "seed2026") {
            Cookies.set("auth", "true", { expires: 365 });
            router.push("/");
        } else {
            setError(true);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold tracking-tight">
                        Protected Access
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Enter the invite code to continue
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="code" className="sr-only">
                                Invite Code
                            </label>
                            <input
                                id="code"
                                name="code"
                                type="password"
                                required
                                className="relative block w-full rounded-md border-0 bg-white/5 py-1.5 text-white ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 px-3"
                                placeholder="Invite Code"
                                value={code}
                                onChange={(e) => {
                                    setCode(e.target.value);
                                    setError(false);
                                }}
                            />
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center">
                            Invalid code. Please try again.
                        </p>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Enter
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
