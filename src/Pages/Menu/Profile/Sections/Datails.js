import { useNavigate } from "react-router-dom"

export default function Datails({ data }) {

    const Navigate = useNavigate()

    const InformationList = [
        {
            name: data.name,
            action: ()=> Navigate("/change-name",{state:data})
        },
        {
            name: data.username,
            action: ()=> Navigate("/change-name",{state:data})
        },
        {
            name: "Password Change",
            action: ()=>Navigate("/password/"+data._id)
        },
        {
            name: "Email Change",
            action: ()=>Navigate("/email/"+data._id)
        }
    ]

    return (
        <>
            <div className="hover:scale-105 transition w-4/5 md:w-2/3 bg-slate-400 p-5 rounded-xl mt-5 mx-auto ">
                {
                    InformationList.map((information)=>{
                   return(
                     <div onClick={information.action} key={`${Math.random()*Date.now()}`} className=" flex justify-between mb-3">
                        <p>{information.name}</p>
                        <i onClick={information.action} className="hover:scale-110 hover:text-yellow-200 transition fa-solid fa-arrow-right"></i>
                    </div>
                   )
                })
                }
            </div>
        </>
    )
}