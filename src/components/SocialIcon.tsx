import { RiLogosLinkedinLine } from "solid-icons/ri";
import { RiLogosGithubLine } from "solid-icons/ri";
import { RiLogosInstagramLine } from "solid-icons/ri";
import { RiLogosTwitterLine } from "solid-icons/ri";
import { For } from "solid-js";

const socialLink = [
  {
    link: "",
    icon: RiLogosTwitterLine,
  },
  {
    link: "",
    icon: RiLogosInstagramLine,
  },
  {
    link: "",
    icon: RiLogosGithubLine,
  },
  {
    link: "",
    icon: RiLogosLinkedinLine,
  },
];

const SocialIcon = () => {
  return (
    <For each={socialLink} fallback={<></>}>
      {(item) => {
        return (
          <a href={item.link} class="group -m-1 p-1">
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
