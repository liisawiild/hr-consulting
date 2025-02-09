import React from 'react'
import Link from 'next/link'

export default function Navbar() {

  return (
    <div className="flex flex-row justify-between items-center p-5 border-b-2 border-evo-dark-gold">

      <div>
        <img
          className="max-h-16 w-auto object-contain"
          src="/Evolance-logo-w-bg.png"
          alt="gold octopus logo"
          width="158"
          height="48"
        />
      </div>

      <div className="flex flex-row justify-between">

        <div className="mx-5">
          <Link href="/services"><h2 className="font-bold text-lg">Services</h2></Link>
        </div>

        <div className="mx-5">
          <Link href="/work"><h2 className="font-bold text-lg">My Work</h2></Link>
        </div>

        <div className="mx-5">
          <Link href="/about"><h2 className="font-bold text-lg">About</h2></Link>
        </div>

        <div className="mx-5">
          <Link href="/blog"><h2 className="font-bold text-lg">Blog</h2></Link>
        </div>
      </div>

      <div className="flex">
        <div>
          <Link href="/consultation"><button className="bg-octo-yellow hover:bg-octo-pale-yellow text-black font-bold py-1 px-2 mx-1 rounded">Book A Consultation</button></Link>
        </div>
        <div>
          <Link href="/login"><button className="bg-octo-red hover:bg-octo-pale-red text-black font-bold py-1 px-2 mx-1 rounded">Login</button></Link>
        </div>
      </div>

    </div>

  );
}