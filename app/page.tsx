"use client";

import { LogInIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth/client";

export default function Page() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        try {
            const first = searchParams.get("first");

            if (first === "true") {
                await authClient.signUp.email({
                    email,
                    password,
                    name: "Rony Kati",
                });
            } else {
                await authClient.signIn.email({ email, password });
            }

            toast.success("Logged in!");
            router.push("/dashboard");
        } catch (error) {
            toast.error(`${error}`);
        }
    }

    return (
        <div className="flex h-svh items-center justify-center p-4">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Hello world</CardTitle>
                    <CardDescription>Login to house organizer</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label>Email</Label>
                        <Input
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            placeholder="example@test.com"
                            type="email"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label>Password</Label>
                        <Input
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            placeholder="yourmom1234"
                            type="password"
                        />
                    </div>
                </CardContent>

                <CardFooter>
                    <Button className="w-full" onClick={handleLogin}>
                        <LogInIcon />
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
