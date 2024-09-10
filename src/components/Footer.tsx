import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className="flex flex-row justify-between w-full text-white bg-black p-5">
      <div className="flex items-center justify-self-start">
        <p className="italic text-xs">&copy; 2024 Octo Consulting</p>
      </div>
      <div className="flex items-center justify-end text-sm">
        <div className="mx-5">
          <p className="font-bold uppercase italic">Newsletter</p>
        </div>
        <div className="mx-5">
          <p className="font-bold uppercase italic">Contact</p>

        </div>
        <div className="flex flex-row items-center ">
          <div className="mx-2">
            <FontAwesomeIcon icon={faInstagram} />

          </div>
          <div className="mx-2">
            <FontAwesomeIcon icon={faLinkedin} />

          </div>
          <div className="mx-2">
            <FontAwesomeIcon icon={faYoutube} />

          </div>
        </div>
      </div>


    </div>
  );
}

