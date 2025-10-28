import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Full-Stack Next.js Project
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Your organized Next.js project with shadcn/ui is ready to go! Start building with a clean, Laravel-inspired structure.
          </p>

          <Card className="w-full p-6 mt-4">
            <h2 className="text-xl font-semibold mb-2">Quick Start</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              This project includes shadcn/ui components, organized folder structure, and TypeScript support.
            </p>
            <div className="flex gap-2">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex h-12 w-full items-center justify-center gap-2 rounded-full md:w-[158px]">
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </Button>
          </Link>
          
          <Link
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="flex h-12 w-full items-center justify-center rounded-full md:w-[158px]">
              Documentation
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}