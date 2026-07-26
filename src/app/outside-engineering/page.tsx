import Image from "next/image";

const interests = [
  {
    title: "Surfing",
    copy: "I first learned to surf from my mother when I was 14 years old, and since then, it's been hard to keep me out of the ocean! At Cal Poly, I've been heavily involved with Mustang Surf Club, serving as treasurer for my final two years and leading surf lessons throughout all four. Surfing offers me a rare moment of peace, where I can enjoy both the serenity of looking back at the coastline and the thrill of riding a wave.",
    images: ["/images/outside-engineering/surfing.JPG"],
  },
  {
    title: "Backpacking",
    copy: "In my opinion, there's no better way to see the world than to walk through it at a leisurely pace with a few friends. Visiting places like Point Reyes, Yosemite (pictured above), and Big Sur continually reinforces my love for nature and my desire to protect it.",
    images: ["/images/outside-engineering/backpacking.jpg"],
  },
  {
    title: "Sourdough Making",
    copy: "Although I've been making bread for nearly 10 years, I only began experimenting with sourdough about four years ago. Since then, I've kept (and unfortunately killed) several starters. My current starter, named \"Gary\", is more than three years old and has served me well!",
    images: [
      "/images/outside-engineering/sourdough_1.jpeg",
      "/images/outside-engineering/sourdough_2.jpeg",
    ],
  },
  {
    title: "Home Brewing",
    copy: "For many sourdough enthusiasts, the natural next step is home brewing beer. This is still a relatively new hobby for me, and I've only brewed a few batches so far. My two most recent attempts were all-grain versions of an English Pale Ale and a Belgian Witbier. The former turned out great; the latter, not so much!",
    images: [
      "/images/outside-engineering/homebrew_1.jpg",
      "/images/outside-engineering/homebrew_2.JPG",
    ],
  },
];

export default function OutsideEngineeringPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24 lg:px-0">
      <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
        Beyond the Workshop
      </p>

      <h1 className="mt-3 text-5xl font-semibold md:text-6xl">
        Outside Engineering
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        Outside of engineering, I enjoy activities that encourage exploration,
        patience, creativity, and continuous learning.
      </p>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {interests.map((interest) => (
          <article
            key={interest.title}
            className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
          >
            {interest.images.length === 1 ? (
              <div className="relative aspect-[16/10]">
                <Image
                  src={interest.images[0]}
                  alt={interest.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="grid aspect-[16/10] grid-cols-2 gap-1">
                {interest.images.map((image) => (
                  <div key={image} className="relative">
                    <Image
                      src={image}
                      alt={interest.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="p-6">
              <h2 className="text-3xl font-semibold">{interest.title}</h2>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                {interest.copy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}