import React, { useEffect, useState }  from "react";
import "./NewsSection.css";

const NewsSection = () => {
    // Sample news data (Replace with API data later)
    const [newsArticles, setNewsArticles] = useState<{ id: number; title: string; description: string, link:string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Replace this with your actual API URL
        const LATEST_NEWS_URL = "https://footballapi.pulselive.com/content/PremierLeague/text/EN/?sort=timestamp%20desc&limit=10&offset=0&tagNames=News&fullObjectResponse=true";

        const fetchNews = async () => {
            try {
                const response = await fetch(LATEST_NEWS_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch news");
                }
                const data = await response.json();

                // Map through the content to match { id, title }
                const articles = data.content.map((item: any) => ({
                    id: item.id,
                    title: item.title || "Untitled",
                    description: item.description,
                    link: 'https://www.premierleague.com/news/'+item.id,
                }));

                setNewsArticles(articles);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="news-section">
            <h2>Latest EPL News</h2>
            <div className="news-grid">
                {newsArticles.map((article) => (
                    <div key={article.id} className="news-card">
                        <h4>{article.title}</h4>
                        <p>{article.description}</p>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                            Click to read more...
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsSection;
