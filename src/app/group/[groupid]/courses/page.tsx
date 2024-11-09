"use client"

import CourseCreate from "@/components/global/create-course"
import CourseList from "./_components/course-list"

import {
    HydrationBoundary,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query"
import { useState } from "react"

type Props = {
    params: {
        groupid: string
    }
}

const CoursesPage = ({ params }: Props) => {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary>
                <div className="container grid lg:grid-cols-2 2xl:grid-cols-3 py-10 gap-5">
                    <CourseCreate groupid={params.groupid} />
                    <CourseList groupid={params.groupid} />
                </div>
            </HydrationBoundary>
        </QueryClientProvider>
    )
}

export default CoursesPage
