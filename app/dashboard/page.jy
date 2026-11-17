'use client';
import { useState } from 'react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('website');
  const [targetInput, setTargetInput] = useState('');
  const [category, setCategory] = useState('خبر و رسانه');
  const [region, setRegion] = useState('منطقه ۱');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);

  const handleRunAnalysis = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: activeTab, target: targetInput, category, region }),
      });
      const data = await res.json();
      if (data.success) {
        setReport(data.data);
        // ذخیره در LocalStorage برای بخش سیو سایت
        const saved = JSON.parse(localStorage.getItem('instaadmin_saved') || '[]');
        localStorage.setItem('instaadmin_saved', JSON.stringify([data.data, ...saved]));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans">
      <div className="max-w-xl mx-auto bg-[#121212] border border-[#222] rounded-2xl p-6 shadow-2xl">
        <div className="text-center mb-6">
          <span className="text-xs bg-cyan-950 text-cyan-400 px-3 py-1 rounded-full border border-cyan-800">رویال فام | تحلیل داده و کوچینگ</span>
          <h1 className="text-2xl font-black mt-3 text-cyan-400">InstaAdmin AI</h1>
          <p className="text-gray-400 text-xs mt-1">نمودار · رقبا · کلمات کلیدی · نقشه</p>
        </div>

        <div className="flex bg-[#1a1a1a] p-1 rounded-xl mb-6 border border-[#333]">
          <button
            type="button"
            onClick={() => setActiveTab('website')}
            className={`flex-1 py-2 text-sm rounded-lg font-medium transition ${activeTab === 'website' ? 'bg-cyan-600 text-white' : 'text-gray-400'}`}
          >
            وب‌سایت
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('instagram')}
            className={`flex-1 py-2 text-sm rounded-lg font-medium transition ${activeTab === 'instagram' ? 'bg-cyan-600 text-white' : 'text-gray-400'}`}
          >
            اینستاگرام
          </button>
        </div>

        <form onSubmit={handleRunAnalysis} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">{activeTab === 'website' ? 'آدرس وب‌سایت' : 'آیدی اینستاگرام'}</label>
            <input
              type="text"
              placeholder={activeTab === 'website' ? 'https://example.com' : '@username'}
              value={targetInput}
              onChange={(e) => setTargetInput(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">دسته‌بندی</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="خبر و رسانه">خبر و رسانه</option>
              <option value="کسب‌وکار محلی">کسب‌وکار محلی</option>
              <option value="فروشگاهی">فروشگاهی</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">منطقه / استان</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="منطقه ۱">منطقه ۱ تهران</option>
              <option value="تهران مرکزی">تهران مرکزی</option>
              <option value="کشوری">سراسر کشور</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3.5 rounded-xl transition hover:opacity-90 disabled:opacity-50 text-sm shadow-lg shadow-cyan-950"
          >
            {loading ? 'در حال تحلیل هوشمند...' : 'شروع تحلیل + نمودار + ۵ رقیب'}
          </button>
        </form>

        {report && (
          <div className="mt-6 bg-[#181818] border border-[#2c2c2c] rounded-xl p-4 space-y-3">
            <h2 className="text-sm font-bold text-cyan-300">نتیجه ذخیره و تحلیل موفق</h2>
            <div className="text-xs text-gray-300 space-y-1">
              <p>هدف: <span className="text-white font-mono">{report.target}</span></p>
              <p>امتیاز سئو/تعامل: <span className="text-green-400 font-bold">{report.score} / 100</span></p>
              <p>رقبای شناسایی‌شده: {report.competitors.join('، ')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
