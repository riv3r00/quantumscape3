"use client";
import React, { useEffect, useState } from 'react';

// Mock data; replace with API fetch as needed
const MOCK_STOCKS = [
  { symbol: 'AAPL', price: 192.32, change: +1.23 },
  { symbol: 'GOOG', price: 2834.12, change: -12.45 },
  { symbol: 'TSLA', price: 812.56, change: +8.12 },
  { symbol: 'QCOM', price: 142.11, change: +0.98 },
  { symbol: 'IBM', price: 134.22, change: -0.44 },
  { symbol: 'NVDA', price: 672.88, change: +5.67 },
  { symbol: 'MSFT', price: 332.45, change: -2.11 },
  { symbol: 'QNTM', price: 12.34, change: +0.56 },
];

export default function StockTicker() {
  const [stocks, setStocks] = useState(MOCK_STOCKS);

  // In real use, fetch from API here
  // useEffect(() => { ... }, []);

  return (
    <div className="ticker-banner">
      <div className="ticker-content">
        {stocks.map((stock, idx) => (
          <span key={stock.symbol} style={{ marginRight: 32 }}>
            <b>{stock.symbol}</b> ${stock.price.toFixed(2)}{' '}
            <span style={{ color: stock.change >= 0 ? '#0f0' : '#f44' }}>
              {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
} 