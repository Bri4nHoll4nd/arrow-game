"use client"

import Image from "next/image";
import "@/styles/MainPageStyle.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function play() {
    router.push("/play");
  }

  return (
    <main>
      <Image id=""
        src="/arrowdivers.png"
        alt="Arrowdivers logo"
        width={1329.74}
        height={286.62}
        priority
      />  
      <button id="play-button" onClick={play}>Play</button>
    </main>
  );
}
