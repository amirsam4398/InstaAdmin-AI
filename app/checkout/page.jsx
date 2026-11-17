'use client';
import { useState } from 'react';

export default function CheckoutPage() {
  const [target, setTarget] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('10000_keywords');
  const [customerPhone, setCustomerPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkoutData, setCheckoutData] = useState(null);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // شبیه‌سازی پردازش و آماده‌سازی اطلاعات پرداخت اختصاصی رویال فام
    setTimeout(() => {
      const planTitle = selectedPlan === '10000_keywords' 
        ? 'پلن اتوماسیون جامع ۱۰,۰۰۰ کلمه کلیدی و سئو جئو' 
        : 'پلن هوش مصنوعی اینستاگرام و رقبا';
      
      const priceVal = selectedPlan === '10000_keywords' ? '۲,۹۰۰,۰۰۰ تومان' : '۱,۸۰۰,۰۰۰ تومان';

      const paymentInfo = {
        bankName: 'بانک ملت',
        cardHolder: 'امیر سام (میثم) یعقوبی حسنعلی ده',
        cardNumber: '6104338641802312',
        targetPhone: '09366681963',
      };

      const notificationMessage = `درخواست خرید پلن از سامانه هوش مصنوعی رویال فام!\nپلن: ${planTitle}\nمبلغ: ${priceVal}\nسایت/پیج هدف: ${target}\nشماره تماس مشتری: ${customerPhone}\nلطفاً فیش واریزی به کارت ${paymentInfo.cardNumber} را بررسی فرمایید.`;

      const whatsappLink = `https://wa.me/989366681963?text=${encodeURIComponent(notificationMessage)}`;
      const baleLink = `https://ble.ir/989366681963?text=${encodeURIComponent(notificationMessage)}`;

      setCheckoutData({
        planTitle,
        priceVal,
        paymentInfo,
        whatsappLink,
        baleLink,
        brand: 'استارتاپ فناورانه هوش مصنوعی رویال فام - توسعه‌دهنده: امیر سام یعقوبی'
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans flex items-center justify-center">
      <div className="max-w-lg w-full bg-[#121212] border border-[#222] rounded-2xl p-6 shadow-2xl">
        <div className="text-center mb-6">
          <span className="text-xs bg-cyan-950 text-cyan-400 px-3 py-1 rounded-full border border-cyan-800">
            استارتاپ فناورانه هوش مصنوعی رویال فام
          </span>
          <h1 className="text-2xl font-black mt-3 text-cyan-400">تکمیل خرید و فعال‌سازی هوشمند</h1>
          <p className="text-gray-400 text-xs mt-1">مدیر و توسعه‌دهنده: امیر سام یعقوبی</p>
        </div>

        {!checkoutData ? (
          <form onSubmit={handleCheckout} className="space-y-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">آدرس وب‌سایت یا آیدی اینستاگرام هدف</label>
              <input
                type="text"
                placeholder="https://example.com یا @username"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">شماره تماس شما (جهت پشتیبانی و تایید)</label>
              <input
                type="text"
                placeholder="09123456789"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">انتخاب پلن تخصصی</label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="10000_keywords">پلن اتوماسیون ۱۰,۰۰۰ کلمه کلیدی و سئو جئو (۲,۹۰۰,۰۰۰ تومان)</option>
                <option value="instagram_growth">پلن هوش مصنوعی اینستاگرام و رقبا (۱,۸۰۰,۰۰۰ تومان)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3.5 rounded-xl transition hover:opacity-90 disabled:opacity-50 text-sm shadow-lg shadow-cyan-950"
            >
              {loading ? 'در حال صدور فاکتور و اتصال به درگاه...' : 'مرحله بعد: دریافت اطلاعات کارت واریز'}
            </button>
          </form>
        ) : (
          <div className="space-y-4 text-xs animate-fadeIn">
            <div className="bg-[#181818] border border-cyan-800 rounded-xl p-4 space-y-2">
              <h2 className="text-sm font-bold text-cyan-300">جزئیات سفارش شما</h2>
              <p className="text-gray-300">پلن انتخابی: <span className="text-white font-bold">{checkoutData.planTitle}</span></p>
              <p className="text-gray-300">مبلغ قابل پرداخت: <span className="text-green-400 font-bold">{checkoutData.priceVal}</span></p>
            </div>

            <div className="bg-[#202020] border border-yellow-700/50 rounded-xl p-4 space-y-2">
              <h2 className="text-sm font-bold text-yellow-400">اطلاعات کارت بانکی جهت واریز وجه</h2>
              <p className="text-gray-300">بانک: <span className="text-white font-bold">{checkoutData.paymentInfo.bankName}</span></p>
              <p className="text-gray-300">به نام: <span className="text-cyan-400 font-bold">{checkoutData.paymentInfo.cardHolder}</span></p>
              <p className="text-gray-300">شماره کارت:</p>
              <div className="bg-black/40 p-3 rounded-lg text-center">
                <span className="text-yellow-400 font-mono font-black text-lg tracking-widest">{checkoutData.paymentInfo.cardNumber}</span>
              </div>
            </div>

            <p className="text-gray-400 text-center">لطفاً پس از واریز وجه، فیش بانکی را جهت تایید فوری مستقیماً به واتساپ یا بله ارسال نمایید:</p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={checkoutData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-600 text-center py-3 rounded-xl font-bold text-white transition text-xs flex items-center justify-center shadow-lg"
              >
                ارسال فیش به واتساپ
              </a>
              <a
                href={checkoutData.baleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-600 text-center py-3 rounded-xl font-bold text-white transition text-xs flex items-center justify-center shadow-lg"
              >
                ارسال فیش به بله
              </a>
            </div>

            <button
              onClick={() => setCheckoutData(null)}
              className="w-full bg-[#222] hover:bg-[#333] text-gray-400 py-2.5 rounded-xl transition text-center mt-2"
            >
              بازگشت و اصلاح اطلاعات
            </button>

            <div className="text-center text-gray-500 pt-2 border-t border-[#2c2c2c]">
              {checkoutData.brand}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
