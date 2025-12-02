// src/app/page.tsx
import { portfolio } from "@/data/portfolio";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-dvh w-full">
      <section className="w-full max-w-xl mb-6 flex flex-col items-center">
        <h1 className="text-3xl font-black tracking-wide uppercase text-center mb-1">Richard Álvarez</h1>

        <p className="text-orange text-center text-lg font-light mb-1 text-left tracking-normal">Web Developer & AI Engineer</p>
        <p className="max-w-md text-base text-white mb-2 text-left">
          I build creative, effective, and minimal internet experiences.<br />
          <span className="text-white">Based in Chicago, working globally.</span><br />
          <a
            href="mailto:rawalvarez731@gmail.com"
            className="no-underline text-orange hover:text-white"
          >
            → email
          </a>
        </p>
      </section>

      {/* <section className="w-full max-w-xl">
        <h2 className="text-xl font-semibold uppercase mb-2 tracking-wide text-left">Websites</h2>
        <ul className="text-left pl-5 space-y-0.5 tracking-normal">
          {portfolio.map((item) =>
            item.external ? (
              <li key={item.title} className="leading-tight flex items-center gap-1.5">
                <span className="text-white text-sm leading-tight">▪</span>
                <div className="flex items-center gap-2">
                  <a
                    href={item.url}
                    className="text-orange underline hover:text-white whitespace-nowrap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                  {item.description && (
                    <span className="text-white text-sm whitespace-nowrap">{item.description}</span>
                  )}
                </div>
              </li>
            ) : (
              <li key={item.title} className="leading-tight flex items-center gap-1.5">
                <span className="text-white text-sm leading-tight">▪</span>
                <div className="flex items-center gap-2">
                  <Link href={item.url} className="text-orange no-underline hover:text-white whitespace-nowrap">
                    {item.title}
                  </Link>
                  {item.description && (
                    <span className="text-white text-sm whitespace-nowrap">{item.description}</span>
                  )}
                </div>
              </li>
            )
          )}
        </ul>
      </section> */}
    </main>
  );
}
