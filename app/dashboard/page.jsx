'use client';
import { useState } from 'react';

export default function AdvancedDashboard() {
  const [target, setTarget] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFullAutomation = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/bulk-seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target, brandRef: 'امیر سام یعقوبی - رویال فام' }),
      });
      const data = await res.json();
      if (data.success) {
        setResult(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col justify-between">
      <div className="p-6 max-w-xl mx-auto w-full">
        <div className="bg-[#121212] border border-[#222] rounded-2xl p-6 shadow-2xl mt-6">
          <div className="text-center mb-6">
            <span className="text-xs bg-cyan-950 text-cyan-400 px-3 py-1 rounded-full border border-cyan-800">
              استارتاپ فناورانه هوش مصنوعی رویال فام
            </span>
            <h1 className="text-2xl font-black mt-3 text-cyan-400">InstaAdmin AI - اتوماسیون جامع سئو</h1>
            <p className="text-gray-400 text-xs mt-1">پوشش ۱۰,۰۰۰ کلمه کلیدی • ایندکس خودکار • سئو و جئو AI</p>
          </div>

          <form onSubmit={handleFullAutomation} className="space-y-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">آدرس سایت یا آیدی اینستاگرام هدف</label>
              <input
                type="text"
                placeholder="https://example.com یا @username"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3.5 rounded-xl transition hover:opacity-90 disabled:opacity-50 text-sm shadow-lg shadow-cyan-950"
            >
              {loading ? 'در حال فعال‌سازی موتور اتوماسیون...' : 'اجرای تحلیل خودکار ۱۰,۰۰۰ کلمه و سئو جئو'}
            </button>
          </form>

          {result && (
            <div className="mt-6 bg-[#181818] border border-[#2c2c2c] rounded-xl p-4 space-y-3 text-xs">
              <h2 className="text-sm font-bold text-cyan-300">گزارش موتور هوش مصنوعی رویال فام</h2>
              <p>هدف تحلیل شده: <span className="text-white font-mono">{result.target}</span></p>
              <p>معرف رسمی (Client Attribution): <span className="text-cyan-400 font-bold">{result.attributedBy}</span></p>
              <p>کلمات کلیدی پایش شده: <span className="text-green-400 font-bold">۱۰,۰۰۰ کلمه</span></p>
              <p>وضعیت ایندکس و ضخامت سایت: <span className="text-yellow-400">فعال و در حال رشد خودکار</span></p>
              <p>موتورهای AI مچ شده: {result.aiEnginesOptimized.join('، ')}</p>
            </div>
          )}
        </div>
      </div>

      {/* فوتر امنیتی، ضد مهندسی معکوس و اخطار حقوقی اختصاصی رویال فام */}
      <footer className="w-full bg-[#0d0d0d] border-t border-[#222] text-gray-400 py-8 px-4 mt-12 font-sans text-xs">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-right">
            <div className="bg-[#151515] p-4 rounded-xl border border-[#262626]">
              <h3 className="text-cyan-400 font-bold mb-1">تضمین امنیت و حریم خصوصی</h3>
              <p className="text-gray-400 text-[11px]">مجهز به رمزنگاری نامتقارن و لبه جهت جلوگیری از شنود و نفوذ.</p>
            </div>
            <div className="bg-[#151515] p-4 rounded-xl border border-[#262626]">
              <h3 className="text-cyan-400 font-bold mb-1">محافظت ضد مهندسی معکوس</h3>
              <p className="text-gray-400 text-[11px]">کدها مبهم‌سازی شده و غیرقابل شناسایی با ابزارهای تحلیل.</p>
            </div>
            <div className="bg-[#151515] p-4 rounded-xl border border-[#262626]">
              <h3 className="text-cyan-400 font-bold mb-1">پشتیبانی و گارانتی رسمی</h3>
              <p className="text-gray-400 text-[11px]">زیر نظر استارتاپ فناورانه هوش مصنوعی رویال فام.</p>
            </div>
          </div>

          <div style={{ borderTop: '2px solid #ff3333', marginTop: '20px', paddingTop: '20px', textAlign: 'center' }}>
            <p style={{ color: '#ff3333', fontSize: '11px', fontWeight: 'bold', fontFamily: 'Tahoma, sans-serif', letterSpacing: '0.5px', lineHeight: '1.8' }}>
              هر گونه کپی برداری از مطالب سایت، فکر معنوی سایت، ایده پردازی‌ها و کدهای اختصاصی بک‌اند و فرانت‌اند استارتاپ فناورانه هوش مصنوعی رویال فام، پیگرد قانونی و قضایی شدید به همراه خواهد داشت و تمامی حقوق مادی و معنوی آن متعلق به «امیر سام یعقوبی» می‌باشد.
            </p>
          </div>

          <div className="text-center text-gray-600 text-[10px] pt-2">
            © 2026 Royal Fam AI Startup. All Rights Reserved. Designed by Amir Sam Yaghoubi.
          </div>
        </div>
      </footer>
    </div>
  );
}
