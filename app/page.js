'use client';
import React, { useState } from 'react';

export default function Home() {
  const [tab, setTab] = useState('website');
  const [targetInput, setTargetInput] = useState('');
  const [category, setCategory] = useState('املاک و مستغلات (دیوار/آگهی)');
  const [subCategory, setSubCategory] = useState('خرید و فروش مسکونی');
  const [province, setProvince] = useState('تهران');
  const [cityOrCounty, setCityOrCounty] = useState('اسلامشهر (غرب استان)');
  const [region, setRegion] = useState('منطقه ۱ تهران');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showPayModal, setShowPayModal] = useState(false);
  const [refCode, setRefCode] = useState('');

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!targetInput) {
      alert('لطفاً آدرس وب‌سایت یا آیدی اینستاگرام را وارد کنید.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult({
        target: targetInput,
        mode: tab === 'website' ? 'تحلیل سئو وب‌سایت' : 'تحلیل الگوریتم اینستاگرام',
        location: `استان ${province} » ${cityOrCounty} » ${region}`,
        category: `${category} » ${subCategory}`,
        ai: 'موتور هوش مصنوعی رویال فام (امیر سام یعقوبی)',
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
        calendar: [
          { time: '۰۹:۰۰ صبح', title: 'پست پروموشن و آگهی هدفمند در ' + cityOrCounty },
          { time: '۱۶:۰۰ عصر', title: 'استوری تعاملی بررسی بازار در ' + region },
          { time: '۲۰:۰۰ شب', title: 'رِیلز تخصصی جذب مشتری در استان ' + province }
        ]
      });
    }, 1200);
  };

  const handlePay = (e) => {
    e.preventDefault();
    if (!refCode) {
      alert('شماره پیگیری را وارد کنید.');
      return;
    }
    const msg = `[تایید پرداخت InstaAdmin]\nکارت مقصد: بانک ملی (6104338641802312)\nکد پیگیری: ${refCode}\nارسال به مدیر: 09366681963`;
    window.open(`https://wa.me/989366681963?text=${encodeURIComponent(msg)}`, '_blank');
    setShowPayModal(false);
    alert('رسید ثبت شد و به واتساپ/بله 09366681963 ارسال گردید!');
  };

  return (
    <div style={{ backgroundColor: '#050b14', color: '#fff', minHeight: '100vh', padding: '16px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        <header style={{ textAlign: 'center', borderBottom: '1px solid rgba(37,99,235,0.3)', paddingBottom: '16px', marginBottom: '20px' }}>
          <span style={{ background: 'rgba(37,99,235,0.2)', color: '#60a5fa', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', border: '1px solid #3b82f6' }}>
            استارتاپ فناورانه رویال فام | مدیریت: امیر سام یعقوبی
          </span>
          <h1 style={{ fontSize: '22px', fontWeight: '900', color: '#60a5fa', margin: '10px 0 4px 0' }}>InstaAdmin AI - Enterprise</h1>
          <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>سیستم اتوماسیون سئو، ۱۰ رقیب، ۳۱ استان و ۲۲ منطقه تهران</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', background: '#0f172a', padding: '6px', borderRadius: '12px', marginBottom: '20px' }}>
          <button onClick={() => { setTab('website'); setResult(null); }} style={{ background: tab === 'website' ? '#2563eb' : 'transparent', color: '#fff', padding: '10px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' }}>🌐 تحلیل وب‌سایت</button>
          <button onClick={() => { setTab('instagram'); setResult(null); }} style={{ background: tab === 'instagram' ? '#2563eb' : 'transparent', color: '#fff', padding: '10px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' }}>📱 تحلیل اینستاگرام</button>
        </div>

        <div style={{ background: '#0f172a', border: '1px solid rgba(37,99,235,0.3)', padding: '16px', borderRadius: '16px', marginBottom: '20px' }}>
          <form onSubmit={handleAnalyze} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '4px' }}>{tab === 'website' ? 'آدرس وب‌سایت (URL):' : 'آیدی یا لینک پیج اینستاگرام:'}</label>
              <input type="text" value={targetInput} onChange={(e) => setTargetInput(e.target.value)} placeholder={tab === 'website' ? 'https://example.com' : '@username'} style={{ width: '100%', background: '#030712', border: '1px solid #3b82f6', borderRadius: '8px', padding: '10px', fontSize: '12px', color: '#fff', boxSizing: 'border-box' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div>
                <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '4px' }}>دسته‌بندی (دیوار/آگهی)</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%', background: '#030712', border: '1px solid #3b82f6', borderRadius: '8px', padding: '8px', fontSize: '11px', color: '#fff' }}>
                  <option value="املاک و مستغلات (دیوار/آگهی)">املاک و مستغلات</option>
                  <option value="خودرو و وسایل نقلیه">خودرو و وسایل نقلیه</option>
                  <option value="خدمات فنی و تعمیرات">خدمات فنی و تعمیرات</option>
                  <option value="سالن زیبایی">سالن زیبایی و آرایشی</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '4px' }}>زیرمجموعه</label>
                <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)} style={{ width: '100%', background: '#030712', border: '1px solid #3b82f6', borderRadius: '8px', padding: '8px', fontSize: '11px', color: '#fff' }}>
                  <option value="خرید و فروش مسکونی">خرید و فروش مسکونی</option>
                  <option value="اجاره مسکونی و تجاری">اجاره مسکونی و تجاری</option>
                  <option value="خدمات تخصصی">خدمات تخصصی</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div>
                <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '4px' }}>استان (۳۱ استان)</label>
                <select value={province} onChange={(e) => setProvince(e.target.value)} style={{ width: '100%', background: '#030712', border: '1px solid #3b82f6', borderRadius: '8px', padding: '8px', fontSize: '11px', color: '#fff' }}>
                  <option value="تهران">استان تهران</option>
                  <option value="اصفهان">استان اصفهان</option>
                  <option value="خراسان رضوی">خراسان رضوی</option>
                  <option value="فارس">استان فارس</option>
                  <option value="البرز">استان البرز</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '4px' }}>شهرستان / حومه</label>
                <select value={cityOrCounty} onChange={(e) => setCityOrCounty(e.target.value)} style={{ width: '100%', background: '#030712', border: '1px solid #3b82f6', borderRadius: '8px', padding: '8px', fontSize: '11px', color: '#fff' }}>
                  <option value="اسلامشهر (غرب استان)">اسلامشهر</option>
                  <option value="شهریار و ملارد">شهریار و ملارد</option>
                  <option value="رباط کریم و پرند">رباط کریم و پرند</option>
                  <option value="کرج و فردیس">کرج و فردیس</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '4px' }}>منطقه (۲۲ منطقه تهران)</label>
              <select value={region} onChange={(e) => setRegion(e.target.value)} style={{ width: '100%', background: '#030712', border: '1px solid #3b82f6', borderRadius: '8px', padding: '8px', fontSize: '11px', color: '#fff' }}>
                <option value="منطقه ۱ تهران">منطقه ۱ (تجریش و نیاوران)</option>
                <option value="منطقه ۲ تهران">منطقه ۲ (شهرک غرب)</option>
                <option value="منطقه ۵ تهران">منطقه ۵ (پونک و جنت‌آباد)</option>
                <option value="منطقه ۲۲ تهران">منطقه ۲۲ (چیتگر)</option>
              </select>
            </div>

            <button type="submit" disabled={loading} style={{ background: 'linear-gradient(to right, #2563eb, #4f46e5)', color: '#fff', fontWeight: 'bold', padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer', marginTop: '6px' }}>
              {loading ? 'در حال پردازش هوش مصنوعی...' : 'شروع تحلیل جامع + ۱۰ رقیب + ۵ توکن رایگان'}
            </button>
          </form>
        </div>

        {result && (
          <div style={{ background: '#0f172a', border: '1px solid #3b82f6', padding: '16px', borderRadius: '16px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '13px', color: '#60a5fa', marginBottom: '8px' }}>✅ نتیجه تحلیل: {result.target}</h3>
            <div style={{ fontSize: '11px', color: '#cbd5e1', fontFamily: 'monospace', marginBottom: '12px' }}>
              <div>موقعیت: {result.location}</div>
              <div>حوزه: {result.category}</div>
              <div>وضعیت: <span style={{ color: '#34d399' }}>۵ توکن رایگان فعال</span></div>
            </div>

            <div style={{ borderTop: '1px solid rgba(59,130,246,0.3)', paddingTop: '10px', marginBottom: '12px' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#93c5fd', marginBottom: '6px' }}>🔥 ۱۰ رقیب برتر بازار:</div>
              <div style={{ maxHeight: '150px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {result.competitors.map((c, i) => (
                  <div key={i} style={{ background: '#030712', padding: '6px 10px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                    <span>{i+1}. {c.name}</span>
                    <a href={c.url} target="_blank" rel="noreferrer" style={{ color: '#60a5fa' }}>{c.url} ({c.score})</a>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(59,130,246,0.3)', paddingTop: '10px', textAlign: 'center', background: 'rgba(37,99,235,0.15)', padding: '12px', borderRadius: '8px' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '6px' }}>شماره کارت بانک ملی: 6104338641802312 (امیر سام یعقوبی)</div>
              <button onClick={() => setShowPayModal(true)} style={{ background: '#2563eb', color: '#fff', padding: '8px 16px', borderRadius: '6px', border: 'none', fontWeight: 'bold', fontSize: '11px', cursor: 'pointer' }}>
                ثبت رسید پرداخت (ارسال به 09366681963)
              </button>
            </div>
          </div>
        )}

        {showPayModal && (
          <div style={{ position: 'fixed', top:0, left:0, right:0, bottom:0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
            <div style={{ background: '#0f172a', border: '1px solid #3b82f6', padding: '16px', borderRadius: '12px', maxWidth: '350px', width: '100%' }}>
              <h3 style={{ fontSize: '12px', color: '#60a5fa', marginBottom: '8px' }}>ارسال رسید پرداخت</h3>
              <form onSubmit={handlePay} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input type="text" value={refCode} onChange={(e) => setRefCode(e.target.value)} placeholder="شماره پیگیری تراکنش" style={{ background: '#030712', border: '1px solid #3b82f6', borderRadius: '6px', padding: '8px', fontSize: '11px', color: '#fff' }} />
                <button type="submit" style={{ background: '#2563eb', color: '#fff', padding: '8px', borderRadius: '6px', border: 'none', fontWeight: 'bold', fontSize: '11px', cursor: 'pointer' }}>ارسال به واتساپ/بله مدیر</button>
                <button type="button" onClick={() => setShowPayModal(false)} style={{ background: '#334155', color: '#fff', padding: '6px', borderRadius: '6px', border: 'none', fontSize: '11px', cursor: 'pointer' }}>انصراف</button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
