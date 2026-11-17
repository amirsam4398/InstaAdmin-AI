import { useState, useEffect } from 'react'
import './App.css'

const districts = Array.from({length:22}, (_,i)=>'منطقه '+(i+1))

const categories = {
  'خبر و رسانه': ['خبرگزاری','سایت خبری','پایگاه تحلیلی','پادکست','یوتیوب خبری'],
  'استخدام': ['ادمین','تولید محتوا','دیجیتال مارکتینگ','منشی','فروشنده'],
  'خدمات زیبایی': ['آرایشگاه زنانه','آرایشگاه مردانه','ناخن','پوست و مو','لیزر'],
  'ساختمانی': ['نقاشی','لوله کشی','برق','کابینت','بازسازی'],
  'خودرو': ['مکانیکی','کارواش','لوازم یدکی'],
  'آموزش': ['زبان','کنکور','موسیقی','کامپیوتر'],
  'خوردنی': ['رستوران','کافه','فست فود'],
  'درمانی': ['دندانپزشکی','پوست','داروخانه'],
  'املاک': ['اجاره','فروش','مشاور املاک'],
  'دیجیتال': ['طراحی سایت','سئو','تولید محتوا','تبلیغات'],
  'فروشگاه': ['پوشاک','موبایل','لوازم خانگی'],
  'خدمات منزل': ['نظافت','تعمیرات','اسباب کشی'],
  'ورزش': ['باشگاه','مربی'],
  'سایر': ['حمل و نقل','مجالس','سایر خدمات']
}

const plans = [
  { id:'free', name:'رایگان', price:'۰', f:['۱ تحلیل کامل','نمودار ۳ لایه سئو','۵ رقیب + کلمات کلیدی','ایده عملی'] },
  { id:'coach', name:'کوچینگ داده', price:'۱,۴۹۰,۰۰۰', f:['تحلیل ماهانه','نمودار پیشرفت','۵ ایده','جلسه ۱۵ دقیقه'] },
  { id:'pro', name:'حرفه‌ای', price:'۲,۹۹۰,۰۰۰', featured:true, f:['نامحدود','رقبا هفتگی','سئو محلی تا کشوری','کوچینگ ۳۰ دقیقه'] },
  { id:'ads', name:'رشد + تبلیغ', price:'۵,۹۰۰,۰۰۰', f:['همه pro','جایگاه تبلیغ','پکیج کمپین'] }
]

function Bar({ value, label, color }) {
  return (
    <div className="bar-wrap">
      <div className="bar-label"><span>{label}</span><span>{value}/100</span></div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: Math.min(100, Math.max(5, value)) + '%', background: color }} />
      </div>
    </div>
  )
}

function buildCompetitors(sub, district, mode) {
  const names = mode === 'ig'
    ? [sub + ' تهران', 'پیج تخصصی ' + sub, sub + ' آنلاین', 'مرجع ' + sub, sub + ' نیوز']
    : [sub + ' رسمی', 'پایگاه ' + sub, sub + ' امروز', 'شبکه ' + sub, 'مدیا ' + sub]
  const places = [district, 'تهران', 'سعادت‌آباد', 'مرکز تهران', 'کشوری']
  return names.map((name, i) => ({
    name,
    city: places[i],
    score: Math.round(55 + Math.random() * 35),
    strategy: mode === 'ig'
      ? ['ریلز خبری روزانه', 'کپشن تحلیلی', 'استوری فوری', 'همکاری محلی', 'هشتگ ترند'][i]
      : ['خبر فوری', 'سئو خبری', 'صفحه موضوعی', 'لینک داخلی', 'نقشه + درباره ما'][i],
    latest: mode === 'ig'
      ? ['آخرین پست: خلاصه رویداد امروز', 'ریلز: ۳ نکته مهم', 'استوری: بروزرسانی', 'پست: مصاحبه کوتاه', 'ریلز: پشت‌صحنه'][i]
      : ['آخرین مقاله: تحلیل روز', 'خبر: تیتر اصلی', 'گزارش: ویژه محلی', 'مقاله: راهنما', 'بروزرسانی صفحه اصلی'][i],
    keywords: mode === 'ig'
      ? ['#' + sub, '#تهران', '#' + district.replace(' ', '_')]
      : [sub + ' تهران', sub + ' ایران', 'اخبار ' + sub, sub + ' ' + district]
  }))
}

