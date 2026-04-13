import React from 'react'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } }
const stagger = { show: { transition: { staggerChildren: 0.13 } } }

export default function BeafitPage() {
  return (
    <div className="page-wrapper bf">

      {/* ── HERO ── */}
      <section className="hero section">
        <div className="hero-bg-grain" />
        <div className="container">
          <div className="grid-2">
            <motion.div className="hero-content" variants={stagger} initial="hidden" animate="show">
              <motion.span className="hero-badge" variants={fade}>✦ Gen-Z Coffee Brand · Assignment</motion.span>
              <motion.img src="/beanfit-logo.png" alt="The Beanfit Logo" className="hero-logo-img" variants={fade}
                style={{ filter:'invert(1) sepia(1) saturate(0.8) hue-rotate(10deg) brightness(1.1)' }}
                onError={e => { e.target.style.display='none' }} />
              <motion.h1 className="hero-title" variants={fade} style={{ fontFamily: "'Playfair Display', serif" }}>
                The<br />Beanfit.
              </motion.h1>
              <motion.p className="hero-subtitle" variants={fade}>
                Where your double espresso finally pulls its weight — and we mean that literally. 
                Specialty coffee fused with 15g of clean whey protein. Built for people who live fast, 
                train hard, and refuse to choose between gains and great taste.
              </motion.p>
              <motion.div variants={fade}>
                <a href="#positioning" className="btn btn-primary-bf">Explore Brand</a>
                <a href="#qna" className="btn btn-ghost">Read Q&A</a>
              </motion.div>
            </motion.div>

            <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <motion.img src="/beanfit-dark.png" alt="The Beanfit Packaging" className="hero-mockup"
                animate={{ y: [0, -14, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <motion.div
        className="stats-row"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        {[['15g','Whey Protein'],['100mg','Natural Caffeine'],['30s','Prep Time'],['0','Compromise']].map(([v,k]) => (
          <div className="stat-block" key={k}>
            <div className="stat-val">{v}</div>
            <div className="stat-key">{k}</div>
          </div>
        ))}
      </motion.div>

      {/* ── BRAND IDENTITY ── */}
      <section className="section" id="brand-identity">
        <div className="container">
          <motion.span className="eyebrow" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>Brand Name &amp; Logo</motion.span>
          <div className="divider" />
          <div className="grid-2" style={{alignItems:'flex-start', gap:48}}>
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
              <h2 className="section-title">The Beanfit.</h2>
              <p className="section-desc" style={{marginBottom:32}}>
                The name positions itself exactly at the meeting point of two core ideas. <strong style={{color:'rgba(240,235,227,0.9)'}}>The Bean</strong> represents the origin of every great coffee, 
                while <strong style={{color:'rgba(240,235,227,0.9)'}}>Fit</strong> highlights functional nutrition for an active lifestyle. 
                Together they create a brand that naturally earns its place in a daily morning ritual.
              </p>
              <p className="section-desc">
                The <strong style={{color:'rgba(240,235,227,0.9)'}}>"bf" oval monogram</strong> intentionally references the shape of a coffee bean. This embeds the core brand identity 
                right into its most fundamental ingredient. The classic serif wordmark is there to signal craft and premium quality. It feels permanent instead of just being a fleeting trend.
              </p>
            </motion.div>
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
              {/* Logo on dark */}
              <div style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:20, padding:'40px 32px', marginBottom:20, display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img src="/beanfit-logo.png" alt="The Beanfit Logo — Dark Display"
                  style={{maxWidth:280, filter:'invert(1) sepia(1) saturate(0.8) hue-rotate(10deg) brightness(1.1)'}}
                />
              </div>
              {/* Logo on cream */}
              <div style={{background:'#f5ede0', border:'1px solid rgba(0,0,0,0.06)', borderRadius:20, padding:'40px 32px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img src="/beanfit-logo.png" alt="The Beanfit Logo — Light Display" style={{maxWidth:280}} />
              </div>
              {/* Colours */}
              <div style={{marginTop:40}}>
                <h3 style={{fontSize:'1rem', marginBottom:16, color:'rgba(240,235,227,0.9)', fontFamily:'Space Grotesk, sans-serif'}}>Brand Palette &amp; HEX Codes</h3>
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))', gap:20, marginBottom:24}}>
                  {[
                    ['#3B1F0A','Espresso','Deepest base brown, represents the intensity and quality of the beans.'],
                    ['#8B5C2A','Roast','Warm mid-tone, adding depth and that classic roasted coffee feel.'],
                    ['#C49060','Caramel','Accent color, representing smooth texture and approachable flavor.'],
                    ['#F5EDE0','Linen','Primary canvas color, replaces clinical white with a soft, natural organic feel.'],
                    ['#0D0B09','Midnight','Used for high-contrast typography, cleaner and more modern than pure black.']
                  ].map(([c,n,r]) => (
                    <div key={n} style={{background:'rgba(255,255,255,0.03)', padding:12, borderRadius:12, border:'1px solid rgba(255,255,255,0.05)'}}>
                      <div style={{width:'100%', height:40, borderRadius:6, background:c, marginBottom:10, border:'1px solid rgba(255,255,255,0.1)'}} />
                      <div style={{fontWeight:700, fontSize:13, color:'#fff'}}>{n}</div>
                      <div style={{fontSize:11, color:'rgba(255,255,255,0.4)', fontFamily:'monospace', marginBottom:6}}>{c}</div>
                      <div style={{fontSize:10, color:'rgba(255,255,255,0.5)', lineHeight:1.4}}>{r}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── POSITIONING ── */}
      <section className="section" id="positioning">
        <div className="container">
          <motion.span className="eyebrow" variants={fade} initial="hidden" whileInView="show" viewport={{ once:true }}>Brand Positioning</motion.span>
          <div className="divider" />
          <motion.div className="position-block" initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <p className="position-quote">
              "The Beanfit is not just another drink. It's the exact intersection of specialty coffee culture and functional nutrition, 
              designed entirely for a generation that refuses to compromise on either."
            </p>
            <p style={{ color:'rgba(240,235,227,0.55)', fontSize:'0.95rem', lineHeight:1.8, maxWidth:660 }}>
              We sit right at the crossroads of two incredibly fast-growing markets: <strong style={{color:'rgba(240,235,227,0.85)'}}>premium coffee</strong> and 
              <strong style={{color:'rgba(240,235,227,0.85)'}}> protein nutrition</strong>. The target audience includes Gen-Z and millennial 
              coffee addicts, gym-goers, and busy professionals who continually struggle to hit their daily protein goals without 
              the headache of extra prep work. The Beanfit aims to make hitting 15g of protein feel as natural and easy as making your morning brew.
            </p>
            <div className="position-pillars">
              {['Functional Nutrition','Specialty Coffee','Clean Ingredients','15g Protein','No Compromise','Premium Taste'].map(p => (
                <span className="pillar-tag" key={p}>{p}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TARGET AUDIENCE + INSIGHT ── */}
      <section className="section-sm" style={{ background:'rgba(255,255,255,0.015)', borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="grid-2">
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
              <span className="eyebrow">Who It's For</span>
              <div className="divider" />
              <h2 className="section-title">The Coffee Addict Who Wants More.</h2>
              <p className="section-desc">
                You start every day with an espresso. You also spend 15 minutes mixing protein powder that clumps, 
                smells weird, and tastes like chalk. The Beanfit solves that. One sachet. Hot or cold water. 
                Done in 30 seconds. Real protein. Real coffee. No drama.
              </p>
            </motion.div>
            <motion.div className="grid-2" style={{ gap:16 }} initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
              {[
                { icon:'☕', title:'Coffee Addicts', body:'People who need 2+ cups daily but hate the empty calorie hit of plain espresso.' },
                { icon:'🏋️', title:'Gym-Goers', body:'Active people who want protein without carrying around tubs and shakers.' },
                { icon:'⚡', title:'Busy Professionals', body:'No time for prep. They want nutrition that fits into their morning routine.' },
                { icon:'📱', title:'Gen-Z & Millennials', body:'Trend-aware, ingredient-conscious, and allergic to anything that feels corporate.' },
              ].map(c => (
                <motion.div className="card" key={c.title} whileHover={{ scale:1.02 }}>
                  <div className="card-icon">{c.icon}</div>
                  <div className="card-title">{c.title}</div>
                  <div className="card-body">{c.body}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BRAND STRATEGY ── */}
      <section className="section" id="strategy">
        <div className="container">
          <div className="grid-2">
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
              <span className="eyebrow">Brand Strategy</span>
              <div className="divider" />
              <h2 className="section-title">Built Different. Brewed Right.</h2>
              <p className="section-desc">
                This isn't an energy drink and it definitely isn't a standard protein shake. It's a category entirely its own:
                <em> Protein Coffee</em>. Here is how The Beanfit intends to go to market.
              </p>
            </motion.div>
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
              {[
                { title:'Product Strategy', body:'Individual sachets entirely eliminate the friction of carrying bulky tubs. Every sachet provides exactly one perfect serving. Core formats will include Original Black, Creamy Latte, Mocha Fuel, and Cold Brew Vanilla. We will also release seasonal drops like pumpkin spice or matcha protein to ensure the brand stays culturally alive.' },
                { title:'Pricing Strategy', body:'The product will be priced at ₹60 to ₹85 per sachet, translating to ₹799 to ₹999 for packs of 10 or 12. It is not cheap and not pure luxury. It sits firmly in the accessible premium zone, making it comparable to ordering a specialty coffee but with a massive protein benefit built right in.' },
                { title:'Distribution Strategy', body:'We target places where Indian Gen-Z genuinely shops. This means a strong D2C website, quick commerce platforms like Blinkit, Zepto, and Swiggy Instamart, and strategic partnerships with premium gyms and co-working spaces. We also plan offline sampling kiosks in college campuses for easy first trials.' },
                { title:'Communication', body:'Our copy sounds like your funniest friend who also happens to meal-prep. We lean heavily into meme-native content and continuous collab drops with rapidly rising fitness creators. We focus on real reviews instead of staged studio selfies and push heavily on Instagram Reels and YouTube Shorts.' },
                { title:'Flavour Innovation', body:'We plan highly collaborative drops with local Indian roasters for limited single-origin protein editions. We also create massive seasonal hype with a Summer Mango series or a deliberate "Post-Gym Chai" protein collection. Flavour votes happen directly on Instagram Stories where the audience decides what drops next.' },
              ].map((s, i) => (
                <motion.div className="strategy-step" key={s.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}>
                  <div className="step-num">{String(i+1).padStart(2,'0')}</div>
                  <div className="step-content">
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DOS AND DONTS ── */}
      <section className="section-sm" id="dos-donts" style={{ background:'rgba(255,255,255,0.015)', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.span className="eyebrow" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>Brand Guidelines</motion.span>
          <div className="divider" />
          <motion.h2 className="section-title" style={{marginBottom:48}} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            Do's &amp; Don'ts
          </motion.h2>
          <div className="dos-donts-grid">
            <motion.div className="dos-box" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.5}}>
              <h3>✓ Do's</h3>
              {[
                'Use earthy and warm tones like espresso brown, cream, clay, and slate.',
                'Write copy naturally like a real person and prioritise wit over corporate jargon.',
                'Lead the messaging with taste and convenience while letting the nutrition facts act as strong support.',
                'Show real people in their actual environments like gyms, desks, trains, and home kitchens.',
                'Create limited seasonal flavours to make sure the brand stays culturally relevant.',
                'Partner closely with genuine micro-influencers who actually care about the things they consume.',
                'Make the sachet the hero of the content because it is highly portable and zero-mess.',
              ].map(d => (
                <div className="dd-item" key={d}><span className="dd-check">✓</span><span>{d}</span></div>
              ))}
            </motion.div>
            <motion.div className="donts-box" initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.5}}>
              <h3>✕ Don'ts</h3>
              {[
                'Avoid using overly clinical language or completely fake science claims.',
                'Avoid going all out with neon colours or a generic gym bro aesthetic because we are not a sports energy drink.',
                'Never ignore coffee culture because it makes up half of the brand DNA.',
                'Avoid discounting heavily as it immediately kills the premium perception of the product.',
                'Stay away from perfect stock photos of people lifting weights in spotless studios.',
                'Avoid launching a dozen flavours all at once. Spread them out to create excitement.',
                'Never try to hide the protein content. It is a major feature and should proudly be displayed.',
              ].map(d => (
                <div className="dd-item" key={d}><span className="dd-cross">✕</span><span>{d}</span></div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PACKAGING ── */}
      <section className="section" id="packaging">
        <div className="container">
          <motion.span className="eyebrow" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>Packaging Vision &amp; Mockups</motion.span>
          <div className="divider" />
          <motion.h2 className="section-title" style={{marginBottom:12}} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            The Sachet is the Product.
          </motion.h2>
          <motion.p className="section-desc" style={{marginBottom:48}} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            We designed the packaging to look seamless whether it's sitting on your kitchen counter, tucked in your gym bag, or featured on your Instagram feed. The lineup consists of our rich espresso dark edition and the soft linen light edition. Here is an expanded look at the product family.
          </motion.p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:32}}>
            {[
              {
                img: '/beanfit-dark.png',
                label: 'Dark Edition',
                sub: 'Espresso Black Series',
                bg: '#1a0f06',
                border: '1px solid rgba(140,80,30,0.3)',
                imgStyle: { filter:'none', transform:'scale(1.05) translateY(-4px)' },
                badge: '#8B5C2A'
              },
              {
                img: '/beanfit-light.png',
                label: 'Light Edition',
                sub: 'Linen Series',
                bg: '#f0e6d3',
                border: '1px solid rgba(0,0,0,0.08)',
                imgStyle: { filter:'brightness(1.05) saturate(0.9)', transform:'scale(0.98) rotate(-1deg)' },
                badge: '#C49060',
                light: true
              },
              {
                img: '/beanfit-dark.png',
                label: 'Mocha Fuel',
                sub: 'Limited Edition',
                bg: '#0d1a0f',
                border: '1px solid rgba(80,140,60,0.2)',
                imgStyle: { filter:'sepia(0.4) hue-rotate(-15deg) saturate(1.3) brightness(0.85)', transform:'scale(1.08) rotate(2deg)' },
                badge: '#4a7c3f'
              },
              {
                img: '/beanfit-light.png',
                label: 'Cold Brew Vanilla',
                sub: 'Summer Edition',
                bg: '#1a150a',
                border: '1px solid rgba(200,160,80,0.25)',
                imgStyle: { filter:'sepia(0.6) saturate(1.5) brightness(0.9) hue-rotate(20deg)', transform:'scale(1.04) rotate(-2deg)' },
                badge: '#C8A050'
              },
            ].map((p, i) => (
              <motion.div key={i}
                initial={{opacity:0, y:24}} whileInView={{opacity:1, y:0}}
                viewport={{once:true}} transition={{delay:i*0.1}}
                whileHover={{scale:1.02, y:-4}}
                style={{
                  background: p.bg,
                  border: p.border,
                  borderRadius: 20,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.35)'
                }}
              >
                <div style={{padding:'32px 24px 16px', display:'flex', justifyContent:'center'}}>
                  <img src={p.img} alt={p.label} style={{ width:'75%', maxWidth:200, ...p.imgStyle, transition:'transform 0.4s ease' }} />
                </div>
                <div style={{padding:'0 20px 24px'}}>
                  <div style={{
                    display:'inline-block',
                    background: p.badge + '22',
                    border: `1px solid ${p.badge}44`,
                    color: p.badge,
                    fontSize:10, fontWeight:700, letterSpacing:'0.1em',
                    padding:'3px 10px', borderRadius:999, marginBottom:8,
                    fontFamily:'Space Grotesk, sans-serif'
                  }}>{p.sub}</div>
                  <div style={{ fontWeight:700, fontSize:'1rem', color: p.light ? '#3B1F0A' : '#f0e6d3', fontFamily:'Space Grotesk, sans-serif' }}>{p.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Q&A ── */}
      <section className="section" id="qna" style={{ background:'rgba(255,255,255,0.015)', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.span className="eyebrow" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>Assignment Q&amp;A</motion.span>
          <div className="divider" />
          <motion.h2 className="section-title" style={{marginBottom:56}} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            Questions &amp; Answers
          </motion.h2>

          {[
            {
              q:'What is the brand concept and why this product?',
              a:`The Beanfit was born out of a simple observation: <strong>millions of Gen-Z and millennial coffee drinkers already spend money on espressos daily but consistently fall short on their protein intake.</strong> The solution isn't to tell them to drink a protein shake — it's to fuse both into something they already love. A sachet-format protein coffee that takes 30 seconds to make, tastes like specialty coffee, and delivers 15g of clean whey protein. The concept targets a real behavioural gap, not just a market gap.`
            },
            {
              q:'Who is the target audience and what are their pain points?',
              a:`Primary audience: <strong>18–28 year olds</strong> who are gym-conscious, caffeine-dependent, time-poor, and culturally aware. Their key pain points are: (1) Protein powder is inconvenient and chalky. (2) Their coffee adds calories but zero macros. (3) Prep takes too long for their schedule. (4) Most protein brands feel corporate and unappealing to their identity. The Beanfit solves all four.`
            },
            {
              q:'How is The Beanfit differentiated from competitors?',
              a:`Existing brands sit in one of two camps — either <strong>premium coffee brands that ignore nutrition</strong> (Blue Tokai, Third Wave) or <strong>protein brands that ignore taste</strong> (Optimum Nutrition, MuscleBlaze). The Beanfit is the only brand that genuinely plays in both. The sachet format is unique in the Indian market. The brand voice is anti-corporate. The aesthetic is premium but approachable — not "gym bro" and not "artisan hipster". That white space is intentional.`
            },
            {
              q:'What flavours are planned and why?',
              a:`Core lineup: <strong>Original Black</strong> (15g protein, 100mg caffeine), <strong>Creamy Latte</strong> (15g, 80mg), <strong>Mocha Fuel</strong> (20g, 100mg), <strong>Cold Brew Vanilla</strong> (15g, 110mg). Beyond the core, trend-led seasonal drops — Rose Protein Latte (Valentine's), Mango Cold Brew (summer), Pumpkin Spice (festive). This keeps the product culturally relevant year-round and creates FOMO-driven demand spikes.`
            },
            {
              q:'What is the pricing strategy?',
              a:`The Beanfit is positioned as <strong>affordable premium</strong> — ₹60–₹85 per sachet, or ₹799–₹999 for a pack of 10. This is comparable to one specialty coffee order, making the value proposition clear: same price as your third-wave coffee, but with 15g of protein built in. Volume packs (30-day supply) at a slight discount to drive retention.`
            },
            {
              q:'How does the brand plan to reach its audience?',
              a:`Three channel priorities: (1) <strong>D2C website</strong> — own the customer relationship and data. (2) <strong>Quick commerce</strong> (Blinkit, Swiggy Instamart) — impulse purchase + gym-bag fill-ups. (3) <strong>Instagram-first content</strong> — Reels showing the 30-second ritual, genuine micro-influencer partnerships, and community UGC. Campus sampling events at gyms and college canteens to drive first-trial.`
            },
          ].map((item, i) => (
            <motion.div className="qna-item" key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}>
              <div className="qna-q">Q{i+1}. {item.q}</div>
              <div className="qna-a" dangerouslySetInnerHTML={{ __html: item.a }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="page-footer container">
        <div className="footer-brand" style={{ fontFamily:"'Playfair Display', serif" }}>The Beanfit.</div>
        <div className="footer-sub">Protein. Coffee. No Compromise. · Gen-Z Brand Assignment 2026</div>
      </footer>

    </div>
  )
}
