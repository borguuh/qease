import Link from "next/link"

const Hero = () => {
  return (
    <section className="flex w-full justify-between px-6 sm:px-8 lg:px-11 pt-5 pb-20 flex-col">
      <div className="flex flex-col text-center items-center justify-center w-full py-20 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
        <h1 style={{ lineHeight: 1.625 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-medium text-balance">
          Revolutionize Queue Management with <span className="text-highlight">Q</span>Ease
        </h1>
        <p className="opacity-70 pt-6 sm:pt-8">
          Effortlessly manage queues with our innovative system.
        </p>
        <Link className="mt-8 sm:mt-10 px-12 py-3 sm:py-4 md:py-5 bg-highlight text-black rounded-full font-semibold shake" href="/login">Get Started</Link>
      </div>
      <div className="w-full flex items-center justify-center py-10 opacity-80">
        <img src="/hero-image.jpg" alt="QEase" title="QEase" className="w-full md:max-w-[75%] sm:max-w-[80%] max-w-[90%] rounded-3xl sm:rounded-[50px]" />
      </div>
    </section>
  )
}
export default Hero