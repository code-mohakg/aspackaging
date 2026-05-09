export default function Footer() {
  return (
    <footer style={{ padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ 
          fontSize: '24px', 
          fontFamily: 'Georgia, serif', 
          fontStyle: 'italic',
          fontWeight: 400, 
          color: '#000'
        }}>
          A. S. Packaging
        </div>
        <div style={{ fontSize: '12px', color: '#999' }}>
          © 2026 A.S. Packaging. All Rights Reserved. | GSTIN: 27ABTFA1392B1ZG
        </div>
      </div>
    </footer>
  );
}
