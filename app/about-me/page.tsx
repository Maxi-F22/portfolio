import Link from "next/link";
import Image from "next/image";
import Header from "../helpers/header";
import CVItem from "../info-cards/cv";

export default function AboutMePage() {
  return (
    <div className="space-y-6">
      <section className="grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_220px]">
        <Header
          headline="About Me"
          text={
            <>
              My name is Maximilian Flack, I’m 25, and I grew up in the Black Forest region of Germany - a place that shaped both my personal and academic journey. 
              I developed a strong interest in interactive applications and combining technical problem-solving with creative design, which led me to study Media Informatics at Hochschule Furtwangen, 
              where I am currently completing my Master’s degree after earning my Bachelor’s. <br /><br />
              Along the way, I discovered a passion for game development and VR, with a particular focus on Multi-User VR applications.
              I took a few courses to help me build my skills and gain experience in handling different game engines - you can view the results on the
              <Link href="/student-projects" className="text-[#fff]! hover:text-[#9aa6c4]!">
                {" "}Student Project{" "}
              </Link> page.<br /><br />
              I also gained experience in developing and maintaining websites through my Bachelor’s degree, my internship semester and my part-time job in the field.
              The main tools I worked with during that time were HTML, CSS, and JavaScript/TypeScript, specifically the Vue.js and React frameworks.<br />
              (This site is also built using React and Next.js!)
            </>
          }
        />

        <aside className="relative mx-auto mt-3 w-full max-w-[220px] md:mx-0 md:justify-self-end">
          <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-[radial-gradient(circle_at_top,#56c7ff33,transparent_65%)]" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border border-[#2a355c] bg-gradient-to-br from-[#131a30] to-[#1a2442] p-2 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <Image
              src="profilepic.png"
              alt="Portrait of Maximilian Flack"
              width={480}
              height={640}
              priority
              className="h-auto w-full rounded-2xl border border-[#2a355c] object-cover"
            />
          </div>
        </aside>
      </section>

      <section className="space-y-4">
        <h2 className="mb-4 text-3xl font-semibold">My CV</h2>

        <h3 className="text-xl font-semibold">Work Experience</h3>

        <CVItem 
          headline="Research assistant in the field of Multi-User VR development"
          company="Hochschule Furtwangen"
          description="Further development of a Unity Multi-User VR template and its deployment for exhibitions"
          years="Apr 2026 - today"         
        />
        <CVItem 
          headline="Part-time job in front-end web development"
          company="Commeco Solutions GmbH"
          description="Front-end web development of a middleware using Vue.js and website creation using WordPress"
          years="Mar 2021 - Aug 2024"
        />
        <CVItem 
          headline="Internship semester in front-end web development"
          company="Commeco Solutions GmbH"
          description="Front-end web development of a middleware using Vue.js"
          years="Sep 2020 - Feb 2021"
        />

        <h3 className="text-xl font-semibold">Education</h3>

        <CVItem 
          headline="Media Informatics"
          company="Hochschule Furtwangen"
          description="Master of Science"
          years="2024 - today"         
        />
        <CVItem 
          headline="Media Informatics"
          company="Hochschule Furtwangen"
          description="Bachelor of Science"
          years="2019 - 2024"         
        />
      </section>
    </div>
  );
}
