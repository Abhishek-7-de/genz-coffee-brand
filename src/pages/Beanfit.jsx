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
                The name positions itself at the meeting point of two ideas: <strong style={{color:'rgba(240,235,227,0.9)'}}>The Bean</strong> — the origin of every great coffee — 
                and <strong style={{color:'rgba(240,235,227,0.9)'}}>Fit</strong> — functional nutrition for an active lifestyle. 
                Together: a brand that earns its place in your morning ritual.
              </p>
              <p className="section-desc">
                The <strong style={{color:'rgba(240,235,227,0.9)'}}>"bf" oval monogram</strong> references the coffee bean shape, embedding the brand identity 
                into its most fundamental ingredient. The classic serif wordmark signals craft, quality, 
                and permanence — not a trend, a standard.
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
              <div style={{marginTop:24, display:'flex', gap:12, flexWrap:'wrap'}}>
                {[['#3B1F0A','Espresso'],['#8B5C2A','Roast'],['#C49060','Caramel'],['#F5EDE0','Linen'],['#0D0B09','Midnight']].map(([c,n]) => (
                  <div key={n} style={{display:'flex',alignItems:'center',gap:8}}>
                    <div style={{width:28,height:28,borderRadius:8,background:c,border:'1px solid rgba(255,255,255,0.12)'}} />
                    <span style={{fontSize:11,color:'rgba(240,235,227,0.45)',fontFamily:'Space Grotesk, sans-serif'}}>{n}</span>
                  </div>
                ))}
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
              "The Beanfit is not just a drink — it's the intersection of specialty coffee culture and functional nutrition, 
              designed for a generation that doesn't compromise on either."
            </p>
            <p style={{ color:'rgba(240,235,227,0.55)', fontSize:'0.95rem', lineHeight:1.8, maxWidth:660 }}>
              We sit at the crossroads of two fast-growing markets: <strong style={{color:'rgba(240,235,227,0.85)'}}>premium coffee</strong> and 
              <strong style={{color:'rgba(240,235,227,0.85)'}}> protein nutrition</strong>. Our target audience is Gen-Z and millennial 
              coffee addicts, gym-goers, and busy professionals who struggle to hit their daily protein goals without 
              the hassle of extra prep. The Beanfit makes hitting 15g of protein as natural as your morning brew.
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
                Not an energy drink. Not a protein shake. A category entirely its own — 
                <em> Protein Coffee</em>. Here's how The Beanfit goes to market.
              </p>
            </motion.div>
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
              {[
                { title:'Product Strategy – The Sachet Advantage', body:'Individual sachets eliminate the friction of carrying tubs. Each sachet = one perfect serving. Formats: Original Black, Creamy Latte, Mocha Fuel, Cold Brew Vanilla. Future seasonal drops (pumpkin spice, matcha protein) to keep the brand culturally alive.' },
                { title:'Pricing Strategy – Premium-Accessible', body:'Priced at ₹60–₹85 per sachet (₹799–₹999 for packs of 10+12). Not cheap, not luxury — firmly in the "affordable premium" zone. Comparable to ordering a specialty coffee but with protein built in.' },
                { title:'Distribution Strategy – Where Gen-Z Actually Shops', body:'D2C website, Zomato Hyperpure, quick commerce (Blinkit, Swiggy Instamart), and partnerships with gyms and co-working spaces. Offline sampling kiosks in college campuses and gyms for trial.' },
                { title:'Communication Strategy – Anti-Corporate Tone', body:'Copywriting that sounds like a friend, not a brand. No fake science. No loud shouty claims. Dry humour, honest macros, real people. Instagram-first, with Reels showcasing the "30-second ritual".' },
                { title:'Flavour Innovation Strategy – Trend-Led Drops', body:'Beyond the core 4: limited-edition flavours tied to cultural moments. Rose protein latte for Valentine\'s. Mango cold brew for summer. Keeps the product in conversations even off-season.' },
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
                'Use earthy, warm tones — espresso brown, cream, clay, slate.',
                'Write copy like a real person. Wit over jargon.',
                'Lead with taste and convenience, support with nutrition facts.',
                'Show real people. Gyms, desks, trains, kitchens.',
                'Create limited seasonal flavours to stay culturally relevant.',
                'Partner with micro-influencers who genuinely care about what they consume.',
                'Make the sachet the hero — it\'s portable, instagrammable, zero-mess.',
                'Use QR codes on pack for recipe ideas and community content.',
              ].map(d => (
                <div className="dd-item" key={d}><span className="dd-check">✓</span><span>{d}</span></div>
              ))}
            </motion.div>
            <motion.div className="donts-box" initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.5}}>
              <h3>✕ Don'ts</h3>
              {[
                'Don\'t use overly clinical language or fake-science claims.',
                'Don\'t go all-out neon or "protein bro" aesthetic — we\'re not a sports drink.',
                'Don\'t ignore coffee culture — it\'s half the brand DNA.',
                'Don\'t discount heavily — it kills premium perception.',
                'Don\'t use stock photos of people lifting in perfect studios.',
                'Don\'t launch 12 flavours at once — limited drops create FOMO.',
                'Don\'t hide the protein content — it\'s a feature, not a footnote.',
                'Don\'t try to appeal to everyone — the niche is the strength.',
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
          <motion.span className="eyebrow" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>Packaging Vision</motion.span>
          <div className="divider" />
          <motion.h2 className="section-title" style={{marginBottom:12}} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            The Sachet is the Product.
          </motion.h2>
          <motion.p className="section-desc" style={{marginBottom:48}} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            Two colourways — a rich espresso dark edition and a clean linen light edition. 
            Both designed to look good on your kitchen counter, your gym bag, and your Instagram feed.
          </motion.p>
          <div className="pack-grid">
            <motion.div className="pack-item" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0}} whileHover={{scale:1.01}}>
              <img src="/beanfit-dark.png" alt="The Beanfit Dark Edition" className="pack-img" />
              <div className="pack-label">Dark Edition — Espresso Series</div>
            </motion.div>
            <motion.div className="pack-item" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.15}} whileHover={{scale:1.01}}>
              <img src="/beanfit-light.png" alt="The Beanfit Light Edition" className="pack-img" />
              <div className="pack-label">Light Edition — Linen Series</div>
            </motion.div>
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
