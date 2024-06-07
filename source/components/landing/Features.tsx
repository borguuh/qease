"use client"
import { motion } from "framer-motion";
import { mAni, mIni, mTrans } from "../framer";

const Features = () => {
  return (
    <section id="features" className="flex w-full justify-between px-6 sm:px-8 lg:px-11 pt-20 pb-20 flex-col">
      <div className="w-full text-xs sm:text-sm">

        <div className="py-16">
          <motion.h2 initial={mIni} whileInView={mAni} transition={mTrans(0)} className="text-3xl lg:text-4xl 2xl:text-5xl font-medium mb-10 text-center">What We <span className="text-highlight">Offer</span></motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10">
            <motion.div initial={mIni} whileInView={mAni} transition={mTrans(0.3)} className="p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-md">
              <h3 className="text-xl 2xl:text-2xl font-medium mb-4">Real-Time Queue Monitoring</h3>
              <p className="leading-loose font-light opacity-70">
                Stay updated with the status of your queues at all times. Our real-time monitoring system provides live data on queue lengths and waiting times, allowing you to make quick decisions and optimize service efficiency.
              </p>
            </motion.div>

            <motion.div initial={mIni} whileInView={mAni} transition={mTrans(0.6)} className="p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-md">
              <h3 className="text-xl 2xl:text-2xl font-medium mb-4">Automated Notifications</h3>
              <p className="leading-loose font-light opacity-70">
                Keep your customers informed with automated notifications. Our system sends timely updates via SMS or email, notifying customers of their estimated wait time and queue status, enhancing their experience and reducing perceived wait times.
              </p>
            </motion.div>

            <motion.div initial={mIni} whileInView={mAni} transition={mTrans(0.9)} className="p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-md">
              <h3 className="text-xl 2xl:text-2xl font-medium mb-4">Data Analytics</h3>
              <p className="leading-loose font-light opacity-70">
                Gain insights into your queue management with comprehensive data analytics. Our system collects and analyzes data on queue lengths, waiting times, and service efficiency, helping you identify trends and areas for improvement.
              </p>
            </motion.div>

            <motion.div initial={mIni} whileInView={mAni} transition={mTrans(1.2)} className="p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-md">
              <h3 className="text-xl 2xl:text-2xl font-medium mb-4">Customizable Interface</h3>
              <p className="leading-loose font-light opacity-70">
                Tailor QEase to fit your specific business needs. Our customizable interface allows you to adjust settings, notifications, and display options to align with your brand and operational requirements.
              </p>
            </motion.div>

            <motion.div initial={mIni} whileInView={mAni} transition={mTrans(1.5)} className="p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-md">
              <h3 className="text-xl 2xl:text-2xl font-medium mb-4">Multi-Location Management</h3>
              <p className="leading-loose font-light opacity-70">
                Manage queues across multiple locations from a single dashboard. Whether you operate in multiple branches or have different departments within a facility, QEase provides centralized control and monitoring.
              </p>
            </motion.div>

            <motion.div initial={mIni} whileInView={mAni} transition={mTrans(1.8)} className="p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-md">
              <h3 className="text-xl 2xl:text-2xl font-medium mb-4">Support and Training</h3>
              <p className="leading-loose font-light opacity-70">
                Benefit from our dedicated support team and comprehensive training resources. We provide ongoing assistance and training to ensure your team can effectively use QEase and maximize its potential.
              </p>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Features