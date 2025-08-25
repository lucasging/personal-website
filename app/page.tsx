"use client";

import Image from "next/image";
import { Arizonia } from "next/font/google";
import { useState } from "react";

const arizonia = Arizonia({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [altText, setAltText] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activePanel, setActivePanel] = useState<string | null>(null);
  return (
    <div 
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
      onClick={() => activePanel && setActivePanel(null)}
    >
      <div className="hidden lg:flex gap-[20px] content-start items-center justify-start -ml-20">
        <div className="h-150">
          <Image src="/plus.svg" alt="Plus" width={30} height={30} className={`mb-2 mx-auto cursor-pointer transition-transform duration-200 transform ${altText ? 'rotate-45' : 'rotate-0'}`} onClick={() => setAltText((v) => !v)} />
          <div className="w-full h-full flex flex-col justify-start items-end gap-2 text-right mt-15">
            <text className="font-bold italic">About Me</text>
            <button onClick={(e) => { e.stopPropagation(); setActivePanel('work'); }} className="cursor-pointer hover:opacity-80 transition-opacity">Work Experience</button>
            <button onClick={(e) => { e.stopPropagation(); setActivePanel('leadership'); }} className="cursor-pointer hover:opacity-80 transition-opacity">Student Leadership</button>
            <button onClick={(e) => { e.stopPropagation(); setActivePanel('tech'); }} className="cursor-pointer hover:opacity-80 transition-opacity">Tech Projects</button>
            <button onClick={(e) => { e.stopPropagation(); setActivePanel('media'); }} className="cursor-pointer hover:opacity-80 transition-opacity">Media Projects</button>
            <text className="font-bold mt-8 italic">Contact</text>
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText('lucasgingera@outlook.com');
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                } catch (e) {}
              }}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              aria-live="polite"
            >
              {copied ? 'Copied' : 'Copy Email'}
            </button>
            <a href="https://linkedin.com/in/lucasgingera/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">LinkedIn</a>
            <a href="https://github.com/lucasging/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">GitHub</a>
          </div>
        </div>
        <div className="w-210 h-150 relative overflow-visible">
          <div 
            className="text-8xl font-bold text-left"
            style={{
              backgroundImage: "url('/top.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'left',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '850',
              fontSize: '125px',
              lineHeight: '89px',
              letterSpacing: '0px',
              textAlign: 'left',
              marginLeft: '-8px'
            }}
          >
          LUCAS
          </div>
          <Image
            src="/photo.jpg"
            alt="Street, Building and Clouds"
            width={969}
            height={542}
            className={`w-full h-auto object-cover transition-opacity duration-200 ${activePanel ? 'opacity-10' : 'opacity-100'}`}
          />
          <Image
            src="/lines.svg"
            alt="Decorative lines"
            width={35}
            height={100}
            className="absolute left-full ml-10 top-1/2 -translate-y-1/2 transform pointer-events-none"
          />
          <div className="absolute top-2 right-2 z-30 text-sm text-right">
            <span className="block font-bold italic">{altText ? 'Thinking About:' : 'Seeking:'}</span>
            <span className="block">{altText ? 'Future of Work' : '2026 Internship'}</span>
          </div>
          <div className="absolute top-2 right-40 z-30 text-sm text-right">
            <span className="block font-bold italic">{altText ? 'Working On:' : 'Studying:'}</span>
            <span className="block">{altText ? 'Launching a Product' : 'Business and CS'}</span>
          </div>
          <p className="relative z-20 text-left text-sm italic leading-tight mt-1">A UBC student passionate about solving real problems and building refined product experiences.</p>
          <div className="absolute inset-0 z-10 flex items-start justify-start ml-10">
            <div className={`${arizonia.className} mt-2 ml-2`} style={{ color: '#004377', fontSize: '100px', fontWeight: 400, wordWrap: 'break-word', filter: 'blur(1px)' }}>Gingera</div>
          </div>

          <div className={`absolute inset-0 z-40 ${activePanel ? 'flex' : 'hidden'} items-center justify-center`} onClick={() => setActivePanel(null)}>
            <div className="grid grid-cols-2 gap-4" onClick={(e) => e.stopPropagation()}>
              {(() => {
                const contentByPanel: Record<string, Array<{ img: string; imgAlt: string; title: string; small: string; medium: string; w?: number; h?: number; link?: string }>> = {
                  work: [
                    { img: '/boomi.png', imgAlt: 'Boomi', title: 'Product Marketing', small: 'May 2025 – August 2025', medium: 'Increased product user growth through scoping AI agents, researching buyer personas and updating guided tours.', w: 70, h: 30, link: 'https://boomi.com' },
                    { img: '/creator.png', imgAlt: 'Creator', title: 'Product Management', small: 'January 2025 – May 2025', medium: 'Acted as a 0-to-1 product owner of an automation tool increasing influencer recruitment efficiency.', w: 80, h: 30, link: 'https://creator.co' },
                  ],
                  leadership: [
                    { img: '/biztech.png', imgAlt: 'UBC BizTech', title: 'Co-President', small: 'May 2025 – Present', medium: 'Leading UBC\'s largest technology club with 45 executives and 7 events, supporting 600+ members.', w: 130, h: 80, link: 'https://www.ubcbiztech.com' },
                    { img: '/nwplus.png', imgAlt: 'nwPlus', title: 'Sponsorships Director', small: 'May 2024 – May 2025', medium: 'As a team raised over 80K+ in sponsorship revenue and brought in a record 79 sponsors.', w: 80, h: 80, link: 'https://nwplus.io' },
                  ],
                  tech: [
                    { img: '/soundchain.svg', imgAlt: 'Soundchain', title: 'soundchain – CalHacks Winner', small: 'Next.js, Sui Blockchain, Express.js', medium: 'Invest in song demos in exchange for royalties via blockchain.', w: 120, h: 80, link: 'https://www.devpost.com/software/soundchain/' },
                    { img: '/presentify.svg', imgAlt: 'Presentify', title: 'Presentify', small: 'React, OpenAI API, Web Speech API', medium: 'A tool that generates slides in real-time as you speak to assist accessibility.', w: 130, h: 80, link: 'https://www.devpost.com/software/presentify/'  },
                  ],
                  media: [
                    { img: '/uxopen.png', imgAlt: 'UX Open', title: 'UX Open Skit', small: '14,000+ Views', medium: 'Inspired by Ant-Man, this video explains a complicated event through an entertaining format.', w: 150, h: 80, link: 'https://www.instagram.com/reel/DBHbKSlyfrC/?utm_source=ig_web_copy_link&igsh=cGF4ZWJ6Y2FnNGVk' },
                    { img: '/blueprint.png', imgAlt: 'BluePrint', title: 'BluePrint Cinematic', small: '14,000+ Views', medium: 'An inspirational cinematic, inspiring people to take their first step into tech.', w: 150, h: 80, link: 'https://www.instagram.com/reel/DEynvRbx4bm/?utm_source=ig_web_copy_link&igsh=YnZwN3B1Zno3dzRs' },
                  ],
                };
                const items = activePanel ? contentByPanel[activePanel] : [];
                return items?.map((item, idx) => (
                  <div key={`${activePanel}-${idx}`} className="p-3 rounded text-black w-80">
                    <div className="mb-3 h-20 flex items-end">
                      {item.img ? (
                        item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer">
                            <Image src={item.img} alt={item.imgAlt} width={item.w ?? 72} height={item.h ?? 72} className="object-contain max-h-full self-end" />
                          </a>
                        ) : (
                          <span className="inline-block cursor-pointer" onClick={(e) => e.stopPropagation()}>
                            <Image src={item.img} alt={item.imgAlt} width={item.w ?? 72} height={item.h ?? 72} className="object-contain max-h-full self-end" />
                          </span>
                        )
                      ) : null}
                    </div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-xs opacity-80">{item.small}</div>
                    <div className="text-sm mt-1">{item.medium}</div>
                  </div>
                ));
              })()}
            </div>
            <button onClick={(e) => { e.stopPropagation(); setActivePanel(null); }} className="absolute top-25 right-4 text-black hover:text-gray-800 text-sm cursor-pointer">Close</button>
          </div>
        </div>
      </div>
      {/* Mobile fallback (not responsive yet) */}
      <div className="flex lg:hidden flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="text-lg font-bold">Screen size not supported.</div>
        <a href="https://linkedin.com/in/lucasgingera/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
        <button
          onClick={async () => {
            try {
              await navigator.clipboard.writeText('lucasgingera@outlook.com');
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            } catch (e) {}
          }}
          className="underline cursor-pointer"
        >
          {copied ? 'Copied' : 'Copy Email'}
        </button>
      </div>
    </div>
  );
}
