import { splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";

const Prose = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <div class={`${local.class} prose dark:prose-invert`} {...rest}>
      {local.children}
    </div>
  );
};

export default Prose;
