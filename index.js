// ===== INTRO SPEECH =====
const speeches = [
  { title: "WELCOME!", text: "Welcome to US Digital Marketing Services — where data-driven strategy meets bold creative execution. We turn advertising budgets into exponential business growth." },
  { title: "FULL-FUNNEL CAMPAIGNS", text: "🏪 Whether you run a clinic, gym, salon, restaurant, or real estate firm — we build precision-targeted campaigns that bring the right customers directly to your business, every single day." },
  { title: "GOOGLE ADS", text: "🔍 When high-intent customers search for your service, YOUR brand appears first. Our Google Ads campaigns are engineered for maximum conversion — capturing buyers at the exact moment they are ready to act." },
  { title: "SOCIAL MEDIA MASTERY", text: "📱 We craft scroll-stopping Instagram and Facebook campaigns powered by advanced audience targeting. The result: more brand awareness, more enquiries, more revenue — consistently." },
  { title: "YOUTUBE & VIDEO ADS", text: "▶️ Reach 2 billion+ YouTube users with cinematic video ads placed precisely in front of your target audience. Every impression builds brand authority and drives real business outcomes." },
  { title: "PROVEN RESULTS", text: "📊 163 million+ leads generated. 974 million+ people reached. 863% average ROI delivered. These are not promises — they are verified results from hundreds of businesses we have scaled since 2020." },
  { title: "START YOUR GROWTH NOW", text: "🚀 Ready to scale? Select any plan on this page to open our secure enquiry form. Our experts will design your personalised campaign strategy within 24 hours. Contact: +91 9630715686" }
];

let speechIdx = 0;
let introTimer;
const totalTime = 56000;
const perSpeech = totalTime / speeches.length;
const WELCOME_PHASE = 3200;
const TRANSITION   = 900;

(function spawnSparks(){
  const wrap = document.getElementById('intro-welcome');
  if(!wrap) return;
  const cols = ['rgba(59,130,246,0.8)','rgba(255,255,255,0.6)','rgba(232,25,44,0.65)','rgba(30,64,175,0.75)','rgba(147,197,253,0.7)'];
  for(let i=0;i<35;i++){
    const s = document.createElement('div');
    s.className = 'intro-spark';
    const sz = (Math.random()*4+1.5).toFixed(1);
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;`
      +`--sz:${sz}px;--col:${cols[i%cols.length]};`
      +`--d:${(Math.random()*4+3).toFixed(1)}s;--dl:-${(Math.random()*5).toFixed(1)}s;`;
    wrap.appendChild(s);
  }
})();

function runIntro() {
  const welcomeEl = document.getElementById('intro-welcome');
  const speechEl  = document.getElementById('intro-speech');
  const fill  = document.getElementById('progress-fill');
  const title = document.getElementById('speech-title');
  const text  = document.getElementById('speech-text');

  introTimer = setTimeout(() => {
    welcomeEl.classList.add('exit');
    setTimeout(() => {
      welcomeEl.style.display = 'none';
      speechEl.classList.add('show');
      startSpeeches();
    }, TRANSITION);
  }, WELCOME_PHASE);

  function startSpeeches() {
    const t0 = Date.now();
    function nextSpeech() {
      if (speechIdx >= speeches.length) { skipIntro(); return; }
      title.style.opacity = '0';
      text.style.opacity  = '0';
      setTimeout(() => {
        title.textContent = speeches[speechIdx].title;
        text.textContent  = speeches[speechIdx].text;
        title.style.transition = 'opacity 0.45s ease';
        text.style.transition  = 'opacity 0.45s ease';
        title.style.opacity = '1';
        text.style.opacity  = '1';
        speechIdx++;
        introTimer = speechIdx < speeches.length
          ? setTimeout(nextSpeech, perSpeech)
          : setTimeout(skipIntro,  perSpeech);
      }, 320);
    }
    function updateProgress() {
      const pct = Math.min(((Date.now()-t0) / totalTime) * 100, 100);
      fill.style.width = pct + '%';
      if (pct < 100) requestAnimationFrame(updateProgress);
    }
    nextSpeech();
    requestAnimationFrame(updateProgress);
  }
}

function skipIntro() {
  clearTimeout(introTimer);
  const overlay   = document.getElementById('intro-overlay');
  const welcomeEl = document.getElementById('intro-welcome');
  const speechEl  = document.getElementById('intro-speech');
  if(welcomeEl) welcomeEl.style.animation = 'none';
  if(speechEl)  speechEl.style.transition = 'none';
  overlay.classList.add('fade-out');
  setTimeout(() => { overlay.style.display = 'none'; }, 950);
}

// ===== MENU =====
function toggleMenu() {
  const menu = document.getElementById('side-menu');
  const overlay = document.getElementById('menu-overlay');
  const burger = document.getElementById('hamburger');
  menu.classList.toggle('open');
  overlay.classList.toggle('visible');
  burger.classList.toggle('active');
}

// ===== MOBILE SEARCH =====
var _mobileSearchOpen = false;
function toggleMobileSearch() {
  _mobileSearchOpen = !_mobileSearchOpen;
  var bar = document.getElementById('mobile-search-bar');
  if(_mobileSearchOpen){
    bar.classList.add('visible');
    setTimeout(function(){ document.getElementById('mobileSearchInput').focus(); }, 80);
  } else {
    bar.classList.remove('visible');
    document.getElementById('mobile-search-dropdown').classList.remove('open');
    document.getElementById('mobile-search-dropdown').innerHTML = '';
  }
}
document.addEventListener('click', function(e){
  if(_mobileSearchOpen && !e.target.closest('#mobile-search-bar') && !e.target.closest('#mobSearchToggle')){
    _mobileSearchOpen = false;
    var bar = document.getElementById('mobile-search-bar');
    bar.classList.remove('visible');
    document.getElementById('mobile-search-dropdown').classList.remove('open');
  }
});
function scrollTo(id) { document.getElementById(id).scrollIntoView({behavior:'smooth'}); }

  function switchTab(tab) {
  document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.pay-content').forEach(c => c.classList.remove('active'));
  document.getElementById(tab + '-tab').classList.add('active');
  event.target.classList.add('active');
  /* International tab → open PayPal payment link immediately in new tab */
  if(tab === 'intl') {
    window.open('https://www.paypal.me/UtkarshSingh521', '_blank');
  }
}

let floatOpen = false;
function toggleFloat() {
  floatOpen = !floatOpen;
  const opts = document.getElementById('float-opts');
  opts.style.display = floatOpen ? 'flex' : 'none';
  setTimeout(() => {
    opts.querySelectorAll('.float-option').forEach((el, i) => {
      setTimeout(() => el.classList.toggle('visible', floatOpen), i * 60);
    });
  }, 10);
}

const captions = [
  'GROW YOUR BUSINESS DIGITALLY','REACH MILLIONS OF CUSTOMERS',
  '863% ROI — PROVEN RESULTS','CONTACT US: +91 9630715686',
  '100× GROWTH STARTS HERE','GOOGLE · INSTAGRAM · YOUTUBE · FACEBOOK',
  'EST. 2020 — TRUSTED BY HUNDREDS',
];
let capIdx = 0;
function rotateCaption() {
  const el = document.getElementById('footer-caption');
  el.style.opacity = '0';
  setTimeout(() => {
    capIdx = (capIdx + 1) % captions.length;
    el.textContent = captions[capIdx];
    el.style.opacity = '1';
    el.style.transition = 'opacity 0.5s';
  }, 400);
}
setInterval(rotateCaption, 3000);

function contactWhatsApp(plan) {
  const msg = `Hello, I am interested in the ${plan} digital marketing services plan. Please share more details.`;
  window.open(`https://wa.me/919630715686?text=${encodeURIComponent(msg)}`, '_blank');
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.closest('#stats') || entry.target.querySelector('.stat-num')) {
        animateCounters();
      }
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

runIntro();

/* Custom Cursor */
(function(){
  if(window.matchMedia('(pointer:coarse)').matches) return;
  const cur  = document.createElement('div'); cur.className  = 'cursor';
  const ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.appendChild(cur);
  document.body.appendChild(ring);
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cur.style.left=mx+'px'; cur.style.top=my+'px'; });
  (function animateRing(){
    rx += (mx-rx)*0.11; ry += (my-ry)*0.11;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(animateRing);
  })();
})();

/* Scroll Progress */
(function(){
  const bar = document.createElement('div'); bar.id='scroll-progress';
  document.body.prepend(bar);
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll',()=>{
    const total = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY/total*100)+'%';
    nav.classList.toggle('scrolled', window.scrollY>60);
  },{passive:true});
})();


/* ===== TYPEWRITER HERO SUBTITLE ===== */
(function(){
  var el = document.querySelector('.hero-sub');
  if(!el) return;
  var full = el.textContent;
  el.textContent = '';
  var cursor = document.createElement('span');
  cursor.className = 'tw-cursor';
  el.appendChild(cursor);
  var i = 0;
  function type(){
    if(i <= full.length){
      el.textContent = full.slice(0, i);
      el.appendChild(cursor);
      i++;
      setTimeout(type, i < full.length ? 28 : 0);
    }
  }
  setTimeout(type, 1400);
})();

/* ===== PULSE DOTS on hero stats ===== */
(function(){
  document.querySelectorAll('.hero-stat-item').forEach(function(item){
    var num = item.querySelector('.hero-stat-num');
    if(!num) return;
    var dot = document.createElement('span');
    dot.className = 'hero-metric-dot';
    item.insertBefore(dot, item.firstChild);
  });
})();

