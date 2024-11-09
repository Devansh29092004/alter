import GradientText from "@/components/global/gradient-text"
import Marquee from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

const communitiesName = [
    {
        name: "NexusTech",
        img: "https://avatar.vercel.sh/jack",
        description:
            "A community for cutting-edge technology discussions and trends.",
    },
    {
        name: "Techhunterssss",
        img: "https://avatar.vercel.sh/jill",
        description:
            "Collaborate and innovate with like-minded tech enthusiasts.",
    },
    {
        name: "CodeConnect",
        img: "https://avatar.vercel.sh/john",
        description:
            "Connecting coders to share ideas, challenges, and projects.",
    },
    {
        name: "AI Pioneers",
        img: "https://avatar.vercel.sh/jane",
        description:
            "Join the AI revolution and pioneer new advancements together.",
    },
    {
        name: "Web Wizards",
        img: "https://avatar.vercel.sh/jenny",
        description:
            "For front-end developers and web designers crafting modern experiences.",
    },
]

const firstRow = communitiesName.slice(0, communitiesName.length / 2)
const secondRow = communitiesName.slice(communitiesName.length / 2)

const TechnologyCard = ({
    img,
    name,
    description,
}: {
    img: string
    name: string
    description: string
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-start gap-2">
                <img
                    className="rounded-full "
                    width="32"
                    height="32"
                    alt=""
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <blockquote className="mt-2 text-sm">
                        {description}
                    </blockquote>
                </div>
            </div>
        </figure>
    )
}

export function LearnSkill() {
    return (
        <div
            className="flex flex-col items-start gap-y-5 md:gap-y-0 pt-36 "
            id="communities"
        >
            <GradientText
                className="text-4xl md:text-7xl font-semibold pb-3 w-full"
                element="H1"
            >
                Learn, connect, and grow with a community-driven platform
            </GradientText>
            <p className="text-xl text-left text-muted-foreground w-full">
                designed to foster knowledge and build meaningful networks.
            </p>
            <div
                style={{
                    maskImage: `linear-gradient(to right,rgba(0, 0, 0, 0),rgba(0, 0, 0, 1) 20%,rgba(0, 0, 0, 1) 80%,rgba(0, 0, 0, 0))`,
                }}
                className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl"
            >
                <div className="absolute w-[40px] slider-overlay left-0 h-full z-50" />
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((communitiesName) => (
                        <TechnologyCard
                            key={communitiesName.name}
                            {...communitiesName}
                        />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((communitiesName) => (
                        <TechnologyCard
                            key={communitiesName.name}
                            {...communitiesName}
                        />
                    ))}
                </Marquee>
                <div className="absolute w-[40px] slider-overlay-rev right-0 h-full z-50" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </div>
    )
}
