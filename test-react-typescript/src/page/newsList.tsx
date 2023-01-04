import React from "react";
import { Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import "../App.css";

interface Props {
  news: {
    title: string;
    description: string;
  }[];
}

const NewsList: React.FC<Props> = ({ news }) => {
  const navigate = useNavigate();

  return (
    <div className="site-card-wrapper container">
      <Row gutter={16}>
        {news.map((item) => (
          <Col className="card" span={8}>
            <Card
              className="hover"
              onClick={() => navigate("/detail/" + item.title)}
              title={item.title}
              bordered={false}
            >
              {item.description}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewsList;