/* Hero Orbs */
(function(){
  const hero = document.getElementById('hero');
  if(!hero) return;
  ['orb-red','orb-blue','orb-cyan'].forEach(cls=>{
    const o = document.createElement('div');
    o.className = 'orb '+cls;
    hero.insertBefore(o, hero.firstChild);
  });
})();

/* Hero Particles */
(function(){
  const hero = document.getElementById('hero');
  if(!hero) return;
  const colors=['rgba(232,25,44,0.7)','rgba(10,36,99,0.9)','rgba(34,197,94,0.7)','rgba(6,182,212,0.7)'];
  for(let i=0;i<20;i++){
    const p = document.createElement('div');
    p.className = 'hero-particle';
    const sz = Math.random()*5+2;
    p.style.cssText=`width:${sz}px;height:${sz}px;background:${colors[i%colors.length]};left:${Math.random()*100}%;top:${Math.random()*100}%;--dur:${(Math.random()*10+6).toFixed(1)}s;opacity:${(Math.random()*0.25+0.05).toFixed(2)};animation-delay:${(Math.random()*-10).toFixed(1)}s;`;
    hero.appendChild(p);
  }
})();

/* Parallax */
(function(){
  const heroBg   = document.querySelector('.hero-bg');
  const heroGrid = document.querySelector('.hero-grid');
  const maxScroll = window.innerHeight * 1.2;
  window.addEventListener('scroll', ()=>{
    const s = window.scrollY;
    if(s > maxScroll) return;
    if(heroBg)   heroBg.style.transform   = `translateY(${s * 0.35}px)`;
    if(heroGrid) heroGrid.style.transform = `translateY(${s * 0.12}px)`;
  },{passive:true});
})();

/* 3D Card Tilt */
(function(){
  const selector = '.cat-card,.price-card,.stat-card';
  document.addEventListener('mousemove', e=>{
    document.querySelectorAll(selector).forEach(card=>{
      const r = card.getBoundingClientRect();
      const distX = e.clientX - (r.left+r.width/2);
      const distY = e.clientY - (r.top +r.height/2);
      if(Math.abs(distX)>r.width*1.5 || Math.abs(distY)>r.height*1.5) return;
      const x = (e.clientX-r.left)/r.width;
      const y = (e.clientY-r.top )/r.height;
      const tX = (y-0.5)*12;
      const tY = (x-0.5)*-12;
      card.style.transform = `perspective(900px) rotateX(${tX}deg) rotateY(${tY}deg) translateY(-6px)`;
      card.style.setProperty('--mx',(x*100)+'%');
      card.style.setProperty('--my',(y*100)+'%');
    });
  });
  document.querySelectorAll(selector).forEach(card=>{
    card.addEventListener('mouseleave',()=>{ card.style.transform=''; });
  });
})();

/* Magnetic Buttons */
(function(){
  const sel = '.price-btn,.cat-modal-cta,.wa-btn,.email-btn,.nav-home-btn';
  document.querySelectorAll(sel).forEach(btn=>{
    btn.addEventListener('mousemove',function(e){
      const r = this.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2)  * 0.28;
      const y = (e.clientY - r.top  - r.height/2) * 0.28;
      this.style.transition = 'transform 0.15s ease';
      this.style.transform = `translate(${x}px,${y}px)`;
    });
    btn.addEventListener('mouseleave',function(){
      this.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
      this.style.transform = '';
    });
  });
})();

/* Stagger Grid */
(function(){
  const grids = '.cat-grid,.pricing-grid,.pay-grid,.about-badge-col,.stats-grid';
  const so = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const items = entry.target.children;
      Array.from(items).forEach((child,i)=>{
        child.style.opacity='0';
        child.style.transform='translateY(32px)';
        setTimeout(()=>{
          child.style.transition='opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)';
          child.style.opacity='1';
          child.style.transform='none';
        }, i*70);
      });
      so.unobserve(entry.target);
    });
  },{threshold:0.08});
  document.querySelectorAll(grids).forEach(el=>so.observe(el));
})();

/* ===== BANNER SLIDER ===== */
(function(){
  const slides = document.querySelectorAll('.banner-slide');
  const dotsWrap = document.getElementById('bannerDots');
  const progressBar = document.getElementById('bannerProgress');
  const prevBtn = document.getElementById('bannerPrev');
  const nextBtn = document.getElementById('bannerNext');
  if(!slides.length || !dotsWrap) return;

  let cur = 0;
  let autoTimer, progressTimer;
  const INTERVAL = 2000;

  slides.forEach(function(_,i){
    const d = document.createElement('button');
    d.className = 'banner-dot' + (i===0?' active':'');
    d.setAttribute('aria-label','Slide '+(i+1));
    d.onclick = function(){ clearAutoTimer(); goTo(i); startAuto(); };
    dotsWrap.appendChild(d);
  });

  function getDots(){ return dotsWrap.querySelectorAll('.banner-dot'); }

  function goTo(n){
    slides[cur].classList.remove('active');
    slides[cur].classList.add('prev-out');
    const prevIdx = cur;
    setTimeout(function(){ slides[prevIdx].classList.remove('prev-out'); }, 900);
    getDots()[cur].classList.remove('active');
    cur = ((n % slides.length) + slides.length) % slides.length;
    slides[cur].classList.add('active');
    getDots()[cur].classList.add('active');
    animateProgress();
  }

  function animateProgress(){
    if(!progressBar) return;
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    void progressBar.offsetWidth;
    progressBar.style.transition = 'width ' + INTERVAL + 'ms linear';
    progressBar.style.width = '100%';
  }

  function clearAutoTimer(){ clearInterval(autoTimer); }

  function startAuto(){
    clearAutoTimer();
    autoTimer = setInterval(function(){ goTo(cur+1); }, INTERVAL);
  }

  if(prevBtn) prevBtn.onclick = function(){ clearAutoTimer(); goTo(cur-1); startAuto(); };
  if(nextBtn) nextBtn.onclick = function(){ clearAutoTimer(); goTo(cur+1); startAuto(); };

  animateProgress();
  startAuto();
})();


