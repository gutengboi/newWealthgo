import React from "react";
import "./index.css";
const News = () => {
  return (
    <div className="news">
      <div className="news-container">
        <div className="news-header">
          <h2 className="title">Latest News</h2>
        </div>
        <div className="news-iframe">
          <iframe
            width="100%"
            scrolling="no"
            allowtransparency="true"
            frameborder="0"
            src="https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&amp;font_family=sans&amp;header_bg_color=5ba601&amp;header_text_color=fff&amp;link_color=5ba601&amp;news_feed=recent&amp;posts_limit=7&amp;text_color=333333&amp;title=Crypto%20News"
            height="450px"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default News;
