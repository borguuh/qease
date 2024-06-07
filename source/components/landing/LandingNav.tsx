"use client";
import Link from "next/link"
import { useState } from "react"
import { Spin as Hamburger } from "hamburger-react"
import { email, instagram, linkedin, twitter } from "@/source/__env";
import { FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { emptyLink, scrollHandler } from "../../controllers/helpers";

const LandingNav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  return (
    <>
      <nav id="home" className="flex w-full justify-between px-6 sm:px-8 lg:px-11 py-8 smm:py-12 md:gap-0 gap-2">
        <div className="z-20">
          <Link onClick={scrollHandler} href="/#home" className="flex items-center justify-center gap-3 shake">
            {/* <img src="/logo.png" alt="QEase" title="QEase" className="h-8" /> */}
            <h1 className="font-semibold text-4xl pt-1">
              <span className="text-highlight">Q</span>Ease
            </h1>
          </Link>
        </div>
        <div className="hidden z-10 md:flex absolute inset-0 items-center justify-center">
          <ul className="flex gap-10 items-center text-lg">
            <li><Link className="hover:opacity-50" onClick={e => scrollHandler(e, () => setNavIsOpen(false))} href="/#about">About</Link></li>
            <li><Link className="hover:opacity-50" onClick={e => scrollHandler(e, () => setNavIsOpen(false))} href="/#features">Features</Link></li>
            <li><Link className="hover:opacity-50" onClick={e => scrollHandler(e, () => setNavIsOpen(false))} href="/#faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="z-20 md:flex-initial flex-1 hidden sxm:flex items-center justify-end">
          <Link href="/login" className="flex px-6 md:px-9 lg:px-12 pt-2 pb-[9px] md:pt-3 md:pb-[13px] border border-white rounded-full text-xs smm:text-base md:text-lg shake backdrop-blur-sm">LOGIN</Link>
        </div>
        <div className="flex md:hidden">
          <Hamburger toggled={navIsOpen} toggle={setNavIsOpen} distance="sm" rounded />
        </div>
      </nav>
      <div className={`fixed md:hidden block backdrop-blur-sm w-full h-full top-0 bottom-0 z-50 ${navIsOpen ? "left-0" : "left-[101vw]"} transition-all duration-500`}>
        <div className="el-sm-nav z-20 h-full w-[300px] relative mr-0 ml-auto p-[32px] overflow-auto flex flex-col gap-[60px] justify-between bg-black/70">
          <div className="flex flex-col gap-[50px]">
            <div className="left-[-11px]"><Hamburger toggled={navIsOpen} toggle={setNavIsOpen} distance="sm" rounded /></div>
            <ul className="flex gap-[32px] flex-col items-start text-sm">
              <li><Link className="hover:opacity-50" onClick={e => scrollHandler(e, () => setNavIsOpen(false))} href="/#about">About</Link></li>
              <li><Link className="hover:opacity-50" onClick={e => scrollHandler(e, () => setNavIsOpen(false))} href="/#features">Features</Link></li>
              <li><Link className="hover:opacity-50" onClick={e => scrollHandler(e, () => setNavIsOpen(false))} href="/#faq">FAQ</Link></li>
            </ul>
            <div className="flex">
              <Link href="/login" className="flex px-8 lg:px-12 pt-3 pb-[13px] border border-white rounded-full text-xs smm:text-base md:text-lg shake backdrop-blur-sm">LOGIN</Link>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] text-center">
            <div className="flex gap-[16px] justify-center">
              <a href={email} onClick={emptyLink} target="_blank" className="h-[18px] duration-75 transition-all hover:scale-110 flex" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
              <a href={instagram} onClick={emptyLink} target="_blank" className="h-[18px] duration-75 transition-all hover:scale-110 flex" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href={linkedin} onClick={emptyLink} target="_blank" className="h-[18px] duration-75 transition-all hover:scale-110 flex" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={twitter} onClick={emptyLink} target="_blank" className="h-[18px] duration-75 transition-all hover:scale-110 flex" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
            <div className="flex flex-col gap-[8px] text-[10px]">
              <span>POWERED BY QEase</span>
              <span className="text-[#848484] uppercase">© {new Date().getFullYear()} QEase. All rights reserved.</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-10 h-full w-full" onClick={() => setNavIsOpen(false)}></div>
      </div>
    </>
  )
}
export default LandingNav