/* ===== SVC-CARD CLICK DESCRIPTION ===== */
(function(){
  var svcData = {
    'Digital Marketing':{tag:'Full-Funnel Growth',desc:'We design and manage complete full-funnel advertising strategies across Google, Instagram, YouTube, and Facebook — all under one expert roof. Our campaigns are built around your specific business goals, whether that\'s walk-in customers, phone enquiries, website leads, or direct e-commerce sales. We handle everything: audience research, ad creative design, budget allocation, A/B testing, and continuous optimisation every single day. Every campaign is tracked in real time with transparent reporting showing exactly how your investment is working. From a local startup to an established brand, we have the tools and expertise to multiply your customer base. Our data-driven approach has delivered 863% average ROI across hundreds of campaigns since 2020.',wa:'Digital Marketing'},
    'Medical Clinics':{tag:'Healthcare Advertising',desc:'We help medical clinics and healthcare centres get more appointment bookings through precision-targeted Google Ads and local SEO strategies. When a patient searches for a doctor, specialist, or clinic near them, your practice appears at the very top — ahead of every competitor. We create highly specific campaigns targeting the exact medical services you offer, in the exact location you serve. Our healthcare ad creatives are designed to build trust, highlight expertise, and make booking an appointment the natural next step. We have helped clinics grow from 10 new patients per month to over 200, using smart digital advertising. Every campaign follows medical advertising guidelines while maximising your return on every rupee spent.',wa:'Medical Clinic'},
    'Real Estate':{tag:'Property Lead Generation',desc:'Our hyper-local real estate marketing campaigns fill your sales pipeline with genuinely qualified buyers, serious sellers, and motivated renters — not just curious browsers. We use Google Search Ads, Facebook Lead Ads, and Instagram Reels to target people who are actively searching for properties in your specific area and price range. Every lead is verified and filtered so your sales team spends time on prospects who are truly ready to act. Our campaigns include compelling property visuals, virtual tour promotions, and urgency-driven calls to action that convert interest into appointments. We have helped builders, agents, and brokers across India close more deals faster. Real estate is our one of our strongest verticals with consistent lead volumes and excellent conversion rates.',wa:'Real Estate'},
    'Restaurants':{tag:'Food & Beverage Growth',desc:'We create mouth-watering visual campaigns that turn social media scrollers into hungry customers who walk through your door or place an order online. From stunning food photography ads on Instagram to Google Maps promotions that put you first in local searches, we build your restaurant\'s digital presence from the ground up. Our campaigns are perfectly timed for breakfast, lunch, dinner, and weekend specials — reaching the right audience at exactly the moment they\'re deciding where to eat. We also manage delivery platform ads and help you build a loyal repeat-customer base through retargeting. Whether you run a single cafe or a multi-branch chain, our food marketing strategies drive consistent daily orders. We understand food culture and create content that genuinely makes people crave what you serve.',wa:'Restaurant'},
    'Gyms & Fitness':{tag:'Membership Campaigns',desc:'We use powerful transformation-story campaigns and motivational content to convert gym browsers into committed, long-term paying members. Our fitness marketing strategy targets people in your area who are actively looking to join a gym, lose weight, build muscle, or improve their health — reaching them at exactly the right moment. We create before-and-after testimonial ads, membership offer campaigns, and seasonal promotions that drive a steady stream of new sign-ups every month. Google Ads and Instagram together give us the power to target by location, interest, and fitness behaviour — so every ad reaches someone genuinely likely to join. We have helped dozens of gyms, yoga studios, and fitness centres dramatically grow their membership base. Your floor will be full and your classes will be booked weeks in advance.',wa:'Gym & Fitness'},
    'Fashion Boutiques':{tag:'Visual Brand Building',desc:'Fashion lives and dies on visual impact — and our style-forward creative campaigns for Instagram, Facebook, and YouTube make your brand impossible to scroll past. We produce stunning product photography concepts, Reels-style video content, and carousel ads that showcase your collection to the most fashion-conscious audiences in your target market. Our targeting combines interest-based audiences, lookalike buyers, and retargeting pools to bring both walk-in store traffic and e-commerce sales to your boutique. We understand seasonal trends, festival buying cycles, and how to position your brand for maximum desire. Whether you sell women\'s wear, men\'s fashion, accessories, or luxury garments, we build a brand story that earns loyal customers. Your Instagram will look like a magazine and your sales will reflect it.',wa:'Fashion Boutique'},
    'Hotels & Resorts':{tag:'Hospitality Marketing',desc:'We help hotels, resorts, homestays, and travel businesses maximise occupancy with smart direct-booking campaigns that reduce your dependence on expensive OTA platforms like Booking.com or MakeMyTrip. Our seasonal promotions, festive offers, and package deal ads reach travellers exactly when they are planning a trip — on Google Search, YouTube, and Instagram. We create visually stunning content that showcases your property\'s unique atmosphere and amenities, making your brand the obvious choice for travellers in your segment. Loyalty programme ads and retargeting campaigns keep past guests coming back for repeat visits. We also manage local wedding, conference, and event venue campaigns that fill your banquet calendar year-round. Our hospitality campaigns consistently deliver lower cost-per-booking than traditional travel marketing methods.',wa:'Hotels & Resorts'},
    'Dental Clinics':{tag:'Patient Acquisition',desc:'We specialise in new patient acquisition campaigns for dental clinics that deliver a steady, predictable flow of appointment bookings — without relying on expensive hoardings or traditional media. When someone in your city searches for a dentist, orthodontist, or teeth whitening treatment, your clinic appears at the very top of Google search results. Our dental ad campaigns are carefully crafted to build trust, highlight your expertise and modern equipment, and make booking the next obvious step for the patient. We target specific high-value treatments like implants, braces, and cosmetic dentistry that bring in your most profitable cases. Google Maps optimisation ensures nearby patients find you first before any competitor. We have helped dental clinics across India grow their new patient numbers by 300% or more in their first six months with us.',wa:'Dental Clinic'},
    'Car Dealerships':{tag:'Automotive Lead Gen',desc:'We generate high-quality test drive bookings, showroom walk-ins, and service centre appointments for car dealerships and automotive businesses through precisely targeted digital campaigns. Our Google Search Ads capture buyers who are actively comparing models and ready to make a purchase decision — putting your showroom at the top of their research journey. We run Facebook and Instagram campaigns that showcase your inventory with dynamic vehicle ads, financing offers, and limited-time deals that drive urgency and real enquiries. Our YouTube pre-roll ads build brand awareness for your dealership among car enthusiasts in your region. We also run campaigns for two-wheelers, electric vehicles, and used car businesses with equal effectiveness. Every lead is tracked so you know exactly which ad brought each customer through your showroom door.',wa:'Car Dealership'},
    'Jewelry Stores':{tag:'Luxury Showcase Ads',desc:'We create premium visual campaigns that position your jewelry brand as the first choice for high-value buyers during weddings, anniversaries, gifting seasons, and festivals. Our Instagram and Facebook campaigns feature stunning product photography concepts that make each piece irresistible, targeting audiences who are actively looking for gold, diamond, or luxury jewelry in your area. We time campaigns perfectly around Diwali, Dhanteras, Eid, wedding seasons, and Valentine\'s Day — when jewelry intent is at its highest. Retargeting campaigns re-engage visitors who viewed your products but did not purchase, bringing them back at just the right moment. Our Google Shopping and Search Ads capture high-intent buyers searching for specific pieces. We have helped jewelry stores from family businesses to premium brands dramatically increase both footfall and premium sales.',wa:'Jewelry Store'},
    'Salons & Spas':{tag:'Beauty Brand Growth',desc:'We build before-and-after content campaigns, seasonal offer ads, and smart booking funnels that keep your appointment calendar filled weeks in advance with loyal, returning clients. Our Instagram and Facebook campaigns feature real transformation content that builds genuine desire for your services among your target audience — from hair transformations to bridal packages and premium spa treatments. We run targeted Google Ads that put your salon at the top when someone nearby searches for a haircut, facial, or beauty service. Seasonal campaigns around weddings, festivals, and holidays drive peak-period bookings before your competitors even react. We also build retargeting audiences from your past customers so repeat visits become automatic. Our beauty clients regularly report their booking systems staying full with a waiting list — that is the result we consistently deliver.',wa:'Salon & Spa'},
    'Education':{tag:'Enrollment Campaigns',desc:'We run powerful student enrollment campaigns for schools, coaching institutes, colleges, and online course creators that target both students and parents at exactly the right moment in their decision-making journey. Our Google Ads place your institution at the top when families are actively searching for admissions, coaching for competitive exams, or skill development courses in your area. We create compelling Facebook and Instagram campaigns that showcase your facilities, faculty credentials, success rates, and student achievements to build trust and drive enquiry calls. Our targeting covers the exact age groups, geographic areas, and academic interests most relevant to your courses. Remarketing campaigns follow up with interested prospects who visited your website but did not apply — converting them before they choose a competitor. We have helped coaching centres, schools, and online educators multiply their enrollment numbers within a single academic year.',wa:'Education'},
    'Technology':{tag:'B2B Tech Marketing',desc:'We generate high-quality B2B leads that place your technology services, software products, or IT solutions in front of CTO-level and business-owner decision-makers who are actively evaluating vendors and ready to invest. Our Google Ads capture tech buyers at the highest point of purchase intent — when they are searching for the exact solution you offer. LinkedIn-style targeting combined with Facebook and Instagram campaigns build brand authority among the professional audiences your sales team needs to reach. We create case study and demo-request campaigns that generate qualified discovery calls, not just traffic. Our content advertising strategy positions your brand as a trusted industry expert, shortening the B2B sales cycle significantly. Whether you offer SaaS, custom software, cloud services, or managed IT support, we have a proven strategy to fill your sales pipeline with real opportunities.',wa:'IT & Tech'},
    'Events & Weddings':{tag:'Event Booking Campaigns',desc:'We target engaged couples, families planning celebrations, and corporate event organisers at the exact moment they begin searching for banquet halls, wedding planners, decorators, and caterers — turning interest into confirmed bookings. Our seasonal campaigns are timed perfectly around peak wedding months, festival seasons, and New Year — ensuring your venue calendar stays booked months in advance. We create visually stunning Google and Instagram campaigns that showcase your venue\'s ambience, décor, and past events in ways that make couples immediately picture their own special day. Facebook Lead Ads make it effortless for interested parties to submit their date and requirements, giving your sales team warm leads ready for follow-up. We also run retargeting campaigns that re-engage people who visited your website or social page without enquiring. Our event and wedding venue clients consistently see their booking calendars fill up faster than ever.',wa:'Events & Weddings'},
    'General Stores':{tag:'Local Footfall & Discovery',desc:'We help general stores, supermarkets, kirana shops, and retail marts become the first choice for their local community — driving steady daily footfall and consistent sales growth through smart digital marketing. Our Google Maps optimisation and local search campaigns ensure that anyone in your neighbourhood who searches for daily essentials, groceries, or household items finds your store first. We run festive offer campaigns during Diwali, Eid, Holi, and seasonal sales that create excitement and bring crowds into your store at exactly the right time. Facebook and Instagram ads showcase your product range, special deals, and loyalty offers to a hyper-targeted local audience. WhatsApp marketing integration helps you send offers directly to your regular customers to build repeat visits. We understand local retail and the importance of community trust — our campaigns build both your brand and your daily footfall.',wa:'General Store'},
  };

  var track    = document.querySelector('.svc-scroll-track');
  var overflow = document.querySelector('.svc-overflow');

  /* Shared helper: restore marquee to normal auto-scroll */
  function restoreMarquee(){
    if(!track) return;
    track.style.transition = '';
    track.style.transform  = '';
    track.style.animation  = '';   /* clears inline override → CSS animation restarts */
  }

  /* Shared helper: close all cards & restore marquee */
  function closeAll(){
    document.querySelectorAll('.svc-card.expanded').forEach(function(c){ c.classList.remove('expanded'); });
    restoreMarquee();
  }

  /* Expose so openSvcCard (search engine) can reuse */
  window._svcCardHelpers = { restoreMarquee: restoreMarquee, closeAll: closeAll };

  /* Expose svcData + helpers for search engine and modal */
  window._svcData = svcData;
  window._openSvcModal = function(card){
    var labelEl = card.querySelector('.svc-card-label');
    if(!labelEl) return;
    var lbl  = labelEl.textContent.trim();
    var data = svcData[lbl];
    if(data) openSvcModal(lbl, data);
  };
  window._svcRestoreOnModalClose = function(){ restoreMarquee(); };

  document.querySelectorAll('.svc-card').forEach(function(card){
    var labelEl = card.querySelector('.svc-card-label');
    if(!labelEl) return;
    var label = labelEl.textContent.trim();
    var data  = svcData[label];
    if(!data) return;

    /* Click → pause marquee + open centered modal */
    card.addEventListener('click', function(e){
      e.stopPropagation();
      if(track) track.style.animationPlayState = 'paused';
      openSvcModal(label, data);
    });
  });
})();

