"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Triangle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Documents() {
  const router = useRouter();
  const [files, setFiles] = useState({
    selfie: null as File | null,
    idFront: null as File | null,
    idBack: null as File | null,
    proofOfAddress: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically upload the documents
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] bg-cover bg-center bg-no-repeat">
      <div className="min-h-screen bg-black/50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 space-y-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Triangle className="h-6 w-6 text-red-500 transform rotate-90" />
              <div>
                <h1 className="text-xl font-semibold text-gray-800">Advanta</h1>
                <p className="text-sm text-gray-500">Wealth</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="text-gray-500"
              onClick={() => router.push("/dashboard")}
            >
              Skip
            </Button>
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-900">
            Submit verification documents
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-700">
                Selfie holding your card
              </label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="No file chosen"
                  readOnly
                  value={files.selfie ? (files.selfie as any).name : ""}
                  className="flex-1"
                />
                <Input
                  type="file"
                  className="hidden"
                  id="selfie"
                  onChange={(e) =>
                    setFiles({ ...files, selfie: e.target.files?.[0] || null })
                  }
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("selfie")?.click()}
                >
                  Choose File
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700">ID Front page</label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="No file chosen"
                  readOnly
                  value={files.idFront ? (files.idFront as any).name : ""}
                  className="flex-1"
                />
                <Input
                  type="file"
                  className="hidden"
                  id="idFront"
                  onChange={(e) =>
                    setFiles({ ...files, idFront: e.target.files?.[0] || null })
                  }
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("idFront")?.click()}
                >
                  Choose File
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700">ID Back page</label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="No file chosen"
                  readOnly
                  value={files.idBack ? (files.idBack as any).name : ""}
                  className="flex-1"
                />
                <Input
                  type="file"
                  className="hidden"
                  id="idBack"
                  onChange={(e) =>
                    setFiles({ ...files, idBack: e.target.files?.[0] || null })
                  }
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("idBack")?.click()}
                >
                  Choose File
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700">Proof of address</label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="No file chosen"
                  readOnly
                  value={
                    files.proofOfAddress
                      ? (files.proofOfAddress as any).name
                      : ""
                  }
                  className="flex-1"
                />
                <Input
                  type="file"
                  className="hidden"
                  id="proofOfAddress"
                  onChange={(e) =>
                    setFiles({
                      ...files,
                      proofOfAddress: e.target.files?.[0] || null,
                    })
                  }
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    document.getElementById("proofOfAddress")?.click()
                  }
                >
                  Choose File
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
