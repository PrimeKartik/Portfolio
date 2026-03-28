import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  git,
  carrent,
  jobit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Problem Solver",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "C Programmer",
    icon: backend,
  },
  {
    title: "Tech Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C",
    icon: html,
  },
  {
    name: "Python",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "🏆 Winner – Bit by Bit Coding Competition",
    company_name: "JK Lakshmipat University",
    points: [
      "Won the Bit by Bit Coding Competition organized by JK Lakshmipat University.",
      "Demonstrated strong problem-solving and competitive programming skills.",
      "Competed against fellow B.Tech students in algorithmic challenges.",
    ],
  },
  {
    title: "🎮 Participant – Rajasthan Digifest 2026 Game Jam",
    company_name: "Rajasthan Digifest",
    points: [
      "Participated in the Game Jam at Rajasthan Digifest 2026.",
      "Collaborated with teammates to design and develop a game within a limited timeframe.",
      "Gained experience in game development concepts and rapid prototyping.",
    ],
  },
  {
    title: "💻 Participant – HackJKLU 5.0 Pre-Hackathon",
    company_name: "HackJKLU",
    points: [
      "Built a Phishing URL Detector during the HackJKLU 5.0 pre-hackathon.",
      "Implemented URL analysis using Python with pattern matching and heuristics.",
      "Gained hands-on experience in cybersecurity and web safety tools.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "150+ problems solved on CodeChef with a rating of 1273. Consistently improving competitive programming skills.",
    name: "CodeChef",
    designation: "Rating",
    company: "1273",
    image: "https://img.icons8.com/color/96/codechef.png",
  },
  {
    testimonial:
      "Achieved 5⭐ in Python on HackerRank. Strong proficiency in Python programming and problem solving.",
    name: "HackerRank",
    designation: "5⭐",
    company: "Python",
    image: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
  },
  {
    testimonial:
      "Active on GitHub contributing to open-source projects and building personal projects like the Phishing URL Detector.",
    name: "GitHub",
    designation: "Active",
    company: "Contributor",
    image: "https://img.icons8.com/fluency/96/github.png",
  },
];

const projects = [
  {
    name: "Phishing URL Detector",
    description:
      "Built during HackJKLU 5.0 pre-hackathon to detect malicious URLs. Implemented using Python with pattern matching and heuristic-based analysis to identify phishing attempts and protect users from online threats.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "green-text-gradient",
      },
      {
        name: "heuristics",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/PrimeKartik/PhishWall",
  },
  {
    name: "House Escape Game",
    description:
      "An interactive game developed during the Rajasthan Digifest 2026 Game Jam. Features immersive gameplay mechanics with house-themed exploration, built collaboratively within a limited timeframe as a team project.",
    tags: [
      {
        name: "game-dev",
        color: "blue-text-gradient",
      },
      {
        name: "digifest-2026",
        color: "green-text-gradient",
      },
      {
        name: "game-jam",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/PrimeKartik/HOUSE-ESCAPE-game",
  },
];

export { services, technologies, experiences, testimonials, projects };
