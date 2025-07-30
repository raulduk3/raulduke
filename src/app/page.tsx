// src/app/page.tsx
import { portfolio } from "@/data/portfolio";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <section className="w-full max-w-xl">
        <h1 className="text-3xl font-black tracking-widest uppercase text-center mb-2">Richard Álvarez</h1>
        
        <p className="text-orange text-center text-lg font-light mb-1 text-left">web developer & filmmaker</p>
        <p className="max-w-md text-base text-white/80 mb-2 text-left">
          I build creative, effective, and minimal web experiences.<br />
          <span className="text-white/60">Based in Chicago, working globally.</span>
        </p>
        <div className="flex gap-4 mt-2 mb-2 text-left">
          <a
            href="mailto:rawalvarez731@gmail.com"
            className="underline text-orange hover:text-white"
          >
            email
          </a>
          <a
            href="https://instagram.com/lofirick"
            className="underline text-orange hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
        </div>
      </section>

      <section className="w-full max-w-xl">
        <h2 className="text-xl font-semibold uppercase mb-2 text-left">Portfolio</h2>
        <ul className="list-disc pl-5 text-left space-y-0.5">
          {portfolio.map((item) =>
            item.external ? (
              <li key={item.title} className="pl-0 leading-tight">
                <a
                  href={item.url}
                  className="text-orange underline hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
                {item.description && (
                  <span className="text-white/60 text-sm ml-2 align-middle">{item.description}</span>
                )}
              </li>
            ) : (
              <li key={item.title} className="pl-0 leading-tight">
                <Link href={item.url} className="text-orange underline hover:text-white">
                  {item.title}
                </Link>
                {item.description && (
                  <span className="text-white/60 text-sm ml-2 align-middle">{item.description}</span>
                )}
              </li>
            )
          )}
        </ul>
      </section>
    </main>
  );
}
