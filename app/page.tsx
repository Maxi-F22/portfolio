import Link from "next/link";
import Header from "./helpers/header";
import FeatureItem from "./info-cards/featured";

export default function Home() {
  return (
    <div className="space-y-8">
      <Header
        headline="My Portfolio"
        text={
          <>
            Welcome to my portfolio website.<br /><br />
            Here you can find all kinds of projects I worked on during my
            studies in Media Informatics at Hochschule Furtwangen, as well as
            some projects I made just for fun.<br /><br />
            If you want to know more about my background, look at the
            <Link href="/about-me" className="text-[#fff]! hover:text-[#9aa6c4]!">
              {" "}About Me{" "}
            </Link>
            page.<br /><br />
            For demos and embedded projects that can be tested in the browser, <br />take a look at the
            <Link href="/student-projects" className="text-[#fff]! hover:text-[#9aa6c4]!">
              {" "}Project{" "}
            </Link>
            sites.<br /><br />
            <b className="text-[#00d7ff] text-xl">Thanks for visiting and have fun!</b>
          </>
        }
        shouldFade={true}
      />

      <section className="intro-fade-up intro-delay-2">
        <h2 className="mb-4 text-3xl font-semibold">Featured Projects</h2>
        <div className="grid gap-4 md:grid-cols-3">

          <FeatureItem 
            headline="VR-Multiplayer"
            text="One of the things I&apos;m focusing on in my master&apos;s programme is creating Multi-User Virtual Reality applications in Unity, Unreal and Godot."
            buttonText="VR Projects"
            link="/student-projects#type-vr"
          />
          <FeatureItem 
            headline="Games"
            text="As part of my courses, I created a couple of games. I made some of them on my own and some with my classmates. Try them here, they&apos;re embedded from Github pages."
            buttonText="Game Dev"
            link="/student-projects#type-game-dev"
          />
          <FeatureItem 
            headline="CuWave (WIP)"
            text="I&apos;m having a bit of fun at the moment working on a small puzzle game in Godot. I made the cube model in Blender. It&apos;s a work in progress, so don&apos;t expect perfection! :)"
            buttonText="CuWave"
            link="/own-projects"
          />

        </div>
      </section>
    </div>
  );
}
