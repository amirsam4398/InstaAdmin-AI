'use client';
import React, { useState } from 'react';
import SecurityFooter from '../components/SecurityFooter';

export default function Home() {
  const [tab, setTab] = useState('website'); // 'website' | 'instagram'
  const [targetInput, setTargetInput] = useState('');
  
  // فیلترهای کامل منطقه‌ای و دسته‌بندی‌ها
  const [category, setCategory] = useState('املاک و مستغلات (دیوار/آگهی)');
  const [subCategory, setSubCategory] = useState('خرید و فروش مسکونی');
  const [province, setProvince] = useState('تهران');
  const [cityOrCounty, setCityOrCounty] = useState('اسلامشهر (شهرستان تابع)');
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
        mode: tab === 'website' ? 'تحلیل پیشرفته سئو و زیرساخت وب‌سایت' : 'تحلیل الگوریتم و اینگیجمنت اینستاگرام',
        location: `استان ${province} » شهرستان/شهر: ${cityOrCounty} » ${region}`,
        category: `${category} » ${subCategory}`,
        aiEngine: 'موتور هوش مصنوعی رویال فام (توسعه‌دهنده: امیر سام یعقوبی)',
        freeTokens: '۵ توکن رایگان تحلیل فعال شد',
        securityStatus: 'مجهز به Edge Encryption و حفاظت ضد مهندسی معکوس Wappalyzer',
        competitors: [
          { name: 'دیوار (Divar)', url: 'https://divar.ir', score: '۹۸٪' },
          { name: 'شیپور (Sheypoor)', url: 'https://sheypoor.com', score: '۹۴٪' },
          { name: 'باما (Bama)', url: 'https://bama.ir', score: '۹۱٪' },
          { name: 'خودرو ۶۰ / املاک برتر', url: 'https://khodro60.com', score: '۸۸٪' },
          { name: 'ایران فایل', url: 'https://iranfile.ir', score: '۸۶٪' },
          { name: 'دلتا مِلک', url: 'https://delta.ir', score: '۸۳٪' },
          { name: 'شابش', url: 'https://shabesh.com', score: '۸۰٪' },
          { name: 'پایتخت ملک', url: 'https://paytakht-melk.ir', score: '۷۷٪' },
          { name: 'ملک رادار', url: 'https://melkradar.com', score: '۷۴٪' },
          { name: 'آونکس', url: 'https://avangx.com', score: '۷۱٪' }
        ],
        contentCalendar: {
          title: 'تقویم محتوایی هوشمند نمونه (۱ روزه)',
          posts: [
            { time: '۰۹:۰۰ صبح', type: 'پست پروموشن و آگهی هدفمند', topic: 'معرفی ویژه برترین فایل‌های حوزه ' + category + ' در ' + cityOrCounty },
            { time: '۱۶:۰۰ عصر', type: 'استوری تعاملی / نظرسنجی', topic: 'بررسی قیمت و تحلیل بازار هدف در ' + region },
            { time: '۲۰:۰۰ شب', type: 'رِیلز و ویدیو تخصصی', topic: 'مشاوره حرفه‌ای و جذب لید قطعی در استان ' + province }
          ]
        }
      });
    }, 1500);
  };

  const handleSendPaymentReceipt = (e) => {
    e.preventDefault();
    if (!paymentRef) {
      alert('لطفاً شماره پیگیری یا تصویر فیش را وارد کنید.');
      return;
    }
    // ارسال اتوماتیک نوتیفیکیشن به واتساپ / بله شماره 09366681963
    const notificationMessage = `[ثبت رسید پرداخت جدید]\nمدیریت: رویال فام\nشماره پیگیری: ${paymentRef}\nمبلغ: ۲,۹۹۰,۰۰۰ تومان\nکارت مقصد: بانک ملی (6104338641802312)\nارسال شده جهت بررسی و تایید به واتساپ/بله: 09366681963`;
    
    // شبیه‌سازی ارسال موفق و باز کردن واتساپ/بله با متن پیش‌فرض
    window.open(`https://wa.me/989366681963?text=${encodeURIComponent(notificationMessage)}`, '_blank');
    
    setPaymentSuccess(true);
    setTimeout(() => {
      setShowPaymentModal(false);
      setPaymentSuccess(false);
      setPaymentRef('');
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: '#050b14', color: '#ffffff', minHeight: '100vh', padding: '16px', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      
      <div style={{ maxWidth: '640px', margin: '0 auto', width: '100%' }}>
        
        {/* هدر بالایی و برندینگ رویال فام */}
        <header style={{ borderBottom: '1px solid rgba(37, 99, 235, 0.3)', paddingBottom: '16px', marginBottom: '20px', textAlign: 'center' }}>
          <span style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#60a5fa', border: '1px solid rgba(59, 130, 246, 0.4)', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', display: 'inline-block', marginBottom: '8px' }}>
            استارتاپ فناورانه هوش مصنوعی رویال فام | مدیریت: امیر سام یعقوبی
          </span>
          <h1 style={{ fontSize: '24px', fontWeight: '900', background: 'linear-gradient(to right, #60a5fa, #2563eb, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '0 0 6px 0' }}>
            InstaAdmin AI - Enterprise Edition
          </h1>
          <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0' }}>
            سیستم هوشمند تحلیل سئو، ردیابی ۱۰ رقیب، پوشش ۳۱ استان، مناطق ۲۲گانه تهران و شهرستان‌ها
          </p>
        </header>

        {/* سوییچ تب‌های وب‌سایت و اینستاگرام (کاملاً مجزا) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', backgroundColor: '#0f172a', padding: '6px', borderRadius: '16px', border: '1px solid rgba(59, 130, 246, 0.3)', marginBottom: '20px' }}>
          <button
            type="button"
            onClick={() => { setTab('website'); setResult(null); }}
            style={{ 
              backgroundColor: tab === 'website' ? '#2563eb' : 'transparent', 
              color: tab === 'website' ? '#ffffff' : '#94a3b8', 
              fontWeight: 'bold', padding: '12px', borderRadius: '12px', fontSize: '13px', border: 'none', cursor: 'pointer',
              boxShadow: tab === 'website' ? '0 4px 12px rgba(37, 99, 235, 0.4)' : 'none'
            }}
          >
            🌐 تحلیل وب‌سایت
          </button>
          <button
            type="button"
            onClick={() => { setTab('instagram'); setResult(null); }}
            style={{ 
              backgroundColor: tab === 'instagram' ? '#2563eb' : 'transparent', 
              color: tab === 'instagram' ? '#ffffff' : '#94a3b8', 
              fontWeight: 'bold', padding: '12px', borderRadius: '12px', fontSize: '13px', border: 'none', cursor: 'pointer',
              boxShadow: tab === 'instagram' ? '0 4px 12px rgba(37, 99, 235, 0.4)' : 'none'
            }}
          >
            📱 تحلیل اینستاگرام
          </button>
        </div>

        {/* فرم و فیلترهای پیشرفته (دیوار، استان‌ها، شهرستان‌ها، مناطق تهران) */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '20px', borderRadius: '16px', marginBottom: '20px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', color: '#93c5fd', marginBottom: '14px', borderBottom: '1px solid rgba(59, 130, 246, 0.3)', paddingBottom: '8px' }}>
            {tab === 'website' ? '⚙️ تنظیمات سئو وب‌سایت و ردیابی بازار' : '⚙️ تنظیمات الگوریتم و پیج اینستاگرام'}
          </h2>

          <form onSubmit={handleAnalyze} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>
                {tab === 'website' ? 'آدرس وب‌سایت (URL):' : 'شناسه یا لینک پیج اینستاگرام:'}
              </label>
              <input 
                type="text" 
                value={targetInput}
                onChange={(e) => setTargetInput(e.target.value)}
                placeholder={tab === 'website' ? 'https://example.com' : '@username یا لینک پیج'} 
                style={{ width: '100%', backgroundColor: '#030712', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '10px', padding: '12px', fontSize: '13px', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* دسته‌بندی اصلی (دیوار و آگهی) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>دسته‌بندی اصلی (دیوار/آگهی)</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#030712', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#fff', outline: 'none' }}
                >
                  <option value="املاک و مستغلات (دیوار/آگهی)">املاک و مستغلات (دیوار)</option>
                  <option value="خودرو و وسایل نقلیه (خودرو ۶۰)">خودرو و وسایل نقلیه (خودرو ۶۰)</option>
                  <option value="خدمات فنی و تعمیرات">خدمات فنی و تعمیرات (لوازم خانگی)</option>
                  <option value="سالن زیبایی و آرایشی">سالن زیبایی و آرایشی (بتی سا/توبا)</option>
                  <option value="فروشگاهی و تجارت الکترونیک">فروشگاه آنلاین و تجاری</option>
                  <option value="آموزشی و تیزهوشان">آموزشی (تیزهوشان هفتم ایران)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>زیرمجموعه / رسته تخصصی</label>
                <select 
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#030712', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#fff', outline: 'none' }}
                >
                  <option value="خرید و فروش مسکونی">خرید و فروش مسکونی</option>
                  <option value="اجاره مسکونی و تجاری">اجاره مسکونی و تجاری</option>
                  <option value="خدمات تخصصی و سرویس">خدمات تخصصی و سرویس</option>
                  <option value="کالا و تجهیزات دیجیتال">کالا و تجهیزات دیجیتال</option>
                </select>
              </div>
            </div>

            {/* ۳۱ استان و شهرستان‌ها */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>استان (۳۱ استان کشور)</label>
                <select 
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#030712', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#fff', outline: 'none' }}
                >
                  <option value="تهران">استان تهران</option>
                  <option value="اصفهان">استان اصفهان</option>
                  <option value="خراسان رضوی">استان خراسان رضوی (مشهد)</option>
                  <option value="فارس">استان فارس (شیراز)</option>
                  <option value="البرز">استان البرز (کرج)</option>
                  <option value="آذربایجان شرقی">استان آذربایجان شرقی (تبریز)</option>
                  <option value="سایر استان‌ها">سایر استان‌های کشور (۳۱ استان)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>شهرستان‌های تابع استان</label>
                <select 
                  value={cityOrCounty}
                  onChange={(e) => setCityOrCounty(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#030712', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#fff', outline: 'none' }}
                >
                  <option value="اسلامشهر (شهرستان تابع)">اسلامشهر (غرب استان)</option>
                  <option value="شهریار و ملارد">شهریار و ملارد</option>
                  <option value="رباط کریم و پرند">رباط کریم و پرند</option>
                  <option value="شهر ری و ورامین">شهر ری و ورامین</option>
                  <option value="کرج و فردیس">کرج و فردیس</option>
                  <option value="مرکز استان / کلان‌شهر">مرکز استان (کلان‌شهر)</option>
                </select>
              </div>
            </div>

            {/* مناطق ۲۲ گانه تهران */}
            <div>
              <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>منطقه (۲۲ منطقه تهران)</label>
              <select 
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                style={{ width: '100%', backgroundColor: '#030712', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#fff', outline: 'none' }}
              >
                <option value="منطقه ۱ تهران (تجریش و نیاوران)">منطقه ۱ تهران (تجریش، نیاوران، سعادت‌آباد)</option>
                <option value="منطقه ۲ تهران (شهرک غرب)">منطقه ۲ تهران (شهرک غرب، صادقیه)</option>
                <option value="منطقه ۵ تهران (پونک و جنت‌آباد)">منطقه ۵ تهران (پونک، جنت‌آباد، صادقیه)</option>
                <option value="منطقه ۲۲ تهران (دریاچه چیتگر)">منطقه ۲۲ تهران (چیتگر و همت)</option>
                <option value="سایر مناطق ۲۲ گانه تهران">سایر مناطق ۲۲ گانه تهران</option>
              </select>
            </div>

            <button 
              type="submit"
              disabled={loading}
              style={{ width: '100%', background: 'linear-gradient(to right, #2563eb, #4f46e5)', color: '#ffffff', fontWeight: 'bold', padding: '14px', borderRadius: '12px', fontSize: '13px', border: 'none', cursor: 'pointer', marginTop: '8px', boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)' }}
            >
              {loading ? 'در حال پردازش موتور هوش مصنوعی رویال فام...' : 'شروع تحلیل جامع + ۱۰ رقیب + ۵ توکن رایگان'}
            </button>
          </form>
        </div>

        {/* بخش نتایج تحلیل، ۱۰ رقیب، تقویم محتوا و پلن پولی با نوتیفیکیشن */}
        {result && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #3b82f6', padding: '20px', borderRadius: '16px', marginBottom: '20px', boxShadow: '0 15px 30px -10px rgba(37, 99, 235, 0.3)' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#60a5fa', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>✅</span> گزارش هوش مصنوعی رویال فام: <span style={{ color: '#fff', textDecoration: 'underline' }}>{result.target}</span>
            </h3>
            <div style={{ fontSize: '11px', color: '#cbd5e1', fontFamily: 'monospace', lineHeight: '1.6', marginBottom: '16px' }}>
              <div>📌 حالت: <span style={{ color: '#60a5fa' }}>{result.mode}</span></div>
              <div>📍 موقعیت: {result.location}</div>
              <div>🏷️ رسته: {result.category}</div>
              <div>⚡ وضعیت توکن: <span style={{ color: '#34d399' }}>{result.freeTokens}</span></div>
              <div>🛡️ امنیت: <span style={{ color: '#fbbf24' }}>{result.securityStatus}</span></div>
            </div>

            {/* لیست ۱۰ رقیب برتر همراه با آدرس وب‌سایت */}
            <div style={{ borderTop: '1px solid rgba(59, 130, 246, 0.3)', paddingTop: '12px', marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#93c5fd', marginBottom: '8px' }}>🔥 ۱۰ رقیب برتر شناسایی‌شده در بازار (با آدرس سایت):</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '200px', overflowY: 'auto', paddingRight: '4px' }}>
                {result.competitors.map((comp, idx) => (
                  <div key={idx} style={{ backgroundColor: '#030712', padding: '8px 12px', borderRadius: '10px', border: '1px solid rgba(59, 130, 246, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px' }}>
                    <span style={{ color: '#e2e8f0', fontWeight: '500' }}>{idx + 1}. {comp.name}</span>
                    <a href={comp.url} target="_blank" rel="noreferrer" style={{ color: '#60a5fa', textDecoration: 'underline', fontFamily: 'monospace', fontSize: '10px' }}>
                      {comp.url} (سئو: {comp.score})
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* تقویم محتوایی ۱ روزه نمونه */}
            <div style={{ borderTop: '1px solid rgba(59, 130, 246, 0.3)', paddingTop: '12px', marginBottom: '16px', backgroundColor: 'rgba(37, 99, 235, 0.1)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#fbbf24', marginBottom: '8px' }}>📅 {result.contentCalendar.title}:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', color: '#cbd5e1' }}>
                {result.contentCalendar.posts.map((post, i) => (
                  <div key={i} style={{ backgroundColor: '#030712', padding: '8px', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                    <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>[{post.time}] {post.type}:</span> {post.topic}
                  </div>
                ))}
              </div>
            </div>

            {/* بنر ارتقا به پلن پولی و پرداخت کارت به کارت (بانک ملی) */}
            <div style={{ borderTop: '1px solid rgba(59, 130, 246, 0.3)', paddingTop: '12px', textAlign: 'center', background: 'linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(79, 70, 229, 0.2))', padding: '14px', borderRadius: '12px', border: '1px solid rgba(59, 130, 246, 0.4)' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#fff', marginBottom: '4px' }}>🚀 دسترسی نامحدود به ۱۰,۰۰۰ کلمه کلیدی، تقویم ماهانه و اتوماسیون دیوار</div>
              <p style={{ fontSize: '10px', color: '#94a3b8', margin: '0 0 10px 0' }}>شماره کارت بانک ملی: <strong style={{ color: '#60a5fa' }}>6104338641802312</strong> (به نام امیر سام یعقوبی)</p>
              <button 
                onClick={() => setShowPaymentModal(true)}
                style={{ backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', padding: '10px 20px', borderRadius: '10px', fontSize: '11px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)' }}
              >
                ثبت رسید پرداخت (ارسال اتوماتیک به واتساپ/بله 09366681963)
              </button>
            </div>
          </div>
        )}

        {/* مدال ثبت رسید پرداخت و اتصال به نوتیفیکیشن */}
        {showPaymentModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 1000 }}>
            <div style={{ backgroundColor: '#0f172a', border: '1px solid #3b82f6', padding: '20px', borderRadius: '16px', maxWidth: '400px', width: '100%', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#60a5fa', marginBottom: '10px' }}>💳 تأیید پرداخت و ارسال فیش</h3>
              <p style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '12px' }}>
                مبلغ ۲,۹۹۰,۰۰۰ تومان را به کارت بانک ملی <code style={{ color: '#34d399' }}>6104338641802312</code> واریز کرده و شماره پیگیری را وارد کنید تا به مدیر (`09366681963`) در واتساپ/بله ارسال شود.
              </p>

              <form onSubmit={handleSendPaymentReceipt} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input 
