'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className='flex-1 flex-col items-center mb-5 space-x-4'>
        <Image
            src="/images/me.jpg"
            alt="AJ Dumanhug"
            width={200}
            height={200}
            className="rounded-full"
          />
        <Link href="/" className="font-bold text-black dark:text-white text-3xl">
          AJ Dumanhug
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Offensive Security Engineer / Application Security Engineer / Peneteration Tester
        </TextEffect>
      </div>
    </header>
  )
}
