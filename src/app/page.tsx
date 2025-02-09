import Newsletter from '@/components/newsletter/Newsletter';
import Motto from '@/components/motto/Motto';
import Logos from '@/components/logos/Logos';
import { prisma } from '../../lib/prisma';


export default async function Home() {

  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com'
    }
  })

  return (
    <div className="w-full bg-evo-base">
      <div className="flex flex-col items-start mt-16 px-10">
        <h1 className="text-7xl">EVOLANCE</h1>
        <h2 className="text-4xl ml-36">Consulting</h2>
      </div>
      <div>
        <Motto />
      </div>
      {/* <div className="m-5"> */}
      {/* <Newsletter user={user} /> */}

      {/* </div> */}
      <h2 className="text-center text-sm font-semibold text-evo-dark-blue">
        Trusted by the world’s most innovative teams
      </h2>
      <div className="pt-2">
        <Logos />
      </div>

      <div className="m-10">
        This is another section
      </div>
      <div className="m-10">
        This is another section
      </div>
      <div className="m-10">
        This is another section
      </div>
    </div>
  );
}

