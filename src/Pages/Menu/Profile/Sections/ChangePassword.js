import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../../../../CastomElements/TopBar";
import { useRef, useState } from "react";

export default function PasswordChange() {

    const { id } = useParams()
    const Navigate = useNavigate()
    const api = process.env.REACT_APP_API_URL


    // Element refarence 
    const submitBtn = useRef({})

    // HANDLE EMPTY STATE CASE > LOCATION STATE 
    if (!id) {
        alert("something wrong...")
        Navigate("/")
    }

    // usestate variable create 
    const [current_password, setcurrent_password] = useState("")
    const [newPassword, setnewPassword] = useState("")

    // Handle submit the form 
    async function OnSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)

        // Check password validity 
        // Empty check 
        if (current_password === "" || newPassword === "") {
            alert('Empty field!')
            return
        }
        // same check 
        if (current_password === newPassword) {
            alert('Both are same please try again !')
            return
        }
        // lenth check 
        if (newPassword.length < 6) {
            alert('password minimam 6 charectar !')
            return
        }

        // create data obj 
        const passwordObject = {}
        for (const [key, value] of formData) {
            passwordObject[key] = value
        }

        // go to update requist process
        const option = {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                _id: id,
                data: passwordObject
            })
        }

        // Request
        try {
            submitBtn.current.innerText = "..."
            const request = await fetch(api + "/users/password", option)
            if (!request.ok) {
                alert("server error!")
                return
            }
            submitBtn.current.innerText = "Save Changes"
            const response = await request.json()
            if (response.state) {
                alert("Success")
                Navigate('/')
            }
            if (response.error) alert(response.error)
        } catch (err) {
            alert(err.message)
        }
    }


    // handle change state data besed on input field
    function onChange(e) {
        const name = e.target.name
        switch (name) {
            case "current_password":
                setcurrent_password(e.target.value)
                break
            case "newPassword":
                setnewPassword(e.target.value)
                break
            default:
                return
        }
    }


    return (
        <>
            {/* NAVIGATION BAR */}
            <TopBar text="Back" path="/menu/profile" />
            <div className="w-full h-full top-0 left-0 p-10">


                {/* current_password CHENGE SECTION              */}
                <div>
                    <p className="text-2xl mt-3">Change Password</p>
                    <form onSubmit={OnSubmit} className="w-2/3 bg-slate-900 rounded-lg p-4 mt-4 mx-auto">
                        <div className="flex flex-col">
                            <label htmlFor="current_password">Enter Old Password</label>
                            <input
                                onChange={onChange}
                                value={current_password} id="current_password"
                                autoComplete={true.toString(true)}
                                className="text-black p-2 rounded-md bg-slate-300 placeholder:text-yellow-600 "
                                placeholder="Enter current_password."
                                name="current_password"
                                type="password" />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="newPassword">Enter New Password</label>
                            <input
                                value={newPassword}
                                autoComplete={true.toString()}
                                onChange={onChange}
                                id="newPassword"
                                className="text-black p-2 rounded-md bg-slate-300 placeholder:text-yellow-600 "
                                placeholder="Enter newPassword."
                                name="newPassword"
                                type="password" />
                        </div>
                        <button ref={submitBtn}
                            className="bg-red-900 p-2 w-full mt-4 rounded-lg hover:bg-white hover:text-black transition"
                            type="submit" >Save Changes</button>

                    </form>
                </div>

            </div>
        </>
    )
}