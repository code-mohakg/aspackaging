export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div className="grid-2">
          <div>
            <h2 className="title-medium" style={{ marginBottom: '24px' }}>A Legacy of Quality</h2>
            <p style={{ color: '#444', fontSize: '18px' }}>
              Based in Vasai, Mumbai, A.S. Packaging is one of the largest independent corrugated units in the region. We focus on providing high-protection packaging that maintains your brand's integrity.
            </p>
          </div>
          <div style={{ paddingLeft: '40px', borderLeft: '1px solid #ddd' }}>
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 600, color: '#999', marginBottom: '8px', textTransform: 'uppercase' }}>Facility</h4>
              <p style={{ fontSize: '16px' }}>Advanced 4-color printing and precision die-cutting in-house.</p>
            </div>
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 600, color: '#999', marginBottom: '8px', textTransform: 'uppercase' }}>Logistics</h4>
              <p style={{ fontSize: '16px' }}>Double-wall protection tested for 12-14kg loads.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 600, color: '#999', marginBottom: '8px', textTransform: 'uppercase' }}>GSTIN</h4>
              <p style={{ fontSize: '16px', fontFamily: 'monospace' }}>27ABTFA1392B1ZG</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
