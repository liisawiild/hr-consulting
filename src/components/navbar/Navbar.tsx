import React from 'react'
import Link from 'next/link'

export default function Navbar() {

  return (
    <div className="flex flex-row justify-between items-center m-5">

      <div>
        <Link href="/"><h1 className="font-bold text-xl">OCTO CONSULTING</h1></Link>
      </div>

      <div className="flex flex-row justify-between">

        <div className="mx-5">
          <Link href="/services"><h2>Services</h2></Link>
        </div>

        <div className="mx-5">
          <Link href="/resources"><h2>Resources</h2></Link>
        </div>

        <div className="mx-5">
          <Link href="/about"><h2>About Octo</h2></Link>
        </div>

        <div className="mx-5">
          <Link href="/pricing"><h2>Pricing</h2></Link>
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