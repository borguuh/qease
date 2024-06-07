"use client"

import { ClipLoader } from "react-spinners"

export default function Loading() {
	return <main className="flex-1 flex flex-col items-center justify-center gap-5 p-5">
		<ClipLoader color='#6f00ff' size={50} />
	</main>
}