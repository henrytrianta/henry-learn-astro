import { RiBusinessLinksLine } from "solid-icons/ri";
import Card from "../common/components/Card";

const projects = [
  {
    name: "Planetaria",
    description:
      "Creating technology to empower civilians to explore space on their own terms.",
    link: { href: "http://planetaria.tech", label: "planetaria.tech" },
    //   logo: logoPlanetaria,
  },
  {
    name: "Animaginary",
    description:
      "High performance web animation library, hand-written in optimized WASM.",
    link: { href: "#", label: "github.com" },
    //   logo: logoAnimaginary,
  },
  {
    name: "HelioStream",
    description:
      "Real-time video streaming library, optimized for interstellar transmission.",
    link: { href: "#", label: "github.com" },
    //   logo: logoHelioStream,
  },
  {
    name: "cosmOS",
    description:
      "The operating system that powers our Planetaria space shuttles.",
    link: { href: "#", label: "github.com" },
    //   logo: logoCosmos,
  },
  {
    name: "OpenShuttle",
    description:
      "The schematics for the first rocket I designed that successfully made it to orbit.",
    link: { href: "#", label: "github.com" },
    //   logo: logoOpenShuttle,
  },
];

const Projects = () => {
  return (
    <ul
      role="list"
      class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <Card as="li">
          {/* <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={project.logo}
            alt=""
            class="h-8 w-8"
            unoptimized
          />
        </div> */}
          <h2 class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            <Card.Link href={project.link.href}>{project.name}</Card.Link>
          </h2>
          <Card.Description>{project.description}</Card.Description>
          <p class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
            <RiBusinessLinksLine class="h-6 w-6 flex-none" />
            <span class="ml-2">{project.link.label}</span>
          </p>
        </Card>
      ))}
    </ul>
  );
};

export default Projects;
