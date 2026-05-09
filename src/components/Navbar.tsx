import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Link href="/" style={{ 
          fontSize: '24px', 
          fontFamily: 'Georgia, serif', 
          fontStyle: 'italic',
          fontWeight: 400, 
          color: '#000'
        }}>
          A. S. Packaging
        </Link>
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px' }}>
          <Link href="#products">Products</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
