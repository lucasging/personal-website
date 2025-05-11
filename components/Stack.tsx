"use client";

import {
    Card,
    CardHeader,
  } from "@/components/ui/card"
  
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { useEffect, useState, ReactNode } from "react"

interface StackProps {
    items: {
        id: number;
        content: ReactNode;
        link?: string;
    }[];
}

export default function Stack({ items }: StackProps) {
    const [api, setApi] = useState<any>()
    const [currentIndex, setCurrentIndex] = useState(2)

    const getVisibilityDistance = (index: number, current: number) => {
        const totalItems = items.length;
        const clockwise = (index - current + totalItems) % totalItems;
        const counterClockwise = (current - index + totalItems) % totalItems;
        return Math.min(clockwise, counterClockwise);
    }

    const handleCardClick = (idx: number) => {
        const distance = getVisibilityDistance(idx, currentIndex)
        if (distance <= 1) {
            api?.scrollTo(idx)
        }
    }

    useEffect(() => {
        if (!api) return

        api.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap())
        })
    }, [api])

    // Add auto-scroll effect
    useEffect(() => {
        if (!api) return

        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % items.length
            api.scrollTo(nextIndex)
        }, 3000)

        return () => clearInterval(interval)
    }, [api, currentIndex, items.length])

    return(
        <Carousel 
            className="w-full relative overflow-x-visible" 
            opts={{
                align: "center",
                loop: true,
                dragFree: false,
                containScroll: false,
                startIndex: 2
            }}
            setApi={setApi}
        >
            <CarouselContent className="grid grid-flow-col py-6 auto-cols-[260px]">
                {items.map((item, idx) => (
                    <CarouselItem key={item.id} className="flex justify-center items-center">
                        <div 
                            className={cn(
                                "transition-all duration-300 aspect-square cursor-pointer",
                                currentIndex === idx ? "w-50 z-10 shadow-lg" : [
                                    "w-46 opacity-70",
                                    currentIndex === 0 && idx === items.length - 1 ? "translate-x-14" :
                                    currentIndex === items.length - 1 && idx === 0 ? "-translate-x-14" :
                                    idx > currentIndex ? "-translate-x-14" : "translate-x-14"
                                ].filter(Boolean).join(" "),
                                getVisibilityDistance(idx, currentIndex) > 1 ? "invisible opacity-0" : "visible"
                            )}
                            onClick={() => currentIndex === idx && item.link ? window.open(item.link, '_blank') : handleCardClick(idx)}
                        >
                            <Card className="w-full h-full !flex-row !p-0 !gap-0 !rounded-none border-none bg-black">
                                {item.content}
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}