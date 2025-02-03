import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "../../../components/page-header";
import { PropAssetSwitcher } from "../../../components/prop-asset-switcher";

export default async function AssetsPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-8">
      <div className="md:mx-[80px] flex flex-col gap-6">
        {/* <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Assets</h1>
        </div> */}

        <PageHeader
          pageTitle="Assets"
          link="/real-estate/assets"
          linkTitle="Assets"
        />

        <div className="rounded-3xl bg-[#292929] px-6 py-[35px] flex justify-between items-center mb-6">
          <PropAssetSwitcher />
          <div className="flex space-x-2 ">
            <Link
              href="/real-estate/assets/funding"
              className="bg-white text-black px-4 py-2 rounded-xl"
            >
              Funding
            </Link>
            <Link
              href="/real-estate/assets/withdraw"
              className="bg-white text-black px-4 py-2 rounded-xl"
            >
              Withdraw dividend
            </Link>
            <Link
              href="/real-estate/assets/history"
              className="bg-white text-black px-4 py-2 rounded-xl"
            >
              History
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-lg">
        <div className="bg-[#222] p-4 rounded-lg mb-8">
          <p className="text-gray-300">
            Hi, I'm. Decisions: If you can't decide, the answer is no. If two
            equally difficult paths, choose the one more painful in the short
            term (pain avoidance is creating an illusion of equality).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-red-500 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Properties on sale</h3>
            <p className="text-sm">Job Application</p>
          </div>
          <div className="bg-[#1e3a8a] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Properties on sale</h3>
            <p className="text-sm">Job Application</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Properties on sale</h3>
            <p className="text-sm">Job Application</p>
          </div>
          <div className="bg-green-500 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Properties on sale</h3>
            <p className="text-sm">Job Application</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[57px]">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[#222] rounded-3xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={`/images/divi.png`}
                  alt="Property"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-2xl">Modern smart homes</h3>
                  <p className="text-sm text-gray-400">Total funding</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Amount invested</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Property category</span>
                  <span>For Rent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Dividend</span>
                  <span>$0.00</span>
                </div>
              </div>

              <button className="w-full bg-red-500 text-white py-2 rounded-lg mt-6">
                Withdraw dividend
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
