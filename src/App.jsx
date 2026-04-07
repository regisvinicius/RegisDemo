const timeline = [
  {
    phase: "Chapter 01",
    team: "The Owl Era",
    title: "I started at Owl",
    description:
      "That was the first chapter. I was learning the rhythm, meeting the team, and understanding that yes, apparently my career here would involve an unexpected amount of animal-based lore.",
  },
  {
    phase: "Chapter 02",
    team: "The Egg Detour",
    title: "Then I moved to Egg",
    description:
      "A different nest, a different challenge, and probably the only time moving to Egg sounded like a serious career step. It gave me more context, more projects, and more stories to bring back.",
  },
  {
    phase: "Chapter 03",
    team: "The Return",
    title: "Now I'm back on the Medusa team",
    description:
      "Now I am back on Medusa, which feels like the perfect next chapter. Same curiosity, more experience, and only slightly more mythology than before.",
  },
];

const highlights = [
  "I already know the culture, the pace, and where the good internal jokes usually live.",
  "I also came back while doing a postgraduate program focused on AI, because clearly this chapter needed one more plot point.",
  "This return feels less like onboarding and more like the next season of a very specific workplace sitcom.",
];

const personalBits = [
  {
    label: "Experience",
    text: "I now have 10 years of total experience as a software engineer. But the comeback itself is very recent: I was away for just 7 months, which is basically enough time to say 'I missed you guys' and come back like nothing happened.",
  },
  {
    label: "What I like building",
    text: "Useful products, thoughtful interfaces, and systems that feel simple on the surface even when the work underneath is not.",
  },
  {
    label: "How I work",
    text: "Collaborative, curious, and practical. I care a lot about momentum, clean execution, and making things easier for the people around me.",
  },
  {
    label: "What I am studying now",
    text: "I came back while also doing a postgraduate program focused on AI, which says a lot about where my curiosity is right now and where I want to keep growing.",
  },
  {
    label: "Outside of work",
    text: "I am into cars, gym, cycling, and games, which is a nice way of saying I enjoy speed, consistency, a little healthy suffering, and a good challenge even after office hours.",
  },
];

const introParagraphs = [
  "This page is my way of saying hello again, giving a quick overview of my very serious Owl-to-Egg-to-Medusa journey, and making it clear that I am genuinely happy to be building with this team again.",
  "I now have 10 years of experience as a software engineer, but I was away for only 7 months, so this feels less like a dramatic comeback and more like, \"I missed you all and came back.\"",
  "I am also returning while doing a postgraduate program focused on AI, which feels like a very fitting side quest for this chapter.",
];

