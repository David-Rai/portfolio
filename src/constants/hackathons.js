import godawarihack from "../assets/godawari.jpeg";
import daj from '../assets/daj.avif'

export const hackathonList = [
  {
    name: "PUBG",
    image:daj,
    country: "Nepal, 2025 (72-hour hackathon)",
    details:"GloCulture is a global platform where users share and explore cultural experiences—from food and festivals to art and traditions—connecting people through authentic stories and real-time discovery.",
    links: [
      {
        type: "website",
        src: "https://gloculture.netlify.app",
      },
      {
        type: "source",
        src: "https://github.com/David-Rai/Hackathon",
      },
    ],
  },
  {
    name: "Godawari Hacks",
    image: godawarihack,
    country: "Nepal,2026(24-hour hackathon)",
    details: "A privacy-first platform for anonymous AI chatting, including a doctor AI for health-related questions.",
    links: [
      {
        type: "website",
        src: "https://afnocare.netlify.app",
      },
      {
        type: "source",
        src: "https://github.com/David-Rai/Godawari-Hackathon",
      },
    ],
  },
];
