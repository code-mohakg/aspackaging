export default function Capabilities() {
  const capabilities = [
    {
      category: "Printing Techniques",
      items: ["Offset Printing", "Flexographic Printing", "Digital Printing"]
    },
    {
      category: "Customization & Finishing",
      items: ["Matte / Gloss Lamination", "Spot UV & Embossing", "Luxury Foil Stamping"]
    },
    {
      category: "Applications",
      items: ["Food & Beverage", "Pharmaceuticals", "Garment Exports", "Retail & E-commerce"]
    }
  ];

  return (
    <section id="capabilities" style={{ borderTop: '1px solid #eaeaea' }}>
      <div className="container">
        <h2 className="title-medium">Technical Capabilities</h2>
        <div className="grid-3">
          {capabilities.map((cap, i) => (
            <div key={i} style={{ padding: '40px', border: '1px solid #eee', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#999', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {cap.category}
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {cap.items.map((item, index) => (
                  <li key={index} style={{ fontSize: '18px', marginBottom: '16px', color: '#111', fontWeight: 400 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
