import React, { useState, useEffect } from "react";

const PsychologyArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const psychologyArticles = [
        {
          id: 1,
          title:
            "Understanding Cognitive Behavioral TherapyHow the 3-3-3 Rule for Anxiety Can Calm Your Mind",
          content:
            "This simple and effective technique can help you head off a thought spiralerapy...",
          image:
            "https://www.verywellmind.com/thmb/eDa7rXgO7si8hxRaYRCMsKWnsl4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VWM-3-3-anxiety-A-55d1463731c94e33acb4ca22f5762d62.jpg",
          url: "https://www.verywellmind.com/3-3-3-rule-for-anxiety-8660964",
        },
        {
          id: 2,
          title: "5 Reasons Emotions Are Important",
          content: "You've got to feel your feelings",
          image:
            "https://www.verywellmind.com/thmb/MPc3p2y52JVkLV4Ft7dwnLdrrC0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/525848837-56a795995f9b58b7d0ebec21.jpg",
          url: "https://www.verywellmind.com/the-purpose-of-emotions-2795181",
        },
        {
          id: 3,
          title: "What Meditating Every Day Does to Your Brain",
          content: "Meditation can have profound effects on your brain...",
          image:
            "https://www.verywellmind.com/thmb/ntUDnHzu_bH9MlaY6etnpF6y0ng=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VWM-meditation-brain-getty-B-ceebfcef9b5e49a68008f30e4623843f.jpg",
          url: "https://www.verywellmind.com/what-meditating-every-day-does-to-your-brain-8656065",
        },
        // Add more articles here
      ];
      setArticles(psychologyArticles);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Psychology Articles</h1>
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} style={{ cursor: "pointer" }}>
            <a
              href={article.url}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={article.image}
                alt={article.title}
                style={{ width: "100%", height: "auto" }}
              />
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PsychologyArticles;
