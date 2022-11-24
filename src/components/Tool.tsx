import { splitProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import Card from "./Card";

interface Tool {
  href?: string;
  title: string;
  children: JSX.Element;
}

const Tool = (props: Tool) => {
  const [local, rest] = splitProps(props, ["children", "href", "title"]);

  return (
    <Card as="li">
      <Card.Title as="h3" href={local.href ? local.href : undefined}>
        {local.title}
      </Card.Title>
      <Card.Description>{local.children}</Card.Description>
    </Card>
  );
};

export default Tool;
