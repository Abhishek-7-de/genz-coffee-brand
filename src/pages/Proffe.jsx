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
                The name is a direct mashup. <strong style={{color:'rgba(240,235,227,0.9)'}}>PRO</strong>tein and co<strong style={{color:'rgba(240,235,227,0.9)'}}>FFE</strong>e merge into PROFFE. 
                There is no fluff and no mystery because the product literally is the name. It announces exactly what it is 
                in the most Gen-Z way possible simply by smashing two core concepts together and making it sound cool.
              </p>
              <p className="section-desc">
                The <strong style={{color:'rgba(240,235,227,0.9)'}}>bubbly, thick retro wordmark</strong> was deliberately chosen to feel fun and highly approachable. 
                This directly breaks the rigid, aggressive typography that normally dominates the protein supplement world. 
                It is designed to look like the kind of logo you would happily put on a tote bag. That is the whole point.
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
              <div style={{marginTop:40}}>
                <h3 style={{fontSize:'1rem', marginBottom:16, color:'rgba(240,235,227,0.9)', fontFamily:'Space Grotesk, sans-serif'}}>Brand Palette &amp; HEX Codes</h3>
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))', gap:20, marginBottom:24}}>
                  {[
                    ['#3B1F0A','Espresso','Primary theme color, maintaining the strong link to instant coffee powder.'],
                    ['#C4813A','Roast Gold','Energetic amber-gold, used for highlights to signal high energy and performance.'],
                    ['#D99244','Amber','Secondary energy color, adding a warm, vibrant depth to the brand visuals.'],
                    ['#F5EDE0','Cream','The primary contrast color, used for readability and a soft, milk-coffee aesthetic.'],
                    ['#0D0B09','Midnight','A deep near-black used for sharp wordmarks and core messaging elements.']
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
          <motion.span className="eyebrow" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>Brand Positioning</motion.span>
          <div className="divider" />
          <motion.div className="position-block" initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <p className="position-quote">
              "PROFFE is designed for people who do not want to be sold a lifestyle. They want a product that works, 
              tastes incredible, and doesn't pretend to be more than it is. It's protein. It's coffee. It's PROFFE."
            </p>
            <p style={{ color:'rgba(240,235,227,0.55)', fontSize:'0.95rem', lineHeight:1.8, maxWidth:680 }}>
              PROFFE is positioned strictly as a <strong style={{color:'rgba(240,235,227,0.85)'}}>bold, no-nonsense, culturally plugged-in</strong> alternative in the protein coffee space. 
              While other brands try to look premium or artisanal, PROFFE aims to be much louder, funnier, and more immediately direct. 
              It speaks to a younger Gen-Z audience. It talks to them like a friend who constantly drags them to the gym, not like a corporate wellness brand. 
              The bubbly, retro wordmark sets the tone instantly showing everyone we are not taking ourselves too seriously, even though our nutritional macros are dead serious.
            </p>
            <div className="position-pillars">
              {['Bold Loud Identity','Anti-Pretentious Core','Functional Focus','Uncompromising Macros','Trend-Forward Design','Modern Gym Culture'].map(p => (
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
                { title:'Product Strategy', body:'We commit to fewer but much bolder flavours like OG Black, Smoky Mocha, Dirty Chai Protein, and Iced Hazelnut Crème. Every flavour sounds like something you would order in a cafe, not something you measure with a plastic scoop. The full ingredients panel sits right on the front so we never hide the macros.' },
                { title:'Pricing Strategy', body:'Priced slightly more aggressively at ₹55 to ₹75 per sachet. This maximises accessibility without abandoning our core quality perception. We also push bulk packs hard, offering a 15-pack at ₹899 and a heavy 30-pack subscription model at ₹1,649 per month.' },
                { title:'Distribution Strategy', body:'We go literally everywhere Indian Gen-Z currently is. This includes Blinkit, Zepto, Swiggy Instamart, direct website sales, gym merchandise desks, and 24/7 convenience stores in tier-1 cities like Mumbai, Delhi, and Bangalore. We back this up with a campus ambassador program where college students earn commissions for driving our D2C sales.' },
                { title:'Communication', body:'Our copy sounds like your funniest friend who also happens to meal-prep. We lean heavily into meme-native content and continuous collab drops with rapidly rising fitness creators. We focus on real reviews instead of staged studio selfies and push heavily on Instagram Reels and YouTube Shorts. The entire brand\'s voice is: "we get you".' },
                { title:'Flavour Innovation', body:'We plan highly collaborative drops with local roasters for limited single-origin protein editions. We also create massive seasonal hype with a Summer Mango season or a deliberate "Chai-Coffee" protein fusion. Flavour votes happen directly on Instagram Stories where the audience decides what drops next.' },
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
                "Be incredibly loud with the branding because the PROFFE wordmark should completely own every surface it touches.",
                "Always use real unfiltered fitness content starring sweaty gym selfies instead of clean studio shoots.",
                "Stay funny and use dry self-aware humour that a younger audience will actually screenshot and forward.",
                "Show the exact macros immediately since that is the absolute first thing this particular audience wants to know.",
                "Partner exclusively with nano and micro-influencers who generate real community engagement rather than inflated follower counts.",
                "Create genuine urgency and excitement through limited drops and surprise collaboration flavours.",
                "Gamify the customer loyalty experience by offering points for sachets and streak rewards for daily consecutive use.",
                "Make sure all packaging pops instantly in social media flat-lays because Instagram acts as a primary digital shelf.",
              ].map(d => (
                <div className="dd-item" key={d}><span className="dd-check">✓</span><span>{d}</span></div>
              ))}
            </motion.div>
            <motion.div className="donts-box" initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.5}}>
              <h3>✕ Don'ts</h3>
              {[
                "Never be overly polished or purely corporate because that immediately kills the brand vibe.",
                "Do not ignore flavour diversity since this specific audience has incredibly low loyalty to boring options.",
                "Never attempt to directly compete with massive energy drink brands because that is an entirely different war.",
                "Do not mislead people on nutritional facts as the audience is very smart and will publicly call out any lies.",
                "Avoid running constant discount campaigns because it trains your best customers to only wait for clearance deals.",
                "Never make the core packaging too dark or moody because high energy and bright approachability matter massively.",
                "Do not over-explain the product. If you need an entire paragraph to sell it you need to rethink the pitch completely.",
                "Never ignore the offline hardware opportunity because local gyms are still primary brand-building spaces.",
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
            The Pouch That Does the Talking.
          </motion.h2>
          <motion.p className="section-desc" style={{marginBottom:48}} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            PROFFE's bubbly wordmark dominates the entire front of the pouch. We eliminated all clutter and filler text. What remains is just the bold name, the specific macros, and that unmistakable retro-modern typography. The lineup features the aggressive dark edition alongside the ultra-clean off-white edition to suit completely different moods and shelf spaces.
          </motion.p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:32}}>
            {[
              {
                img: '/proffe-dark.png',
                label: 'OG Black',
                sub: 'Dark Edition',
                bg: '#0d0b09',
                border: '1px solid rgba(196,129,58,0.3)',
                imgStyle: { filter:'none', transform:'scale(1.06) translateY(-4px)' },
                badge: '#C4813A'
              },
              {
                img: '/proffe-light.png',
                label: 'Cold Brew Blend',
                sub: 'Light Edition',
                bg: '#f5ede0',
                border: '1px solid rgba(0,0,0,0.07)',
                imgStyle: { filter:'brightness(1.05) contrast(0.95)', transform:'scale(0.97) rotate(-1.5deg)' },
                badge: '#8B5C2A',
                light: true
              },
              {
                img: '/proffe-dark.png',
                label: 'Dirty Chai Protein',
                sub: 'Spiced Edition',
                bg: '#1a1008',
                border: '1px solid rgba(180,100,40,0.25)',
                imgStyle: { filter:'sepia(0.5) hue-rotate(-20deg) saturate(1.4) brightness(0.88)', transform:'scale(1.07) rotate(2.5deg)' },
                badge: '#D4732A'
              },
              {
                img: '/proffe-light.png',
                label: 'Iced Hazelnut Crème',
                sub: 'Signature Edition',
                bg: '#1c1408',
                border: '1px solid rgba(210,170,80,0.2)',
                imgStyle: { filter:'sepia(0.7) saturate(1.6) brightness(0.85) hue-rotate(15deg)', transform:'scale(1.03) rotate(-2deg)' },
                badge: '#D2AA50'
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
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
                }}
              >
                <div style={{padding:'32px 24px 16px', display:'flex', justifyContent:'center'}}>
                  <img src={p.img} alt={p.label} style={{ width:'75%', maxWidth:200, ...p.imgStyle, transition:'transform 0.4s ease' }} />
                </div>
                <div style={{padding:'0 20px 24px'}}>
                  <div style={{
                    display:'inline-block',
                    background: p.badge + '22',
                    border: `1px solid ${p.badge}55`,
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
              q:'What makes PROFFE different from The Beanfit?',
              a:`Both brands solve the same problem — protein + coffee in a sachet — but their personalities are completely different. <strong>The Beanfit is premium and artisanal</strong>, targeting people who care about aesthetics and coffee culture. <strong>PROFFE is bold, accessible, and culturally louder</strong>, targeting people who are gym-first, trend-aware, and allergic to anything that feels too fancy. Think of them as the same chassis, completely different builds.`
            },
            {
              q:'What inspired the PROFFE name and brand identity?',
              a:`The name is a mashup of <strong>Protein + Coffee = PROFFE</strong>. Simple, memorable, doesn't need explaining. The bubbly retro-modern wordmark was chosen deliberately to feel approachable, fun, and different from the rigid sans-serifs that dominate the protein supplement aisle. The idea: when you see PROFFE, you smile. Then you check the macros. In that order.`
            },
            {
              q:'How does PROFFE approach the protein supplement market?',
              a:`Existing brands in India sit in one of two camps — either <strong>premium coffee roasters that ignore nutrition</strong> (Blue Tokai, Third Wave, Sleepy Owl) or <strong>aggressive protein brands that ignore taste</strong> (MuscleBlaze, MyProtein). PROFFE is the only brand that is purely culturally-wired for the young Indian learner and grinder. The wordmark, the tone, and the quick-commerce focus are all designed for a generation that wants speed, results, and a cool brand to post on their story.`
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
