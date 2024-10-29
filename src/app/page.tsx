import Newsletter from '@/components/newsletter/Newsletter';
import Motto from '@/components/motto/Motto';
import { prisma } from '../../lib/prisma'


export default async function Home() {

  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com'
    }
  })

   return (
    <div className="w-full h-screen">
      <Motto />
      <Newsletter user={user}/>
    </div>
  );
}