/* ===== TEXT SCRAMBLE FOR SECTION TITLES ===== */
(function(){
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';
  function scramble(el){
    if(el.dataset.scrambled) return;
    el.dataset.scrambled = '1';
    var original = el.textContent;
    var iter = 0;
    var maxIter = original.length * 3;
    var interval = setInterval(function(){
      el.textContent = original.split('').map(function(c, i){
        if(c === ' ' || c === '\n') return c;
        if(i < Math.floor(iter/3)) return original[i];
        return chars[Math.floor(Math.random()*chars.length)];
      }).join('');
      iter++;
      if(iter > maxIter){ el.textContent = original; clearInterval(interval); }
    }, 38);
  }
  var so = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting) scramble(entry.target);
    });
  },{threshold:0.5});
  document.querySelectorAll('.section-title').forEach(function(el){ so.observe(el); });
})();

/* ===== RIPPLE EFFECT ON BUTTONS ===== */
(function(){
  var sel = '.price-btn,.banner-slide-cta,.wa-btn,.email-btn,.hero-cta-wa,.svc-card-detail-btn';
  document.querySelectorAll(sel).forEach(function(btn){
    btn.classList.add('ripple-btn');
    btn.addEventListener('click', function(e){
      var r = btn.getBoundingClientRect();
      var size = Math.max(r.width, r.height) * 2;
      var wave = document.createElement('span');
      wave.className = 'ripple-wave';
      wave.style.cssText = 'width:'+size+'px;height:'+size+'px;left:'+(e.clientX-r.left-size/2)+'px;top:'+(e.clientY-r.top-size/2)+'px;';
      btn.appendChild(wave);
      setTimeout(function(){ wave.remove(); }, 700);
    });
  });
})();

/* ===== TILT ON SVC-CARDS ===== */
(function(){
  document.querySelectorAll('.svc-card').forEach(function(card){
    card.addEventListener('mousemove', function(e){
      if(card.classList.contains('expanded')) return;
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width;
      var y = (e.clientY - r.top) / r.height;
      var tX = (y - 0.5) * 14;
      var tY = (x - 0.5) * -14;
      card.style.transform = 'perspective(700px) rotateX('+tX+'deg) rotateY('+tY+'deg) scale(1.06) translateY(-8px)';
    });
    card.addEventListener('mouseleave', function(){
      if(!card.classList.contains('expanded'))
        card.style.transform = '';
    });
  });
})();

