"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useGroupChat } from "@/hooks/groups"
import { cn } from "@/lib/utils"
import { useAppSelector } from "@/redux/store"

type LeaderBoardCardProps = {
    light?: boolean
    groupid: string
}

export const LeaderBoardCard = ({ light, groupid }: LeaderBoardCardProps) => {
    const { members } = useAppSelector((state) => state.onlineTrackingReducer)
    const { data, pathname } = useGroupChat(groupid)

    const uniqueMembers = data?.members
        ? Array.from(
              new Map(
                  data.members.map((member) => [
                      member.User?.firstname,
                      member,
                  ]),
              ).values(),
          )
        : []

    return (
        <Card
            className={cn(
                "border-themeGray lg:sticky lg:top-20 mt-10 lg:mt-0 rounded-xl p-5 flex flex-col gap-y-5",
                light ? "border-themeGray bg-[#1A1A1D]" : "bg-themeBlack",
            )}
        >
            <div>
                <h2 className="text-themeTextWhite text-xl font-bold">
                    leaderboard
                </h2>
                <p className="text-themeTextGray text-sm">
                    See who performed the best this month.
                </p>
            </div>
            <Separator />
            <div className="space-y-4">
                {data?.status === 200 &&
                    uniqueMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="flex items-center gap-3"
                        >
                            <div className="w-6 text-center font-semibold text-themeTextWhite">
                                {index + 1}
                            </div>
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={member.User?.image!} />
                                <AvatarFallback>
                                    {member.User?.firstname.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <h3>{`${member.User?.firstname} ${member.User?.lastname}`}</h3>
                                <p className="text-themeTextGray text-sm">
                                    Level 1
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </Card>
    )
}
