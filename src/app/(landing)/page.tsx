"use client"
import dynamic from "next/dynamic"
import CallToAction from "./_components/call-to-action"
import DashboardSnippet from "./_components/dashboard-snippet"
import { Features } from "./_components/features"
import { PricingSection } from "./_components/pricing"
import { LearnSkill } from "./_components/learn-skills"

// const PricingSection = dynamic(
//     () =>
//         import("./_components/pricing").then(
//             (component) => component.PricingSection,
//         ),
//     { ssr: true },
// )

export default function Home() {
    return (
        <main className="md:px-10 pt-20 flex flex-col gap-36">
            <div>
                <CallToAction />
                <DashboardSnippet />
            </div>
            <LearnSkill />
            <Features />
            <PricingSection />
        </main>
    )
}
