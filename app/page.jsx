'use client';
import React, { useState } from 'react';
import SecurityFooter from '../components/SecurityFooter';

export default function Home() {
  const [activeTab, setActiveTab] = useState('website'); // 'website' or 'instagram'
  const [targetInput, setTargetInput] = useState('');
  const [category, setCategory] = useState('اخبار و رسانه');
  const [subCategory, setSubCategory] = useState('خبرگزاری');
  const [region, setRegion] = useState('منطقه ۱');
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleRunAnalysis = (e) => {
    e.preventDefault();
    if (!targetInput) {
      alert('لطفاً آدرس یا شناسه مورد نظر را وارد کنید.');
      return;
    }
    setLoading(true);
    setAnalysisResult(null);

    setTimeout(() => {
      setLoading(false);
      setAnalysisResult({
        target: targetInput,
        type: activeTab === 'website' ? 'وب‌سایت' : 'اینستاگرام',
        category: `${category} / ${subCategory} (${region})`,
        keywordsIndexed: '۱۰,۰۰۰ کلیدواژه فعال',
        competitors: [
          'رقیب اول: پلتفرم پیشتاز منطقه (سئو ۹۴٪)',
          'رقیب دوم: مرجع تخصصی حوزه (سئو ۸۸٪)',
          'رقیب سوم: شبکه اطلاع‌رسانی برتر (سئو ۸۲٪)',
          'رقیب چهارم: آژانس دیجیتال محلی (سئو ۷۶٪)',
          'رقیب پنجم: استارتاپ رقیب (سئو ۷۱٪)'
        ]
      });
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh', padding: '16px', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      
      {/* هدر و برندینگ */}
      <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <header style={{ borderBottom: '1px solid #262626', paddingBottom: '12px', marginBottom: '16px', textAlign: 'center' }}>
          <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '3px 10px', borderRadius: '20px', fontSize: '10px' }}>
            استارتاپ فناورانه رویال فام | مدیریت: امیر سام یعقوبی
          </span>
          <h1 style={{ fontSize: '22px', fontWeight: '900', background: 'linear-gradient(to right, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '8px 0 4px 0' }}>
            InstaAdmin AI - Enterprise
          </h1>
          <p style={{ fontSize: '11px', color: '#a3a3a3', margin: '0' }}>
            سیستم هوشمند تحلیل سئو (۱۰,۰۰۰ کلمه کلیدی) و ردیابی رقبا
          </p>
        </header>

        {/* سوییچ تب‌ها (وب‌سایت و اینستاگرام کاملاً جدا) */}
        <div style={{ display: 'flex', backgroundColor: '#171717', borderRadius: '12px', padding: '4px', marginBottom: '16px', border: '1px solid #262626' }}>
          <button 
            type="button"
            onClick={() => setActiveTab('website')}
            style={{ 
              flex: 1, 
              backgroundColor: activeTab === 'website' ? '#f59e0b' : 'transparent', 
              color: activeTab === 'website' ? '#0a0a0a' : '#a3a3a3', 
              fontWeight: 'bold', 
              padding: '10px', 
              borderRadius: '10px', 
              fontSize: '12px', 
              border: 'none', 
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            🌐 تحلیل وب‌سایت
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('instagram')}
            style={{ 
              flex: 1, 
              backgroundColor: activeTab === 'instagram' ? '#f59e0b' : 'transparent', 
              color: activeTab === 'instagram' ? '#0a0a0a' : '#a3a3a3', 
              fontWeight: 'bold', 
              padding: '10px', 
              borderRadius: '10px', 
              fontSize: '12px', 
              border: 'none', 
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            📱 تحلیل اینستاگرام
          </button>
        </div>

        {/* فرم و دسته‌بندی‌های اختصاصی */}
        <div style={{ backgroundColor: '#121212', border: '1px solid #262626', padding: '16px', borderRadius: '16px', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 'bold', color: '#e5e5e5', marginBottom: '12px', borderBottom: '1px solid #262626', paddingBottom: '6px' }}>
            {activeTab === 'website' ? 'تنظیمات تحلیل سئو وب‌سایت' : 'تنظیمات تحلیل پیج اینستاگرام'}
          </h2>

          <form onSubmit={handleRunAnalysis} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '10px', color: '#a3a3a3', display: 'block', marginBottom: '4px' }}>
                {activeTab === 'website' ? 'آدرس وب‌سایت (URL)' : 'شناسه یا لینک پیج اینستاگرام'}
              </label>
              <input 
                type="text" 
                value={targetInput}
                onChange={(e) => setTargetInput(e.target.value)}
                placeholder={activeTab === 'website' ? 'https://example.com' : '@username یا لینک پیج'} 
                style={{ width: '100%', backgroundColor: '#050505', border: '1px solid #262626', borderRadius: '10px', padding: '10px', fontSize: '12px', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* دسته‌بندی‌ها و فیلترهای دیواری */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div>
                <label style={{ fontSize: '10px', color: '#a3a3a3', display: 'block', marginBottom: '4px' }}>حوزه فعالیت</label>
                <select 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#050505', border: '1px solid #262626', borderRadius: '10px', padding: '8px', fontSize: '11px', color: '#fff', outline: 'none' }}
                >
                  <option value="اخبار و رسانه">اخبار و رسانه</option>
                  <option value="کسب‌وکار محلی">کسب‌وکار محلی</option>
                  <option value="فروشگاهی و تجاری">فروشگاهی و تجاری</option>
                  <option value="خدماتی و فنی">خدماتی و فنی</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '10px', color: '#a3a3a3', display: 'block', marginBottom: '4px' }}>نوع دسته‌بندی</label>
                <select 
                  value={subCategory} 
                  onChange={(e) => setSubCategory(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#050505', border: '1px solid #262626', borderRadius: '10px', padding: '8px', fontSize: '11px', color: '#fff', outline: 'none' }}
                >
                  <option value="خبرگزاری">خبرگزاری</option>
                  <option value="سایت شرکتی">سایت شرکتی</option>
                  <option value="پیج اینستاگرامی بیزینس">پیج بیزینس</option>
                  <option value="فروشگاه اینترنتی">فروشگاه اینترنتی</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ fontSize: '10px', color: '#a3a3a3', display: 'block', marginBottom: '4px' }}>منطقه و محدوده جغرافیایی (سئو محلی)</label>
              <select 
                value={region} 
                onChange={(e) => setRegion(e.target.value)}
                style={{ width: '100%', backgroundColor: '#050505', border: '1px solid #262626', borderRadius: '10px', padding: '8px', fontSize: '11px', color: '#fff', outline: 'none' }}
              >
                <option value="منطقه ۱">منطقه ۱ (تهران و حومه)</option>
                <option value="منطقه ۲">منطقه ۲ (غرب استان)</option>
                <option value="سراسر کشور">سراسر کشور (کشوری)</option>
              </select>
            </div>

            <button 
              type="submit"
              disabled={loading}
              style={{ width: '100%', background: 'linear-gradient(to right, #f59e0b, #d97706)', color: '#0a0a0a', fontWeight: 'bold', padding: '12px', borderRadius: '10px', fontSize: '12px', border: 'none', cursor: 'pointer', marginTop: '6px' }}
            >
              {loading ? 'در حال پردازش هوش مصنوعی...' : 'شروع تحلیل جامع + نمودار + ۵ رقیب برتر'}
            </button>
          </form>
        </div>

        {/* بخش نمایش نتایج تحلیل موتور هوش مصنوعی */}
        {analysisResult && (
          <div style={{ backgroundColor: '#121212', border: '1px solid #10b981', padding: '16px', borderRadius: '16px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: '#10b981', marginBottom: '8px' }}>
              ✅ نتیجه تحلیل هوشمند برای: {analysisResult.target}
            </h3>
            <p style={{ fontSize: '11px', color: '#d4d4d4', margin: '4px 0' }}>نوع بررسی: {analysisResult.type} ({analysisResult.category})</p>
            <p style={{ fontSize: '11px', color: '#f59e0b', margin: '4px 0' }}>وضعیت کلمات: {analysisResult.keywordsIndexed}</p>
            
            <div style={{ marginTop: '10px', borderTop: '1px solid #262626', paddingTop: '8px' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#3b82f6', marginBottom: '4px' }}>۵ رقیب برتر شناسایی شده:</div>
              <ul style={{ margin: '0', paddingRight: '16px', fontSize: '11px', color: '#a3a3a3' }}>
                {analysisResult.competitors.map((comp, idx) => (
                  <li key={idx} style={{ marginBottom: '2px' }}>{comp}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* فوتر امنیتی و حقوقی */}
      <SecurityFooter />
    </div>
  );
}
