import Link from "next/link";
import Header from "../helpers/header";
import CVItem from "../info-cards/cv";

export default function AboutMePage() {
  return (
    <div className="space-y-6">
      <Header
        headline="About Me"
        text={
          <>
            I am currently approaching the end of my Master&apos;s degree in Media Informatics at Hochschule Furtwangen. 
            I also accomplished my Bachelor&apos;s degree in Media Informatics at HFU.<br />
            Along the way, I discovered my passion for developing games and VR applications, particularly multi-user VR applications. 
            I took a few courses to help me build my skills and gain experience in handling different game engines — you can view the results on the 
            <Link href="/student-projects" className="text-[#fff]! hover:text-[#9aa6c4]!">
              {" "}Student Project{" "}
            </Link> page.<br /><br />
            I also gained experience in developing and maintaining websites through my Bachelor&apos;s degree, my internship semester and my part-time job in the field. 
            The main tools I worked with during that time were HTML, CSS, and JavaScript/TypeScript, specifically the Vue.js and React frameworks.<br />
            (This site is also built using React and Next.js)
          </>
        }
      />

      <section className="space-y-4">
        <h2 className="mb-4 text-3xl font-semibold">My CV</h2>

        <h3 className="text-xl font-semibold">Work Experience</h3>

        <CVItem 
          headline="Research assistant in the field of multi-user VR development"
          company="Hochschule Furtwangen"
          description="Further development of a Unity multi-user VR template and its deployment for exhibitions"
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
