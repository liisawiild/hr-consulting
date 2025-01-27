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
    <div className="w-full min-h-[calc(100vh-72px)] relative bg-white">
      <Motto />
      <Newsletter user={user} />
      <div className="absolute bottom-0">
        <Logos />
      </div>

    </div>
  );
}

