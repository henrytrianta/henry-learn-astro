import { JSX, splitProps } from "solid-js";

interface Section {
  title: string;
  children: JSX.Element;
}

const Section = (props: Section) => {
  const [local] = splitProps(props, ["title", "children"]);

  return (
    <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {local.title}
        </h2>
        <div class="md:col-span-3">{local.children}</div>
      </div>
    </section>
  );
};

export default Section;
