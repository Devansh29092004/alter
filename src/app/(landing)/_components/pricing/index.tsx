import BackdropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Check } from "@/icons"
import Link from "next/link"

type Props = {}

export const PricingSection = (props: Props) => {
    return (
        <div
            className=" w-full pt-20 flex max-md:flex-col items-center gap-3 h-screen"
            id="pricing"
        >
            <div className="md:w-[50%] h-full  md:py-36 px-5">
                <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
                    <GradientText
                        className="text-4xl md:text-7xl font-semibold pb-3 w-full"
                        element="H2"
                    >
                        Join and Create Groups with Ease
                    </GradientText>
                    <p className="text-lg text-left text-muted-foreground">
                        Aether gives you the freedom to join vibrant communities
                        or create your own spaces to connect, collaborate, and
                        grow with like-minded individuals.
                    </p>
                </BackdropGradient>
            </div>
            <div className="md:w-[50%] max-md:pb-20 h-full md:py-32 px-5">
                <Card className="p-7 md:w-auto w-full bg-themeBlack border-themeGray">
                    <div className="flex flex-col gap-2">
                        <CardTitle className="text-4xl font-bold">
                            IT IS FREE TO GET STARTED
                        </CardTitle>
                        <CardDescription className="text-[#B4B0AE]">
                            Ideal for building and joining communities tailored
                            to your interests.
                        </CardDescription>
                        <Link href="#" className="w-full mt-3">
                            <Button
                                variant="default"
                                className="bg-[#333337] w-full rounded-2xl text-white hover:text-[#333337]"
                            >
                                Start for Free
                            </Button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 text-[#B4B0AE] mt-5">
                        <p className="font-semibold">Features</p>
                        <span className="flex gap-2 mt-3 items-center">
                            <Check />
                            Join Unlimited Groups
                        </span>
                        <span className="flex gap-2 items-center">
                            <Check />
                            Create and Manage Your Own Groups
                        </span>
                        <span className="flex gap-2 items-center">
                            <Check />
                            Easy Group Setup and Customization
                        </span>
                        <span className="flex gap-2 items-center">
                            <Check />
                            Private and Public Group Options
                        </span>
                        <span className="flex gap-2 items-center">
                            <Check />
                            Engage with Community Members
                        </span>
                    </div>
                </Card>
            </div>
        </div>
    )
}
