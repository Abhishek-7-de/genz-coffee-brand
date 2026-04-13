import React from 'react'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } }
const stagger = { show: { transition: { staggerChildren: 0.13 } } }

export default function ProffePage() {
  return (
    <div className="page-wrapper pr">

      {/* ── HERO ── */}
      <section className="hero section" style={{ background:'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(196,129,58,0.07), transparent)' }}>
        <div className="hero-bg-grain" />
        <div className="container">
          <div className="grid-2">
            <motion.div className="hero-content" variants={stagger} initial="hidden" animate="show">
              <motion.span className="hero-badge" variants={fade}>✦ Gen-Z Protein Coffee · Brand 2</motion.span>
              <motion.img src="/proffe-logo.png" alt="PROFFE Logo" className="hero-logo-img" variants={fade}
                style={{ filter:'invert(1) sepia(1) saturate(0.6) hue-rotate(10deg) brightness(1.2)', maxWidth:'320px' }}
                onError={e => { e.target.style.display='none' }} />
              <motion.h1 className="hero-title" variants={fade} style={{ fontFamily:"'Space Grotesk', sans-serif", letterSpacing:'-0.03em' }}>
                PROFFE.
              </motion.h1>
              <motion.p className="hero-subtitle" variants={fade}>
                Protein + Coffee. No big explanation needed. Just rip open a sachet, mix with water, 
                and hit your macros before you've finished scrolling. Gen-Z's answer to the world's most 
                overdue collab — your espresso shot that actually builds muscle.
              </motion.p>
              <motion.div variants={fade}>
                <a href="#positioning" className="btn btn-primary-pr">Explore Brand</a>
                <a href="#qna" className="btn btn-ghost">Read Q&A</a>
              </motion.div>
            </motion.div>

            <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <motion.img src="/proffe-dark.png" alt="PROFFE Packaging" className="hero-mockup"
                animate={{ y: [0, -14, 0], rotate: [0, 1.5, -1.5, 0] }}
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
        {[['15g','Clean Protein'],['100mg','Caffeine Hit'],['30s','That\'s It'],['1','Category King']].map(([v,k]) => (
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
              <h2 className="section-title">PROFFE.</h2>
              <p className="section-desc" style={{marginBottom:32}}>
                The name is a direct mashup: <strong style={{color:'rgba(240,235,227,0.9)'}}>PRO</strong>tein + co<strong style={{color:'rgba(240,235,227,0.9)'}}>FFE</strong>e = PROFFE. 
                No fluff, no mystery — the product is the name. It says exactly what it is, 
                in the most Gen-Z way possible: by smashing two things together and making it sound cool.
              </p>
              <p className="section-desc">
                The <strong style={{color:'rgba(240,235,227,0.9)'}}>bubbly, thick retro wordmark</strong> was chosen to feel fun and approachable — 
                breaking the rigid, aggressive typography that dominates the protein supplement world. 
                It's the kind of logo you put on a tote bag. That's the whole point.
              </p>
            </motion.div>
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
              {/* Logo on dark */}
              <div style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:20, padding:'40px 32px', marginBottom:20, display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img src="/proffe-logo.png" alt="PROFFE Logo — Dark Display"
                  style={{maxWidth:300, filter:'invert(1) sepia(1) saturate(0.6) hue-rotate(10deg) brightness(1.2)'}}
                />
              </div>
              {/* Logo on cream */}
              <div style={{background:'#f5ede0', border:'1px solid rgba(0,0,0,0.06)', borderRadius:20, padding:'40px 32px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img src="/proffe-logo.png" alt="PROFFE Logo — Light Display" style={{maxWidth:300}} />
              </div>
              {/* Colours */}
              <div style={{marginTop:24, display:'flex', gap:12, flexWrap:'wrap'}}>
                {[['#3B1F0A','Espresso'],['#C4813A','Roast Gold'],['#D99244','Amber'],['#F5EDE0','Cream'],['#0D0B09','Midnight']].map(([c,n]) => (
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
          <motion.span className="eyebrow" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>Brand Positioning</motion.span>
          <div className="divider" />
          <motion.div className="position-block" initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <p className="position-quote">
              "PROFFE is the brand for people who don't want a brand — they want a product that works, 
              tastes sick, and doesn't pretend to be more than it is. It's protein. It's coffee. It's PROFFE."
            </p>
            <p style={{ color:'rgba(240,235,227,0.55)', fontSize:'0.95rem', lineHeight:1.8, maxWidth:680 }}>
              PROFFE is positioned as the <strong style={{color:'rgba(240,235,227,0.85)'}}>bold, no-nonsense, culturally-wired</strong> alternative in the protein coffee space. 
              While The Beanfit leans premium and artisanal, PROFFE is louder, funnier, and more in your face. 
              It speaks to the same Gen-Z audience but as a friend who drags you to the gym, not as a wellness brand. 
              The bubbly, retro wordmark signals: <em>we're not taking ourselves too seriously — but our macros are dead serious.</em>
            </p>
            <div className="position-pillars">
              {['Bold & Loud','Anti-Pretentious','Functional First','Good Macros','Trend-Forward','Gym Culture'].map(p => (
                <span className="pillar-tag" key={p}>{p}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TARGET AUDIENCE ── */}
      <section className="section-sm" style={{ background:'rgba(255,255,255,0.015)', borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="grid-2">
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
              <span className="eyebrow">Who It's For</span>
              <div className="divider" />
              <h2 className="section-title">The Ones Who Just Get It.</h2>
              <p className="section-desc">
                They already follow their favourite gym creator. They already know their macros. 
                They've tried every protein brand, every instant coffee, and they're bored of both. 
                PROFFE doesn't need to convince them of anything — it just needs to show up and deliver.
              </p>
            </motion.div>
            <motion.div className="grid-2" style={{ gap:16 }} initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
              {[
                { icon:'🎯', title:'Macro-Trackers', body:'They hit MyFitnessPal before breakfast. They know their numbers. PROFFE respects that.' },
                { icon:'🏃', title:'Morning Runners', body:'Pre-workout protein + caffeine without mixing two different things. One sachet = sorted.' },
                { icon:'🎮', title:'Late Night Grinders', body:'Study sessions, side hustle nights, gaming marathons. PROFFE for the long haul.' },
                { icon:'🌊', title:'Trend Chasers', body:'They\'re already telling their friends about the newest coffee spot. Now they\'ll be talking about PROFFE.' },
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
              <h2 className="section-title">Loud Where It Counts.</h2>
              <p className="section-desc">
                PROFFE doesn't whisper. Every strategic decision is designed to cut through the noise 
                of both the protein aisle and the coffee counter.
              </p>
            </motion.div>
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
              {[
                { title:'Product Strategy – Bold Flavours, Clean Labels', body:'Fewer but bolder flavours: OG Black, Smoky Mocha, Dirty Chai Protein, Iced Hazelnut Crème. Every flavour sounds like something you\'d order, not something you\'d take as a supplement. Full ingredients panel front and centre — no hiding the macros.' },
                { title:'Pricing Strategy – Mass-Premium', body:'₹55–₹75 per sachet. Slightly more aggressive than The Beanfit — maximising accessibility without abandoning quality perception. Bulk packs pushed hard: 15-pack at ₹899, 30-pack subscription model at ₹1,649/month.' },
                { title:'Distribution Strategy – Everywhere Gen-Z Is', body:'Blinkit, Swiggy Instamart, D2C, gym merch desks, and 7-Elevens in tier-1 cities. Also: campus ambassador program where college students earn commissions for driving D2C sales.' },
                { title:'Communication Strategy – Meme-Literate, Not Cringe', body:'Copy that sounds like your funniest friend who also meal-preps. Meme-native content. Collab drops with fitness creators. Real reviews, no staged gym selfies. TikTok / Instagram Reels first. The entire brand\'s voice is: "we get you".' },
                { title:'Flavour Innovation – Collab Drops', body:'PROFFE x local roasters for limited single-origin protein editions. Seasonal hype drops (Mango season, Pumpkin Spice protest collection). Flavour votes on Instagram Stories — audience decides what drops next.' },
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
                "Be loud with branding — the PROFFE wordmark should own every surface it's on.",
                'Use real, unfiltered fitness content. Sweaty gym selfies over studio shoots.',
                'Be funny. Dry, self-aware humour that Gen-Z actually forwards.',
                "Show the macros immediately — that's the first thing this audience wants to know.",
                'Partner with nano and micro-influencers who have real engagement, not follower counts.',
                'Create FOMO through limited drops and collab flavours.',
                'Gamify loyalty — points for sachets, streak rewards for daily use.',
                'Make packaging look good in flat-lays. Instagram is still a key shelf.',
              ].map(d => (
                <div className="dd-item" key={d}><span className="dd-check">✓</span><span>{d}</span></div>
              ))}
            </motion.div>
            <motion.div className="donts-box" initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.5}}>
              <h3>✕ Don'ts</h3>
              {[
                'Don\'t be overly polished or corporate — that kills the vibe immediately.',
                'Don\'t ignore flavour diversity — this audience has low loyalty to boring.',
                'Don\'t compete with Red Bull or Monster — that\'s a different war.',
                'Don\'t mislead on nutrition — the audience is smart and will call it out.',
                'Don\'t run discount campaigns constantly — it trains people to wait for deals.',
                'Don\'t make packaging too dark or moody — energy and approachability matter.',
                'Don\'t over-explain the product — if you need a paragraph to sell it, rethink it.',
                'Don\'t ignore the offline opportunity — gyms are still primary brand-building spaces.',
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
            The Pouch That Does the Talking.
          </motion.h2>
          <motion.p className="section-desc" style={{marginBottom:48}} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            PROFFE's bubbly wordmark owns the entire front of the pouch. No clutter, 
            no filler — just the name, the macros, and that unmistakable retro-modern typography. 
            The bold dark edition and the clean off-white edition for different moods.
          </motion.p>
          <div className="pack-grid">
            <motion.div className="pack-item" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0}} whileHover={{scale:1.01}}>
              <img src="/proffe-dark.png" alt="PROFFE Dark Edition" className="pack-img" />
              <div className="pack-label">PROFFE Dark — OG Black Series</div>
            </motion.div>
            <motion.div className="pack-item" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.15}} whileHover={{scale:1.01}}>
              <img src="/proffe-light.png" alt="PROFFE Light Edition" className="pack-img" />
              <div className="pack-label">PROFFE Light — Clean Series</div>
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
              q:'What makes PROFFE different from The Beanfit?',
              a:`Both brands solve the same problem — protein + coffee in a sachet — but their personalities are completely different. <strong>The Beanfit is premium and artisanal</strong>, targeting people who care about aesthetics and coffee culture. <strong>PROFFE is bold, accessible, and culturally louder</strong>, targeting people who are gym-first, trend-aware, and allergic to anything that feels too fancy. Think of them as the same chassis, completely different builds.`
            },
            {
              q:'What inspired the PROFFE name and brand identity?',
              a:`The name is a mashup of <strong>Protein + Coffee = PROFFE</strong>. Simple, memorable, doesn't need explaining. The bubbly retro-modern wordmark was chosen deliberately to feel approachable, fun, and different from the rigid sans-serifs that dominate the protein supplement aisle. The idea: when you see PROFFE, you smile. Then you check the macros. In that order.`
            },
            {
              q:'How does PROFFE approach the protein supplement market?',
              a:`By refusing to look like a protein supplement. The biggest barrier to entry in functional nutrition for Gen-Z is <strong>category shame</strong> — protein shakes still carry a "gym bro" or "trying too hard" stigma in mainstream culture. PROFFE sidesteps this entirely by leading as a coffee brand. The protein is the bonus, not the pitch. This flips the funnel: coffee lovers discover the protein benefit, rather than protein buyers being told to switch their coffee.`
            },
            {
              q:"What's the flavour strategy for PROFFE?",
              a:`Core range stays tight and punchy: <strong>OG Black, Smoky Mocha, Dirty Chai Protein, Iced Hazelnut Crème</strong>. Then quarterly collab drops — PROFFE x local roasters for single-origin protein editions. Seasonal hype: Mango Cold Brew for summer, a deliberately unhinged "Pumpkin Spice Protest" for autumn. <strong>Audience-voted drops via Instagram Stories</strong> — which turns flavour R&D into content.`
            },
            {
              q:"What does PROFFE's communication look like?",
              a:`The brand voice is: <strong>"your funniest friend who also meal-preps."</strong> No fake enthusiasm. No wellness-speak. Just honest, direct, slightly self-deprecating copy that makes people forward the post. Content-led on Instagram Reels and YouTube Shorts. Campus ambassador programs for organic reach. Micro-influencer partnerships only — no mega-celebrity deals that feel disconnected from the product.`
            },
            {
              q:'How does PROFFE plan to grow?',
              a:`Phase 1: D2C + quick commerce (Blinkit, Instamart) in top 5 metro cities. Phase 2: Gym partnerships and college campus sampling. Phase 3: Offline retail in premium modern trade and convenience stores. Phase 4: Export potential — Southeast Asia has similar consumer profiles and a booming protein + coffee culture. <strong>Subscription model</strong> to drive retention — 30-day sachets delivered monthly, cancel anytime.`
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
        <div className="footer-brand" style={{ fontFamily:"'Space Grotesk', sans-serif", letterSpacing:'-0.03em', fontWeight:700, fontSize:'2.5rem', color:'#c4813a' }}>PROFFE.</div>
        <div className="footer-sub">Protein. Coffee. That's Literally It. · Gen-Z Brand Assignment 2026</div>
      </footer>

    </div>
  )
}
