"use client";

import {
  ScrollPortraitWall,
  type Speaker,
} from "@/components/ui/scroll-portrait-wall";

/** Featured titles for the scroll portrait wall. */
const lineup: Speaker[] = [
  { name: "GTA 6", role: "Coming Soon", src: "/games/gta-6.png" },
  { name: "Marvel Wolverine", role: "Coming Soon", src: "/games/wolverine.png" },
  { name: "GTA V", role: "PS5", src: "/games/gta-5.jpg" },
  { name: "Spider-Man 2", role: "PS5", src: "/games/spider-man-2.png" },
  { name: "Ghost of Tsushima", role: "PS5", src: "/games/ghost-of-tsushima.png" },
  { name: "Ghost of Yōtei", role: "PS5", src: "/games/ghost-of-yotei.png" },
  { name: "WWE 2K25", role: "PS5", src: "/games/wwe-2k25.png" },
  { name: "FC 26", role: "Xbox", src: "/games/fc-26.png" },
  { name: "Forza Horizon 5", role: "Xbox", src: "/games/forza-horizon-5.png" },
  { name: "Mario Kart 8 Deluxe", role: "Switch", src: "/games/mario-kart-8.png" },
  { name: "Smash Bros Ultimate", role: "Switch", src: "/games/smash-bros.png" },
  { name: "Gran Turismo 7", role: "Racing", src: "/games/gran-turismo-7.png" },
  { name: "Beat Saber", role: "VR", src: "/games/beat-saber.png" },
  { name: "iB Cricket", role: "VR", src: "/games/ib-cricket.png" },
];

/** Extra catalogue listed under the wall. */
const moreGames: { title: string; platform: string }[] = [
  { title: "God of War Ragnarök", platform: "PS5" },
  { title: "NBA 2K25", platform: "PS5" },
  { title: "Mortal Kombat 1", platform: "PS5" },
  { title: "UFC 5", platform: "PS5" },
  { title: "Ratchet & Clank", platform: "PS5" },
  { title: "Horizon Forbidden West", platform: "PS5" },
  { title: "The Last of Us Part I", platform: "PS5" },
  { title: "Tekken 8", platform: "PS5" },
  { title: "Call of Duty", platform: "PS5" },
  { title: "Minecraft", platform: "Xbox" },
  { title: "Sea of Thieves", platform: "Xbox" },
  { title: "Halo Infinite", platform: "Xbox" },
  { title: "Rocket League", platform: "Xbox" },
  { title: "Fortnite", platform: "Xbox" },
  { title: "Red Dead Redemption 2", platform: "Xbox" },
  { title: "Animal Crossing", platform: "Switch" },
  { title: "Mario Party", platform: "Switch" },
  { title: "Zelda: Tears of the Kingdom", platform: "Switch" },
  { title: "Pokémon Scarlet", platform: "Switch" },
  { title: "Just Dance", platform: "Switch" },
  { title: "Splatoon 3", platform: "Switch" },
  { title: "Overcooked! All You Can Eat", platform: "Switch" },
  { title: "F1 24", platform: "Racing" },
  { title: "Assetto Corsa", platform: "Racing" },
  { title: "Dirt Rally 2.0", platform: "Racing" },
  { title: "Need for Speed Unbound", platform: "Racing" },
  { title: "Superhot VR", platform: "VR" },
  { title: "Pistol Whip", platform: "VR" },
  { title: "Population: One", platform: "VR" },
  { title: "Job Simulator", platform: "VR" },
  { title: "Chess", platform: "Board" },
  { title: "Checkers", platform: "Board" },
  { title: "Backgammon", platform: "Board" },
  { title: "Carrom", platform: "Board" },
  { title: "Uno", platform: "Board" },
  { title: "Monopoly", platform: "Board" },
  { title: "Jenga", platform: "Board" },
  { title: "Catan", platform: "Board" },
];

export default function GamesLineup() {
  return (
    <section id="lineup" className="bg-bg">
      <ScrollPortraitWall
        title="The Lineup"
        date="PS5 · Xbox · Switch · Racing · VR · Board"
        hint="scroll the games wall"
        speakers={lineup}
        columns={4}
        showCaptions
        colorful
        className="bg-bg"
      />

      <div className="border-t border-rule bg-surface px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-mono-label text-[0.7rem] text-ink-muted">Catalogue</p>
          <h3 className="mt-3 max-w-xl font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-ink">
            And plenty more on the shelf.
          </h3>
          <p className="mt-4 max-w-lg text-ink-muted">
            Walk-in library rotates — ask the floor what&rsquo;s hot tonight. Here&rsquo;s a taste of
            what usually loads.
          </p>

          <ul className="mt-12 columns-1 gap-x-10 sm:columns-2 lg:columns-3">
            {moreGames.map((g) => (
              <li
                key={`${g.platform}-${g.title}`}
                className="mb-3 flex break-inside-avoid items-baseline justify-between gap-4 border-b border-rule py-2"
              >
                <span className="text-sm font-medium text-ink">{g.title}</span>
                <span className="font-mono-label shrink-0 text-[0.65rem] text-ink-muted">
                  {g.platform}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
