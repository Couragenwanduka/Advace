"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { Eye, EyeOff, Triangle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { login } from "../../lib/supabase";

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  // const supabase = createClientComponentClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const { error } = await supabase.auth.signInWithPassword({
    //   email: formData.email,
    //   password: formData.password,
    // });

    // if (error) {
    //   setError(error.message);
    // } else {
    //   router.push("/dashboard");
    //   router.refresh();
    // }

    await login(formData.email, formData.password)
      .then((data) => {
        console.log(data);
        router.push("/dashboard");
        router.refresh();
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <main className="min-h-screen">
      <div className="min-h-screen bg-black/50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={80}
              className="rounded-full"
            />
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-900">
            Welcome back
          </h2>

          {error && <p className="text-red-500 text-center"> {error} </p>}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <div className="space-y-2">
              <label className="text-sm text-gray-700">
                Email or Phone number
              </label>
              <Input
                type="text"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={formData.rememberMe}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, rememberMe: checked as boolean })
                }
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Sign in
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/" className="text-red-500 hover:text-red-600">
              Register
            </Link>
          </p>

          {/* Footer */}
          {/* <div className="pt-8 mt-8 border-t border-gray-200 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="text-gray-500 uppercase tracking-wider text-xs mb-2">
                  Call Us
                </h3>
                <p className="text-gray-700">+44 7441 393510</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-wider text-xs mb-2">
                  Email Us
                </h3>
                <p className="text-gray-700 break-all">
                  admin@advantawealthinvest.biz
                </p>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500">
              Powered by ADVANTA INVESTMENT COPERATION
            </p>
          </div> */}
        </div>
      </div>
    </main>
  );
}
