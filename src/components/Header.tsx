import {
  children,
  createEffect,
  createSignal,
  JSX,
  Show,
  splitProps,
} from "solid-js";
import Container from "./Container";
import { VsChevronDown } from "solid-icons/vs";
import { VsClose } from "solid-icons/vs";
import { Transition } from "solid-transition-group";

function clamp(number: number, a: number, b: number) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

function AvatarContainer(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <div
      class={`
        ${local.class || ""}
        h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10
      `}
      {...rest}
    />
  );
}

interface NavItem {
  href: string;
  children: JSX.Element;
  pathname?: string;
}

function NavItem(props: NavItem) {
  let isActive = props.pathname === props.href;

  return (
    <li>
      <a
        href={props.href}
        class={`
          relative block px-3 py-2 transition
          ${
            isActive
              ? "text-teal-500 dark:text-teal-400"
              : "hover:text-teal-500 dark:hover:text-teal-400"
          }
        `}
      >
        {children(() => props.children)}
        <Show when={isActive}>
          <span class="absolute h-px inset-x-1 -bottom-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        </Show>
      </a>
    </li>
  );
}

interface DesktopNavigation extends JSX.HTMLAttributes<HTMLElement> {
  // why i put this? it is quite better to pass the props from the server instead of creating a signal, minimize js
  pathname: string;
}

function DesktopNavigation(props: DesktopNavigation) {
  const [local, rest] = splitProps(props, ["pathname"]);

  return (
    <nav {...rest}>
      <ul class="flex px-3 text-sm font-medium rounded-full shadow-lg bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem pathname={local.pathname} href="/about">
          About
        </NavItem>
        <NavItem pathname={local.pathname} href="/articles">
          Articles
        </NavItem>
        <NavItem pathname={local.pathname} href="/projects">
          Projects
        </NavItem>
        <NavItem pathname={local.pathname} href="/speaking">
          Speaking
        </NavItem>
        <NavItem pathname={local.pathname} href="/uses">
          Uses
        </NavItem>
      </ul>
    </nav>
  );
}

function MobileNavItem(props: { href: string; children: JSX.Element }) {
  return (
    <li>
      <a href={props.href} class="block py-2">
        {props.children}
      </a>
    </li>
  );
}

function MobileNavigation(props: any) {
  const [isShowing, setIsShowing] = createSignal(false);

  return (
    <div {...props}>
      <button
        onClick={() => {
          setIsShowing(!isShowing());
        }}
        class="flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-lg group bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
      >
        Menu
        <VsChevronDown class="w-2 h-auto ml-3 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </button>
      <Transition
        enterClass="opacity-0"
        enterToClass="opacity-100"
        exitClass="opacity-100"
        exitToClass="opacity-0"
      >
        <Show when={isShowing()}>
          <div
            onClick={() => {
              setIsShowing(!isShowing());
            }}
            class="duration-1000 ease-all fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"
          />
        </Show>
      </Transition>

      <Transition
        // enter="duration-150 ease-out"
        enterClass="opacity-0 scale-95"
        enterToClass="opacity-100 scale-100"
        // leave="duration-150 ease-in"
        exitClass="opacity-100 scale-100"
        exitToClass="opacity-0 scale-95"
      >
        <Show when={isShowing()}>
          <div class="duration-150 ease-all fixed z-50 p-8 origin-top bg-white inset-x-4 top-8 rounded-3xl ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
            <div class="flex flex-row-reverse items-center justify-between">
              <button
                aria-label="Close menu"
                class="p-1 -m-1"
                onClick={() => {
                  setIsShowing(!isShowing());
                }}
              >
                <VsClose class="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
              </button>
              <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav class="mt-6">
              <ul class="-my-2 text-base divide-y divide-zinc-100 text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/articles">Articles</MobileNavItem>
                <MobileNavItem href="/projects">Projects</MobileNavItem>
                <MobileNavItem href="/speaking">Speaking</MobileNavItem>
                <MobileNavItem href="/uses">Uses</MobileNavItem>
              </ul>
            </nav>
          </div>
        </Show>
      </Transition>
    </div>
  );
}

interface Avatar extends JSX.HTMLAttributes<HTMLAnchorElement> {
  large: boolean;
}

