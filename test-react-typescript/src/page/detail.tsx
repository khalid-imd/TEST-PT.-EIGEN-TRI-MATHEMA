import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";

interface Props {
  news: {
    title: string;
    author: string;
    description: string;
    url: string;
    urlToImage: string;
    content: string;
  }[];
}

const Detail: React.FC<Props> = ({ news }) => {
  const { title } = useParams();
  const article = news.find((article) => article.title === title);

  return (
    <div className="container">
      <div>
        <h5 className="source">Source</h5>
      </div>
      <div>
        <h1 className="title">{article?.title}</h1>
        <h3 className="author">author : {article?.author}</h3>
      </div>
      <div>
        <div>
          <p className="content">{article?.description}</p>
        </div>
        <div>
          <img
            src={article?.urlToImage}
            alt="image not found"
            className="image"
          />
          <p className="image-source">{article?.url}</p>
        </div>
        <div>
          <p className="content">{article?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
