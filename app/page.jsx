import React from 'react';
import SecurityFooter from '../components/SecurityFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-4 flex flex-col justify-between font-sans">
      {/* هدر و برندینگ استارتاپ */}
      <div>
        <header className="flex flex-col md:flex-row justify-between items-center border-b border-neutral-800 pb-4 mb-6 gap-2">
          <div className="text-center md:text-right">
            <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full">
              رویال فام | تحلیل داده و کوچینگ
            </span>
            <h1 className="text-2xl font-black bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mt-2">
              InstaAdmin AI
            </h1>
            <p className="text-xs text-neutral-400 mt-1">
              سیستم جامع تحلیل سئو (۱۰,۰۰۰ کلمه کلیدی)، رقبا و ایندکس هوشمند محلی و کشوری
            </p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-xl text-xs text-emerald-400">
            پورت پایدار: ۵۰۳۰ | آماده‌ی استقرار
          </div>
        </header>

        {/* بخش گزارش‌ها و کارت‌های آمار */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
            <h3 className="text-xs text-neutral-400">کلمات کلیدی فعال</h3>
            <p className="text-xl font-bold text-amber-400 mt-1">۱۰,۰۰۰ کلیدواژه</p>
            <span className="text-[10px] text-emerald-400 mt-1 block">ایندکس روزانه و خودکار</span>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
            <h3 className="text-xs text-neutral-400">پوشش رقبا</h3>
            <p className="text-xl font-bold text-blue-400 mt-1">۳۱ استان / ۲۲ منطقه</p>
            <span className="text-[10px] text-neutral-400 mt-1 block">بنچمارک و سئو محلی</span>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
            <h3 className="text-xs text-neutral-400">درگاه پرداخت امن</h3>
            <p className="text-xl font-bold text-emerald-400 mt-1">کارت به کارت بانک ملی</p>
            <span className="text-[10px] text-neutral-400 mt-1 block">تایید فیش در واتساپ و بله</span>
          </div>
        </div>

        {/* فرم تحلیل و ابزارها */}
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl mb-6 shadow-xl">
          <h2 className="text-sm font-bold text-neutral-200 mb-4 border-b border-neutral-800 pb-2">
            شروع تحلیل هوشمند و ردیابی کلمات
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-neutral-400 block mb-1">آدرس وب‌سایت یا پیج اینستاگرام</label>
              <input 
                type="text" 
                placeholder="https://example.com" 
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-neutral-200 focus:border-amber-500 outline-none"
              />
            </div>
            <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold py-3 rounded-xl text-sm shadow-lg hover:opacity-95 transition-all">
              شروع تحلیل + نمودار + ۵ رقیب برتر
            </button>
          </div>
        </div>
      </div>

      {/* فوتر امنیتی و اخطار قانونی اجباری */}
      <SecurityFooter />
    </div>
  );
}
