import type { Metadata } from "next";
import { CommunityHighlights } from "@/components/landing/community-highlights";
import { DisclaimerBanner } from "@/components/landing/disclaimer-banner";
import { Hero } from "@/components/landing/hero";
import { LiveTicker } from "@/components/landing/live-ticker";
import { MechanicsGrid } from "@/components/landing/mechanics-grid";
import { SignalsTable } from "@/components/landing/signals-table";
import { SITE_DESCRIPTION, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `BEMXC — ${SITE_TAGLINE}` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <LiveTicker />
      <MechanicsGrid />
      <SignalsTable />
      <CommunityHighlights />
      <DisclaimerBanner />
    </main>
  );
}
