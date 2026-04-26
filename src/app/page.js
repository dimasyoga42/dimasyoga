"use client";
import CursorBubble from "@/components/bubble";
import Footer from "@/components/footer";
import HiroSaction from "@/components/hiro";
import Nav from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto w-full flex flex-col flex-1">
        <Nav />
        <CursorBubble />
        <main className="relative z-10">
          <HiroSaction />
        </main>
      </div>

      <Footer />
    </div>
  );
}
