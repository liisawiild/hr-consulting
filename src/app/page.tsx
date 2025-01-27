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
    <div className="w-full min-h-[calc(100vh-72px)]">
      <div>
        <Motto />
      </div>
      {/* <div className="m-5"> */}
      {/* <Newsletter user={user} /> */}

      {/* </div> */}

      <div className="pt-10">
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

