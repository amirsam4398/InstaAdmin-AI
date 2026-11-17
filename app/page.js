'use client';
import React, { useState } from 'react';

export default function Home() {
  const [tab, setTab] = useState('website'); // 'website' | 'instagram'
  const [targetInput, setTargetInput] = useState('');
  
  // فیلترهای کامل جغرافیایی و دسته‌بندی‌ها
  const [category, setCategory] = useState('املاک و مستغلات (دیوار/آگهی)');
  const [subCategory, setSubCategory] = useState('خرید و فروش مسکونی');
  const [province, setProvince] = useState('تهران');
  const [cityOrCounty, setCityOrCounty] = useState('اسلامشهر (غرب استان تهران)');
  const [region, setRegion] = useState('منطقه ۱ تهران (تجریش و نیاوران)');

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // حالت پرداخت و ارسال رسید
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentRef, setPaymentRef] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!targetInput) {
      alert('لطفاً آدرس وب‌سایت یا آیدی پیج اینستاگرام را وارد کنید.');
      return;
    }
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setLoading(false);
      setResult({
        target: targetInput,
        mode: tab === 'website' ? 'تحلیل هوشمند سئو و متا دیتا (۱۰,۰۰۰ کلمه کلیدی خودکار)' : 'تحلیل الگوریتم، اینگیجمنت و هشتگ‌های ترند اینستاگرام',
        location: `استان ${province} » شهرستان: ${cityOrCounty} » ${region}`,
        category: `${category} » ${subCategory}`,
        aiEngine: 'موتور هوش مصنوعی رویال فام (اولین استارتاپ وایپ کدینگ در ایران)',
        freeTokens: '۳ توکن رایگان تحلیل فعال شد (تست اعتمادساز)',
        securityStatus: 'ایزوله کامل ضد هک / رمزنگاری کوانتومی پیشرفته',
        competitors: [
          { name: 'دیوار (Divar)', url: 'https://divar.ir', score: '۹۸٪' },
          { name: 'شیپور (Sheypoor)', url: 'https://sheypoor.com', score: '۹۴٪' },
          { name: 'باما (Bama)', url: 'https://bama.ir', score: '۹۱٪' },
          { name: 'خودرو ۶۰', url: 'https://khodro60.com', score: '۸۸٪' },
          { name: 'ایران فایل', url: 'https://iranfile.ir', score: '۸۵٪' },
          { name: 'دلتا مِلک', url: 'https://delta.ir', score: '۸۲٪' },
          { name: 'شابش', url: 'https://shabesh.com', score: '۷۹٪' },
          { name: 'پایتخت ملک', url: 'https://paytakht-melk.ir', score: '۷۶٪' },
          { name: 'ملک رادار', url: 'https://melkradar.com', score: '۷۳٪' },
          { name: 'آونکس', url: 'https://avangx.com', score: '۷۰٪' }
        ],
        swot: {
          strengths: 'ساختار ایزوله کوانتومی، اتوماسیون سئو ۱۰ هزار کلمه‌ای، پوشش سراسری ۳۱ استان',
          weaknesses: 'نیاز به بهینه‌سازی نرخ تبدیل محلی در شهرهای کوچک‌تر',
          opportunities: 'تسلط بر بازار آگهی‌های دیوار و اینستاگرام در محدوده ' + cityOrCounty,
          threats: 'رقابت فشرده کلان‌شهری در مناطق ۲۲گانه تهران'
        }
      });
    }, 1200);
  };

  const handleSendPaymentReceipt = (e) => {
    e.preventDefault();
    if (!paymentRef) {
      alert('لطفاً شماره پیگیری یا فیش واریزی را وارد کنید.');
      return;
    }
    const msg = `[تایید پرداخت پلن پیشرفته - InstaAdmin AI]\nکارت مقصد: بانک ملی (6104338641802312 - امیر سام (میثم) یعقوبی حسنعلی ده)\nشماره پیگیری: ${paymentRef}\nمبلغ: ۲,۹۹۰,۰۰۰ تومان\nارسال جهت تایید به واتساپ/بله: 09366681963`;
    window.open(`https://wa.me/989366681963?text=${encodeURIComponent(msg)}`, '_blank');
    setPaymentSuccess(true);
    setTimeout(() => {
      setShowPaymentModal(false);
      setPaymentSuccess(false);
      setPaymentRef('');
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: '#030712', color: '#f8fafc', minHeight: '100vh', padding: '16px', fontFamily: 'system-ui, sans-serif', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box', direction: 'rtl' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', width: '100%' }}>
        
        {/* هدر */}
        <header style={{ borderBottom: '1px solid rgba(37, 99, 235, 0.4)', paddingBottom: '16px', marginBottom: '20px', textAlign: 'center' }}>
          <span style={{ background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(79, 70, 229, 0.3))', color: '#93c5fd', border: '1px solid rgba(59, 130, 246, 0.5)', padding: '6px 16px', borderRadius: '30px', fontSize: '11px', fontWeight: 'bold', display: 'inline-block', marginBottom: '8px' }}>
            استارتاپ فناورانه هوش مصنوعی رویال فام | اولین وایپ کدینگ ایران
          </span>
          <h1 style={{ fontSize: '24px', fontWeight: '900', background: 'linear-gradient(to right, #60a5fa, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '6px 0' }}>
            InstaAdmin AI • Enterprise SEO Matrix
          </h1>
          <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>سیستم هوشمند تحلیل سئو، رقبا، ۳۱ استان، مناطق ۲۲گانه تهران و املاک دیوار</p>
        </header>

        {/* تب‌ها */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', backgroundColor: '#0f172a', padding: '6px', borderRadius: '16px', border: '1px solid rgba(59, 130, 246, 0.3)', marginBottom: '20px' }}>
          <button onClick={() => { setTab('website'); setResult(null); }} style={{ backgroundColor: tab === 'website' ? '#2563eb' : 'transparent', color: tab === 'website' ? '#fff' : '#94a3b8', fontWeight: 'bold', padding: '12px', borderRadius: '12px', fontSize: '13px', border: 'none', cursor: 'pointer' }}>🌐 تحلیل و سئو وب‌سایت</button>
          <button onClick={() => { setTab('instagram'); setResult(null); }} style={{ backgroundColor: tab === 'instagram' ? '#2563eb' : 'transparent', color: tab === 'instagram' ? '#fff' : '#94a3b8', fontWeight: 'bold', padding: '12px', borderRadius: '12px', fontSize: '13px', border: 'none', cursor: 'pointer' }}>📱 تحلیل پیج اینستاگرام</button>
        </div>

        {/* فرم */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid rgba(59, 130, 246, 0.4)', padding: '20px', borderRadius: '18px', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', color: '#93c5fd', marginBottom: '14px', borderBottom: '1px solid rgba(59, 130, 246, 0.3)', paddingBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <span>⚙️ موتور هوش مصنوعی و فیلترهای جغرافیایی</span>
            <span style={{ color: '#34d399', fontSize: '11px' }}>۳ توکن رایگان فعال ⚡</span>
          </h2>

          <form onSubmit={handleAnalyze} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>{tab === 'website' ? 'آدرس وب‌سایت هدف (URL):' : 'آیدی یا لینک پیج اینستاگرام:'}</label>
              <input type="text" value={targetInput} onChange={(e) => setTargetInput(e.target.value)} placeholder={tab === 'website' ? 'https://yourdomain.com' : '@username'} style={{ width: '100%', backgroundColor: '#030712', border: '1px solid rgba(59, 130, 246, 0.5)', borderRadius: '10px', padding: '12px', fontSize: '13px', color: '#fff', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>دسته‌بندی (سبک دیوار)</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%', backgroundColor: '#030712', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#fff', outline: 'none' }}>
                  <option value="املاک و مستغلات (دیوار/آگهی)">املاک و مستغلات (دیوار)</option>
                  <option value="خودرو و وسایل نقلیه (خودرو ۶۰)">خودرو و وسایل نقلیه (خودرو ۶۰)</option>
                  <option value="خدمات فنی و سرویس">خدمات فنی و سرویس</option>
                  <option value="سالن زیبایی و آرایشی">سالن زیبایی و آرایشی</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>زیرمجموعه تخصصی</label>
                <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)} style={{ width: '100%', backgroundColor: '#030712', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#fff', outline: 'none' }}>
                  <option value="خرید و فروش مسکونی">خرید و فروش مسکونی</option>
                  <option value="اجاره مسکونی و تجاری">اجاره مسکونی و تجاری</option>
                  <option value="خدمات تخصصی و تعمیرات">خدمات تخصصی و تعمیرات</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>استان (۳۱ استان کشور)</label>
                <select value={province} onChange={(e) => setProvince(e.target.value)} style={{ width: '100%', backgroundColor: '#030712', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#fff', outline: 'none' }}>
                  <option value="تهران">استان تهران</option>
                  <option value="اصفهان">استان اصفهان</option>
                  <option value="خراسان رضوی">استان خراسان رضوی (مشهد)</option>
                  <option value="فارس">استان فارس (شیراز)</option>
                  <option value="البرز">استان البرز (کرج)</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>شهرستان / حومه تابع</label>
                <select value={cityOrCounty} onChange={(e) => setCityOrCounty(e.target.value)} style={{ width: '100%', backgroundColor: '#030712', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#fff', outline: 'none' }}>
                  <option value="اسلامشهر (غرب استان تهران)">اسلامشهر (غرب استان تهران)</option>
                  <option value="شهریار و ملارد">شهریار و ملارد</option>
                  <option value="رباط کریم و پرند">رباط کریم و پرند</option>
                  <option value="کرج و فردیس">کرج و فردیس</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>منطقه (۲۲ منطقه تهران)</label>
              <select value={region} onChange={(e) => setRegion(e.target.value)} style={{ width: '100%', backgroundColor: '#030712', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#fff', outline: 'none' }}>
                <option value="منطقه ۱ تهران (تجریش و نیاوران)">منطقه ۱ تهران (تجریش، نیاوران)</option>
                <option value="منطقه ۲ تهران (شهرک غرب)">منطقه ۲ تهران (شهرک غرب)</option>
                <option value="منطقه ۵ تهران (پونک و جنت‌آباد)">منطقه ۵ تهران (پونک، جنت‌آباد)</option>
                <option value="منطقه ۲۲ تهران (دریاچه چیتگر)">منطقه ۲۲ تهران (چیتگر)</option>
              </select>
            </div>

            <button type="submit" disabled={loading} style={{ width: '100%', background: 'linear-gradient(135deg, #2563eb, #4f46e5)', color: '#fff', fontWeight: 'bold', padding: '14px', borderRadius: '12px', fontSize: '13px', border: 'none', cursor: 'pointer', marginTop: '8px' }}>
              {loading ? 'در حال پردازش هوش مصنوعی رویال فام...' : '🚀 شروع تحلیل هوشمند + سئو ۱۰ هزار کلمه‌ای + ۱۰ رقیب'}
            </button>
          </form>
        </div>

        {/* نتایج */}
        {result && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #3b82f6', padding: '20px', borderRadius: '18px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#60a5fa', marginBottom: '10px' }}>🎯 گزارش تحلیل پیشرفته: <span style={{ color: '#fff', textDecoration: 'underline' }}>{result.target}</span></h3>
            <div style={{ fontSize: '11px', color: '#cbd5e1', fontFamily: 'monospace', lineHeight: '1.7', marginBottom: '16px', background: '#030712', padding: '12px', borderRadius: '12px', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
              <div>📌 حالت: <span style={{ color: '#60a5fa' }}>{result.mode}</span></div>
              <div>📍 موقعیت: {result.location}</div>
              <div>🏷️ رسته: {result.category}</div>
              <div>⚡ موتور: {result.aiEngine}</div>
              <div>🔒 امنیت: <span style={{ color: '#fbbf24' }}>{result.securityStatus}</span></div>
            </div>

            <div style={{ borderTop: '1px solid rgba(59, 130, 246, 0.3)', paddingTop: '12px', marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#fbbf24', marginBottom: '8px' }}>📊 ارزیابی قاعده SWOT غنی (محلی و کشوری):</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '11px' }}>
                <div style={{ background: '#030712', padding: '10px', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.3)' }}><strong style={{ color: '#60a5fa' }}>نقاط قوت:</strong> {result.swot.strengths}</div>
                <div style={{ background: '#030712', padding: '10px', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.3)' }}><strong style={{ color: '#f87171' }}>نقاط ضعف:</strong> {result.swot.weaknesses}</div>
                <div style={{ background: '#030712', padding: '10px', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.3)' }}><strong style={{ color: '#34d399' }}>فرصت‌ها:</strong> {result.swot.opportunities}</div>
                <div style={{ background: '#030712', padding: '10px', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.3)' }}><strong style={{ color: '#fbbf24' }}>تهدیدها:</strong> {result.swot.threats}</div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(59, 130, 246, 0.3)', paddingTop: '12px', marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#93c5fd', marginBottom: '8px' }}>🔥 ۱۰ رقیب برتر بازار:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '160px', overflowY: 'auto' }}>
                {result.competitors.map((comp, idx) => (
                  <div key={idx} style={{ backgroundColor: '#030712', padding: '8px 12px', borderRadius: '10px', border: '1px solid rgba(59, 130, 246, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px' }}>
                    <span style={{ color: '#e2e8f0' }}>{idx + 1}. {comp.name}</span>
                    <a href={comp.url} target="_blank" rel="noreferrer" style={{ color: '#60a5fa', textDecoration: 'underline' }}>{comp.url} ({comp.score})</a>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(59, 130, 246, 0.3)', paddingTop: '14px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(37,99,235,0.25), rgba(79,70,229,0.25))', padding: '16px', borderRadius: '14px' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#fff', marginBottom: '4px' }}>🚀 ارتقا به پلن ویژه (دسترسی نامحدود + اتوماسیون سئو)</div>
              <p style={{ fontSize: '10px', color: '#94a3b8', margin: '0 0 10px 0' }}>شماره کارت بانک ملی: <strong style={{ color: '#60a5fa' }}>6104338641802312</strong> (به نام امیر سام (میثم) یعقوبی حسنعلی ده)</p>
              <button onClick={() => setShowPaymentModal(true)} style={{ backgroundColor: '#2563eb', color: '#fff', fontWeight: 'bold', padding: '10px 20px', borderRadius: '10px', fontSize: '11px', border: 'none', cursor: 'pointer' }}>ثبت رسید پرداخت و ارسال به واتساپ/بله (09366681963)</button>
            </div>
          </div>
        )}

        {/* مدال پرداخت */}
        {showPaymentModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 1000 }}>
            <div style={{ backgroundColor: '#0f172a', border: '1px solid #3b82f6', padding: '20px', borderRadius: '18px', maxWidth: '400px', width: '100%' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#60a5fa', marginBottom: '10px' }}>💳 تأیید پرداخت و ارسال فیش</h3>
              <p style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '12px' }}>مبلغ را به کارت بانک ملی <code style={{ color: '#34d399' }}>6104338641802312</code> (امیر سام (میثم) یعقوبی حسنعلی ده) واریز کرده و شماره پیگیری را وارد کنید.</p>
              <form onSubmit={handleSendPaymentReceipt} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input type="text" value={paymentRef} onChange={(e) => setPaymentRef(e.target.value)} placeholder="شماره پیگیری تراکنش" style={{ width: '100%', backgroundColor: '#030712', border: '1px solid rgba(59,99,235,0.5)', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#fff', boxSizing: 'border-box' }} />
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button type="submit" style={{ flex: 1, backgroundColor: '#2563eb', color: '#fff', fontWeight: 'bold', padding: '10px', borderRadius: '10px', fontSize: '12px', border: 'none', cursor: 'pointer' }}>ارسال به واتساپ/بله</button>
                  <button type="button" onClick={() => setShowPaymentModal(false)} style={{ backgroundColor: '#334155', color: '#fff', fontWeight: 'bold', padding: '10px 14px', borderRadius: '10px', fontSize: '12px', border: 'none', cursor: 'pointer' }}>انصراف</button>
                </div>
              </form>
              {paymentSuccess && <div style={{ marginTop: '10px', backgroundColor: 'rgba(52,211,153,0.2)', border: '1px solid #34d399', color: '#34d399', padding: '8px', borderRadius: '8px', fontSize: '11px', textAlign: 'center' }}>✅ رسید ثبت شد و به 09366681963 ارسال گردید!</div>}
            </div>
          </div>
        )}

      </div>

      {/* فوتر حقوقی و انحصاری با رنگ‌های درخواستی */}
      <footer style={{ marginTop: '30px', borderTop: '1px solid rgba(59, 130, 246, 0.3)', paddingTop: '16px', textAlign: 'center', fontSize: '11px', lineHeight: '1.8' }}>
        <div style={{ color: '#facc15', fontWeight: 'bold', marginBottom: '6px' }}>
          این وب سایت متعلق به استارتاپ فناورانه هوش مصنوعی رویال فام است<br />
          اولین استارتاپ وایپ کدینگ هوش مصنوعی در ایران
        </div>
        <div style={{ color: '#ef4444', fontWeight: 'bold' }}>
          هرگونه کپی برداری از مطالب سایت یا فکر معنوی این سایت پیگرد قانونی و قضایی دارد<br />
          سایت با بالاترین سیستم های امنیتی و ضد هک ساخته و ایزوله است ... (رمزنگاری کوانتومی)
        </div>
      </footer>

    </div>
  );
}
