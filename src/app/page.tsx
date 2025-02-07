"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { Eye, EyeOff, Triangle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { registerUser } from "../lib/supabase";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    country: "",
    referralName: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to register the user
    // For now, we'll simulate the flow
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    registerUser(formData)
      .then((user) => {
        console.log("Registration successful!");
        console.log(user);
        router.push("/documents");
      })
      .catch((error) => {
        alert("Registration error: " + error.message);
        console.error("Registration error:", error);
      });
  };

  return (
    <main className="min-h-screen">
      <div className="min-h-screen bg-black/50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl p-8 space-y-6">
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
            Register your account
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Full name</label>
                <Input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">Username</label>
                <Input
                  type="text"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">Phone no.</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">Country</label>
                <Input
                  type="text"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">Referral name</label>
                <Input
                  type="text"
                  value={formData.referralName}
                  onChange={(e) =>
                    setFormData({ ...formData, referralName: e.target.value })
                  }
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

              <div className="space-y-2">
                <label className="text-sm text-gray-700">
                  Confirm password
                </label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
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
              Register
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-red-500 hover:text-red-600">
              Sign in
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
