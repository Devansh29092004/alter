import { cn } from "@/lib/utils"
import React from "react"

type BackDropGradientProps = {
    children: React.ReactNode
    className?: string
    container?: string
}

const BackDropGradient = ({
    children,
    className,
    container,
}: BackDropGradientProps) => {
    return (
        <div className={cn("relative w-full flex flex-col", container)}>
            <div
                className={cn(
                    "absolute rounded-[50%] radial--blur mx-10",
                    className,
                )}
            />
            {children}
        </div>
    )
}

export default BackDropGradient
