import { ReactNode } from "react";

type CVProps = {
  headline: ReactNode;
  company: ReactNode;
  description: ReactNode;
  years: ReactNode;
};

export default function CVItem({
  headline,
  company,
  description,
  years
}: CVProps) {
  return (
    <article className="rounded-2xl border border-[#2a355c] bg-gradient-to-br from-[#131a30] to-[#1a2442] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{headline}</h3>
          <p className="text-[#9aa6c4]">{company}</p>
        </div>
        <span className="text-sm text-[#9aa6c4]">{years}</span>
      </div>
      <p className="mt-3 text-[#9aa6c4]">
        {description}
      </p>
    </article>
  )
}