export default function App() {
  const [mode, setMode] = useState('web')
  const [ig, setIg] = useState('')
  const [web, setWeb] = useState('')
  const [cat, setCat] = useState('خبر و رسانه')
  const [sub, setSub] = useState('خبرگزاری')
  const [district, setDistrict] = useState('منطقه ۵')
  const [openCat, setOpenCat] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [selected, setSelected] = useState(null)
  const [igLeft, setIgLeft] = useState(() => Number(localStorage.getItem('igLeft') ?? 3))
  const [webLeft, setWebLeft] = useState(() => Number(localStorage.getItem('webLeft') ?? 2))

  useEffect(() => {
    localStorage.setItem('igLeft', String(igLeft))
    localStorage.setItem('webLeft', String(webLeft))
  }, [igLeft, webLeft])
  useEffect(() => { setSub(categories[cat][0]) }, [cat])

  const wa = (t) => 'https://wa.me/989366681963?text=' + encodeURIComponent(t)
  const maps = (q) => 'https://www.google.com/maps/search/' + encodeURIComponent(q)

  const run = () => {
    if (mode === 'ig' && !ig.trim()) return alert('آیدی اینستا را وارد کنید')
    if (mode === 'web' && !web.trim()) return alert('آدرس سایت را وارد کنید')
    if (mode === 'ig' && igLeft <= 0) return alert('اعتبار رایگان اینستا تمام شد')
    if (mode === 'web' && webLeft <= 0) return alert('اعتبار رایگان سایت تمام شد')
    setLoading(true)
    setResult(null)
    setTimeout(() => {
      const seed = (mode === 'ig' ? ig : web).length * 19
      const local = 30 + (seed % 50)
      const province = 25 + (seed % 45)
      const national = 20 + (seed % 40)
      const total = Math.round((local + province + national) / 3)
      const comps = buildCompetitors(sub, district, mode)
      const base = {
        target: (mode === 'ig' ? ig : web).trim(),
        sub, district, score: total,
        seo: { local, province, national },
        swot: {
          s: ['حضور آنلاین فعال', 'پتانسیل در ' + district],
          w: ['ضعف در کلمات محلی', 'سناریوی محتوا نامنظم'],
          o: ['سئو محلی ۲۲ منطقه', 'محتوای موضوعی'],
          t: ['رقبای قوی‌تر در نتایج']
        },
        gaps: [
          'برای «' + sub + ' ' + district + '» محتوای هدفمند کم است',
          'لایه استانی و کشوری جدا برنامه‌ریزی نشده'
        ],
        ideas: [
          'ایده ۱: صفحه/پست ثابت برای ' + district,
          'ایده ۲: پوشش موضوعی هفتگی ' + sub,
          'ایده ۳: مقایسه با ۵ رقیب و تمایز'
        ],
        competitors: comps
      }
      if (mode === 'ig') {
        setResult({
          ...base, type: 'ig',
          metrics: { reach: 40 + (seed % 40), engage: 20 + (seed % 35), content: 35 + (seed % 40) },
          hashtags: ['#' + sub.replace(/ /g, '_'), '#تهران', '#' + district.replace(' ', '_'), '#خبر']
        })
        setIgLeft(v => v - 1)
      } else {
        setResult({
          ...base, type: 'web',
          console: [
            { k: 'Title', v: 'نیاز به کلمه کلیدی محلی/موضوعی' },
            { k: 'Meta', v: 'ناقص یا ضعیف' },
            { k: 'سرعت', v: (1.4 + (seed % 20) / 10).toFixed(1) + 's' },
            { k: 'نقشه / Business', v: 'بررسی شود' },
            { k: 'صفحه موضوعی', v: 'ناکافی' }
          ],
          keywords: [sub + ' تهران', sub + ' ایران', 'اخبار ' + sub, sub + ' ' + district, 'بهترین ' + sub]
        })
        setWebLeft(v => v - 1)
      }
      setLoading(false)
    }, 1100)
  }

  return (
    <div className="app" dir="rtl">
      <header className="hero">
        <div className="badge">رویال فام | تحلیل داده و کوچینگ</div>
        <h1>Insta<span>Admin</span> AI</h1>
        <p className="lead">نمودار سئو · رقبا · کلمات کلیدی · نقشه</p>
        <p className="sub">برای خبرگزاری، کسب‌وکار محلی و کشوری</p>
        <p className="sub">رایگان: {igLeft} اینستا | {webLeft} سایت</p>
      </header>

      <section className="section">
        <div className="tabs">
          <button className={mode==='ig'?'active':''} onClick={()=>setMode('ig')}>اینستاگرام</button>
          <button className={mode==='web'?'active':''} onClick={()=>setMode('web')}>وب‌سایت</button>
        </div>
        <div className="box">
          {mode==='ig'
            ? <input className="big" value={ig} onChange={e=>setIg(e.target.value)} placeholder="@username" />
            : <input className="big" value={web} onChange={e=>setWeb(e.target.value)} placeholder="https://example.com" />}
          <select className="big" value={cat} onChange={e=>setCat(e.target.value)}>
            {Object.keys(categories).map(c=><option key={c}>{c}</option>)}
          </select>
          <select className="big" value={sub} onChange={e=>setSub(e.target.value)}>
            {categories[cat].map(s=><option key={s}>{s}</option>)}
          </select>
          <select className="big" value={district} onChange={e=>setDistrict(e.target.value)}>
            {districts.map(d=><option key={d}>{d}</option>)}
          </select>
          <button className="btn primary full" onClick={run}>شروع تحلیل + نمودار + ۵ رقیب</button>
          {loading && <p className="loading">در حال ساخت نمودار و جمع‌آوری رقبا...</p>}

          {result && (
            <div className="result">
              <h3>{result.target}</h3>
              <p className="meta-line">{result.sub} · {result.district} · امتیاز <span className="score">{result.score}</span></p>

              <a className="btn map-btn" target="_blank" rel="noreferrer" href={maps(result.sub + ' ' + result.district + ' تهران')}>
                Google Maps — صنف و منطقه
              </a>

              <h4>نمودار ۳ لایه سئو</h4>
              <Bar value={result.seo.local} label={'محلی (' + result.district + ')'} color="#22d3ee" />
              <Bar value={result.seo.province} label="استانی (استان تهران)" color="#818cf8" />
              <Bar value={result.seo.national} label="کشوری" color="#c084fc" />

              {result.metrics && (
                <>
                  <h4>نمودار وضعیت پیج</h4>
                  <Bar value={result.metrics.reach} label="میزان دیده شدن" color="#22d3ee" />
                  <Bar value={result.metrics.engage} label="تعامل" color="#34d399" />
                  <Bar value={result.metrics.content} label="کیفیت محتوا / سناریو" color="#fbbf24" />
                </>
              )}

              <div className="swot">
                <div className="s"><b>قوت</b><ul>{result.swot.s.map((x,i)=><li key={i}>{x}</li>)}</ul></div>
                <div className="w"><b>ضعف</b><ul>{result.swot.w.map((x,i)=><li key={i}>{x}</li>)}</ul></div>
                <div className="o"><b>فرصت</b><ul>{result.swot.o.map((x,i)=><li key={i}>{x}</li>)}</ul></div>
                <div className="t"><b>تهدید</b><ul>{result.swot.t.map((x,i)=><li key={i}>{x}</li>)}</ul></div>
              </div>

              <div className="gap"><b>کمبودها</b><ul>{result.gaps.map((x,i)=><li key={i}>✗ {x}</li>)}</ul></div>
              <h4>ایده‌ها</h4>
              {result.ideas.map((s,i)=><div className="comp" key={i}>{s}</div>)}

              <h4>۵ رقیب · مکان · استراتژی · آخرین محتوا · کلمات</h4>
              {result.competitors.map((c,i)=>(
                <div className="rival" key={i}>
                  <div className="rival-top"><b>{i+1}. {c.name}</b><span className="score">{c.score}</span></div>
                  <Bar value={c.score} label="قدرت نسبی" color="#6366f1" />
                  <div className="rival-meta">📍 {c.city}</div>
                  <div className="rival-meta">🎯 {c.strategy}</div>
                  <div className="rival-meta">📰 {c.latest}</div>
                  <div className="tags">{c.keywords.map(k=><span key={k} className="tag">{k}</span>)}</div>
                  <a className="mini-map" target="_blank" rel="noreferrer" href={maps(c.name + ' ' + c.city)}>نقشه رقیب</a>
                </div>
              ))}

              {result.hashtags && <div className="tags">{result.hashtags.map(t=><span key={t} className="tag">{t}</span>)}</div>}
              {result.keywords && (
                <>
                  <h4>کلمات کلیدی پیشنهادی شما</h4>
                  <div className="tags">{result.keywords.map(t=><span key={t} className="tag">{t}</span>)}</div>
                </>
              )}
              {result.console && result.console.map((r,i)=>(
                <div className="row" key={i}><span>{r.k}</span><span>{r.v}</span></div>
              ))}

              <a href="#plans" className="btn primary full">ادامه با کوچینگ</a>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <h2>دسته‌بندی کامل</h2>
        {Object.keys(categories).map(c=>(
          <div key={c}>
            <button className="cat" onClick={()=>setOpenCat(openCat===c?null:c)}>{c} {openCat===c?'▾':'◂'}</button>
            {openCat===c && (
              <div className="subs">
                {categories[c].map(s=>(
                  <button key={s} className="sub" onClick={()=>{setCat(c);setSub(s);window.scrollTo(0,0)}}>{s}</button>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="section" id="plans">
        <h2>پلن‌ها</h2>
        {plans.map(p=>(
          <div key={p.id} className={'plan'+(p.featured?' featured':'')}>
            {p.featured && <span className="badge-plan">پیشنهادی</span>}
            <h3>{p.name}</h3>
            <div className="price">{p.price}{p.price!=='۰'&&<small> ت/ماه</small>}</div>
            <ul>{p.f.map((x,i)=><li key={i}>{x}</li>)}</ul>
            <button className="btn primary full" onClick={()=>setSelected(p)}>{p.id==='free'?'شروع':'انتخاب'}</button>
          </div>
        ))}
        {selected && selected.id!=='free' && (
          <div className="pay">
            <h3>{selected.name} — {selected.price}</h3>
            <div className="card-num">6104 3389 4180 2312</div>
            <p>امیر سام یعقوبی | ۰۹۳۶۶۶۸۱۹۶۳</p>
            <a className="btn primary" href={wa('پلن '+selected.name+' واریز شد')}>ارسال رسید</a>
          </div>
        )}
      </section>

      <footer>
        <p><b>InstaAdmin AI</b> | رویال فام</p>
        <p>۰۹۳۶۶۶۸۱۹۶۳</p>
      </footer>
    </div>
  )
}
