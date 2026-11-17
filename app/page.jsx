import React from 'react';
import SecurityFooter from '../components/SecurityFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6 flex flex-col justify-between selection:bg-amber-500 selection:text-neutral-950">
      {/* هدر و معماری DevOps */}
      <div className="max-w-4xl mx-auto w-full">
        <header className="flex flex-col md:flex-row justify-between items-center border-b border-neutral-800 pb-6 mb-8 gap-4">
          <div>
            <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs px-3 py-1 rounded-full mb-2">
              استارتاپ فناورانه هوش مصنوعی رویال فام | مدیریت: امیر سام یعقوبی
            </div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              InstaAdmin AI - Enterprise Edition
            </h1>
            <p className="text-sm text-neutral-400 mt-1">
              پلتفرم جامع اتوماسیون سئو (۱۰,۰۰۰ کلمه کلیدی)، تحلیل رقبا و سیستم‌های امنیتی DevOps
            </p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-xl text-xs font-mono text-emerald-400 shadow-inner">
            DevOps Node: Port 5030 [Active]
          </div>
        </header>

        {/* کارت‌های آماری و قابلیت‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-neutral-900/80 border border-neutral-800 p-5 rounded-2xl shadow-lg">
            <h3 className="text-xs text-neutral-400 font-medium">موتور سئو پیشرفته</h3>
            <p className="text-2xl font-bold text-amber-400 mt-2">۱۰,۰۰۰ کلیدواژه</p>
            <span className="text-xs text-emerald-400 mt-1 block">ایندکس روزانه و خودکار</span>
          </div>
          <div className="bg-neutral-900/80 border border-neutral-800 p-5 rounded-2xl shadow-lg">
            <h3 className="text-xs text-neutral-400 font-medium">پوشش جغرافیایی</h3>
            <p className="text-2xl font-bold text-blue-400 mt-2">۳۱ استان / ۲۲ منطقه</p>
            <span className="text-xs text-neutral-400 mt-1 block">بنچمارک و ردیابی محلی</span>
          </div>
          <div className="bg-neutral-900/80 border border-neutral-800 p-5 rounded-2xl shadow-lg">
            <h3 className="text-xs text-neutral-400 font-medium">درگاه پرداخت امن</h3>
            <p className="text-2xl font-bold text-emerald-400 mt-2">کارت به کارت بانک ملی</p>
            <span className="text-xs text-neutral-400 mt-1 block">تایید خودکار فیش (واتساپ/بله)</span>
          </div>
        </div>

        {/* فرم اصلی تحلیل */}
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl mb-8 shadow-2xl">
          <h2 className="text-base font-bold text-neutral-200 mb-4 border-b border-neutral-800 pb-2">
            شروع تحلیل هوشمند و ردیابی رقبا
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-neutral-400 block mb-1">آدرس وب‌سایت یا شناسه پیج اینستاگرام</label>
              <input 
                type="text" 
                placeholder="https://example.com" 
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 focus:border-amber-500 outline-none transition-all"
              />
            </div>
            <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold py-3.5 rounded-xl text-sm shadow-lg hover:opacity-95 transition-all">
              اجرای تحلیل جامع + نمودار + ۵ رقیب برتر
            </button>
          </div>
        </div>

        {/* بخش قابلیت‌های امنیتی و ضد مهندسی معکوس */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl">
            <h4 className="text-xs font-bold text-amber-400 mb-1">🛡️ رمزنگاری لبه (Edge Encryption)</h4>
            <p className="text-xs text-neutral-400">مجهز به رمزنگاری نامتقارن و لبه جهت جلوگیری کامل از شنود، استخراج دیتا و نفوذ به سرور.</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl">
            <h4 className="text-xs font-bold text-amber-400 mb-1">🔒 حفاظت ضد مهندسی معکوس و Wappalyzer</h4>
            <p className="text-xs text-neutral-400">کدهای فرانت‌اند و بک‌اند کاملاً مبهم‌سازی‌شده (Obfuscated) و غیرقابل شناسایی توسط ابزارهای تحلیل تکنولوژی.</p>
          </div>
        </div>
      </div>

      {/* فوتر امنیتی و قانونی */}
      <SecurityFooter />
    </main>
  );
}
