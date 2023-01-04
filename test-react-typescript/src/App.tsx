import React, { useEffect, useState } from "react";
import "./App.css";
import Detail from "./page/detail";
import NewsList from "./page/newsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "axios";

function App() {
  const [news, setNews] = useState([]);

  console.log(news);

  useEffect(() => {
    const fecthData = async () => {
      const api = await Axios(
        "https://newsapi.org/v2/everything?q=apple&from=2023-01-01&to=2023-01-01&sortBy=popularity&apiKey=36494d43e2904ab2a506fe312d2d6fc1"
      );

      console.log(api);

      setNews(api.data.articles);
    };
    fecthData();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<NewsList news={news} />} />

          <Route path="/detail/:title" element={<Detail news={news} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
