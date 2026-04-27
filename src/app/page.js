"use client";
import CursorBubble from "@/components/bubble";
import Footer from "@/components/footer";
import HiroSaction from "@/components/hiro";
import Nav from "@/components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./about";

export default function Home() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <CursorBubble />

        <main className="flex-1 pt-16">
          <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<HiroSaction />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
