"use client"
import { loginURL } from "@/source/api"
import { postApiJson, saveToken } from "@/source/controllers/APICtrl"
import { useAppDispatch } from "@/source/store/hooks"
import { setUserData } from "@/source/store/slice/userSlice"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { ClipLoader } from "react-spinners"
import { toast } from "react-hot-toast"
import GoldenButton from "../general/GoldenButton"
import Link from "next/link"

const Login = () => {
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [processing, setProcessing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const submitFormHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    setProcessing(true)
    const res = await postApiJson(loginURL(username, password))
    console.log(res)
    if (res.detail) {
      toast.error("Invalid credentials. Please try again")
    } else {
      toast.success("Logged in successfully")
      // saveToken(res.data.token)
      // dispatch(setUserData(res.data.user))
    }
    setProcessing(false)
  }

  return (
    <div className="p-5 flex flex-col items-center justify-center w-full gap-6 font-metropolis my-auto">
      <form onSubmit={submitFormHandler} className="w-full max-w-96">
        <h1 className="text-3xl font-medium pb-1 flex items-center">
          <span className="text-highlight">Q</span>Ease
          <span className="inline-block bg-white/50 w-2 h-2 rounded-full mx-3 mt-1"></span>
          Login
        </h1>
        <p className="text-base text-gray-500 pt-1">Enter your username and password to login</p>
        <label className="pb-1 pt-4 block opacity-80">Username</label>
        <input type="text" className="px-4 py-2.5 rounded-md w-full bg-white/30 " placeholder="Enter username" value={username} onInput={e => setUsername(e.currentTarget.value)} />
        <label className="pb-1 pt-4 block opacity-80">Password</label>
        <div className="">
          <input type={showPassword ? "text" : "password"} className="px-4 py-2.5 rounded-md w-full bg-white/30" placeholder="●●●●●●●●●●" value={password} onInput={e => setPassword(e.currentTarget.value)} />
          <button type="button" className="absolute top-0 bottom-0 right-0 p-2 flex items-center justify-center text-white text-xl px-3" onClick={() => setShowPassword(p => !p)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <GoldenButton type="submit" loading={processing} className="mt-4">
          Login
        </GoldenButton>
      </form>
    </div>
  )
}
export default Login