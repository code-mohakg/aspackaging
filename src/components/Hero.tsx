import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <div className="container grid-2">
        <div>
          <h1 className="title-large">A.S. Packaging. <br />Professional Service.</h1>
          <p style={{ color: '#666', fontSize: '18px', marginBottom: '40px', maxWidth: '450px' }}>
            We provide high-end corrugated solutions for retail, e-commerce, and industrial sectors with a focus on durability and brand elegance.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#contact" className="btn">Work with us</a>
            <a href="#products" className="btn btn-outline">View Catalog</a>
          </div>
        </div>
        <div style={{ position: 'relative', height: '500px', backgroundColor: '#f5f5f5', borderRadius: '8px', overflow: 'hidden' }}>
          <Image 
            src="/hero.png" 
            alt="Product" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
