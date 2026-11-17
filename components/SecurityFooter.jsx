import React from 'react';

export default function SecurityFooter() {
  return (
    <footer className="w-full bg-neutral-950 border-t border-red-900/50 py-6 px-4 mt-12 text-center text-xs text-neutral-400">
      <div className="max-w-4xl mx-auto space-y-2">
        <div className="text-red-400 font-bold tracking-wide border border-red-600/40 bg-red-950/20 py-2 px-3 rounded-lg">
          ⚠️ اخطار قانونی: تمامی حقوق سورس‌کد، الگوریتم‌های هوش مصنوعی و ساختار پلتفرم متعلق به «استارتاپ فناورانه هوش مصنوعی رویال فام» (به مدیریت امیر سام یعقوبی) است. هرگونه کپی‌برداری، مهندسی معکوس یا سوءاستفاده پیگرد قانونی و قضایی شدید به همراه خواهد داشت.
        </div>
        <p className="text-neutral-500">
          InstaAdmin AI Platform &copy; 2026 | Royal Fam AI Startup. All Rights Reserved.
        </p>
        <div className="text-amber-500 font-mono">
          پشتیبانی و ارتباط مستقیم: 09366681963
        </div>
      </div>
    </footer>
  );
}
