import toast from "react-hot-toast"

export const emptyLink = (e: any) => {
  const url = e.currentTarget.getAttribute('href').trim()
  if (url === "") {
    e.preventDefault()
    toast("Coming Soon!", {
      icon: "🚀",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    })
  }
}

export const scrollHandler = (e: any, doSomething?: Function) => {
  e.preventDefault();
  if (doSomething) doSomething()
  const hashVal = e.currentTarget.getAttribute('href').split("/").join("")
  // @ts-ignore
  window.history.pushState(null, null, `${hashVal}`)
  document.querySelector(hashVal)?.scrollIntoView({
    behavior: 'smooth'
  });
}