function App() {
  const portraitSrc = `${import.meta.env.BASE_URL}regis-portrait.jpg`;
  const honeymoonSrc = `${import.meta.env.BASE_URL}regis.wife.jpg`;

  return (
    <main className="page-shell min-h-screen overflow-hidden bg-[var(--paper)] text-stone-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,_rgba(13,148,136,0.22),_transparent_52%),radial-gradient(circle_at_20%_20%,_rgba(245,158,11,0.18),_transparent_35%),linear-gradient(180deg,_#fffaf0_0%,_#f8f2e7_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(28,25,23,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(28,25,23,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30 [mask-image:linear-gradient(180deg,black_0%,black_25%,transparent_75%)]" />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-18 pt-8 md:px-10 lg:px-12">
        <div className="flex items-center justify-between text-sm uppercase tracking-[0.25em] text-stone-600">
          <span>Regis Rodrigues</span>
          <span>Back on Medusa</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-7">
            <p className="inline-flex rounded-full border border-stone-900/10 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-700 shadow-sm backdrop-blur">
              Returning teammate, familiar face
            </p>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-balance sm:text-6xl lg:text-[5.4rem]">
                I started at Owl, moved to Egg, and now I&apos;m back on the{" "}
                <span className="text-teal-700">Medusa team</span>.
              </h1>
              <div className="space-y-4 max-w-2xl text-lg leading-8 text-stone-700 sm:text-[1.15rem]">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  I already know the culture, the pace, and where the best
                  internal jokes tend to live, so this return feels less like
                  onboarding and more like the next season of a very specific
                  workplace sitcom.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item}
                  className="rounded-[1.75rem] border border-stone-900/10 bg-white/78 p-5 text-sm leading-7 text-stone-700 shadow-[0_18px_45px_rgba(28,25,23,0.07)] backdrop-blur"
                >
                  {item}
                </article>
              ))}
            </div>
          </div>

          <aside className="relative">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amber-300/50 blur-2xl" />
            <div className="absolute -bottom-8 left-0 h-28 w-28 rounded-full bg-teal-400/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-stone-900/10 bg-stone-950 p-6 text-stone-50 shadow-[0_28px_90px_rgba(28,25,23,0.2)] lg:mt-8">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                      Quick intro
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">
                      A familiar face with new stories
                    </h2>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-teal-300">
                    Season 2
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                  <img
                    src={portraitSrc}
                    alt="Portrait of Regis Vinicius"
                    className="hero-portrait h-[24rem] w-full object-cover object-center"
                  />
                  <div className="border-t border-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-stone-400">
                      Portrait
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-300">
                      Proof that I can clean up nicely for a comeback arc.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-4">
                    <p className="text-sm text-stone-400">Past connection</p>
                    <p className="mt-2 text-lg font-medium">
                      I&apos;ve already been part of the story here, so this page
                      gets to skip the awkward first-meeting energy.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-4">
                    <p className="text-sm text-stone-400">What changed</p>
                    <p className="mt-2 text-lg font-medium">
                      A little time away, more experience, same enthusiasm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="story" className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 lg:px-12">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
            The timeline
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Different teams, same thread.
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone-700">
            The names changed. The mascots escalated. The story kept building.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {timeline.map((item, index) => (
            <article
              key={item.team}
              className="relative overflow-hidden rounded-[2rem] border border-stone-900/10 bg-white/90 p-6 shadow-[0_18px_60px_rgba(28,25,23,0.08)] backdrop-blur"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0f766e_0%,#14b8a6_55%,#f59e0b_100%)]" />
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.28em] text-stone-500">
                  {item.phase}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-950 text-sm font-semibold text-white">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-stone-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-teal-700">
                {item.team}
              </p>
              <p className="mt-5 text-base leading-7 text-stone-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 lg:px-12">
        <div className="grid gap-6 rounded-[2.2rem] border border-stone-900/10 bg-stone-950 px-6 py-8 text-stone-50 shadow-[0_28px_80px_rgba(28,25,23,0.14)] lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-stone-400">
              About me
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              I like building things that feel clear, useful, and a little fun.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-stone-300">
            <p>
              I&apos;m a software engineer with 10 years of experience, and I still
              enjoy turning ideas into products people actually like using. I care
              about craft, momentum, good teamwork, and the kind of details that
              make a product feel calm instead of chaotic.
            </p>
            <p>
              I&apos;ve been here before, which makes this return special. And to be
              clear: I was only away for 7 months. So there&apos;s already history,
              shared context, and enough "missed you and came back" energy to
              justify making a whole page about it. On top of that, I came back
              while studying a postgraduate program focused on AI, so this version
              of me also arrives with a few new obsessions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 lg:px-12">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
            More personally
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            A few things that are actually true about me, beyond the team mythology.
          </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-stone-600">
            The work matters, but this is the part that makes the page feel like
            a real person and not just a timeline with better typography.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {personalBits.map((item) => (
            <article
              key={item.label}
              className="rounded-[2rem] border border-stone-900/10 bg-white/85 p-6 shadow-[0_18px_50px_rgba(28,25,23,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(28,25,23,0.1)]"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-teal-700">
                {item.label}
              </p>
              <p className="mt-4 text-base leading-7 text-stone-700">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="portrait" className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 lg:px-12">
        <div className="grid gap-6 rounded-[2.2rem] border border-stone-900/10 bg-white/80 p-8 shadow-[0_18px_50px_rgba(28,25,23,0.07)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
              A little more life
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              One photo for the real story.
            </h2>
            <p className="mt-3 text-sm italic leading-7 text-stone-500">
              I got married last year, and this is my wife, Thais, and me
              enjoying a trip in Amsterdam.
            </p>
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-8 text-stone-700">
              <p>
                Our honeymoon was in Europe, and this photo was taken in
                Amsterdam. Between the canals, the bikes everywhere, and the
                energy of the city, it was a pretty memorable start to that trip.
              </p>
              <p>
                It also helps the page feel less like a resume and more like a
                person with a real life happening outside work, which feels much
                more honest for a reintroduction.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-stone-900/10 bg-stone-100 p-4 shadow-[0_12px_35px_rgba(28,25,23,0.06)]">
            <img
              src={honeymoonSrc}
              alt="Regis Vinicius with his wife"
              className="mx-auto h-auto max-h-[42rem] w-full max-w-3xl rounded-[1.2rem] object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
