import { RiLogosLinkedinLine } from "solid-icons/ri";
import { RiLogosGithubLine } from "solid-icons/ri";
import { RiLogosInstagramLine } from "solid-icons/ri";
import { RiLogosTwitterLine } from "solid-icons/ri";
import { For } from "solid-js";

const socialLink = [
  {
    link: "https://twitter.com/henrytrianta",
    icon: RiLogosTwitterLine,
  },
  {
    link: "https://instagram.com/henrytrianta",
    icon: RiLogosInstagramLine,
  },
  {
    link: "https://github.com/henrytrianta",
    icon: RiLogosGithubLine,
  },
  {
    link: "https://linkedin.com/in/henrytrianta",
    icon: RiLogosLinkedinLine,
  },
];

const SocialIcon = () => {
  return (
    <For each={socialLink} fallback={<></>}>
      {(item) => {
        return (
          <a href={item.link} class="group -m-1 p-1" target="_blank">
            {item.icon({
              class:
                "h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300",
            })}
          </a>
        );
      }}
    </For>
  );
};

export default SocialIcon;
