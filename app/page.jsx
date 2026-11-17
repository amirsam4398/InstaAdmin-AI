'use client';
import React, { useState } from 'react';
import SecurityFooter from '../components/SecurityFooter';

export default function Home() {
  const [tab, setTab] = useState('website'); // 'website' | 'instagram'
  const [urlInput, setUrlInput] = useState('');
  const [category, setCategory] = useState('اخبار و رسانه');
  const [subCategory, setSubCategory] = useState('خبرگزاری');
  const [region, setRegion] = useState('منطقه ۱ (تهران)');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!urlInput) {
      alert('لطفاً آدرس یا شناسه هدف را وارد کنید.');
      return;
    }
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setLoading(false);
      setResult({
        target: urlInput,
        mode: tab === 'website' ? 'تحلیل سئو وب‌سایت' : 'تحلیل الگوریتم اینستاگرام',
        meta: `${category} » ${subCategory} [${region}]`,
        keywords: '۱۰,۰۰۰ کلیدواژه فعال (ایندکس روزانه)',
        competitors: [
          '۱. رقیب پیشتاز منطقه‌ای (امتیاز سئو: ۹۶٪)',
          '۲. مرجع تخصصی همکار (امتیاز سئو: ۸۹٪)',
          '۳. شبکه اطلاع‌رسانی برتر (امتیاز سئو: ۸۴٪)',
          '۴. پایگاه خبری محلی (امتیاز سئو: ۷۸٪)',
          '۵. استارتاپ رقیب (امتیاز سئو: ۷۲٪)'
        ]
      });
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white p-4 md:p-8 flex flex-col justify-between selection:bg-amber-500 selection:text-black">
      <div className="max-w-2xl mx-auto w-full">
        
        {/* هدر بالایی و برندینگ رویال فام */}
        <header className="border-b border-neutral-800 pb-5 mb-6 text-center">
          <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs px-3 py-1 rounded-full mb-2 font-mono">
            استارتاپ فناورانه رویال فام | مدیریت: امیر سام یعقوبی
          </div>
          <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
            InstaAdmin AI - Enterprise
          </h1>
          <p className="text-xs text-neutral-400 mt-1">
            سیستم اتوماسیون سئو پیشرفته (۱۰,۰۰۰ کلمه کلیدی) و هوش مصنوعی تحلیل رقبا
          </p>
        </header>

        {/* سوییچ تب‌های وب‌سایت و اینستاگرام (کاملاً جداگانه) */}
        <div className="grid grid-cols-2 gap-2 bg-neutral-900 p-1.5 rounded-2xl border border-neutral-800 mb-6">
          <button
            type="button"
            onClick={() => { setTab('website'); setResult(null); }}
            className={`py-3 rounded-xl font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-2 ${
              tab === 'website' 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 shadow-lg' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            🌐 تحلیل وب‌سایت
          </button>
          <button
            type="button"
            onClick={() => { setTab('instagram'); setResult(null); }}
            className={`py-3 rounded-xl font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-2 ${
              tab === 'instagram' 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 shadow-lg' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            📱 تحلیل اینستاگرام
          </button>
        </div>

        {/* پنل فرم تحلیل اختصاصی هر تب */}
        <div className="bg-neutral-900/90 border border-neutral-800 p-6 rounded-2xl shadow-2xl mb-6 backdrop-blur-md">
          <h2 className="text-sm font-bold text-neutral-200 mb-4 border-b border-neutral-800 pb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            {tab === 'website' ? 'تنظیمات موتور سئو و وب‌سایت' : 'تنظیمات الگوریتم و پیج اینستاگرام'}
          </h2>

          <form onSubmit={handleAnalyze} className="space-y-4">
            <div>
              <label className="text-xs text-neutral-400 block mb-1.5 font-medium">
                {tab === 'website' ? 'آدرس وب‌سایت (URL):' : 'شناسه یا لینک پیج اینستاگرام:'}
              </label>
              <input 
                type="text" 
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder={tab === 'website' ? 'https://example.com' : '@username یا لینک پیج'} 
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-xs md:text-sm text-neutral-100 focus:border-amber-500 outline-none transition-all shadow-inner"
              />
            </div>

            {/* دسته‌بندی‌ها و فیلترهای دیواری پیشرفته */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-neutral-400 block mb-1.5 font-medium">حوزه فعالیت اصلی</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-neutral-200 outline-none focus:border-amber-500"
                >
                  <option value="اخبار و رسانه">اخبار و رسانه</option>
                  <option value="کسب‌وکار محلی">کسب‌وکار محلی</option>
                  <option value="فروشگاهی و تجاری">فروشگاهی و تجاری</option>
                  <option value="خدماتی و فنی">خدماتی و فنی</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-neutral-400 block mb-1.5 font-medium">نوع دسته / رسته</label>
                <select 
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-neutral-200 outline-none focus:border-amber-500"
                >
                  {tab === 'website' ? (
                    <>
                      <option value="خبرگزاری">خبرگزاری و پایگاه خبری</option>
                      <option value="سایت شرکتی">سایت شرکتی و خدماتی</option>
                      <option value="فروشگاه اینترنتی">فروشگاه اینترنتی</option>
                    </>
                  ) : (
                    <>
                      <option value="پیج بیزینس">پیج تجاری و خدماتی</option>
                      <option value="بلاگر و اینفلونسر">بلاگر / اینفلونسر</option>
                      <option value="فروشگاه اینستا">فروشگاه آنلاین اینستاگرام</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs text-neutral-400 block mb-1.5 font-medium">محدوده جغرافیایی (سئو محلی و استانی)</label>
              <select 
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-neutral-200 outline-none focus:border-amber-500"
              >
                <option value="منطقه ۱ (تهران)">منطقه ۱ (تهران و کلان‌شهرها)</option>
                <option value="منطقه ۲ (غرب استان)">منطقه ۲ (غرب استان / اسلامشهر)</option>
                <option value="سراسر کشور">سراسر کشور (۳۱ استان)</option>
              </select>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-black py-3.5 rounded-xl text-xs md:text-sm shadow-xl hover:opacity-95 transition-all cursor-pointer mt-2"
            >
              {loading ? 'در حال پردازش هوش مصنوعی و ردیابی کلمات...' : 'شروع تحلیل جامع + نمودار + ۵ رقیب برتر'}
            </button>
          </form>
        </div>

        {/* کادر نمایش نتایج موتور تحلیل */}
        {result && (
          <div className="bg-neutral-900 border border-emerald-500/50 p-5 rounded-2xl shadow-2xl mb-6 animate-fade-in">
            <h3 className="text-xs md:text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2">
              <span>✅</span> گزارش تحلیل هوشمند: <span className="text-white underline">{result.target}</span>
            </h3>
            <div className="space-y-1 text-xs text-neutral-300 font-mono mb-3">
              <p>📌 حالت موتور: <span className="text-amber-400">{result.mode}</span></p>
              <p>🏷️ دسته‌بندی: {result.meta}</p>
              <p>⚡ وضعیت کلمات کلیدی: <span className="text-emerald-400">{result.keywords}</span></p>
            </div>

            <div className="border-t border-neutral-800 pt-3">
              <div className="text-xs font-bold text-blue-400 mb-2">۵ رقیب برتر شناسایی‌شده در منطقه:</div>
              <ul className="space-y-1 text-xs text-neutral-400">
                {result.competitors.map((comp, idx) => (
                  <li key={idx} className="bg-neutral-950/60 px-3 py-1.5 rounded-lg border border-neutral-800/60">
                    {comp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>

      {/* فوتر امنیتی و حقوقی */}
      <SecurityFooter />
    </main>
  );
}
