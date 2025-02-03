import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";

export default async function ProfilePage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Profile</h1>
      </div>

      <div className="relative">
        {/* Turquoise wave background */}
        <div className="absolute inset-0 bg-[#40E0D0] rounded-lg overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2340E0D0' fill-opacity='0.3' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Profile content */}
        <div className="relative z-10 p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold">Esthera Jackson</h2>
              <p className="text-gray-300">{user?.email}</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-white text-black px-4 py-2 rounded-xl">
                New investment
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-xl">
                Withdraw revenue
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Properties cards */}
        <div className="lg:col-span-1 space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Properties on sale</h3>
              <p className="text-sm text-gray-400">Job Application</p>
            </div>
          ))}

          {/* Announcements */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Announcements</h3>
            <p className="text-gray-400">
              Hi, I'm Alec Thompson. Decisions: If you can't decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </p>
          </div>
        </div>

        {/* KYC verification form */}
        <div className="lg:col-span-2 bg-[#1a1a1a] p-6 rounded-lg">
          <div className="flex gap-4 mb-6">
            <button className="px-4 py-2 rounded hover:bg-gray-800">
              About me
            </button>
            <button className="px-4 py-2 rounded bg-red-500 text-white">
              KYC
            </button>
            <button className="px-4 py-2 rounded hover:bg-gray-800">
              Timeline
            </button>
          </div>

          <h3 className="text-xl font-semibold mb-6">
            Submit verification documents
          </h3>

          <form className="space-y-6">
            {[
              "Selfie holding your card",
              "Selfie holding your card",
              "Selfie holding your card",
              "Selfie holding your card",
            ].map((label, index) => (
              <div key={index} className="space-y-2">
                <label className="block text-sm font-medium">{label}</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Input Your Email"
                    className="flex-1 bg-[#222] border border-gray-700 rounded p-2"
                  />
                  <button
                    type="button"
                    className="bg-gray-700 px-4 py-2 rounded"
                  >
                    Choose File
                  </button>
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition-colors"
            >
              Submit verification
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
