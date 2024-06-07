"use client"
import { registerURL } from "@/source/api"
import { postApiJson, saveToken } from "@/source/controllers/APICtrl"
import { useAppDispatch } from "@/source/store/hooks"
import { setUserData } from "@/source/store/slice/userSlice"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { ClipLoader } from "react-spinners"
import { toast } from "react-hot-toast"
import GoldenButton from "../general/GoldenButton"
import Link from "next/link"

const Signup = () => {
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("user")
  const [processing, setProcessing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const submitFormHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    setProcessing(true)
    const res = await postApiJson(registerURL(), { username, password, role })
    console.log(res)
    if (res.detail) {
      toast.error("Invalid credentials. Please try again")
      setPassword("")
    } else {
      toast.success("Signed up successfully")
      // saveToken(res.data.token)
      // dispatch(setUserData(res.data.user))
    }
    setProcessing(false)
  }

  return (
    <div className="p-5 flex flex-col items-center justify-center w-full gap-6 font-metropolis my-auto">
      <form onSubmit={submitFormHandler} className="w-full max-w-96">
        <h1 className="text-3xl font-medium pb-1">Signup</h1>
        <p className="text-base text-gray-500 pt-1">Enter your username and password to signup</p>
        <label className="pb-1 pt-4 block opacity-80">Username</label>
        <input required type="text" className="px-4 py-2.5 rounded-md w-full bg-white/30 " placeholder="Enter username" value={username} onInput={e => setUsername(e.currentTarget.value)} />
        <label className="pb-1 pt-4 block opacity-80">Password</label>
        <div className="">
          <input required type={showPassword ? "text" : "password"} className="px-4 py-2.5 rounded-md w-full bg-white/30" placeholder="●●●●●●●●●●" value={password} onInput={e => setPassword(e.currentTarget.value)} />
          <button type="button" className="absolute top-0 bottom-0 right-0 p-2 flex items-center justify-center text-white text-xl px-3" onClick={() => setShowPassword(p => !p)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <label className="pb-1 pt-4 block opacity-80">Role</label>
        <input required type="text" className="mt-2 px-4 py-2.5 rounded-md w-full bg-white/30 " placeholder="Enter role" value={role} onInput={e => setRole(e.currentTarget.value)} />
        <GoldenButton type="submit" loading={processing} className="mt-4">
          Signup
        </GoldenButton>
        <div className="mt-2 w-full justify-between items-center flex">
          <Link href="/login" className="text-sm block text-gray-500 underline hover:no-underline">Already have an account?</Link>
          <Link href="/" className="text-sm block text-gray-500 underline hover:no-underline">Home</Link>
        </div>
      </form>
    </div>
  )
}
export default Signup