"use client";

import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Triangle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Verify() {
  const router = useRouter();
  const [verificationCode, setVerificationCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically verify the code
    router.push("/documents");
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <main className="min-h-screen bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] bg-cover bg-center bg-no-repeat">
      <div className="min-h-screen bg-black/50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <Triangle className="h-6 w-6 text-red-500 transform rotate-90" />
            <div>
              <h1 className="text-xl font-semibold text-gray-800">Advanta</h1>
              <p className="text-sm text-gray-500">Wealth</p>
            </div>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">Welcome</h2>
            <p className="text-gray-600">
              To complete your sign up, please verify your email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Verification code</label>
              <Input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Verify
            </Button>
          </form>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-500">
              Haven&apos;t seen the mail?{" "}
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => setTimeLeft(120)}
              >
                Click to resend
              </button>
            </p>
            <p className="text-sm">
              Time left :{" "}
              <span className="text-red-500">{formatTime(timeLeft)}</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