function Avatar(props: Avatar) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  const child = children(() => local.children);
  return (
    <a
      href="/"
      aria-label="Home"
      class={`${local.class || ""} pointer-events-auto`}
      {...rest}
    >
      {child}
    </a>
  );
}

interface Header {
  pathname: string;
  image?: JSX.Element;
}

const Header = (props: Header) => {
  let isHomePage = props.pathname === "/";

  let headerRef: HTMLDivElement | undefined = undefined;
  let avatarRef: HTMLDivElement | undefined = undefined;
  let isInitial: boolean = true;
  let top = 0;
  let height = 0;

  createEffect(() => {
    let downDelay = avatarRef?.offsetTop ?? 0;
    let upDelay = 64;

    function setProperty(property: string, value: string) {
      document.documentElement.style.setProperty(property, value);
    }

    function updateHeaderStyles() {
      let rect = headerRef?.getBoundingClientRect();
      // assign the value to the top, so it will not tracked
      top = rect?.top || 0;
      height = rect?.height || 0;
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      );

      if (isInitial) {
        setProperty("--header-position", "sticky");
      }

      setProperty("--content-offset", `${downDelay}px`);

      if (isInitial || scrollY < downDelay) {
        setProperty("--header-height", `${downDelay + height}px`);
        setProperty("--header-mb", `${-downDelay}px`);
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay);
        setProperty("--header-height", `${offset}px`);
        setProperty("--header-mb", `${height - offset}px`);
      } else if (top === 0) {
        setProperty("--header-height", `${scrollY + height}px`);
        setProperty("--header-mb", `${-scrollY}px`);
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return;
      }

      let fromScale = 1;
      let toScale = 36 / 64;
      let fromX = 0;
      let toX = 2 / 16;

      let scrollY = downDelay - window.scrollY;

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
      scale = clamp(scale, fromScale, toScale);

      let x = (scrollY * (fromX - toX)) / downDelay + toX;
      x = clamp(x, fromX, toX);

      setProperty(
        "--avatar-image-transform",
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      );

      let borderScale = 1 / (toScale / scale);
      let borderX = (-toX + x) * borderScale;
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

      setProperty("--avatar-border-transform", borderTransform);
      setProperty("--avatar-border-opacity", scale === toScale ? `1` : `0`);
    }

    function updateStyles() {
      updateHeaderStyles();
      updateAvatarStyles();
      isInitial = false;
    }

    updateStyles();
    window.addEventListener("scroll", updateStyles, {
      passive: true,
    });
    window.addEventListener("resize", updateStyles);
  });

  return (
    <>
      <header
        class="relative z-50 flex flex-col pointer-events-none"
        style={{
          height: "var(--header-height)",
          "margin-bottom": "var(--header-mb)",
        }}
      >
        <Show when={isHomePage}>
          <div
            ref={avatarRef}
            class="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
          />
          <Container
            class="top-0 order-last pt-3 -mb-3"
            style={{ position: "var(--header-position)" as "sticky" }}
          >
            <div class="relative">
              <AvatarContainer
                class="absolute left-0 transition-opacity origin-left top-3"
                style={{
                  opacity: "var(--avatar-border-opacity, 0)",
                  transform: "var(--avatar-border-transform)",
                }}
              />
              <Avatar
                large
                class="block w-16 h-16 origin-left"
                style={{ transform: "var(--avatar-image-transform)" }}
              >
                {props.image}
              </Avatar>
            </div>
          </Container>
        </Show>
        <div
          ref={headerRef}
          class="top-0 z-10 pt-6"
          style={{ position: "var(--header-position)" as "sticky" }}
        >
          <Container>
            <div class="relative flex gap-4">
              <div class="flex flex-1">
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar large={false}>{props.image}</Avatar>
                  </AvatarContainer>
                )}
              </div>
              <div class="flex justify-end flex-1 md:justify-center">
                <MobileNavigation class="pointer-events-auto md:hidden" />
                <DesktopNavigation
                  pathname={props.pathname}
                  class="hidden pointer-events-auto md:block"
                />
              </div>
              <div class="flex justify-end md:flex-1">
                <div class="pointer-events-auto">{/* <ModeToggle /> */}</div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: "var(--content-offset)" }} />}
    </>
  );
};

export default Header;
