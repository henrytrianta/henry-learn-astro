import type { blog } from "../types";
import formatDate from "../utils/formatDate";
import Card from "./Card";

interface Article {
  article: blog;
}

const Article = (props: Article) => {
  const article = props.article;

  return (
    <Card as="article">
      <Card.Title href={article.url}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" date-time={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.summary}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
};

export default Article;
