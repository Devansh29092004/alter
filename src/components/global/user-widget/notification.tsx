"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import { Bell } from "@/icons"
import Image from "next/image"
import GlassSheet from "../glass-sheet"

export const Notification = () => {
    return (
        <GlassSheet
            trigger={
                <span className="cursor-pointer">
                    <Bell />
                </span>
            }
        >
            <Card className="bg-transparent border-none px-2 py-3">
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                    all your notifications will appear here
                </CardDescription>
            </Card>

            <Card className="h-full bg-transparent border-none flex flex-col items-center justify-center">
                <CardContent>
                    <Image
                        src={"/kitty.png"}
                        width={200}
                        height={200}
                        alt="kitty"
                    />
                    <p className="text-center font-medium text-xl text-themeTextGray">
                        wow such empty
                    </p>
                </CardContent>
            </Card>
        </GlassSheet>
    )
}
