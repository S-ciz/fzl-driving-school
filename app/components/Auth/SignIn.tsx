"use client";

import Header from "../Header";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { getUser } from "@/prisma/actions/user";

export default function SignIn() {
  const route = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validUser, setValidUser] = useState(false);

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();

    const current_user = await getUser(email, password);

    if (current_user != null) {
      const role = current_user.role;

      sessionStorage.setItem("current_user", JSON.stringify(current_user));

      switch (role) {
        case "STUDENT": {
          route.push(`/pages/user?id=${current_user.id}`)
          //window.location.pathname = "/pages/user";
          break;
        }
        case "ADMIN": {
          route.push("/pages/admin")
         // window.location.pathname = "pages/admin";
          break;
        }
      }
    } else {
      setValidUser(true);
    }
  }

  return (
    <>
      <Header />

      <Card className="w-full m-auto mt-10 max-w-sm">
        {validUser ? (
          <p className="bg-red-500 text-white text-center w-[90%] p-2 m-auto rounded">
            Incorrect Email or password
          </p>
        ) : (
          <p></p>
        )}
        <CardHeader>
          <CardTitle className="text-center mb-5 font-bold">
            Login to your account
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Link href={"/pages/signUp"}>
              <Button variant="outline">Sign Up</Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitForm}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="password"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-3">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
