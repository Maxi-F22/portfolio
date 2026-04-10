import Link from "next/link";
import { ReactNode } from "react";

type FeatureProps = {
  headline: ReactNode;
  text: ReactNode;
  buttonText: ReactNode;
};

export default function FeatureItem({
  headline,
  text,
  buttonText
}: FeatureProps) {
  return (
    <article className="rounded-2xl border border-[#2a355c] bg-gradient-to-br from-[#131a30] to-[#1a2442] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      <h3 className="text-lg font-semibold">{headline}</h3>
      <p className="mt-2 text-[#9aa6c4]">
        {text}
      </p>
      <Link
        href="/student-projects#vr"
        className="mt-3 inline-flex rounded-xl border border-[#2a355c] px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:border-[#56c7ff]"
      >
        {buttonText}
      </Link>
    </article>
  )
}