"use client";
import { email, instagram, linkedin, twitter } from '@/source/__env'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { emptyLink, scrollHandler } from '../../controllers/helpers'

const LandingFoot = () => {

  return (
    <footer className="flex w-full justify-between px-6 sm:px-8 lg:px-11 pt-20 pb-20 flex-wrap flex-col md:flex-row">
      <div className="flex flex-col text-center md:text-left font-playfair gap-6">
        <h1 className="text-3xl font-medium flex items-center md:self-start self-center">
          <span className="text-highlight">Q</span>Ease
        </h1>
        <div className="flex flex-col items-center md:items-start">
          <ul className="flex flex-row items-center">
            <li className='p-3'><a href={email} onClick={emptyLink} target="_blank" className="h-[18px] hover:scale-110 flex" rel="noopener noreferrer">
              <FaEnvelope />
            </a></li>
            <li className='p-3'><a href={instagram} onClick={emptyLink} target="_blank" className="h-[18px] hover:scale-110 flex" rel="noopener noreferrer">
              <FaInstagram />
            </a></li>
            <li className='p-3'><a href={linkedin} onClick={emptyLink} target="_blank" className="h-[18px] hover:scale-110 flex" rel="noopener noreferrer">
              <FaLinkedin />
            </a></li>
            <li className='p-3'><a href={twitter} onClick={emptyLink} target="_blank" className="h-[18px] hover:scale-110 flex" rel="noopener noreferrer">
              <FaTwitter />
            </a></li>
          </ul>
        </div>
        <p className='italic'>{email.replace("mailto:", "")}</p>
      </div>
      <div className='flex gap-10 smm:gap-24 justify-center md:justify-start pt-20 md:pt-0'>
        <div className="flex flex-col text-center md:text-left">
          <h3 className='pb-6 uppercase text-2xl'>Our Links</h3>
          <ul className="flex flex-col gap-3">
            <li><Link className="hover:opacity-50" onClick={scrollHandler} href="/#home">Home</Link></li>
            <li><Link className="hover:opacity-50" onClick={scrollHandler} href="/#about">About</Link></li>
          </ul>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h3 className='pb-6 uppercase text-2xl'>Others</h3>
          <ul className="flex flex-col gap-3">
            <li><Link className="hover:opacity-50" onClick={scrollHandler} href="/#features">Features</Link></li>
            <li><Link className="hover:opacity-50" onClick={scrollHandler} href="/#faq">FAQ</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] text-center w-full pt-12 text-sm">
        <span>POWERED BY QEase</span>
        <span className="uppercase">© {new Date().getFullYear()} QEase. All rights reserved.</span>
      </div>
    </footer>
  )
}
export default LandingFoot