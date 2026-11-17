import React from 'react';
import SecurityFooter from '../components/SecurityFooter';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      
      {/* هدر و برندینگ */}
      <div>
        <div style={{ borderBottom: '1px solid #262626', paddingBottom: '15px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '4px 12px', borderRadius: '20px', fontSize: '11px' }}>
              استارتاپ فناورانه رویال فام | مدیریت: امیر سام یعقوبی
            </span>
            <h1 style={{ fontSize: '24px', fontWeight: '900', background: 'linear-gradient(to right, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '8px' }}>
              InstaAdmin AI - Enterprise
            </h1>
            <p style={{ fontSize: '12px', color: '#a3a3a3', margin: '4px 0 0 0' }}>
              سیستم جامع تحلیل سئو (۱۰,۰۰۰ کلمه کلیدی)، رقبا و سیستم‌های امنیتی DevOps
            </p>
          </div>
          <div style={{ backgroundColor: '#171717', border: '1px solid #262626', padding: '6px 12px', borderRadius: '8px', fontSize: '11px', color: '#10b981', fontFamily: 'monospace' }}>
            Port: 5030 [Stable]
          </div>
        </div>

        {/* کارت‌های آماری */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#121212', border: '1px solid #262626', padding: '15px', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', color: '#a3a3a3' }}>کلمات کلیدی فعال</div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#f59e0b', marginTop: '5px' }}>۱۰,۰۰۰ کلیدواژه</div>
            <div style={{ fontSize: '10px', color: '#10b981', marginTop: '4px' }}>ایندکس روزانه و خودکار</div>
          </div>
          <div style={{ backgroundColor: '#121212', border: '1px solid #262626', padding: '15px', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', color: '#a3a3a3' }}>پوشش رقبا</div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#3b82f6', marginTop: '5px' }}>۳۱ استان / ۲۲ منطقه</div>
            <div style={{ fontSize: '10px', color: '#a3a3a3', marginTop: '4px' }}>بنچمارک و سئو محلی</div>
          </div>
          <div style={{ backgroundColor: '#121212', border: '1px solid #262626', padding: '15px', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', color: '#a3a3a3' }}>درگاه پرداخت امن</div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#10b981', marginTop: '5px' }}>کارت به کارت بانک ملی</div>
            <div style={{ fontSize: '10px', color: '#a3a3a3', marginTop: '4px' }}>تایید خودکار فیش (واتساپ/بله)</div>
          </div>
        </div>

        {/* فرم اصلی */}
        <div style={{ backgroundColor: '#121212', border: '1px solid #262626', padding: '20px', borderRadius: '16px', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#e5e5e5', marginBottom: '15px', borderBottom: '1px solid #262626', paddingBottom: '8px' }}>
            شروع تحلیل هوشمند و ردیابی کلمات
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '11px', color: '#a3a3a3', display: 'block', marginBottom: '5px' }}>آدرس وب‌سایت یا پیج اینستاگرام</label>
              <input 
                type="text" 
                placeholder="https://example.com" 
                style={{ width: '100%', backgroundColor: '#050505', border: '1px solid #262626', borderRadius: '10px', padding: '12px', fontSize: '13px', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <button style={{ width: '100%', background: 'linear-gradient(to right, #f59e0b, #d97706)', color: '#0a0a0a', fontWeight: 'bold', padding: '12px', borderRadius: '10px', fontSize: '13px', border: 'none', cursor: 'pointer' }}>
              اجرای تحلیل جامع + نمودار + ۵ رقیب برتر
            </button>
          </div>
        </div>

        {/* بخش امنیت و رمزنگاری */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: 'rgba(18, 18, 18, 0.6)', border: '1px solid #262626', padding: '15px', borderRadius: '12px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#f59e0b', margin: '0 0 5px 0' }}>🛡️ رمزنگاری لبه (Edge Encryption)</h4>
            <p style={{ fontSize: '11px', color: '#a3a3a3', margin: '0' }}>مجهز به رمزنگاری نامتقارن و لبه جهت جلوگیری کامل از شنود و نفوذ.</p>
          </div>
          <div style={{ backgroundColor: 'rgba(18, 18, 18, 0.6)', border: '1px solid #262626', padding: '15px', borderRadius: '12px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#f59e0b', margin: '0 0 5px 0' }}>🔒 حفاظت ضد مهندسی معکوس</h4>
            <p style={{ fontSize: '11px', color: '#a3a3a3', margin: '0' }}>کدهای فرانت‌اند و بک‌اند کاملاً مبهم‌سازی‌شده و غیرقابل شناسایی.</p>
          </div>
        </div>
      </div>

      {/* فوتر امنیتی و قانونی */}
      <SecurityFooter />
    </div>
  );
}
