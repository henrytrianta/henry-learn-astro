import { splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import Section from "./Section";

interface SectionTools {
  children: JSX.Element;
  title: string;
}

const SectionTools = (props: SectionTools) => {
  const [local, rest] = splitProps(props, ["children"]);
  return (
    <Section {...rest}>
      <ul role="list" class="space-y-16">
        {local.children}
      </ul>
    </Section>
  );
};

export default SectionTools;
