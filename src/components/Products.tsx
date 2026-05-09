import Image from 'next/image';

const products = [
  {
    title: 'Industrial Shipping',
    desc: '3 to 9-ply corrugated strength.',
    img: '/shipping-box.png',
  },
  {
    title: 'Bakery & Confectionery',
    desc: 'Custom windowed designs.',
    img: '/cake-box.png',
  },
  {
    title: 'Premium Retail',
    desc: 'Multicolor and foil finishes.',
    img: '/mithai-box.png',
  }
];

export default function Products() {
  return (
    <section id="products" style={{ borderTop: '1px solid #eaeaea' }}>
      <div className="container">
        <h2 className="title-medium">Selected Solutions</h2>
        <div className="grid-3">
          {products.map((p, i) => (
            <div key={i}>
              <div style={{ position: 'relative', height: '350px', marginBottom: '24px', backgroundColor: '#f9f9f9', borderRadius: '4px', overflow: 'hidden' }}>
                <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>{p.title}</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
