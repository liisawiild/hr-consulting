import { PrismaClient } from '@prisma/client'

// want to only have one client running, and it manages everything internally
const prisma = new PrismaClient()

// this will look for a user with an email of test@test.com, and if it doesn't exists it will create one.
async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'test@test.com'},
    update: {},
    create: {
      email: 'test@test.com',
      name: 'Test User',
      password: '$2y$12$GBfcgD6XlkjasdDOSjlDOjlsi2334.DsiohoiyrEZy'
    }
  })
  console.log({user})
}

main()
.then(() => prisma.$disconnect())
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})