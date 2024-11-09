import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
} from "@radix-ui/react-icons"

import BackDropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { GROUPLE_CONSTANTS } from "@/constants"

const features = [
    {
        Icon: FileTextIcon,
        name: "Seamless Course Management",
        description: "Effortlessly organize, track, and manage.",
        href: "/",
        cta: "Learn more",
        background: (
            <img
                src="/dashboard-snippet-channels.png"
                alt="Seamless Course Management"
                className="absolute -right-20 -top-20 opacity-60"
            />
        ),
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: InputIcon,
        name: "Powerful Analytics and Insights",
        description: "Monitor progress and engagement with powerful insights.",
        href: "/",
        cta: "Learn more",
        background: (
            <img
                src="/dashboard-snippet-channels.png"
                alt="Powerful Analytics and Insights"
                className="absolute -right-20 -top-20 opacity-60"
            />
        ),
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: GlobeIcon,
        name: "Engaging Community Spaces",
        description: "designed for collaboration.",
        href: "/",
        cta: "Learn more",
        background: (
            <img
                src="/dashboard-snippet-channels.png"
                alt="Engaging Community Spaces"
                className="absolute -right-20 -top-20 opacity-60"
            />
        ),
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
    {
        Icon: CalendarIcon,
        name: "Easy to Set Up",
        description:
            "Start with Aether in minutes.( without any technical hassle.)",
        href: "/dashboard-snippet-course",
        cta: "Learn more",
        background: (
            <img
                className="absolute -right-20 -top-20 opacity-60"
                alt="Easy to Set Up"
            />
        ),
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: BellIcon,
        name: "Students Can Create Teams within Groups",
        description: "Fostering a deeper sense of community.",
        href: "/",
        cta: "Learn more",
        background: (
            <img
                src="/dashboard-snippet.png"
                alt="Students Can Create Teams within Groups"
                className="absolute -right-20 -top-20 opacity-60"
            />
        ),
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
]

export async function Features() {
    return (
        <div className="md:h-screen" id="features">
            <GradientText
                className="text-4xl md:text-7xl font-semibold pb-3 w-full pt-36 "
                element="H2"
            >
                Everything You Need to Build Thriving Communities
            </GradientText>
            <p className="text-lg text-left text-muted-foreground">
                From creating custom groups to fostering engaging interactions
            </p>
            <div className="py-20 relative">
                <BackDropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
                    <div className="flex flex-col gap-3 mt-16 pl-5 md:hidden relative">
                        {GROUPLE_CONSTANTS.createGroupPlaceholder.map(
                            (placeholder) => (
                                <div
                                    className="flex gap-3"
                                    key={placeholder.id}
                                >
                                    {placeholder.icon}
                                    <p className="text-themeTextGray">
                                        {placeholder.label}
                                    </p>
                                </div>
                            ),
                        )}
                    </div>
                </BackDropGradient>
                <BentoGrid className="lg:grid-rows-3 max-lg:hidden relative">
                    {features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </div>
    )
}
