const About = () => {
  return (
    <section id="about" className="flex w-full justify-between px-6 sm:px-8 lg:px-11 pt-20 pb-20 flex-col">
      <div className="w-full text-xs sm:text-sm">
        <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium mb-10 text-center">About Our <span className="text-highlight">Company</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="bg-black/25 px-6 sm:px-10 py-8 sm:py-10 rounded-3xl border border-white/30">
            <h3 className="text-xl 2xl:text-2xl font-medium mb-4">Who We Are</h3>
            <p className="leading-loose font-light opacity-70">
              At QEase, we are dedicated to transforming the way businesses manage queues. Our innovative queue management system is designed to streamline operations and improve customer experiences in industries where efficient queuing is critical, such as banks and hospitals.
            </p>
          </div>

          <div className="bg-black/25 px-6 sm:px-10 py-8 sm:py-10 rounded-3xl border border-white/30">
            <h3 className="text-xl 2xl:text-2xl font-medium mb-4">Our Mission</h3>
            <p className="leading-loose font-light opacity-70">
              Our mission is to provide businesses with the tools they need to manage queues effectively, ensuring that customers have a smooth and hassle-free experience. We believe that by improving queue management, we can help businesses increase customer satisfaction, reduce operational costs, and ultimately, drive success.
            </p>
          </div>

          <div className="bg-black/25 px-6 sm:px-10 py-8 sm:py-10 rounded-3xl border border-white/30">
            <h3 className="text-xl 2xl:text-2xl font-medium mb-4">What We Do</h3>
            <p className="leading-loose font-light opacity-70">
              QEase offers a comprehensive queue management solution that includes real-time queue monitoring, automated notifications, and data analytics. Our system is designed to be user-friendly and customizable, allowing businesses to tailor it to their specific needs and preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About