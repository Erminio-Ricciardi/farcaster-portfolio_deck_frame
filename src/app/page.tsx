import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

import { NEXT_PUBLIC_SITE_URL } from "@/lib/constants";

import FrameIntro from "./components/frameIntro";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Deck",
    },
    {
      label: "herminius",
      action:"link",
      target: `https://herminius.eth.limo`,
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/herminius_banner.gif`,
    aspectRatio: "1.91:1",
  },
  postUrl:`${NEXT_PUBLIC_SITE_URL}/api/hoperaDeck/1`
});

export const metadata: Metadata = {
  title: "Herminius",
  description: "Web3 Design",
  openGraph: {
    title: "Herminius",
    description: "Web3 Design",
    images: `${NEXT_PUBLIC_SITE_URL}/img/frame_img/herminius_banner.png`,
  },
  other: {
    ...frameMetadata,
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <FrameIntro />
    </main>
  );
}
