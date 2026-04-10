import { ReactNode } from "react";

type HeaderProps = {
  headline: ReactNode;
  text?: ReactNode;
  shouldFade?: boolean;
};

export default function Header({
  headline,
  text,
  shouldFade = false,
}: HeaderProps) {
  return (
    <section className="space-y-4 py-4">
      <h1 className={(shouldFade ? "intro-fade-up " : "") + "text-4xl leading-tight font-semibold tracking-tight md:text-6xl"}>
        {headline}
      </h1>
      <p className={(shouldFade ? "intro-fade-up intro-delay-1 " : "") + "max-w-3xl text-base text-[#9aa6c4] md:text-lg"}>
        {text}
      </p>

    </section>
  )
}