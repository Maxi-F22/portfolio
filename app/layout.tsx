import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";


export const metadata: Metadata = {
  title: "Maximilian Flack",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-me", label: "About Me" },
    { href: "/student-projects", label: "Student Projects" },
    { href: "/own-projects", label: "Own Projects" },
  ];

  return (
    <html
      lang="en"
      className="h-dvh antialiased"
    >
      <body
        className="flex min-h-screen flex-col text-[#eef2ff] bg-fixed!"
      >
        <header className="sticky top-0 z-50 border-b border-[#2a355c] bg-[#05070e]/75 backdrop-blur-md">
          <nav
            className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 md:flex-row md:px-6"
            aria-label="Hauptnavigation"
          >
            <div className="font-bold tracking-wide text-[#7cf8b8] text-2xl">
              Maximilian Flack
            </div>
            <ul className="flex flex-wrap justify-between gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full border border-transparent px-1 md:px-4 py-2 text-sm text-[#9aa6c4] transition hover:border-[#2a355c] hover:bg-[#131a30]/70 hover:text-[#eef2ff] "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-8 md:px-6">
          {children}
        </main>
        <footer className="border-t border-[#2a355c] bg-[#05070e]/75">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-[#9aa6c4] md:flex-row md:items-center md:justify-between md:px-6">
            <div><p>© {currentYear} Maximilian Flack</p></div>
            <div className="flex gap-6">
              <a target="_blank" href="https://www.github.com/Maxi-F22?tab=repositories" rel="noopener noreferrer" className="inline-flex h-5 w-5 items-center justify-center">
                <Image
                  className="h-5 w-5 transition-transform duration-200 ease-out hover:scale-120"
                  src="/github.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/maximilian-flack-0b89b0396" rel="noopener noreferrer" className="inline-flex h-5 w-5 items-center justify-center">
                <Image
                  className="h-5 w-5 transition-transform duration-200 ease-out hover:scale-120"
                  src="/linkedin.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </a>
            </div>
            <div><p>Built with Next.js and Tailwind CSS</p></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
