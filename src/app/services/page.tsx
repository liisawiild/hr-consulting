import Link from 'next/link'

export default function Services() {
  return (
    <>
    <div className="pt-10 px-48">
      <h1 className="text-2xl font-bold text-center">Equipped for Solving any Systems or Team Problems</h1>
      <p className="text-center pt-2">Partnering with Octo Consulting for operational excellence goes beyond adopting new software or drafting new documents--its an investment in your businesss future, providing permanent solutions to the problem plaguing your business.</p>
    </div>


    <div className="flex flex-row justify-between py-10">

      <div className="bg-white text-black ml-10 py-16 px-5 w-60 flex flex-col justify-center items-center rounded relative">
        <h1 className="text-xl font-bold">Educational</h1>
        <h2 className="text-sm text-gray-500 font-bold pb-5">Free of Charge</h2>
        <div className="flex-grow">
          <p className="text-center pb-5">Explore our free Systems and Teams resources today and start systemizing your business.</p>
        </div>

        <div className="absolute bottom-10 w-full flex justify-center">
          <Link href="/services/educational" className="block">
            <button className="bg-octo-blue p-2 rounded">Create Account</button>
          </Link>
        </div>

      </div >

      <div className="bg-white text-black ml-10 py-16 px-5 w-60 flex flex-col justify-center items-center rounded relative">
        <h1 className="text-xl font-bold">Intensive</h1>
        <h2 className="text-sm text-gray-500 font-bold pb-5">$7,800 Lifetime Access</h2>
        <div className="flex-grow">
          <p className="text-center pb-5">Thiiiiiiiiiiiiiiiiiiiiiiiis is a test test test Explore our free Systems and Teams resources today and start systemizing your business.</p>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <Link href="/services/intensive" className="block">
            <button className="bg-octo-blue p-2 rounded">Learn More</button>
          </Link>
        </div>
      </div>

      <div className="bg-white text-black ml-10 py-16 px-5 w-60 flex flex-col justify-center items-center rounded relative">
        <h1 className="text-xl font-bold">Concierge</h1>
        <h2 className="text-sm text-gray-500 font-bold pb-5">Starting from $30,000</h2>
        <div className="flex-grow">
          <p className="text-center pb-5">Explore our free Systems and Teams resources today and start systemizing your business.</p>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <Link href="/services/concierge" className="block">
            <button className="bg-octo-blue p-2 rounded">Learn More</button>
          </Link>
        </div>
      </div>

      <div className="bg-white text-black ml-10 mr-10 py-16 px-5 w-60 flex flex-col justify-center items-center rounded relative">
        <h1 className="text-xl font-bold">Integrator</h1>
        <h2 className="text-sm text-gray-500 font-bold pb-5">Starting from $130,000</h2>
        <div className="flex-grow">
          <p className="text-center pb-5">Explore our free Systems and Teams resources today and start systemizing your business.</p>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <Link href="/services/integrator" className="block">
            <button className="bg-octo-blue p-2 rounded">Learn More</button>
          </Link>
        </div>      
      </div>
    </div >
    </>
  );
}