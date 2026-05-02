"use client";
import { useState } from "react";
import IntroCard from "@/components/IntroCard";
import ProjectsCard from "@/components/ProjectCard";
import SkillsCard from "@/components/SkillsCard";
import ContactCard from "@/components/ContactCard";
import AboutCard from "@/components/AboutCard";

type PageType = null | "projects" | "skills" | "about" | "contact";

export default function Home() {
  const [activePage, setActivePage] = useState<PageType>(null);

  const openPage = (page: PageType) => setActivePage(page);
  const closePage = () => setActivePage(null);

  return (
    <main className="w-screen h-screen flex items-center justify-center p-6 box-border relative bg-(--bg)">

      {/* Ambient glows */}
      <div className="fixed top-[10%] left-[15%] w-125 h-125 bg-[radial-gradient(circle,rgba(110,181,255,0.07)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] right-[15%] w-100 h-100 bg-[radial-gradient(circle,rgba(126,245,176,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

     <div className="relative z-1 flex items-stretch justify-center gap-4 w-[80%] h-[70%]">
  
  {/* Left — Projects */}
  <div className="flex-1 min-h-0">
    <ProjectsCard onClick={() => openPage("projects")} />
  </div>

  {/* Middle — Intro + Skills */}
  <div className="flex flex-col gap-4 flex-2 min-h-0">
    <div className=" h-[65%]">
      <IntroCard />
    </div>
    <div className="h-[35%]">
      <SkillsCard onClick={() => openPage("skills")} />
    </div>
  </div>

  {/* Right — About + Contact */}
  {/* Right — About + Contact */}
<div className="flex flex-col gap-4 flex-1 min-h-0">
  <div className="flex-1 min-h-0">
    <AboutCard onClick={() => openPage("about")} />
  </div>
  <div className="flex-1 min-h-0">
    <ContactCard onClick={() => openPage("contact")} />
  </div>
</div>

</div>
    </main>
  );
}