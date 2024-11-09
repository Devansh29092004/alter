import GroupSettingsForm from "@/components/forms/group-settings"

type Props = {
    params: {
        groupid: string
    }
}

const GroupSettingsPage = ({ params }: Props) => {
    return (
        <div className="flex flex-col w-full h-full gap-10 px-16 py-10 overflow-auto">
            <div className="flex flex-col">
                <h3 className="text-3xl font-bold"> Group Settings</h3>
                <p>
                    Adjust your group settings here. these may take some time to
                    reflect on the home page
                </p>
            </div>
            <GroupSettingsForm groupId={params.groupid} />
        </div>
    )
}

export default GroupSettingsPage
