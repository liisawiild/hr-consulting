// this will create a global instance of the connection

import { Prisma, PrismaClient } from '@prisma/client'

// PrismaClient is attached to the 'global' object in development to prevent
// exhausting your database connection limit.
//
// Learn more: 
// https://pris.ly/d/help/next-js-best-practices

// check the global object to see if it has prisma already
const globalForPrisma = global as unknown as { prisma: PrismaClient }

// if the global object has prisma use the global prisma object, and if not create a new prisma object
export const prisma = 
  globalForPrisma.prisma || 
  new PrismaClient({
    log: ['query']
  })

  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma