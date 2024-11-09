import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useDeleteChannelPost } from "@/hooks/channels"
import { Trash2 } from "lucide-react"

type PostAuthorProps = {
    postid?: string
    image?: string
    username?: string
    channel: string
}

export const PostAuthor = ({
    image,
    username,
    channel,
    postid,
}: PostAuthorProps) => {
    const { deletePost, isPending } = useDeleteChannelPost(postid ?? "")
    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this post?")) {
            deletePost() 
        }
    }
    return (
        <div className="flex w-full gap-x-3 justify-between items-center">
            <div className="flex gap-x-3 items-center">
                <Avatar className="cursor-pointer">
                    <AvatarImage src={image} alt="user" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <p className="text-themeTextGray text-sm capitalize">
                        {username}
                    </p>
                    <p className="text-sm captialize text-themeTextGray">
                        Posted in{" "}
                        <span className="font-bold capitalize text-themeTextWhite">
                            {channel}
                        </span>
                    </p>
                </div>
            </div>
            <div>
                <Button
                    variant={"ghost"}
                    onClick={handleDelete}
                    disabled={isPending}
                >
                    {isPending ? "Deleting..." : <Trash2 color="#545454" />}
                </Button>
            </div>
        </div>
    )
}
