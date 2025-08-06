import React from 'react';

// Mock news data; replace with API fetch as needed
const MOCK_NEWS = [
  {
    title: 'Quantum Computing Breakthrough Announced',
    url: 'https://example.com/quantum-breakthrough',
    source: 'Quantum News',
    publishedAt: '2024-06-01',
    description: 'A major milestone in quantum computing was reached today...'
  },
  {
    title: 'New Quantum Algorithm Speeds Up Calculations',
    url: 'https://example.com/quantum-algorithm',
    source: 'Tech Daily',
    publishedAt: '2024-05-30',
    description: 'Researchers have developed a new quantum algorithm that...'
  },
  {
    title: 'Quantum Stocks Rally After Industry News',
    url: 'https://example.com/quantum-stocks',
    source: 'MarketWatch',
    publishedAt: '2024-05-28',
    description: 'Quantum technology stocks saw a surge in trading volume...'
  },
];

export default async function NewsPage() {
  // In real use, fetch from API here
  // const res = await fetch(...)
  // const news = await res.json()
  const news = MOCK_NEWS;

  return (
    <div>
      <h1>Quantum News Feed</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {news.map((article, idx) => (
          <a
            key={idx}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '1.5rem',
              border: '1.5px solid rgba(255, 255, 255, 0.3)',
              borderRadius: 10,
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              textDecoration: 'none',
              color: '#111',
              transition: 'all 0.3s ease',
            }}
          >
            <h2 style={{ margin: 0 }}>{article.title}</h2>
            <div style={{ fontSize: '0.95rem', color: '#555', marginBottom: 8 }}>
              {article.source} &middot; {article.publishedAt}
            </div>
            <p style={{ margin: 0 }}>{article.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
} 