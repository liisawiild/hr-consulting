"use client"
import React from 'react'
import { User as PrismaUser } from '@prisma/client'

interface NewsletterProps {
  user: PrismaUser | null;
}

export default function Newsletter({user}: NewsletterProps) {
  return (
    <div> Hello, {user?.name! || 'User not found'}</div>
  );
}

