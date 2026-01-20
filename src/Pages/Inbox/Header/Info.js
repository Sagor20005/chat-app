import TopBar from "../../../CastomElements/TopBar"


export default function Info() {
    const avatar = `https://cdn3.f-cdn.com/ppic/296498814/logo/90808634/rJbRd/CROPPED_profile_logo_LinkedIn_90808634.jpg?image-optimizer=force&format=webply&width=336`

    return (
        <>
            <div className="flex justify-center flex-col p-5">
                <TopBar text="Inbox" path="/inbox" />
                {/* NAME AND AVATAR */}
                <div className="flex justify-between items-center flex-col gap-3 pt-3">
                    <img
                        src={avatar} alt="avatar"
                        className="h-[100px] w-[100px] rounded-full object-cover" />
                    <p className="text-2xl">Jakareya Haldar</p>
                </div>
            </div>
        </>
    )
}