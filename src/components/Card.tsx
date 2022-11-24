import { splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import { Dynamic } from "solid-js/web";
import { VsChevronRight } from "solid-icons/vs";

interface Card extends JSX.HTMLAttributes<HTMLElement> {
  as?: string;
}

interface CardTitle extends Card {
  href?: string;
}

interface CardEyebrow extends Card {
  decorate?: boolean;
}

const Card = (props: Card) => {
  const [local, rest] = splitProps(props, ["as", "class", "children"]);

  return (
    <Dynamic
      component={local.as || "div"}
      class={`${local.class || ""} group relative flex flex-col items-start`}
      {...rest}
    >
      {local.children}
    </Dynamic>
  );
};

Card.Link = (props: JSX.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const [local, rest] = splitProps(props, ["children"]);

  return (
    <>
      <div class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <a {...rest}>
        <span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span class="relative z-10">{local.children}</span>
      </a>
    </>
  );
};

Card.Title = (props: CardTitle) => {
  const [local] = splitProps(props, ["as", "href", "children"]);

  return (
    <Dynamic
      component={local.as || "h2"}
      class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
    >
      {local.href ? (
        <Card.Link href={local.href}>{local.children}</Card.Link>
      ) : (
        local.children
      )}
    </Dynamic>
  );
};

Card.Description = (props: JSX.HTMLAttributes<HTMLElement>) => {
  const [local] = splitProps(props, ["children"]);

  return (
    <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {local.children}
    </p>
  );
};

Card.Cta = function CardCta(props: JSX.HTMLAttributes<HTMLElement>) {
  const [local] = splitProps(props, ["children"]);

  return (
    <div
      aria-hidden="true"
      class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {local.children}
      <VsChevronRight class="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

Card.Eyebrow = (props: CardEyebrow) => {
  const [local, rest] = splitProps(props, [
    "as",
    "class",
    "children",
    "decorate",
  ]);

  return (
    <Dynamic
      component={local.as || "p"}
      class={`
          relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 
          ${local.class || ""} 
          ${local.decorate && "pl-3.5"}
      `}
      {...rest}
    >
      {local.decorate && (
        <span
          class="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {local.children}
    </Dynamic>
  );
};

export default Card;
