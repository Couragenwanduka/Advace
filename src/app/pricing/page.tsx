// app/pricing/page.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { PageHeader } from "../../components/page-header";

interface PricingCardProps {
  title: string;
  priceRange: string;
  description: string;
  buttonColor: string;
  titleColor: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  priceRange,
  description,
  buttonColor,
  titleColor,
}) => (
  <div className="min-w-[388px] max-w-[388px] p-8 rounded-[40px] bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.01)] shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)] backdrop-blur-[25px] border border-[rgba(230,57,70,0.3)]">
    <h5 className={`mt-3 text-[22px] font-semibold text-white ${titleColor}`}>
      {title}
    </h5>
    <p className="text-sm text-white/50">Rates are subject to change.</p>
    <p className="text-[32px] font-medium text-white mt-4">{priceRange}</p>
    <p className="mt-3 text-sm text-white leading-[25px]">{description}</p>
    <Link
      href="/transactions"
      className={`inline-flex items-center justify-center mt-4 px-10 py-3 h-12 rounded-lg text-white ${buttonColor}`}
    >
      Get Started
    </Link>
  </div>
);

export default function Pricing() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="py-8">
          <PageHeader pageTitle="Pricing" link="/pricing" linkTitle="Pricing" />

          <section className="bg-black">
            <div>
              <p className="text-center text-[#E63946] text-lg tracking-[0.2em] mb-4">
                Our Pricing Plan
              </p>
              <h3 className="text-center text-white text-[42px] font-semibold mb-8">
                Choose Your Affordable Pricing Plan
              </h3>
              <p className="text-center text-white/50 text-sm max-w-[762px] mx-auto mb-16">
                All investment can be terminated before the above stipulated
                investment duration as long as service charge is paid in full...
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-16">
                <PricingCard
                  title="Newbie Plan"
                  priceRange="$50,000-$75,000"
                  description="With this plan, investors earn daily percentage returns of 1.10% on a daily basis..."
                  buttonColor="bg-[#E63946]"
                  titleColor="text-[#E63946]"
                />
                <PricingCard
                  title="Silver Plan"
                  priceRange="$75,000-$100,000"
                  description="With this plan you earn a minimum of 1.20% profits daily which may increase to 1.40%..."
                  buttonColor="bg-[#FFBA08]"
                  titleColor="text-[#FFBA08]"
                />
                <PricingCard
                  title="Exclusive Plan"
                  priceRange="$100,000-$150,000"
                  description="With this plan you earn profits over 1.40% of the Silver plan weekly..."
                  buttonColor="bg-[#56CCF2]"
                  titleColor="text-[#56CCF2]"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-4 -mx-[120px] mt-4">
                <PricingCard
                  title="Expert Plan"
                  priceRange="$150,000-Unlimited"
                  description="With this plan, investors earn daily percentage returns of 8-12% weekly..."
                  buttonColor="bg-[#0CCE6B]"
                  titleColor="text-[#0CCE6B]"
                />
                <h5 className="text-[32px] font-medium text-white self-center max-w-[388px] text-center">
                  All investment can be terminated before the above
                  stipulated...
                </h5>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
