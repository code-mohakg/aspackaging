'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Corrugated Boxes',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '919619531152';
    const text = `*New Inquiry from A.S. Packaging Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Type:* ${formData.type}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="title-medium">Get in Touch</h2>
        <div className="grid-2">
          <div>
            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ fontSize: '12px', color: '#999', marginBottom: '8px', textTransform: 'uppercase' }}>Phone</h4>
              <p style={{ fontSize: '24px', fontWeight: 500 }}>+91 96195 31152</p>
            </div>
            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ fontSize: '12px', color: '#999', marginBottom: '8px', textTransform: 'uppercase' }}>WhatsApp</h4>
              <a 
                href="https://api.whatsapp.com/send?phone=+919619531152&text=Hello%20A.S.%20Packaging" 
                style={{ fontSize: '18px', color: '#000', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
                </svg>
                Message Us
              </a>
            </div>
            <div>
              <h4 style={{ fontSize: '12px', color: '#999', marginBottom: '8px', textTransform: 'uppercase' }}>Address</h4>
              <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.5' }}>
                S.No. 102 Near New T/F, Manichapada, Vasai Phata, <br />
                Vasai East Taluka, Vasai, District Palghar
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '24px' }}>
            <input 
              type="text" 
              placeholder="Name" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ padding: '16px', border: '1px solid #eee', borderRadius: '4px', fontSize: '14px', outline: 'none' }} 
            />
            <input 
              type="email" 
              placeholder="Email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ padding: '16px', border: '1px solid #eee', borderRadius: '4px', fontSize: '14px', outline: 'none' }} 
            />
            <select 
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              style={{ padding: '16px', border: '1px solid #eee', borderRadius: '4px', fontSize: '14px', outline: 'none' }}
            >
              <option>Corrugated Boxes</option>
              <option>Cake/Bakery Packaging</option>
              <option>Custom Retail Solutions</option>
              <option>Industrial Heavy Duty</option>
            </select>
            <textarea 
              placeholder="Tell us about your project" 
              rows={4} 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ padding: '16px', border: '1px solid #eee', borderRadius: '4px', fontSize: '14px', outline: 'none', resize: 'none' }}
            ></textarea>
            <button className="btn" type="submit">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
}
