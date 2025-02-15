"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Radio, LucideView, ArrowUpRightIcon, CompassIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [showSocials, setShowSocials] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white/90 font-">
      {/* Blurred Background Logo */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden z-[-1] animate-pulse duration-2000">
        <Image
          src="/logo.png"
          alt="gplinks"
          layout="fill"
          objectFit="cover"
          className="blur-3xl opacity-20"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative text-center max-w-xl p-4">
        {/* Front Logo */}
        <div className="w-24 h-auto mx-auto py-4 mt-20 fade-in-5">
          <Image src="/logo.png" alt="gplinks" width={600} height={600} />
        </div>

        <h1 className="text-xl font-bold text-white/90">Ghost Protocols</h1>
        <p className="text-white/75 font-medium text-sm">Welcome to GP World</p>

        <div className="flex flex-col gap-5 my-5 font-semibold w-full">
          <div onClick={() => window.open("https://www.whatsapp.com/catalog/923344444302/?app_absent=0")} className="rounded-xl overflow-hidden h-60 relative">
            <Image src={'/three.png'} alt="cresta" width={500} height={300} />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 flex justify-between w-full py-3 px-2 text-white/90">
              <span className="mx-4 font-semibold">Checkout our Catalogue</span>
              <ArrowUpRightIcon className="mx-2 opacity-55" />  
            </div>
          </div>
          
          <RainbowButton onClick={() => window.open("https://forms.gle/PYmn9SpAMwmgFsfc7")} className="flex justify-between gap-4 px-1">
            <LucideView className="mx-2 opacity-75 py-[1px]"/>
            <span className="mx-4">Make a Ghost Query</span>  
            <ArrowUpRightIcon className="mx-2 opacity-25 " />  
          </RainbowButton>

          <Button onClick={() => window.open("http://tiny.cc/gp-works")} size={"lg"} className="bg-white/5 z-10 drop-shadow-2xl flex justify-between gap-4 px-1"> 
            <Radio className="mx-2 opacity-75 py-[1px]"/>
            GP Works: Live Ops
            <ArrowUpRightIcon className="mx-2 opacity-25 " />  
          </Button>

          <Button onClick={() => window.open("https://ghostprotocols.pk/")} size={"lg"} className="bg-white/5 z-10 drop-shadow-2xl flex justify-between gap-4 px-1"> 
            <CompassIcon className="mx-2 opacity-75 py-[1px]"/>
            GP Website
            <ArrowUpRightIcon className="mx-2 opacity-25 " />  
          </Button>

          {/* GP Socials Toggle Button */}
          <Button onClick={() => setShowSocials(!showSocials)} size={"lg"} className="bg-white/5 z-10 drop-shadow-2xl flex justify-between gap-4 px-1"> 
            <CompassIcon className="mx-2 opacity-75 py-[1px]"/>
            GP Socials
            {showSocials ? <ChevronUpIcon className="mx-2 opacity-25" /> : <ChevronDownIcon className="mx-2 opacity-25" />}
          </Button>
          
          {showSocials && (
            <div className="flex flex-col gap-3 bg-white/5 z-10 drop-shadow-2xl p-4 rounded-xl transition-opacity duration-1000 ease-in-out">
              <Button onClick={() => window.open("https://www.facebook.com/ghostprotocolspk")} size={"lg"} className="bg-white/5 z-10 drop-shadow-2xl flex justify-between gap-4 px-1"> 
                <CompassIcon className="mx-2 opacity-75 py-[1px]"/>
                Facebook
                <ArrowUpRightIcon className="mx-2 opacity-25 " />  
              </Button>

              <Button onClick={() => window.open("https://instagram.com/ghostprotocolspk")} size={"lg"} className="bg-white/5 z-10 drop-shadow-2xl flex justify-between gap-4 px-1"> 
                <CompassIcon className="mx-2 opacity-75 py-[1px]"/>
                Instagram
                <ArrowUpRightIcon className="mx-2 opacity-25 " />  
              </Button>

              <Button onClick={() => window.open("https://www.tiktok.com/@ghostprotocols.pk")} size={"lg"} className="bg-white/5 z-10 drop-shadow-2xl flex justify-between gap-4 px-1"> 
                <CompassIcon className="mx-2 opacity-75 py-[1px]"/>
                Tiktok
                <ArrowUpRightIcon className="mx-2 opacity-25 " />  
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
