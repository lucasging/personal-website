"use client"

import Image from "next/image"
import Stack from "@/components/Stack"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import { Caudex } from "next/font/google"
const caudex1 = Caudex({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
})
const caudex2 = Caudex({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  return(
    <div className="flex h-screen items-center bg-zinc-950 relative">
      <div className="lg:hidden absolute inset-0 bg-zinc-950 z-50 flex flex-col items-center justify-center gap-8">
        <text className={`text-white text-2xl text-center ${caudex2.className}`}>
          Screen size not supported,<br />please view on desktop.
        </text>
        <div>
          <a className="text-white hover:text-gray-300 transition-colors cursor-pointer hover:underline" href="https://www.linkedin.com/in/lucasgingera/">linkedin</a>
          <text className="text-white"> | </text>
          <a className="text-white hover:text-gray-300 transition-colors cursor-pointer hover:underline" href="https://www.x.com/lucasgingera">twitter</a>
          <text className="text-white"> | </text>
          <button 
            className="text-white hover:text-gray-300 transition-colors cursor-pointer hover:underline"
            onClick={() => {
              navigator.clipboard.writeText('lucasgingera@outlook.com');
            }}
          >
            copy email
          </button>
        </div>
      </div>

      <div className="w-[40%] ml-[10%] mr-[10%]">
        <Image className="mb-6" src="/lucas.png" alt="Lucas Gingera" width={200} height={200} />
        <text className="text-white">Hey, I'm</text>
        <h1 className={` text-7xl font-bold text-white mb-3 ${caudex1.className}`}>Lucas Gingera</h1>
        <a className="text-white hover:text-gray-300 transition-colors cursor-pointer hover:underline" href="https://www.linkedin.com/in/lucasgingera/">linkedin</a>
        <text className="text-white"> | </text>
        <a className="text-white hover:text-gray-300 transition-colors cursor-pointer hover:underline" href="https://www.x.com/lucasgingera">twitter</a>
        <text className="text-white"> | </text>
        <button 
          className="text-white hover:text-gray-300 transition-colors cursor-pointer hover:underline"
          onClick={() => {
            navigator.clipboard.writeText('lucasgingera@outlook.com');
          }}
        >
          copy email
        </button>
      </div>
      <div className="w-[60%] flex flex-col gap-8">
        <div className="w-full h-1/3 flex items-center relative overflow-hidden" style={{ height: '200px' }}>
          <div className="w-[25%] h-[40%] bg-zinc-800 p-4 absolute z-10 text-center flex items-center justify-center">
            <text className={`text-4xl ${caudex2.className} text-white`}>current</text>
          </div>
          <div className="relative w-full">
            <Stack
              items={[
                { id: 1, content: <Image src="/biztech.svg" alt="BizTech" width={200} height={200} />, link: "https://www.ubcbiztech.com" },
                { id: 2, content: <Image src="/building.svg" alt="Building" width={200} height={200} />, link: "https://www.x.com/lucasgingera" },
                { id: 3, content: <Image src="/boomi.svg" alt="Boomi" width={200} height={200} />, link: "https://www.boomi.com" },
                { id: 4, content: <Image src="/biztech.svg" alt="BizTech" width={200} height={200} />, link: "https://www.ubcbiztech.com" },
                { id: 5, content: <Image src="/building.svg" alt="Building" width={200} height={200} />, link: "https://www.x.com/lucasgingera" },
                { id: 6, content: <Image src="/boomi.svg" alt="Boomi" width={200} height={200} />, link: "https://www.boomi.com" },
              ]}
            />
          </div>
        </div>
        <div className="w-full h-1/3 flex items-center relative overflow-hidden" style={{ height: '200px' }}>
          <div className="w-[25%] h-[40%] bg-zinc-800 p-4 absolute z-10 text-center flex items-center justify-center">
            <text className={`text-4xl ${caudex2.className} text-white`}>projects</text>
          </div>
          <div className="relative w-full">
            <Stack
              items={[
                { id: 1, content: <Image src="/examclock.svg" alt="Exam Clock" width={200} height={200} />, link: "https://examclock.app" },
                { id: 2, content: <Image src="/presentify.svg" alt="Presentify" width={200} height={200} />, link: "https://www.devpost.com/software/presentify" },
                { id: 3, content: <Image src="/soundchain.svg" alt="Soundchain" width={200} height={200} />, link: "https://www.devpost.com/software/soundchain" },
                { id: 4, content: <Image src="/extension.svg" alt="Creator.co Recruitment Extension" width={200} height={200} />, link: "https://chromewebstore.google.com/detail/creator-recruitment-tool/jmdekeeihkgobjndkampjdpngkkcjcge" },
                { id: 5, content: <Image src="/app.svg" alt="Creator.co APp" width={200} height={200} /> },
              ]}
            />
          </div>
        </div>
        <div className="w-full h-1/3 flex items-center relative overflow-hidden" style={{ height: '200px' }}>
          <div className="w-[25%] h-[40%] bg-zinc-800 p-4 absolute z-10 text-center flex items-center justify-center">
            <text className={`text-4xl ${caudex2.className} text-white`}>media</text>
          </div>
          <div className="relative w-full">
            <Stack
              items={[
                { id: 1, content: <Image src="/blueprint.svg" alt="BluePrint" width={200} height={200} />, link: "https://www.instagram.com/reel/DEynvRbx4bm/" },
                { id: 2, content: <Image src="/uxopen.svg" alt="UX Open" width={200} height={200} />, link: "https://www.instagram.com/reel/DBHbKSlyfrC/" },
                { id: 3, content: <Image src="/hiring.svg" alt="Hiring" width={200} height={200} />, link: "https://www.instagram.com/reel/DHt1WafSd1t/" },
                { id: 4, content: <Image src="/productx.svg" alt="ProductX" width={200} height={200} />, link: "https://www.instagram.com/reel/DGo3iMxvm-G/" },
                { id: 5, content: <Image src="/music.svg" alt="Music Video" width={200} height={200} />, link: "https://www.instagram.com/reel/DGwIEggyxjg/" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}