'use client';

import Image from 'next/image';
import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Global Packaging Logistics',
    category: 'Logistics & Export',
    desc: 'End-to-end corrugated packaging solutions designed for international shipping — air, sea, and road. Built to withstand the toughest supply chain conditions.',
    img: '/p_globe.png',
  },
  {
    id: 2,
    title: 'Corrugated Box Collection',
    category: 'Product Range',
    desc: 'Our full-spectrum corrugated box range — from compact mono-cartons to heavy-duty multi-ply boxes — crafted in every dimension and configuration your business needs.',
    img: '/p_boxes.png',
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="portfolio" style={{ borderTop: '1px solid #eaeaea' }}>
      <div className="container">
        <span className="text-label">Our Work</span>
        <h2 className="title-medium">Portfolio</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: hovered === item.id
                  ? '0 20px 60px rgba(0,0,0,0.15)'
                  : '0 4px 20px rgba(0,0,0,0.06)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                transform: hovered === item.id ? 'translateY(-4px)' : 'translateY(0)',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '420px', backgroundColor: '#f5f5f5' }}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    transform: hovered === item.id ? 'scale(1.04)' : 'scale(1)',
                  }}
                />
              </div>

              {/* Overlay caption */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '32px 28px 28px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)',
                  color: '#fff',
                  transition: 'opacity 0.3s ease',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    opacity: 0.75,
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  {item.category}
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#fff', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.6',
                    opacity: hovered === item.id ? 1 : 0,
                    maxHeight: hovered === item.id ? '80px' : '0',
                    overflow: 'hidden',
                    transition: 'opacity 0.3s ease, max-height 0.4s ease',
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
