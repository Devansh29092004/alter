"use client"
import { Card, CardContent } from "@/components/ui/card"

import { useNavigation } from "@/hooks/navigation"
import {
    Buisness,
    Chat,
    Courses,
    Document,
    Home,
    PersonalDevelopment,
} from "@/icons"
import { cn } from "@/lib/utils"
import Link from "next/link"

type MenuProps = {
    orientation: "mobile" | "desktop"
    channelid: string
    groupid: string
}

const Menu = ({ orientation, groupid, channelid }: MenuProps) => {
    const { section, onSetSection } = useNavigation()
    type MenuProps = {
        id: number
        label: string
        icon: JSX.Element
        path: string
        section?: boolean
        integration?: boolean
    }
    const groupPageMenu: MenuProps[] = [
        {
            id: 0,
            label: "Group",
            icon: <Home />,
            path: "/group/" + groupid + "/channel/" + channelid,
            section: true,
        },
        {
            id: 1,
            label: "Courses",
            icon: <Courses />,
            path: "/group/" + groupid + "/courses/",
            section: true,
        },
        // http://localhost:3000/group/8995a388-ae88-4e7f-9d3a-d10837f7ffd1/courses/
        {
            id: 2,
            label: "Events",
            icon: <Buisness />,
            path: "#Events",
        },
        {
            id: 3,
            label: "Members",
            icon: <PersonalDevelopment />,
            path: "#Members",
        },
        {
            id: 4,
            label: "About",
            icon: <Document />,
            path: "#About",
        },
        {
            id: 5,
            label: "Huddle",
            icon: <Chat />,
            path: "#Huddle",
        },
    ]
    switch (orientation) {
        case "desktop":
            return (
                <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex md:rounded-xl flex items-center justify-center max-w-full overflow-auto">
                    <CardContent className="p-0 flex gap-2">
                        {groupPageMenu.map((menuItem) => (
                            <Link
                                href={menuItem.path}
                                onClick={() => onSetSection(menuItem.path)}
                                className={cn(
                                    "rounded-xl flex gap-2 py-2 px-4 items-center",
                                    section == menuItem.path
                                        ? "bg-[#09090B] border-[#27272A]"
                                        : "",
                                )}
                                key={menuItem.id}
                            >
                                {section == menuItem.path && menuItem.icon}
                                {menuItem.label}
                            </Link>
                        ))}
                    </CardContent>
                </Card>
            )

        case "mobile":
            return (
                <div className="flex flex-col mt-10">
                    {groupPageMenu.map((menuItem) => (
                        <Link
                            href={menuItem.path}
                            onClick={() => onSetSection(menuItem.path)}
                            className={cn(
                                "rounded-xl flex gap-2 py-2 px-4 items-center",
                                section == menuItem.path
                                    ? "bg-themeGray border-[#27272A]"
                                    : "",
                            )}
                            key={menuItem.id}
                        >
                            {menuItem.icon}
                            {menuItem.label}
                        </Link>
                    ))}
                </div>
            )
        default:
            return <></>
    }
}

export default Menu
