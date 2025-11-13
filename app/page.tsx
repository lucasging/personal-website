"use client";

import Image from "next/image";
import { Arizonia } from "next/font/google";
import { useState } from "react";

const arizonia = Arizonia({
  subsets: ["latin"],
  weight: "400",
});

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

export default function Home() {
  const [altText, setAltText] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const handleScrollToSection = (sectionIndex: number) => {
    console.log('Attempting to scroll to section:', sectionIndex);
    
    const mobileContainer = document.getElementById('mobile-scroll-container');
    const desktopContainer = document.getElementById('desktop-scroll-container');
    
    let scrollContainer: HTMLElement | null = null;
    
    if (mobileContainer && window.innerWidth < 1024) {
      scrollContainer = mobileContainer;
    } else if (desktopContainer && window.innerWidth >= 1024) {
      scrollContainer = desktopContainer;
    }
    
    console.log('Found scroll container:', scrollContainer);
    console.log('Window width:', window.innerWidth);
    
    if (scrollContainer) {
      const containerHeight = scrollContainer.clientHeight;
      const targetScrollTop = sectionIndex * containerHeight;
      
      console.log('Container height:', containerHeight);
      console.log('Target scroll position:', targetScrollTop);
      
      scrollContainer.classList.remove('snap-y', 'snap-mandatory');
      
      scrollContainer.scrollTop = targetScrollTop;
      
      setTimeout(() => {
        scrollContainer.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth'
        });
        
        setTimeout(() => {
          scrollContainer.classList.add('snap-y', 'snap-mandatory');
        }, 500);
      }, 50);
      
      setCurrentSection(sectionIndex);
    } else {
      console.log('Scroll container not found');
    }
  };

  const sections = ['home', 'work', 'leadership', 'tech', 'media'];

  const TextContent = ({ sectionIndex }: { sectionIndex: number }) => {
    if (sectionIndex === 0) {
      return null;
    } else {
      const sectionId = sections[sectionIndex];
      return (
        <>
          <div className={`absolute inset-0 z-40 flex justify-center ${sectionIndex === 4 ? 'items-center' : 'items-start pt-22'}`}>
            <div className="grid grid-cols-2 gap-4">
              {contentByPanel[sectionId]?.map((item, idx) => (
                <div key={`${sectionId}-${idx}`} className="p-3 rounded text-black w-80">
                  <div className="mb-3 h-20 flex items-end">
                    {item.img ? (
                      item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer">
                          <Image src={item.img} alt={item.imgAlt} width={item.w ?? 72} height={item.h ?? 72} className="object-contain max-h-full self-end" />
                        </a>
                      ) : (
                        <span className="inline-block cursor-pointer">
                          <Image src={item.img} alt={item.imgAlt} width={item.w ?? 72} height={item.h ?? 72} className="object-contain max-h-full self-end" />
                        </span>
                      )
                    ) : null}
                  </div>
                  <div className="font-bold">{item.title}</div>
                  <div className="text-xs opacity-80">{item.small}</div>
                  <div className="text-sm mt-1">{item.medium}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="h-screen flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="hidden lg:flex gap-[20px] content-start items-center justify-start -ml-20">
        <div className="h-150">
          <Image src="/plus.svg" alt="Plus" width={30} height={30} className={`mb-2 mx-auto cursor-pointer transition-transform duration-200 transform ${altText ? 'rotate-45' : 'rotate-0'}`} onClick={() => setAltText((v) => !v)} />
          <div className="w-full h-full flex flex-col justify-start items-end gap-2 text-right mt-15">
            <div className="font-bold italic">About Me</div>
            <button onClick={() => handleScrollToSection(1)} className={`cursor-pointer hover:opacity-80 transition-opacity ${currentSection === 1 ? 'underline' : ''}`}>Work Experience</button>
            <button onClick={() => handleScrollToSection(2)} className={`cursor-pointer hover:opacity-80 transition-opacity ${currentSection === 2 ? 'underline' : ''}`}>Student Leadership</button>
            <button onClick={() => handleScrollToSection(3)} className={`cursor-pointer hover:opacity-80 transition-opacity ${currentSection === 3 ? 'underline' : ''}`}>Tech Projects</button>
            <button onClick={() => handleScrollToSection(4)} className={`cursor-pointer hover:opacity-80 transition-opacity ${currentSection === 4 ? 'underline' : ''}`}>Media Projects</button>
            <div className="font-bold mt-8 italic">Contact</div>
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
        <div className="w-210 h-150 relative overflow-hidden">
          <div 
            className="text-8xl font-bold text-left absolute z-30"
            style={{
              backgroundImage: "url('/top.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'left',
              backgroundRepeat: 'no-repeat',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '850',
              fontSize: '125px',
              lineHeight: '100px',
              letterSpacing: '0px',
              textAlign: 'left',
              marginLeft: '-8px'
            }}
          >
          LUCAS
          </div>
          
          <div className="absolute top-2 right-2 z-30 text-sm text-right">
            <span key={`label-1-${altText}`} className="block font-bold italic animate-text-fade">{altText ? 'Thinking About:' : 'Incoming:'}</span>
            <span key={`value-1-${altText}`} className="block animate-text-fade">{altText ? 'Communication' : 'PM at Microsoft'}</span>
          </div>
          <div className="absolute top-2 right-40 z-30 text-sm text-right">
            <span key={`label-2-${altText}`} className="block font-bold italic animate-text-fade">{altText ? 'Working On:' : 'Studying:'}</span>
            <span key={`value-2-${altText}`} className="block animate-text-fade">{altText ? 'Launching a Product' : 'Business and CS'}</span>
          </div>

          <div className="relative mt-23">
            <Image
              src="/photo.jpg"
              alt="Street, Building and Clouds"
              width={969}
              height={542}
              className={`w-full h-auto object-cover ${currentSection > 0 ? 'opacity-10' : 'opacity-100'} transition-opacity duration-300`}
            />
            
            <div 
              id="desktop-scroll-container"
              className="absolute inset-0 overflow-y-scroll snap-y snap-mandatory z-20"
               onScroll={(e) => {
                 const container = e.target as HTMLElement;
                 const sectionHeight = container.clientHeight;
                 const scrollTop = container.scrollTop;
                 const newSection = Math.round(scrollTop / sectionHeight);
                 setCurrentSection(newSection);
               }}
               onWheel={(e) => {
                 e.preventDefault();
               }}
             >
              {[0, 1, 2, 3, 4].map((sectionIndex) => (
                <div key={sectionIndex} className="w-full h-full snap-start relative">
                  <TextContent sectionIndex={sectionIndex} />
                </div>
              ))}
            </div>
          </div>

          <p className="relative z-20 text-left text-sm italic leading-tight mt-1">A UBC student passionate about solving real problems and building refined product experiences.</p>

          <div className="absolute inset-0 z-50 flex items-start justify-start ml-10 pointer-events-none">
            <div className={`${arizonia.className} mt-2 ml-2`} style={{ color: '#004377', fontSize: '100px', fontWeight: 400, wordWrap: 'break-word', filter: 'blur(1px)' }}>Gingera</div>
          </div>
        </div>
        
        <Image
          src="/lines.svg"
          alt="Decorative lines"
          width={35}
          height={100}
          className="ml-4 self-center pointer-events-none z-30"
        />
      </div>
      <div className="flex lg:hidden flex-col h-screen w-full">
        <div 
          className="flex-shrink-0 p-4 relative"
          style={{
            backgroundImage: "url('/top.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <div className="flex items-baseline">
                <div 
                  className="text-2xl font-bold text-white mr-2"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '850',
                  }}
                >
                  LUCAS GINGERA
                </div>
              </div>
              
              <div className="text-xs text-white text-right">
                <div className="mb-1">
                  <span className="font-bold italic">Incoming:</span>
                  <span className="ml-1">PM at Microsoft</span>
                </div>
                <div>
                  <span className="font-bold italic">Studying:</span>
                  <span className="ml-1">Business and CS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 px-4 py-3 bg-black bg-opacity-20 backdrop-blur-sm">
          <div className="flex justify-around text-sm text-white">
            <button onClick={() => handleScrollToSection(0)} className={`cursor-pointer hover:opacity-80 transition-opacity ${currentSection === 0 ? 'underline font-bold' : ''}`}>Home</button>
            <button onClick={() => handleScrollToSection(1)} className={`cursor-pointer hover:opacity-80 transition-opacity ${currentSection === 1 ? 'underline font-bold' : ''}`}>Work</button>
            <button onClick={() => handleScrollToSection(2)} className={`cursor-pointer hover:opacity-80 transition-opacity ${currentSection === 2 ? 'underline font-bold' : ''}`}>Leadership</button>
            <button onClick={() => handleScrollToSection(3)} className={`cursor-pointer hover:opacity-80 transition-opacity ${currentSection === 3 ? 'underline font-bold' : ''}`}>Tech</button>
            <button onClick={() => handleScrollToSection(4)} className={`cursor-pointer hover:opacity-80 transition-opacity ${currentSection === 4 ? 'underline font-bold' : ''}`}>Media</button>
          </div>
        </div>

        <div className="flex-1 relative overflow-hidden">
          <div 
            id="mobile-scroll-container"
            className="h-full overflow-y-scroll snap-y snap-mandatory"
            onScroll={(e) => {
              const container = e.target as HTMLElement;
              const sectionHeight = container.clientHeight;
              const scrollTop = container.scrollTop;
              const newSection = Math.round(scrollTop / sectionHeight);
              setCurrentSection(newSection);
            }}
          >
            <div className="w-full h-full snap-start flex flex-col items-center justify-center p-6 text-center">
              <div className="mb-2">
                <div 
                  className="text-left font-bold -mb-1 -ml-0.75"
                  style={{
                    backgroundImage: "url('/top.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '850',
                    fontSize: '48px',
                    lineHeight: '40px',
                  }}
                >
                  LUCAS
                </div>
                <div className="relative">
                  <Image
                    src="/photo.jpg"
                    alt="Lucas Gingera"
                    width={400}
                    height={300}
                    className="object-cover mx-auto"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className={`${arizonia.className} absolute -top-8 left-5`} style={{ color: '#004377', fontSize: '40px', fontWeight: 400, filter: 'blur(1px)' }}>
                      Gingera
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-xs italic leading-tight max-w-sm mb-4 text-black px-3 py-1">
                A UBC student passionate about solving real problems and building refined product experiences.
              </p>
              
              <div className="flex space-x-2 w-full max-w-sm justify-center">
                <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText('lucasgingera@outlook.com');
                      setCopied(true);
                      setTimeout(() => setCopied(false), 1500);
                    } catch (e) {}
                  }}
                  className="px-3 py-2 bg-white bg-opacity-90 text-black rounded-lg cursor-pointer hover:bg-opacity-100 transition-all text-sm font-medium"
                >
                  {copied ? 'Copied!' : 'Copy Email'}
                </button>
                <a href="https://linkedin.com/in/lucasgingera/" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-white bg-opacity-90 text-black rounded-lg hover:bg-opacity-100 transition-all text-sm font-medium text-center">LinkedIn</a>
                <a href="https://github.com/lucasging/" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-white bg-opacity-90 text-black rounded-lg hover:bg-opacity-100 transition-all text-sm font-medium text-center">GitHub</a>
              </div>
            </div>

            {[1, 2, 3, 4].map((sectionIndex) => {
              const sectionId = sections[sectionIndex];
              return (
                <div key={sectionIndex} className="w-full h-full snap-start p-4 overflow-y-auto flex items-center justify-center">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                      {contentByPanel[sectionId]?.map((item, idx) => (
                        <div key={`${sectionId}-${idx}`} className="bg-white bg-opacity-95 rounded-xl p-5 text-black shadow-lg w-96 max-w-full">
                          <div className="flex items-center mb-4">
                            {item.img && (
                              <div className="mr-4 flex-shrink-0">
                                {item.link ? (
                                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <Image 
                                      src={item.img} 
                                      alt={item.imgAlt} 
                                      width={Math.min(item.w ?? 72, 70)} 
                                      height={Math.min(item.h ?? 72, 50)} 
                                      className="object-contain" 
                                    />
                                  </a>
                                ) : (
                                  <Image 
                                    src={item.img} 
                                    alt={item.imgAlt} 
                                    width={Math.min(item.w ?? 72, 70)} 
                                    height={Math.min(item.h ?? 72, 50)} 
                                    className="object-contain" 
                                  />
                                )}
                              </div>
                            )}
                            <div className="flex-1">
                              <div className="font-bold text-lg mb-1">{item.title}</div>
                              <div className="text-sm opacity-70 mb-2">{item.small}</div>
                            </div>
                          </div>
                          <div className="text-sm leading-relaxed">{item.medium}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
