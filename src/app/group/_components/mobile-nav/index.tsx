import { Notification } from "@/components/global/user-widget/notification"
import { UserAvatar } from "@/components/global/user-widget/user"
import { Home, Message } from "@/icons"
import { currentUser } from "@clerk/nextjs/server"
import Link from "next/link"

type Props = {
    groupid: string
    channelid?: string
}

const MobileNav = async ({ groupid, channelid }: Props) => {
    const user = await currentUser()

    return (
        <div className="bg-[#1A1A1D] w-screen py-3 px-11 fixed bottom-0 z-50 md:hidden justify-between items-center flex">
            <Link href={`/group/${groupid}/channel/${channelid}/`}>
                <Home className="h-7 w-7" />
            </Link>
            <Notification />
            <Link href={`/group/${groupid}/messages`}>
                <Message className="h-7 w-7" />
            </Link>
            <UserAvatar image={user?.imageUrl!} groupid={groupid} />
        </div>
    )
}

export default MobileNav
