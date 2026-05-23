import Image from 'next/image';

const featuredProducts = [
  {
    title: 'Industrial Shipping',
    desc: 'Heavy duty 3 to 9-ply corrugated boxes engineered for high-protection transport.',
    img: '/shipping-box.png',
  },
  {
    title: 'Food & Confectionery',
    desc: 'Premium windowed cake boxes and multi-cavity sweet packaging with food-grade board.',
    img: '/cake-box.png',
  },
  {
    title: 'Custom Retail Display',
    desc: 'Duplex and mono-carton boxes with high-end offset printing and luxury finishes.',
    img: '/mithai-box.png',
  }
];

const fullRange = [
  "Corrugated Boxes (3, 5, 7, 9 Ply)",
  "Printed Corrugated Boxes",
  "Duplex Printed / Plain Boxes",
  "Mono Carton Boxes",
  "Corrugated Sheets & Rolls",
  "Duplex Printed Sheets",
  "Gift & Specialty Boxes",
  "Cosmetic Packaging Boxes",
  "Fruit & Vegetable Packaging",
  "Die-Cut Packaging Solutions"
];

export default function Products() {
  return (
    <section id="products" style={{ borderTop: '1px solid #eaeaea' }}>
      <div className="container">
        <h2 className="title-medium">Selected Solutions</h2>
        <div className="grid-3" style={{ marginBottom: '80px' }}>
          {featuredProducts.map((p, i) => (
            <div key={i}>
              <div style={{ position: 'relative', height: '350px', marginBottom: '24px', backgroundColor: '#f9f9f9', borderRadius: '4px', overflow: 'hidden' }}>
                <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>{p.title}</h3>
              <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ padding: '60px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '32px', fontWeight: 500 }}>Comprehensive Product Range</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
            {fullRange.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: '#000', borderRadius: '50%' }}></div>
                <span style={{ fontSize: '15px', color: '#444' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
