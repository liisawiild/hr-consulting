import React from 'react'
import Link from 'next/link'

export default function Navbar() {

  return (
    <div className="flex flex-row justify-between items-center p-5 border-b-2 border-elo-dark-gold">

      <div>
        <Link href="/">
          <img
            className="max-h-16 w-auto object-contain"
            src="/Elovance-logo-w-bg.png"
            alt="gold octopus logo"
            width="158"
            height="48"
          />
        </Link>
      </div>

      <div className="flex flex-row justify-between">

        <div className="mx-10">
          <Link href="/services"><h2 className="text-md hover:underline hover:text-elo-pale-blue">SERVICES</h2></Link>
        </div>

        <div className="mx-10">
          <Link href="/work"><h2 className="text-md hover:underline hover:text-elo-pale-blue">MY WORK</h2></Link>
        </div>

        <div className="mx-10">
          <Link href="/about"><h2 className="text-md hover:underline hover:text-elo-pale-blue">ABOUT</h2></Link>
        </div>

        <div className="ml-10">
          <Link href="/blog"><h2 className="text-md hover:underline hover:text-elo-pale-blue">BLOG</h2></Link>
        </div>
      </div>

      <div className="flex">
        <div>
          <Link href="/consultation"><button className="bg-elo-dark-gold hover:bg-elo-gold text-white font-bold py-1 px-2 mx-1 rounded">Book a Consultation</button></Link>
        </div>
        <div>
          <Link href="/login"><button className="bg-elo-blue hover:bg-elo-orange text-white font-bold py-1 px-2 mx-1 rounded">Login</button></Link>
        </div>
      </div>

    </div>

  );
}