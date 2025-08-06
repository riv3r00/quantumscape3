"use client";
import React, { useState } from 'react';

const MOCK_STOCKS = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 192.32, changeDay: +1.23, changeWeek: +3.45, high: 195.00, low: 188.00, volume: 1200000, staffPick: true },
  { symbol: 'GOOG', name: 'Alphabet Inc.', price: 2834.12, changeDay: -12.45, changeWeek: +8.12, high: 2850.00, low: 2800.00, volume: 950000, staffPick: false },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 812.56, changeDay: +8.12, changeWeek: +15.23, high: 820.00, low: 790.00, volume: 2100000, staffPick: false },
  { symbol: 'QCOM', name: 'Qualcomm', price: 142.11, changeDay: +0.98, changeWeek: +2.11, high: 143.00, low: 140.00, volume: 800000, staffPick: false },
  { symbol: 'IBM', name: 'IBM', price: 134.22, changeDay: -0.44, changeWeek: -1.12, high: 136.00, low: 133.00, volume: 600000, staffPick: true },
  { symbol: 'NVDA', name: 'NVIDIA', price: 672.88, changeDay: +5.67, changeWeek: +12.34, high: 680.00, low: 660.00, volume: 2500000, staffPick: false },
  { symbol: 'MSFT', name: 'Microsoft', price: 332.45, changeDay: -2.11, changeWeek: +4.56, high: 335.00, low: 330.00, volume: 1800000, staffPick: false },
  { symbol: 'QNTM', name: 'QuantumScape', price: 12.34, changeDay: +0.56, changeWeek: +1.23, high: 13.00, low: 12.00, volume: 300000, staffPick: true },
];

const CATEGORIES = [
  { key: 'price', label: 'Price Change', options: [
    { key: 'changeDay', label: 'Day' },
    { key: 'changeWeek', label: 'Week' },
  ]},
  { key: 'value', label: 'Value', options: [
    { key: 'high', label: 'High-Low' },
    { key: 'low', label: 'Low-High' },
  ]},
  { key: 'popular', label: 'Most Popular', options: [
    { key: 'volume', label: 'By Volume' },
  ]},
  { key: 'pick', label: 'Daily/Staff Pick', options: [
    { key: 'staffPick', label: 'Staff Pick' },
  ]},
];

export default function StocksPage() {
  const [category, setCategory] = useState('price');
  const [option, setOption] = useState('changeDay');

  let filtered = [...MOCK_STOCKS];

  if (category === 'price') {
    // Only allow sorting by 'changeDay' or 'changeWeek'
    if (option === 'changeDay' || option === 'changeWeek') {
      filtered.sort((a, b) => b[option as 'changeDay' | 'changeWeek'] - a[option as 'changeDay' | 'changeWeek']);
    }
  } else if (category === 'value') {
    if (option === 'high') filtered.sort((a, b) => b.high - a.high);
    else filtered.sort((a, b) => a.low - b.low);
  } else if (category === 'popular') {
    filtered.sort((a, b) => b.volume - a.volume);
  } else if (category === 'pick') {
    filtered = filtered.filter(s => s.staffPick);
  }

  return (
    <div>
      <h1>Stocks</h1>
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: 24 }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            onClick={() => {
              setCategory(cat.key);
              setOption(cat.options[0].key);
            }}
            style={{
              padding: '0.5rem 1.2rem',
              borderRadius: 8,
              border: category === cat.key ? '2px solid #0071e3' : '1.5px solid rgba(255, 255, 255, 0.3)',
              background: category === cat.key 
                ? 'rgba(230, 240, 250, 0.8)' 
                : 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {cat.label}
          </button>
        ))}
        {CATEGORIES.find(cat => cat.key === category)?.options &&
          CATEGORIES.find(cat => cat.key === category)!.options.length > 1 && (
            <select
              value={option}
              onChange={e => setOption(e.target.value)}
              style={{ 
                marginLeft: 16, 
                padding: '0.5rem', 
                borderRadius: 6,
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
              }}
          >
            {CATEGORIES.find(cat => cat.key === category)?.options.map(opt => (
              <option key={opt.key} value={opt.key}>{opt.label}</option>
            ))}
          </select>
        )}
      </div>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        background: 'rgba(255, 255, 255, 0.1)', 
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        borderRadius: 10, 
        overflow: 'hidden', 
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}>
        <thead>
          <tr style={{ 
            background: 'rgba(245, 246, 250, 0.6)', 
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderBottom: '2px solid rgba(209, 213, 219, 0.5)' 
          }}>
            <th style={{ textAlign: 'left', padding: 12 }}>Symbol</th>
            <th style={{ textAlign: 'left', padding: 12 }}>Name</th>
            <th style={{ textAlign: 'right', padding: 12 }}>Price</th>
            <th style={{ textAlign: 'right', padding: 12 }}>Change (Day)</th>
            <th style={{ textAlign: 'right', padding: 12 }}>Change (Week)</th>
            <th style={{ textAlign: 'right', padding: 12 }}>High</th>
            <th style={{ textAlign: 'right', padding: 12 }}>Low</th>
            <th style={{ textAlign: 'right', padding: 12 }}>Volume</th>
            <th style={{ textAlign: 'center', padding: 12 }}>Staff Pick</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(stock => (
            <tr key={stock.symbol} style={{ 
              borderBottom: '1px solid rgba(238, 238, 238, 0.3)',
              transition: 'background 0.3s ease',
            }}>
              <td style={{ padding: 12, fontWeight: 700 }}>{stock.symbol}</td>
              <td style={{ padding: 12 }}>{stock.name}</td>
              <td style={{ padding: 12, textAlign: 'right' }}>${stock.price.toFixed(2)}</td>
              <td style={{ padding: 12, textAlign: 'right', color: stock.changeDay >= 0 ? '#0a0' : '#c00' }}>{stock.changeDay >= 0 ? '+' : ''}{stock.changeDay.toFixed(2)}</td>
              <td style={{ padding: 12, textAlign: 'right', color: stock.changeWeek >= 0 ? '#0a0' : '#c00' }}>{stock.changeWeek >= 0 ? '+' : ''}{stock.changeWeek.toFixed(2)}</td>
              <td style={{ padding: 12, textAlign: 'right' }}>${stock.high.toFixed(2)}</td>
              <td style={{ padding: 12, textAlign: 'right' }}>${stock.low.toFixed(2)}</td>
              <td style={{ padding: 12, textAlign: 'right' }}>{stock.volume.toLocaleString()}</td>
              <td style={{ padding: 12, textAlign: 'center' }}>{stock.staffPick ? '⭐️' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 