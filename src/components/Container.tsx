import { splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";

const OuterContainer = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  const [local, rest] = splitProps(props, ["class", "ref", "children"]);

  return (
    <div ref={local.ref} class={`sm:px-8 ${local.class}`} {...rest}>
      <div class="mx-auto max-w-7xl lg:px-8">{local.children}</div>
    </div>
  );
};

const InnerContainer = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  const [local, rest] = splitProps(props, ["class", "ref", "children"]);

  return (
    <div
      ref={local.ref}
      class={`relative px-4 sm:px-8 lg:px-12 ${local.class}`}
      {...rest}
    >
      <div class="mx-auto max-w-2xl lg:max-w-5xl">{local.children}</div>
    </div>
  );
};

const Container = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  return (
    <OuterContainer {...props}>
      <InnerContainer>{props.children}</InnerContainer>
    </OuterContainer>
  );
};

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;

export default Container;
