import type { blog } from "../../common/types";
import formatDate from "../../common/utils/formatDate";
import Card from "../../common/components/Card";

interface ArticleList {
  article: blog;
}

const ArticleList = (props: ArticleList) => {
  const article = props.article;

  return (
    <article class="md:grid md:grid-cols-4 md:items-baseline">
      <Card class="md:col-span-3">
        <Card.Title href={article.url}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          date-time={article.date}
          class="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.summary}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        date-time={article.date}
        class="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
};

export default ArticleList;
