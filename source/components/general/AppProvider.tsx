"use client"
import store from "@/source/store/store"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"
import FetchAppData from "./FetchAppData"
import ParticlesBG from "./ParticlesBG"

const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<Provider store={store}>
			{children}
			<Toaster position="top-right" reverseOrder={false} />
			<FetchAppData />
			<ParticlesBG />
		</Provider>
	)
}
export default AppProvider