// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
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
    </main>
  );
}