/* ===== SEARCH ENGINE v2 ===== */
(function(){
  /* ── Fuzzy word match ── */
  function fuzzyMatch(text, word){
    if(text.includes(word)) return 1;
    if(word.length >= 4 && text.includes(word.slice(0,-1))) return 0.75;
    if(word.length >= 5 && text.includes(word.slice(0,-2))) return 0.5;
    if(word.length >= 5){
      var grams=0,hits=0;
      for(var i=0;i<word.length-2;i++){grams++;if(text.includes(word.slice(i,i+3)))hits++;}
      if(hits/grams>=0.5) return 0.35;
    }
    return 0;
  }

  /* ── Score item against query words ── */
  function score(item, words){
    var s=0, titleLow=item.title.toLowerCase();
    var fullText=(titleLow+' '+item.desc.toLowerCase()+' '+item.keywords.join(' ')).toLowerCase();
    var phrase=words.join(' ');
    if(titleLow.includes(phrase)) s+=20;
    else if(fullText.includes(phrase)) s+=10;
    words.forEach(function(w){
      if(!w||w.length<1) return;
      if(titleLow.startsWith(w))           s+=15;
      else if(titleLow.includes(w))        s+=10;
      var kwExact=item.keywords.some(function(k){return k===w||k.startsWith(w);});
      if(kwExact)                          s+=8;
      else{var kwPart=item.keywords.some(function(k){return k.includes(w);});if(kwPart)s+=5;}
      if(item.desc.toLowerCase().includes(w)) s+=2;
      var fz=fuzzyMatch(fullText,w); if(fz>0&&s===0) s+=Math.round(fz*3);
    });
    if(item.cardLabel&&s>0) s+=3;
    return s;
  }

  /* ── Highlight matched words ── */
  function highlight(str, words){
    var out=str;
    words.forEach(function(w){
      if(!w||w.length<2) return;
      var re=new RegExp('('+w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');
      out=out.replace(re,'<mark>$1</mark>');
    });
    return out;
  }

  /* ── Open svc-card by label: scroll page → center card → open description ── */
  function openSvcCard(cardLabel){
    /* 1. Find the SET-1 card (skip duplicates in SET-2) */
    var seen={}, target=null;
    document.querySelectorAll('.svc-card').forEach(function(card){
      var lbl=card.querySelector('.svc-card-label');
      if(!lbl) return;
      var t=lbl.textContent.trim();
      if(seen[t]) return;
      seen[t]=true;
      if(t===cardLabel) target=card;
    });
    if(!target) return;

    var track    = document.querySelector('.svc-scroll-track');
    var overflow = document.querySelector('.svc-overflow');
    var section  = target.closest('section');

    /* 2. Close any currently open card */
    document.querySelectorAll('.svc-card.expanded').forEach(function(c){
      c.classList.remove('expanded');
      c.style.boxShadow='';
    });

    /* 3. FREEZE the marquee at its exact current rendered position */
    var frozenX = 0;
    if(track){
      var cs  = window.getComputedStyle(track);
      var mat = cs.transform || cs.webkitTransform || 'none';
      if(mat !== 'none'){
        var nums = mat.replace(/[^0-9\-.,]/g,'').split(',');
        frozenX = parseFloat(nums[4]) || 0;
      }
      track.style.transition = 'none';
      track.style.animation  = 'none';
      track.style.transform  = 'translateX('+frozenX+'px)';
      void track.offsetWidth; /* force reflow */
    }

    /* 4. Scroll section into view first */
    if(section) section.scrollIntoView({behavior:'smooth', block:'center'});

    /* 5. After the page scroll settles, compute & animate horizontal position */
    setTimeout(function(){
      if(!track || !overflow){
        target.classList.add('expanded');
        return;
      }

      /* Re-enforce the freeze: cancel any animation that may have restarted */
      track.style.animation  = 'none';
      track.style.transition = 'none';
      void track.offsetWidth; /* force reflow to commit the freeze */

      /* Card's layout position in the track (not affected by transform) */
      var cardLeft = target.offsetLeft;
      var cardW    = target.offsetWidth || 240;
      var viewW    = overflow.clientWidth;

      /* We want the card's CENTER to align with the viewport CENTER:
         translateX + cardLeft + cardW/2 = viewW/2
         → translateX = viewW/2 - cardLeft - cardW/2                     */
      var targetX = Math.round(viewW / 2 - cardLeft - cardW / 2);

      /* Allow a small positive shift (up to half-viewport) to centre early
         cards, but never so large that it reveals blank space on the left */
      var maxShift = Math.floor(viewW * 0.45);
      targetX = Math.min(maxShift, targetX);

      /* Clamp left: never show area past the end of the full track */
      var trackFullW = track.scrollWidth;
      var minX = -(trackFullW - viewW);
      if(minX > 0) minX = 0;
      targetX = Math.max(minX, targetX);

      /* Animate the slider to the target position — smooth ease-out */
      track.style.transition = 'transform 0.92s cubic-bezier(0.22, 1, 0.36, 1)';
      track.style.transform  = 'translateX('+targetX+'px)';

      /* 6. After sliding, open the description panel + glow highlight */
      setTimeout(function(){
        track.style.transition = '';

        /* Keep section visible after any scroll drift */
        if(section){
          var sRect = section.getBoundingClientRect();
          if(sRect.top < 56 || sRect.bottom > window.innerHeight){
            section.scrollIntoView({behavior:'smooth', block:'center'});
          }
        }

        /* Open service description modal */
        if(window._openSvcModal) window._openSvcModal(target);

        /* Blue ring pulse on the card: fades out naturally */
        target.style.transition = 'box-shadow 0.2s ease';
        target.style.boxShadow  = '0 0 0 4px #2563EB, 0 0 64px rgba(37,99,235,0.60)';
        setTimeout(function(){
          target.style.transition = 'box-shadow 1.8s ease';
          target.style.boxShadow  = '';
        }, 2600);

      }, 950);

    }, 520); /* wait for page-scroll to settle before measuring */
  }

  /* ── DB: all searchable content ── */
  var DB=[
    /* SERVICES */
    {id:'google-ads',    icon:'🎯',title:'Google Ads',                tag:'Service', section:'about',              cardLabel:null,
     desc:'Appear at #1 on Google the moment customers search for your service. PPC campaigns with 863% proven ROI.',
     keywords:['google','ads','adwords','search','ppc','sem','advertising','rank','top','click','cpc','paid','search engine']},
    {id:'instagram-ads', icon:'📸',title:'Instagram Ads',              tag:'Service', section:'about',              cardLabel:null,
     desc:'Scroll-stopping Reels, Stories, and Feed ads that convert followers into paying customers.',
     keywords:['instagram','insta','social','meta','reel','story','visual','photo','feed','ad','ig','sponsored']},
    {id:'youtube-ads',   icon:'▶️',title:'YouTube Ads',                tag:'Service', section:'about',              cardLabel:null,
     desc:'Pre-roll and in-stream video ads in front of 2 billion+ YouTube users actively searching for you.',
     keywords:['youtube','yt','video','ads','pre-roll','skippable','bumper','brand','awareness','watch','trueview']},
    {id:'facebook-ads',  icon:'👍',title:'Facebook Ads',               tag:'Service', section:'about',              cardLabel:null,
     desc:'Audience-targeted Facebook campaigns for brand awareness and lead generation from local and national markets.',
     keywords:['facebook','fb','meta','ads','community','audience','campaign','retarget','lookalike','boost']},
    {id:'lead-gen',      icon:'📊',title:'Lead Generation',            tag:'Service', section:'about',              cardLabel:null,
     desc:'Full-funnel campaigns across all platforms bringing real enquiries to your business 24/7.',
     keywords:['lead','leads','generation','gen','enquiry','inquiry','funnel','conversion','buyer','prospect','capture']},
    {id:'local-seo',     icon:'📍',title:'Local SEO & Google Maps',    tag:'Service', section:'about',              cardLabel:null,
     desc:'Rank #1 on Google Maps and local search — so nearby customers find you before your competitors.',
     keywords:['seo','local seo','maps','google maps','nearby','location','rank','organic','gmb','google my business','listing']},
    {id:'creatives',     icon:'🎨',title:'Ad Creative Design',         tag:'Service', section:'about',              cardLabel:null,
     desc:'Banners, video scripts, and ad copy crafted to maximise CTR and brand recall across all platforms.',
     keywords:['creative','design','banner','graphic','copy','visual','content','ad design','artwork','post','video creative']},
    {id:'reporting',     icon:'📈',title:'Analytics & Reporting',      tag:'Service', section:'about',              cardLabel:null,
     desc:'Weekly/monthly reports — impressions, clicks, CPL, leads, and ROI. Complete transparency, always.',
     keywords:['analytics','report','reporting','data','roi','metrics','performance','insight','dashboard','tracking','kpi']},
    /* PRICING */
    {id:'starter-plan',  icon:'💳',title:'Starter Plan — ₹25000/mo', tag:'Pricing', section:'pricing',            cardLabel:null,
     desc:'1 platform (Google Ads), 5000+ reach/month, basic analytics, monthly strategy call.',
     keywords:['starter','25k','25000','25','plan','basic','price','pricing','cost','budget','cheap','small','new','entry','low']},
    {id:'growth-plan',   icon:'💳',title:'Growth Plan — ₹30000/mo',  tag:'Pricing', section:'pricing',            cardLabel:null,
     desc:'Google + Instagram Ads, 15000+ reach, creative design, bi-weekly strategy calls.',
     keywords:['growth','30k','30000','30','plan','price','pricing','cost','medium','scale','two platform','dual']},
    {id:'business-plan', icon:'💳',title:'Business Plan — ₹40000/mo',tag:'Pricing', section:'pricing',            cardLabel:null,
     desc:'All 4 platforms, 50000+ reach, dedicated manager, weekly reports. Most popular choice.',
     keywords:['business','40k','40000','40','plan','premium','all','full','four platform','best','popular','recommended','top']},
    {id:'enterprise',    icon:'💼',title:'Custom / Enterprise Plan',   tag:'Pricing', section:'pricing',            cardLabel:null,
     desc:'Tailored strategy and custom budgets for large businesses. Contact us for a personalised proposal.',
     keywords:['enterprise','custom','large','big','corporation','tailored','bespoke','negotiate','special','unlimited','high budget']},
    {id:'pricing-page',  icon:'💰',title:'All Pricing Plans',          tag:'Pricing', section:'pricing',            cardLabel:null,
     desc:'Transparent INR plans from ₹25000/mo — Starter, Growth, Business, and Enterprise with zero hidden charges.',
     keywords:['pricing','plans','price','cost','how much','fees','charge','budget','plan','monthly','package','rupee','inr','all plans']},
    /* INDUSTRIES → svc-cards */
    {id:'ind-digmkt',    icon:'🌐',title:'Digital Marketing Services', tag:'Industry',section:null, cardLabel:'Digital Marketing',
     desc:'End-to-end digital marketing on Google, Instagram, YouTube, Facebook — all managed by our expert team.',
     keywords:['digital marketing','marketing','advertising','online marketing','digital','all in one','full service','campaign']},
    {id:'ind-medical',   icon:'🏥',title:'Medical & Healthcare Ads',   tag:'Industry',section:null, cardLabel:'Medical Clinics',
     desc:'Patient acquisition for clinics, hospitals, and health centres via Google Ads and local SEO.',
     keywords:['medical','clinic','hospital','healthcare','doctor','health','appointment','patient','clinic ads','specialist','nhs']},
    {id:'ind-dental',    icon:'🦷',title:'Dental Clinic Ads',          tag:'Industry',section:null, cardLabel:'Dental Clinics',
     desc:'New-patient campaigns for dental clinics using Google Ads, Maps, and local search optimisation.',
     keywords:['dental','dentist','dentistry','teeth','orthodontics','braces','oral','mouth','tooth','clinic dental']},
    {id:'ind-realestate',icon:'🏢',title:'Real Estate Marketing',      tag:'Industry',section:null, cardLabel:'Real Estate',
     desc:'Hyper-local property lead generation for builders, agents, and brokers. Qualified buyers, ready to act.',
     keywords:['real estate','property','builder','agent','broker','flat','apartment','house','plot','realty','construction','villa','pg']},
    {id:'ind-restaurant',icon:'🍽️',title:'Restaurant & Cafe Ads',     tag:'Industry',section:null, cardLabel:'Restaurants',
     desc:'Footfall and delivery campaigns for restaurants, cafes, QSR chains, cloud kitchens, and food brands.',
     keywords:['restaurant','food','cafe','qsr','kitchen','dining','eat','menu','delivery','zomato','swiggy','dhaba','canteen']},
    {id:'ind-gym',       icon:'💪',title:'Gym & Fitness Ads',          tag:'Industry',section:null, cardLabel:'Gyms & Fitness',
     desc:'Membership-driving campaigns using transformation stories — convert browsers into long-term paying members.',
     keywords:['gym','fitness','workout','yoga','training','sports','health club','membership','crossfit','zumba','aerobics','weight loss']},
    {id:'ind-fashion',   icon:'👗',title:'Fashion & Retail Ads',       tag:'Industry',section:null, cardLabel:'Fashion Boutiques',
     desc:'Visual-first Instagram and Facebook campaigns for clothing brands, boutiques, accessories, and retail stores.',
     keywords:['fashion','clothing','apparel','boutique','retail','shop','store','brand','style','wardrobe','garment','textile']},
    {id:'ind-education', icon:'🎓',title:'Education & Coaching Ads',   tag:'Industry',section:null, cardLabel:'Education',
     desc:'Enrollment campaigns for schools, coaching centres, and online courses — targeting students and parents.',
     keywords:['education','school','coaching','institute','college','course','training','tuition','student','learning','academy','classes']},
    {id:'ind-beauty',    icon:'💅',title:'Beauty Salon & Spa Ads',     tag:'Industry',section:null, cardLabel:'Salons & Spas',
     desc:'Before/after campaigns and booking funnels that keep appointment chairs filled for weeks ahead.',
     keywords:['salon','beauty','spa','parlour','hair','skin','makeup','grooming','nail','wax','facial','mehndi','threading']},
    {id:'ind-hotel',     icon:'🏨',title:'Hotel & Travel Marketing',   tag:'Industry',section:null, cardLabel:'Hotels & Resorts',
     desc:'Direct-booking campaigns, seasonal promos, and loyalty strategies for hotels, resorts, and travel agencies.',
     keywords:['hotel','resort','travel','tourism','booking','homestay','hospitality','vacation','trip','oyo','airbnb','motel','lodge']},
    {id:'ind-auto',      icon:'🚗',title:'Car Dealership & Auto Ads',  tag:'Industry',section:null, cardLabel:'Car Dealerships',
     desc:'Test drive leads, showroom walk-ins, and service bookings for dealerships and auto businesses.',
     keywords:['automobile','car','dealership','showroom','vehicle','auto','ev','electric','bike','scooter','service center','two wheeler']},
    {id:'ind-jewelry',   icon:'💎',title:'Jewelry & Accessories Ads',  tag:'Industry',section:null, cardLabel:'Jewelry Stores',
     desc:'Luxury visual campaigns targeting high-value buyers during weddings, gifting seasons, and anniversaries.',
     keywords:['jewelry','jewellery','gold','diamond','ring','necklace','ornament','luxury','gem','stone','bracelet','earring']},
    {id:'ind-events',    icon:'🎊',title:'Events & Wedding Venue Ads', tag:'Industry',section:null, cardLabel:'Events & Weddings',
     desc:'Seasonal campaigns targeting couples and families the moment they start planning — banquets, planners, decor.',
     keywords:['event','wedding','banquet','decor','planner','party','function','reception','ceremony','engagement','birthday','mandap']},
    {id:'ind-tech',      icon:'💻',title:'IT & Tech Company Ads',      tag:'Industry',section:null, cardLabel:'Technology',
     desc:'B2B lead generation placing your tech services in front of CTO-level decision-makers ready to buy.',
     keywords:['it','tech','software','startup','saas','app','website','digital','technology','developer','b2b','cloud','erp','crm']},
    {id:'ind-general',   icon:'🛒',title:'General Store & Mart Ads',   tag:'Industry',section:null, cardLabel:'General Stores',
     desc:'Local footfall and Google Maps ads ensuring your community shops with you first — every season.',
     keywords:['general store','supermarket','kirana','grocery','fmcg','retail','mart','shop','departmental','daily needs']},
    /* COMPANY / PAGES */
    {id:'about',         icon:'🏆',title:'About UDM Services',         tag:'Company', section:'about',              cardLabel:null,
     desc:'US Digital Marketing Services — est. 2020 by Utkarsh Singh. 163M+ leads · 974M+ reach · 863% ROI.',
     keywords:['about','company','udm','us digital','agency','who','team','founded','2020','profile']},
    {id:'founder',       icon:'👨‍💼',title:'Utkarsh Singh — Founder & CEO',tag:'Company',section:'owner',           cardLabel:null,
     desc:'Founder & CEO of UDM. Expert in Google Ads, Meta, YouTube, and data-driven performance marketing since 2020.',
     keywords:['utkarsh','singh','founder','ceo','owner','director','head','leader','who is','boss','md']},
    {id:'contact',       icon:'📞',title:'Contact Us',                  tag:'Contact', section:'contact',            cardLabel:null,
     desc:'+91 9630715686 · +91 9305021986 · businessgrowthservicess@gmail.com',
     keywords:['contact','phone','number','call','email','reach','address','get in touch','support']},
    {id:'whatsapp',      icon:'💬',title:'WhatsApp Us Instantly',       tag:'Contact', section:'contact',            cardLabel:null,
     desc:'Message us on WhatsApp: +91 9630715686 or +91 9305021986. Fastest way to get a quote.',
     keywords:['whatsapp','wa','chat','message','instant','quick','wa me','ping','text']},
    {id:'client-form',   icon:'📝',title:'Client Enquiry Form',        tag:'Contact', section:'client-form-section',cardLabel:null,
     desc:'2-minute business enquiry form to receive a fully customised digital marketing plan from our team.',
     keywords:['form','enquiry','apply','register','fill','submit','onboard','start','get started','sign up','join']},
    {id:'stats',         icon:'📊',title:'Our Proven Results & Stats',  tag:'Company', section:'stats',              cardLabel:null,
     desc:'163M+ leads · 974M+ reach · 863% average ROI · 100× business growth. Numbers that speak for themselves.',
     keywords:['result','stats','numbers','proof','roi','leads','reach','growth','achievement','track record']},
    {id:'payment',       icon:'💰',title:'Payment & Bank Details',      tag:'Company', section:'payment',            cardLabel:null,
     desc:'Pay via UPI, NEFT, or bank transfer. Details shared after discussing your requirements.',
     keywords:['payment','pay','bank','upi','neft','transfer','invoice','fee','charge','money','rupee']},
    {id:'terms',         icon:'📋',title:'Terms & Conditions',          tag:'Legal',   section:'terms',              cardLabel:null,
     desc:'Service agreement, payment terms, refund policy, IP rights, and termination clauses.',
     keywords:['terms','conditions','agreement','policy','legal','contract','refund','tnc']},
    {id:'privacy',       icon:'🔒',title:'Privacy Policy',              tag:'Legal',   section:'privacy',            cardLabel:null,
     desc:'How we collect, protect, and use your business data throughout the engagement.',
     keywords:['privacy','data','security','personal','protection','information','gdpr']},
  ];

  var input=document.getElementById('searchInput');
  var dropdown=document.getElementById('search-dropdown');
  var activeIdx=-1, debounceTimer;
  if(!input||!dropdown) return;

  /* ── Quick suggestion chips (shown on focus with empty input) ── */
  var QUICK=['Google Ads','Medical','Restaurant','Pricing','Real Estate','WhatsApp','YouTube','Gym'];
  function makeChips(){
    var wrap=document.createElement('div');
    wrap.style.cssText='display:flex;flex-wrap:wrap;gap:6px;padding:10px 14px 8px;border-bottom:1px solid rgba(0,0,0,0.07);';
    var hint=document.createElement('div');
    hint.style.cssText='width:100%;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:rgba(0,0,0,0.35);font-weight:700;margin-bottom:4px;';
    hint.textContent='Quick searches';
    wrap.appendChild(hint);
    QUICK.forEach(function(q){
      var c=document.createElement('button');
      c.textContent=q;
      c.style.cssText='padding:5px 14px;border-radius:50px;border:1px solid rgba(37,99,235,0.18);background:rgba(37,99,235,0.08);font-size:11.5px;font-weight:600;color:#1d4ed8;cursor:pointer;font-family:inherit;transition:background 0.15s;';
      c.onmouseenter=function(){c.style.background='rgba(37,99,235,0.18)';};
      c.onmouseleave=function(){c.style.background='rgba(37,99,235,0.08)';};
      c.onclick=function(){input.value=q;runSearch(q);input.focus();};
      wrap.appendChild(c);
    });
    return wrap;
  }

  function runSearch(q){
    q=(q||'').trim();
    var ql=q.toLowerCase();
    dropdown.innerHTML='';
    activeIdx=-1;

    if(ql.length<1){
      dropdown.appendChild(makeChips());
      dropdown.classList.add('open');
      return;
    }

    var words=ql.split(/\s+/).filter(function(w){return w.length>0;});
    var scored=DB.map(function(item){return{item:item,sc:score(item,words)};})
      .filter(function(x){return x.sc>0;})
      .sort(function(a,b){return b.sc-a.sc;})
      .slice(0,10);

    if(!scored.length){
      var noRes=document.createElement('div');
      noRes.className='search-no-result';
      noRes.innerHTML='No results for <strong>"'+q+'"</strong>. Try: <em>pricing, restaurant, Google Ads, medical…</em>';
      dropdown.appendChild(noRes);
      dropdown.classList.add('open');
      return;
    }

    /* Group by tag, preserving rank order */
    var groups={},order=[];
    scored.forEach(function(x){
      var t=x.item.tag;
      if(!groups[t]){groups[t]=[];order.push(t);}
      groups[t].push(x);
    });

    order.forEach(function(tag){
      var lbl=document.createElement('div');
      lbl.className='search-section-label';
      lbl.textContent=tag;
      dropdown.appendChild(lbl);
      groups[tag].forEach(function(x){
        var isCard=!!x.item.cardLabel;
        var el=document.createElement('div');
        el.className='search-result-item';
        el.innerHTML=
          '<div class="sri-icon">'+x.item.icon+'</div>'+
          '<div class="sri-body">'+
            '<div class="sri-title">'+highlight(x.item.title,words)+'</div>'+
            '<div class="sri-desc">'+x.item.desc+'</div>'+
            '<span class="sri-tag">'+tag+'</span>'+
            (isCard?'<span class="sri-card-badge">↗ Opens Card</span>':'')+
          '</div>';
        el.addEventListener('click',function(e){
          e.stopPropagation(); /* prevent document outside-click from calling closeAll/restoreMarquee */
          dropdown.classList.remove('open');
          input.value='';
          if(isCard){
            openSvcCard(x.item.cardLabel);
          } else {
            var sec=x.item.section?document.getElementById(x.item.section):null;
            if(sec) sec.scrollIntoView({behavior:'smooth',block:'start'});
          }
        });
        dropdown.appendChild(el);
      });
    });

    dropdown.classList.add('open');
  }

  input.addEventListener('input',function(){
    clearTimeout(debounceTimer);
    debounceTimer=setTimeout(function(){runSearch(input.value);},100);
  });

  input.addEventListener('keydown',function(e){
    var items=dropdown.querySelectorAll('.search-result-item');
    if(e.key==='ArrowDown'){
      e.preventDefault();
      activeIdx=Math.min(activeIdx+1,items.length-1);
      items.forEach(function(el,i){el.classList.toggle('active',i===activeIdx);});
      if(items[activeIdx])items[activeIdx].scrollIntoView({block:'nearest'});
    } else if(e.key==='ArrowUp'){
      e.preventDefault();
      activeIdx=Math.max(activeIdx-1,0);
      items.forEach(function(el,i){el.classList.toggle('active',i===activeIdx);});
      if(items[activeIdx])items[activeIdx].scrollIntoView({block:'nearest'});
    } else if(e.key==='Enter'){
      e.preventDefault();
      var active=dropdown.querySelector('.search-result-item.active')||dropdown.querySelector('.search-result-item');
      if(active) active.click();
    } else if(e.key==='Escape'){
      dropdown.classList.remove('open');
      input.blur();
    }
  });

  document.addEventListener('click',function(e){
    if(!e.target.closest('#navSearch')) dropdown.classList.remove('open');
  });

  input.addEventListener('focus',function(){
    runSearch(input.value);
  });

  /* ── Mobile search wiring ── */
  var mobInput   = document.getElementById('mobileSearchInput');
  var mobDrop    = document.getElementById('mobile-search-dropdown');
  if(mobInput && mobDrop){
    function runMobSearch(q){
      q=(q||'').trim();
      var ql=q.toLowerCase();
      mobDrop.innerHTML='';
      activeIdx=-1;
      if(ql.length<1){ mobDrop.classList.remove('open'); return; }
      var words=ql.split(/\s+/).filter(function(w){return w.length>0;});
      var scored=DB.map(function(item){return{item:item,sc:score(item,words)};})
        .filter(function(x){return x.sc>0;})
        .sort(function(a,b){return b.sc-a.sc;})
        .slice(0,8);
      if(!scored.length){
        var noRes=document.createElement('div');
        noRes.className='search-no-result';
        noRes.innerHTML='No results for <strong>"'+q+'"</strong>';
        mobDrop.appendChild(noRes);
        mobDrop.classList.add('open');
        return;
      }
      scored.forEach(function(x){
        var isCard=!!x.item.cardLabel;
        var el=document.createElement('div');
        el.className='search-result-item';
        el.innerHTML=
          '<div class="sri-icon">'+x.item.icon+'</div>'+
          '<div class="sri-body">'+
            '<div class="sri-title">'+highlight(x.item.title,words)+'</div>'+
            '<div class="sri-desc">'+x.item.desc+'</div>'+
            '<span class="sri-tag">'+x.item.tag+'</span>'+
            (isCard?'<span class="sri-card-badge">↗ Opens Card</span>':'')+
          '</div>';
        el.addEventListener('click',function(e){
          e.stopPropagation(); /* prevent document outside-click from calling closeAll/restoreMarquee */
          mobDrop.classList.remove('open');
          mobInput.value='';
          document.getElementById('mobile-search-bar').classList.remove('visible');
          _mobileSearchOpen=false;
          if(isCard){
            openSvcCard(x.item.cardLabel);
          } else {
            var sec=x.item.section?document.getElementById(x.item.section):null;
            if(sec) sec.scrollIntoView({behavior:'smooth',block:'start'});
          }
        });
        mobDrop.appendChild(el);
      });
      mobDrop.classList.add('open');
    }
    var mobDebounce;
    mobInput.addEventListener('input',function(){
      clearTimeout(mobDebounce);
      mobDebounce=setTimeout(function(){runMobSearch(mobInput.value);},120);
    });
    mobInput.addEventListener('keydown',function(e){
      if(e.key==='Escape'){
        mobDrop.classList.remove('open');
        mobInput.blur();
      } else if(e.key==='Enter'){
        e.preventDefault();
        var first=mobDrop.querySelector('.search-result-item');
        if(first) first.click();
      }
    });
  }
})();

/* Stat Counters */
function easeOutExpo(t){ return t===1?1:1-Math.pow(2,-10*t); }
function animateCounters(){
  document.querySelectorAll('.stat-num').forEach(el=>{
    if(el.dataset.done) return;
    el.dataset.done='1';
    const target = parseInt(el.dataset.target);
    const dur = 2200;
    const t0  = Date.now();
    (function tick(){
      const p = Math.min((Date.now()-t0)/dur,1);
      el.textContent = Math.floor(easeOutExpo(p)*target);
      if(p<1) requestAnimationFrame(tick);
      else el.textContent = target;
    })();
  });
}

/* ===== SVC DESCRIPTION MODAL (global) ===== */
function openSvcModal(label, data){
  document.getElementById('svc-modal-tag').textContent   = data.tag;
  document.getElementById('svc-modal-title').textContent = label;
  document.getElementById('svc-modal-desc').textContent  = data.desc;
  document.getElementById('svc-modal-btn').href =
    'https://wa.me/919630715686?text=' +
    encodeURIComponent('Hello, I am interested in digital marketing for my ' + data.wa + ' business.');
  document.getElementById('svc-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  /* Also trigger the on-page auto caption */
  showCatCaption(label, data);
}
function closeSvcModal(){
  document.getElementById('svc-modal').classList.remove('open');
  document.body.style.overflow = '';
  if(window._svcRestoreOnModalClose) window._svcRestoreOnModalClose();
}

/* ===== AUTO CAPTION TYPING FEATURE ===== */
var _captionTypingTimer = null;

function showCatCaption(label, data){
  var box     = document.getElementById('cat-caption-box');
  var tagEl   = document.getElementById('cat-caption-tag');
  var titleEl = document.getElementById('cat-caption-title');
  var textEl  = document.getElementById('cat-caption-text');
  var cursor  = document.getElementById('cat-caption-cursor');
  var btnEl   = document.getElementById('cat-caption-btn');
  var indEl   = document.getElementById('cat-caption-industry');
  if(!box || !textEl) return;

  /* Cancel any in-progress typing */
  if(_captionTypingTimer){ clearTimeout(_captionTypingTimer); _captionTypingTimer = null; }

  /* Populate static parts */
  tagEl.textContent   = data.tag || 'INDUSTRY INSIGHT';
  titleEl.textContent = label;
  textEl.textContent  = '';
  if(cursor) cursor.style.display = 'inline-block';
  btnEl.href = 'https://wa.me/919630715686?text=' +
    encodeURIComponent('Hello, I am interested in digital marketing for my ' + (data.wa || label) + ' business.');
  if(indEl) indEl.textContent = label + ' · Digital Marketing Strategy';

  /* Show the box */
  box.style.display = 'block';
  box.style.animation = 'none';
  void box.offsetWidth;
  box.style.animation = '';

  /* Scroll the box into view smoothly */
  setTimeout(function(){ box.scrollIntoView({behavior:'smooth', block:'nearest'}); }, 120);

  /* Type out the description */
  var fullText = data.desc || '';
  var i = 0;
  var speed = 18; /* ms per character */

  function typeNext(){
    if(i < fullText.length){
      textEl.textContent += fullText[i];
      i++;
      _captionTypingTimer = setTimeout(typeNext, speed);
    } else {
      /* Typing done — hide cursor after a pause */
      setTimeout(function(){
        if(cursor) cursor.style.display = 'none';
      }, 1200);
    }
  }
  _captionTypingTimer = setTimeout(typeNext, 60);
}

function closeCatCaption(){
  var box = document.getElementById('cat-caption-box');
  if(!box) return;
  if(_captionTypingTimer){ clearTimeout(_captionTypingTimer); _captionTypingTimer = null; }
  box.style.opacity = '0';
  box.style.transform = 'translateY(-10px)';
  box.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  setTimeout(function(){
    box.style.display = 'none';
    box.style.opacity = '';
    box.style.transform = '';
    box.style.transition = '';
  }, 320);
}

/* ===== STAT DETAIL MODAL ===== */
var STAT_DATA = {
  leads: {
    icon:'🎯', num:'163', suffix:'M+', label:'Leads Generated',
    desc:'Over 163 million qualified leads have been generated across hundreds of client campaigns since our founding in 2020. Each lead represents a real individual who actively expressed interest in a product or service — not a passive impression, but a genuine, measurable business opportunity. Our lead generation engine spans Google Search Ads, Instagram, Facebook, and YouTube — capturing high-intent prospects at every stage of the buying journey. We deploy precision targeting by location, demographics, search intent, and behavioural signals to ensure maximum lead quality. Every campaign undergoes continuous A/B testing, bid adjustments, and creative refreshes to reduce cost-per-lead and improve conversion rates over time. This 163-million milestone reflects five years of relentless campaign optimisation and an unwavering commitment to generating leads that actually convert into paying customers for our clients.'
  },
  reach: {
    icon:'🌐', num:'974', suffix:'M+', label:'Total Reach',
    desc:'974 million unique individuals have seen our clients\' ads across Google, Instagram, YouTube, and Facebook combined since 2020. Reach at this scale is the result of smart, data-driven media buying — placing the right message in front of the right audience at the right moment, not simply blasting ads to everyone. We layer Google Display Network, YouTube pre-roll, Instagram Reels & Stories, and Facebook\'s expansive social graph to build brand awareness for businesses of every size — from local shops to national operations. Our targeting uses lookalike audiences, custom intent segments, and dynamic retargeting pools to ensure every impression works toward a real business outcome. Reaching close to one billion people on modest marketing budgets proves that expert media planning consistently beats brute-force spending every single time. This number grows every day as our active campaigns continue delivering qualified visibility for dozens of clients across India and internationally.'
  },
  roi: {
    icon:'📈', num:'863', suffix:'%', label:'Average ROI',
    desc:'An 863% average return on investment means clients receive ₹8.63 in measurable value for every ₹1 invested in marketing — a return that consistently outperforms industry benchmarks by a significant margin. We calculate ROI by tracking the complete customer journey: from the first ad click through form submission, phone call, store visit, and confirmed sale — giving every client full financial transparency with zero guesswork. Full conversion tracking is deployed on every account using Google Analytics, Meta Pixel, and call-tracking integrations so that every rupee of revenue is attributed correctly. Continuous optimisation — testing ad creatives, audiences, bidding strategies, and landing pages — is what drives ROI above 800% and sustains it month after month. We treat every client\'s budget as if it were our own money, meaning not a single rupee is wasted on audiences, placements, or keywords that fail to deliver results. The 863% figure is a portfolio average; many campaigns in healthcare, real estate, and education have individually delivered ROI well above 1,000%.'
  },
  growth: {
    icon:'🚀', num:'100', suffix:'×', label:'Business Growth',
    desc:'100× business growth represents the transformative ceiling we work toward with every single client — businesses that have scaled their revenue, customer base, and market footprint by up to one hundred times through strategic, sustained digital marketing. Growth is measured across multiple dimensions: monthly recurring revenue, new customer acquisition rate, website traffic, physical footfall, and brand search volume on Google. Several clients who joined us as single-location small businesses have expanded into multi-city, multi-branch operations within just two to three years of consistent digital marketing investment. This level of growth requires the right strategy for each stage of the business journey — awareness campaigns for new brands, high-conversion campaigns for scaling businesses, and retention campaigns for established ones. No two growth journeys are alike, which is why every client receives a fully customised strategy rather than a one-size-fits-all package. The 100× metric is our north star: every campaign is designed around the question — what would it take to multiply this business by ten, fifty, or one hundred times?'
  }
};

function openStatModal(key){
  var d = STAT_DATA[key];
  if(!d) return;
  document.getElementById('stat-modal-icon').textContent  = d.icon;
  document.getElementById('stat-modal-num').textContent   = d.num;
  document.getElementById('stat-modal-suffix').textContent= d.suffix;
  document.getElementById('stat-modal-label').textContent = d.label;
  document.getElementById('stat-modal-desc').textContent  = d.desc;
  document.getElementById('stat-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeStatModal(){
  document.getElementById('stat-modal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ===== PLAN CONFIRMATION ===== */
var _planConfirmData = {
  '25000 INR / 30 Days':          { name:'Starter Plan',       tier:'STARTER',       price:'₹25,000',   dur:'30 Days',         features:['Google Ads Campaign','1 Platform Management','5000+ Monthly Reach','Monthly Strategy Call','Basic Analytics Report','Ad Creative Design'] },
  '30000 INR / 30 Days':          { name:'Growth Plan',        tier:'GROWTH',        price:'₹30,000',   dur:'30 Days',         features:['Google + Instagram Ads','2 Platform Management','15000+ Monthly Reach','Bi-weekly Strategy Call','Weekly Reports','Ad Creative Design'] },
  '40000 INR / 30 Days':          { name:'Business Plan',      tier:'BUSINESS',      price:'₹40,000',   dur:'30 Days',         features:['All 3 Platforms','50000+ Monthly Reach','Real-time Dashboard','Video Ad Creation','Weekly Strategy Call','Lead Generation'] },
  '50000 INR / 30 Days':          { name:'Scale Plan',         tier:'SCALE',         price:'₹50,000',   dur:'30 Days',         features:['All 4 Platforms','Dedicated Account Manager','100000+ Monthly Reach','Daily Optimization','Full Content Creation','Priority Support 24/7'] },
  '60000 INR / 30 Days':          { name:'Enterprise Plan',    tier:'ENTERPRISE',    price:'₹60,000',   dur:'30 Days',         features:['Custom Multi-platform','Guaranteed Lead Volume','Unlimited Reach','Brand Identity Package','24/7 VIP Support','ROI Guarantee'] },
  '85000 INR / 1 Month 15 Days':  { name:'Premium Gold Plan',  tier:'PREMIUM GOLD',  price:'₹85,000',   dur:'1 Month 15 Days', features:['All 4 Platforms','45-Day Campaign','200000+ Total Reach','Premium Creatives','Dedicated Account Manager','Priority Support'] },
  '125000 INR / 1 Month 15 Days': { name:'Premium Plus Plan',  tier:'PREMIUM PLUS',  price:'₹1,25,000', dur:'1 Month 15 Days', features:['All Platforms + YouTube','45-Day Power Campaign','500000+ Total Reach','Video + Graphic Creatives','Advanced Lead Funnels','Priority Support 24/7'] },
  '150000 INR / 1 Month 15 Days': { name:'Premium Elite Plan', tier:'PREMIUM ELITE', price:'₹1,50,000', dur:'1 Month 15 Days', features:['All Platforms — Full Power','45-Day Elite Campaign','Unlimited Reach','VIP Account Team','Daily Optimization Calls','ROI Guarantee'] }
};

/* Active plan data shared between confirm modal → payment modal */
var _pmData = null;

function showPlanConfirm(data){
  _pmData = data; /* store for payment modal */
  var el = document.getElementById('plan-confirm-modal');
  if(!el || !data) return;
  document.getElementById('pcm-tier').textContent      = data.tier  || '';
  document.getElementById('pcm-plan-name').textContent = data.name  || '';
  document.getElementById('pcm-price').textContent     = data.price || '';
  document.getElementById('pcm-dur').textContent       = data.dur ? '/ ' + data.dur : '';
  var feat = document.getElementById('pcm-features');
  feat.innerHTML = '';
  (data.features || []).forEach(function(f){
    var div = document.createElement('div');
    div.className = 'pcm-feat';
    div.innerHTML = '<span class="pcm-feat-check">\u2713</span>' + f;
    feat.appendChild(div);
  });
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePlanConfirm(){
  var el = document.getElementById('plan-confirm-modal');
  if(el) el.classList.remove('open');
  document.body.style.overflow = '';
  document.querySelectorAll('input[name="selected-plan"]').forEach(function(r){ r.checked = false; });
  var label = document.getElementById('plan-selected-label');
  if(label){ label.textContent = ''; label.classList.remove('has-selection'); }
}

/* ===================================================================
   PAYMENT FLOW  —  plan select → confirm → pay → success
=================================================================== */
var _payPlan = '';

/* Shared UPI helpers */
var _isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

var _payWebUrls = {
  gpay:    'https://pay.google.com/',
  phonepe: 'https://www.phonepe.com/',
  bhim:    'https://www.bhimupi.org.in/',
  upi:     'https://www.bhimupi.org.in/'
};

function _buildUPILink(app){
  var upiId = 'utkarshsinghhh340@oksbi';
  var pn    = 'Utkarsh%20Singh';
  var tn    = encodeURIComponent('US Digital Marketing - ' + (_payPlan || 'Services'));
  var base  = 'pa='+upiId+'&pn='+pn+'&tn='+tn+'&cu=INR';
  var map   = {
    gpay:    'tez://upi/pay?'    + base,
    phonepe: 'phonepe://pay?'   + base,
    bhim:    'upi://pay?'       + base,
    upi:     'upi://pay?'       + base
  };
  return map[app] || map.upi;
}

/* ── Entry point — handles both:
     openPayModal('Plan Name','amount')  ← from pricing cards
     openPayModal()                      ← from pcm-cta after plan confirm ── */
function openPayModal(planName, amount){
  if(!planName){
    /* Called from plan confirmation modal CTA — plan already in _pmData */
    _openPaymentModal();
    return;
  }
  _payPlan = planName;
  var data = _planConfirmData && _planConfirmData[amount];
  if(data){
    showPlanConfirm(data);
  } else {
    /* Fallback: open payment modal directly with minimal info */
    _pmData = { name: planName, tier: 'PLAN', price: amount, dur: '' };
    _openPaymentModal();
  }
}

/* ── Internal: populate and open the payment modal ── */
function _openPaymentModal(){
  var el = document.getElementById('pay-modal');
  if(!el) return;
  if(_pmData){
    _payPlan = _pmData.name || _payPlan;
    var tag = document.getElementById('pm-plan-tag');
    var nm  = document.getElementById('pm-plan-name-disp');
    var pr  = document.getElementById('pm-plan-price-disp');
    if(tag) tag.textContent = _pmData.tier  || '';
    if(nm)  nm.textContent  = _pmData.name  || '';
    if(pr)  pr.textContent  = (_pmData.price || '') + (_pmData.dur ? ' · ' + _pmData.dur : '');
  }
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ── Close payment modal ── */
function closePayModal(){
  var el = document.getElementById('pay-modal');
  if(el) el.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Payment method buttons ── */
function pmTrigger(app){
  var deepLink = _buildUPILink(app);
  if(_isMobile){
    var a = document.createElement('a');
    a.href = deepLink;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    /* Fallback hint after 1.8s if app didn't open */
    setTimeout(function(){
      var btn = document.getElementById('pm-copy-btn');
      if(btn && btn.textContent === 'Copy'){
        btn.textContent = '📋 Tap to Copy';
        btn.style.background = 'rgba(37,99,235,0.24)';
        setTimeout(function(){ btn.textContent='Copy'; btn.style.background=''; }, 4000);
      }
    }, 1800);
  } else {
    window.open(_payWebUrls[app] || _payWebUrls.upi, '_blank');
  }
}

/* ── UPI ID copy ── */
function pmCopyUPI(){
  var id = 'utkarshsinghhh340@oksbi';
  if(navigator.clipboard){
    navigator.clipboard.writeText(id).catch(function(){});
  } else {
    var t = document.createElement('textarea');
    t.value = id; document.body.appendChild(t);
    t.select(); document.execCommand('copy');
    document.body.removeChild(t);
  }
  var btn = document.getElementById('pm-copy-btn');
  if(btn){
    btn.textContent = '✓ Copied!';
    btn.style.background = 'rgba(34,197,94,0.22)';
    setTimeout(function(){ btn.textContent='Copy'; btn.style.background=''; }, 2200);
  }
}

/* ── User confirms payment done → show success ── */
function pmConfirmPayment(){
  closePayModal();
  showPaySuccess();
}

/* ── WhatsApp from payment modal ── */
function pmWhatsApp(){
  var plan = (_pmData && _pmData.name) || _payPlan || 'your service';
  var price= (_pmData && _pmData.price) ? ' (' + _pmData.price + ')' : '';
  var msg  = 'Hello! I have completed the payment for ' + plan + price + '. UPI ID: utkarshsinghhh340@oksbi. Please confirm my plan activation.';
  window.open('https://wa.me/919630715686?text=' + encodeURIComponent(msg), '_blank');
}

/* ── Payment success modal ── */
function showPaySuccess(){
  var el = document.getElementById('pm-success');
  if(!el) return;
  if(_pmData){
    var badge = document.getElementById('pms-badge');
    if(badge) badge.textContent = (_pmData.name || 'Plan') + (_pmData.price ? ' · ' + _pmData.price : '');
  }
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePaySuccess(){
  var el = document.getElementById('pm-success');
  if(el) el.classList.remove('open');
  document.body.style.overflow = '';
  /* Reset plan selection UI */
  document.querySelectorAll('input[name="selected-plan"]').forEach(function(r){ r.checked = false; });
  var label = document.getElementById('plan-selected-label');
  if(label){ label.textContent = 'Select a plan above to review it and proceed to payment'; label.classList.remove('has-selection'); }
  _pmData  = null;
  _payPlan = '';
}

/* Legacy aliases (kept for any external references) */
function triggerUPI(app){ pmTrigger(app); }
function copyUPIId()    { pmCopyUPI(); }
function payModalWhatsApp(){ pmWhatsApp(); }
function triggerDirectUPI(app){ _payPlan='UDM Services'; pmTrigger(app); }

/* Close all modals on Escape */
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    closeSvcModal();
    closeStatModal();
    closePayModal();
    closePlanConfirm();
    closePaySuccess();
  }
});
