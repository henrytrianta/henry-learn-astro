import { splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import Container from "../common/components/Container";

interface LayoutSimple {
  title: string;
  intro: string;
  children?: JSX.Element;
}

const LayoutSimple = (props: LayoutSimple) => {
  const [local, rest] = splitProps(props, ["children", "intro", "title"]);
  return (
    <Container class="mt-16 sm:mt-32">
      <header class="max-w-2xl">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {local.title}
        </h1>
        <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {local.intro}
        </p>
      </header>
      <div class="mt-16 sm:mt-20">{local.children}</div>
    </Container>
  );
};

export default LayoutSimple;
