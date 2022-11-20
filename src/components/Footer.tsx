import type { JSX } from "solid-js/jsx-runtime";
import Container from "./Container";

interface NavLink {
  href: string;
  children: JSX.Element;
}

const NavLink = (props: NavLink) => {
  return (
    <a
      href={props.href}
      class="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {props.children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer class="mt-32">
      <Container.Outer>
        <div class="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
          <Container.Inner>
            <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/speaking">Speaking</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <p class="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Spencer Sharp. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
};

export default Footer;
