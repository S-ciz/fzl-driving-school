"use client";

import Header from "../Header";
import Link from "next/link";
import { useRouter } from "next/navigation";

//api

import { getUser } from "@/api";

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

export default function SignIn() {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validUser, setValidUser] = useState(false);

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();

    getUser(email, password)
      .then((res) => {
        if (res.success) {
          const user = res.data;
          //save to session
          sessionStorage.setItem("fzl-user", user.id);
          switch (user.role) {
            case "ADMIN": {
              setValidUser(true);
              route.push("/pages/admin");
              break;
            }
            case "STUDENT": {
              setValidUser(true);
              route.push("/pages/user");
              break;
            }
          }
        } else {
          setValidUser(false);
        }
      })
      .catch((err) => console.log("error", err));
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
