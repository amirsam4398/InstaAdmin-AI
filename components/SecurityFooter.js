export default function SecurityFooter() {
  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-[#222] text-gray-400 py-8 px-4 mt-12 font-sans text-xs">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* بخش اعتماد و امنیت سطح بالا */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-right">
          <div className="bg-[#151515] p-4 rounded-xl border border-[#262626]">
            <h3 className="text-cyan-400 font-bold mb-1">تضمین امنیت و حریم خصوصی</h3>
            <p className="text-gray-400 text-[11px]">مجهز به رمزنگاری نامتقارن و لبه (Edge Encryption) جهت جلوگیری از شنود و نفوذ.</p>
          </div>
          <div className="bg-[#151515] p-4 rounded-xl border border-[#262626]">
            <h3 className="text-cyan-400 font-bold mb-1">محافظت ضد مهندسی معکوس</h3>
            <p className="text-gray-400 text-[11px]">کدهای فرانت‌اند و بک‌اند کاملاً مبهم‌سازی شده و غیرقابل شناسایی با ابزارهای تحلیل.</p>
          </div>
          <div className="bg-[#151515] p-4 rounded-xl border border-[#262626]">
            <h3 className="text-cyan-400 font-bold mb-1">پشتیبانی و گارانتی رسمی</h3>
            <p className="text-gray-400 text-[11px]">ارائه خدمات زیر نظر استارتاپ فناورانه هوش مصنوعی رویال فام با ضمانت کیفیت.</p>
          </div>
        </div>

        {/* خط قرمز اخطار حقوقی */}
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
  );
}
