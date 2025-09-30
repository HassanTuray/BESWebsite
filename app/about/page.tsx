// app/about/page.tsx
import Image from "next/image";
import OrgTree, { OrgTreeNode } from "../components/org-tree";
import { communicationZoneNode } from "./communicationZone";
import { financeZoneNode } from "./financeZone";
import { parlimentarianZoneNode } from "./parlimentarianZone";
import { membershipZoneNode } from "./membershipZone";
import { programsZoneNode } from "./programsZone";
import * as page from "./aboutConstants";
import Card from "../components/card";

const rootLabel = (
  <div className="text-center">
    <div className="text-lg font-semibold">
      {page.c_eboardTreeTitle}
    </div>
  </div>
)

const orgTreeData: OrgTreeNode = {
  label: rootLabel,
  children: [communicationZoneNode, financeZoneNode, parlimentarianZoneNode, membershipZoneNode, programsZoneNode]
}

export default function AboutPage() {

  return (
    <>
    {/* Huge page title with logos on both sides (one line, no white boxes) */}
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-nowrap items-center justify-center gap-3 sm:gap-6">
        {/* Left logo (hidden on very small screens) */}
        <Image
          src="/slides/beslogo.png"   // ideally a transparent PNG/SVG
          alt="BES logo"
          width={96}
          height={96}
          className="hidden sm:block h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 object-contain"
          priority
        />

        <h1 className="whitespace-nowrap text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(255,215,0,0.22)]">
            {page.c_titleText}
          </span>
        </h1>

        {/* Right logo (hidden on very small screens) */}
        <Image
          src="/slides/nsbe-logo.png"  // ideally a transparent PNG/SVG
          alt="BES crest"
          width={96}
          height={96}
          className="hidden sm:block h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 object-contain"
          priority
        />
      </div>

      {/* Underline stays centered */}
      <div className="mx-auto mt-4 h-[3px] w-48 rounded-full bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22]" />
    </section>

      {/* Right-side stack with a SEAMLESS left image */}
      <section className="mx-auto max-w-6xl px-4 md:pr-2 lg:pr-0 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,420px)] gap-8 md:justify-items-end">
          {/* LEFT: seamless, larger image */}
          <div className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-[1/1]">
            <Image
              src={page.c_mainPhoto}   // file in /public
              alt="About BES"
              width={1600}
              height={1600}
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>

          {/* Top card — NSBE Mission */}
          <div className="w-full md:max-w-[420px] md:justify-self-end flex flex-col gap-6">
            <Card>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent">
                {page.c_NSBEMissionTitleText}
                </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80">
                {page.c_NSBEMissionStatementText}
              </p>
            </Card>

            {/* Bottom — BES Mission Statement */}
            <Card>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent">
                {page.c_BESMissionTitleText}
                </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80">
                {page.c_BESMissionStatementText}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* History card*/}
      <section className="mx-auto max-w-6xl px-4 pt-4 pb-8">
        <div className="flex justify-center">
          <Card cardWrapper="w-full md:max-w-6xl min-h-[18rem]">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-rose-600 via-[#FFD700] to-[#228B22] bg-clip-text text-transparent">
              {page.c_historyTitleText}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/80">
                {page.c_historyText}
            </p>
          </Card>
        </div>
      </section>

      {/* Test Org Tree*/}
      <section>
        <div className="Flex justify-center">
        <OrgTree
        data={orgTreeData}
        lineColor="rgba(255,255,255,0.18)"
        nodeWrapperClassName="inline-flex w-fit max-w-[12rem] flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-sm leading-tight whitespace-normal break-words"
        // wrapLabel={(label) => <HoverCard hover className="">{label}</HoverCard>} // optional: wrap with your Card/HoverCard
        />
        </div>
      </section>
    </>
  );
}
