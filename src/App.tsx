/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Download,
  Infinity as AllInclusive,
  CheckCircle,
  ShieldAlert,
  CircleX,
  ArrowRight
} from 'lucide-react';

// --- Types ---

type Section = 'strategy' | 'logo' | 'typography' | 'mockups';

// --- Components ---

const Navbar = ({ currentSection, setSection }: { currentSection: Section, setSection: (s: Section) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { id: Section, label: string }[] = [
    { id: 'strategy', label: 'Strategy' },
    { id: 'logo', label: 'Logo System' },
    { id: 'typography', label: 'Typography & Imagery' },
    { id: 'mockups', label: 'Mockups' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-heritage-cream/95 backdrop-blur-sm border-b border-primary/10 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => setSection('strategy')}
              className="flex items-center gap-4 group text-left"
            >
              <img src="/side.png" className="h-12 w-auto object-contain" alt="Kalavya.Co Logo" />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center font-subheading">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSection(item.id)}
                className={`text-xs font-medium uppercase tracking-widest transition-colors border-b-2 pb-1 ${currentSection === item.id
                  ? 'text-secondary border-secondary'
                  : 'text-primary border-transparent hover:text-secondary hover:border-secondary/30'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden sm:flex items-center space-x-2 px-4 py-2 border border-primary/20 text-xs uppercase tracking-widest hover:bg-primary hover:text-heritage-cream transition-all rounded-sm font-subheading">
              <Download size={14} />
              <span>Download Assets</span>
            </button>
            <button
              className="md:hidden text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-heritage-cream border-b border-primary/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left text-sm font-medium uppercase tracking-widest py-2 ${currentSection === item.id ? 'text-secondary' : 'text-primary'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary text-heritage-cream text-xs uppercase tracking-widest rounded-sm font-subheading">
                <Download size={14} />
                <span>Download Assets</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const StrategyView = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-0"
  >
    <header className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="block text-secondary font-subheading font-medium tracking-[0.3em] uppercase text-sm mb-6">
          Visual Identity System v1.0
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary mb-8 tracking-tight leading-tight">
          Brand Strategy
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-primary/80 leading-relaxed font-body">
          Defining the soul of Kalavya.Co through a synthesis of ancient Mithila tradition and contemporary minimalist design.
        </p>
        <div className="mt-12 flex justify-center">
          <div className="w-px h-24 bg-gradient-to-b from-primary/20 to-primary"></div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 border border-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 border border-primary/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
    </header>

    <section className="py-16 md:py-24 bg-surface-light border-y border-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AllInclusive className="w-12 h-12 text-secondary mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-8">Our Mission</h2>
        <p className="text-2xl md:text-3xl lg:text-4xl font-body font-light text-primary leading-tight italic">
          "To bridge the gap between rural master artisans and the modern lifestyle, preserving 2,500 years of heritage through authentic storytelling and ethical commerce."
        </p>
      </div>
    </section>

    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Core Values</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {[
            {
              num: '01',
              title: 'Authenticity',
              desc: 'We honor the true roots of Mithila art. Every piece tells a genuine story, directly from the hands of artisans in the Madhubani region, free from industrial replication.'
            },
            {
              num: '02',
              title: 'Craftsmanship',
              desc: 'We revere the human touch. The slight imperfections in hand-drawn lines are not flaws but signatures of dedication, time, and ancestral skill passed down through generations.'
            },
            {
              num: '03',
              title: 'Minimalism',
              desc: 'We believe tradition breathes best in open spaces. Our design philosophy strips away the unnecessary, allowing the intricate details of the art to take center stage.'
            }
          ].map((val) => (
            <div key={val.num} className="group">
              <div className="border-t border-primary/20 pt-8 transition-all duration-500 group-hover:border-primary">
                <span className="text-xs font-subheading font-bold text-secondary uppercase tracking-widest mb-4 block">{val.num}</span>
                <h3 className="text-2xl font-subheading font-medium text-primary mb-4 group-hover:translate-x-2 transition-transform duration-300">{val.title}</h3>
                <p className="text-primary/70 leading-relaxed text-lg">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-32 bg-white/40 border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Color Palette</h2>
            <p className="text-primary/70 mb-8 font-light text-lg">
              Our palette is earthy and archival, inspired by the natural pigments used in traditional Madhubani paintings—ochre, lamp soot, indigo, and terracotta—balanced with the warmth of aged paper.
            </p>
            <div className="p-6 border border-primary/10 bg-white shadow-sm">
              <h4 className="font-subheading font-semibold text-primary uppercase text-sm tracking-wide mb-2">Usage Ratio</h4>
              <div className="flex h-4 w-full rounded-sm overflow-hidden">
                <div className="w-[60%] bg-heritage-cream"></div>
                <div className="w-[25%] bg-primary"></div>
                <div className="w-[10%] bg-secondary"></div>
                <div className="w-[5%] bg-slate-teal"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-primary/50 font-mono">
                <span>60%</span>
                <span>25%</span>
                <span>10%</span>
                <span>5%</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ColorCard name="Deep Umber" hex="#5C3317" cmyk="45, 70, 90, 50" className="bg-primary text-white" />
            <ColorCard name="Heritage Cream" hex="#F5EBD7" cmyk="2, 5, 12, 0" className="bg-heritage-cream text-primary border border-primary/10" />
            <ColorCard name="Mithila Red" hex="#A63C2E" cmyk="20, 85, 90, 10" className="bg-mithila-red text-white" />
            <ColorCard name="Ochre Yellow" hex="#D9A441" cmyk="15, 35, 85, 0" className="bg-ochre-yellow text-white" />
            <ColorCard name="Slate Teal" hex="#2E5C6E" cmyk="80, 45, 35, 20" className="bg-slate-teal text-white sm:col-span-2" />
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

const ColorCard = ({ name, hex, cmyk, className }: { name: string, hex: string, cmyk: string, className: string }) => (
  <div className={`aspect-[4/3] rounded-lg shadow-lg relative group overflow-hidden ${className}`}>
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <h3 className="font-display text-2xl font-semibold mb-1">{name}</h3>
      <div className="font-mono text-sm opacity-80 flex flex-col gap-1 mt-2">
        <span className="flex justify-between border-b border-current/20 pb-1"><span>HEX</span> <span>{hex}</span></span>
        <span className="flex justify-between pt-1"><span>CMYK</span> <span>{cmyk}</span></span>
      </div>
    </div>
  </div>
);

const LogoSystemView = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24"
  >
    <header className="bg-surface-light border-b border-primary/10 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-2 mb-4">
        <span className="h-px w-8 bg-secondary"></span>
        <span className="text-secondary font-medium tracking-widest uppercase text-xs">Section 02</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Logo System</h1>
      <p className="max-w-3xl text-lg text-primary/70 font-light leading-relaxed">
        The Kalavya.Co logo is the most immediate representation of our brand. It balances the intricate heritage of Mithila art with modern minimalism.
      </p>
    </header>

    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Logo Lockups</h2>
          <p className="text-primary/70 mb-6 leading-relaxed">
            Our logo system offers flexibility to maintain legibility and balance. The combinations of the Mithila Elephant icon and the Kalavya.Co wordmark are formulated for specific spatial needs while conveying wisdom and sophistication.
          </p>
          <div className="bg-primary/5 p-4 rounded border border-primary/10 text-sm">
            <strong className="block text-primary mb-2">Usage Note:</strong>
            Use Lockup 01 or 02 for horizontal spaces to give the brand more prominence. Ensure consistent padding and horizontal alignment when placing them in headers or footers.
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-10">
          <div className="bg-white rounded-lg shadow-sm border border-primary/10 p-12 relative flex-1">
            <span className="absolute top-4 left-4 text-xs font-mono font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded">01. Primary Horizontal</span>
            <div className="flex items-center justify-center min-h-[220px] w-full mt-6">
              <img src="/side.png" alt="Horizontal Logo Lockup" className="max-w-full h-auto max-h-[160px] object-contain" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-primary/10 p-12 relative flex-1">
            <span className="absolute top-4 left-4 text-xs font-mono font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded">02. Secondary Horizontal</span>
            <div className="flex items-center justify-center min-h-[220px] w-full mt-6">
              <img src="/side 2.png" alt="Secondary Horizontal Lockup" className="max-w-full h-auto max-h-[160px] object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-t border-primary/10 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Clear Space</h2>
          <p className="text-primary/70 mb-8">
            To ensure visibility and impact, the logo must always be surrounded by a minimum amount of clear space. The exclusion zone is defined by the height of the letter 'K' from the wordmark.
          </p>
          <div className="bg-white rounded-lg shadow-sm border border-primary/10 p-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 clear-space-grid opacity-30"></div>
            <div className="relative border border-dashed border-secondary p-8">
              <div className="absolute -top-8 left-0 h-8 w-8 flex items-center justify-center border-l border-t border-secondary text-xs font-mono text-secondary">x</div>
              <div className="absolute -left-8 top-0 h-8 w-8 flex items-center justify-center border-l border-t border-secondary text-xs font-mono text-secondary">x</div>
              <div className="absolute -right-8 bottom-0 h-8 w-8 flex items-center justify-center border-r border-b border-secondary text-xs font-mono text-secondary">x</div>
              <div className="absolute -bottom-8 right-0 h-8 w-8 flex items-center justify-center border-r border-b border-secondary text-xs font-mono text-secondary">x</div>
              <div className="flex items-center justify-center w-full max-w-[200px]">
                <img src="/side.png" alt="Clear Space Lockup Minimal" className="w-full h-auto object-contain" />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-xs font-mono text-gray-400">x = height of 'K'</div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold text-primary mb-4">Minimum Size</h2>
          <p className="text-primary/70 mb-8">
            The logo should never be used smaller than the minimum sizes specified to ensure legibility.
          </p>
          <div className="bg-white rounded-lg shadow-sm border border-primary/10 p-12 flex flex-col justify-center gap-12 h-full">
            <div className="flex items-center justify-between border-b border-gray-100 pb-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-1">Digital</h3>
                <p className="text-xs text-gray-500">120px width minimum</p>
              </div>
              <div className="w-[120px] bg-gray-50 p-3 border border-dashed border-gray-300 flex items-center justify-center">
                <img src="/side.png" alt="Minimal Digital Logo" className="w-full object-contain" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-1">Print</h3>
                <p className="text-xs text-gray-500">30mm width minimum</p>
              </div>
              <div className="w-[113px] bg-gray-50 p-3 border border-dashed border-gray-300 flex items-center justify-center">
                <img src="/side 2.png" alt="Minimal Print Logo" className="w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

const LogoIcon = ({ className }: { className?: string }) => (
  <img src="/logo.png" alt="Kalavya Logo" className={className} />
);

const TypographyImageryView = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.02 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
  >
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      <main className="lg:col-span-9">
        <div className="mb-16 border-b border-primary/10 pb-8">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary mb-4">Typography & Imagery</h1>
          <p className="text-lg text-primary/70 font-body max-w-3xl">
            Our visual language combines the grandeur of tradition with modern clarity. Typography establishes hierarchy, while imagery captures the soul of Mithila art.
          </p>
        </div>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-secondary"></span>
            <h2 className="text-2xl font-display font-bold text-primary uppercase tracking-wider">Typeface Hierarchy</h2>
          </div>
          <div className="grid gap-12">
            <TypeCard
              name="Cinzel"
              role="Headings & Titles"
              fontClass="font-display"
              examples={[
                { label: 'Display (H1)', text: 'Tradition Redefined.', size: 'text-4xl sm:text-5xl' },
                { label: 'Section Header (H2)', text: 'The Artisanal Collection', size: 'text-3xl' }
              ]}
            />
            <TypeCard
              name="Montserrat"
              role="Sub-headings & UI Elements"
              fontClass="font-subheading"
              examples={[
                { label: 'Subheading (H3)', text: 'Preserving 2,500 Years of Artistry', size: 'text-xl font-medium' },
                { label: 'Button / Nav', text: 'SHOP COLLECTION', size: 'text-sm font-semibold tracking-wide' }
              ]}
            />
            <div className="p-8 bg-surface-light border border-primary/10 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-6 border-b border-primary/10 pb-4">
                <div>
                  <h3 className="text-3xl font-body font-normal text-primary">Lato</h3>
                  <p className="text-sm text-secondary uppercase tracking-widest mt-1">Body Copy & Long Form</p>
                </div>
                <span className="text-4xl font-body opacity-20">Aa</span>
              </div>
              <div>
                <p className="text-xs text-primary/50 uppercase mb-2">Paragraph (P)</p>
                <p className="font-body text-base leading-relaxed text-primary/80 max-w-2xl">
                  Mithila art is characterized by its eye-catching geometrical patterns. There is ritual content for particular occasions, such as birth or marriage, and festivals, such as Holi, Surya Shasti, Kali Puja, Upanayana, Durga Puja. At Kalavya.Co, we ensure readability is paramount while maintaining an elegant tone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-secondary"></span>
            <h2 className="text-2xl font-display font-bold text-primary uppercase tracking-wider">Graphic Elements</h2>
          </div>
          <div className="bg-white p-12 rounded-lg border border-primary/5 text-center">
            <p className="text-sm text-primary/60 mb-8 max-w-lg mx-auto">
              The "Double Line" divider is our primary separator. It mimics the framing often found in traditional Mithila paintings. Use it to break sections with elegance.
            </p>
            <div className="text-primary double-line-divider opacity-70 max-w-lg mx-auto">
              <span>❖</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-secondary"></span>
            <h2 className="text-2xl font-display font-bold text-primary uppercase tracking-wider">Imagery Guidelines</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageGuide
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCUbYpMF5K-DUfnkeSbINmnwg2iP9LT7rWxGD273_ELN4vPvVVFMi_QusVetNfiXoy1n0sOAsE2p94TqZxIGgz6jFpcixe-uh25mfS3Taq9MB0UiFBDQkgz9V3uV6Wqjidq9RE5khgTkE1IeEuvLcr4UQG6CDGEVFUfh6hFK-El3LFdEBfQZe_ozyRaGidXDcU0MtnltynToj3oEVmpsK333GR3gUCuFXhL57Cwg6gtchXJRWabTqn9N2hQB3C83OgFmTWcDicwZc"
              title="'The Hero' Lighting"
              desc="Use high-contrast lighting that creates depth. Product shots should be set against neutral, natural textures like light wood, stone, or marble to let the colorful art pop."
            />
            <ImageGuide
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXGS2ObeXGmAZ8oZUiiJ6yHDenV8iPwbKMGq-YwaQekMQUxGIb4LaeZtxuVYZ0PL7Wx9v0N-zHy2fEdiVo8vRImS-wbHOS53XVP2MIsHnsCFUKBSRz9QSQOxW8nC5Lmx7GE6_oxA7G1vVPzewy24etgOSUYwBh70rSBnnLssXAfa26HvAdxWcBf1pb487W5ANdaVT-1uulkKAtc4dmTIz3JeWYA1NuRSy_k1Fka1r62v-Xxcv7iWNn6c2zj7HFKZyGBeDck6kjdjk"
              title="Contextual Lifestyle"
              desc="Show products in use within modern, minimalist environments. Avoid clutter. The artwork should always be the focal point of the composition."
            />
          </div>
        </section>
      </main>

      <aside className="lg:col-span-3 lg:pl-8 border-l border-primary/10">
        <div className="sticky top-24">
          <h3 className="text-xl font-display font-bold text-mithila-red mb-6 flex items-center gap-2">
            <ShieldAlert size={20} />
            Brand Don'ts
          </h3>
          <div className="space-y-8">
            <DontCard label="Do not stretch or distort the logo.">
              <span className="font-display text-4xl font-bold text-primary transform scale-x-150 scale-y-75">Kalavya</span>
            </DontCard>
            <DontCard label="Do not use clashing neon colors." className="bg-blue-600">
              <span className="font-display text-2xl font-bold text-green-500">Kalavya.Co</span>
            </DontCard>
            <DontCard label="Do not use heavy drop shadows on text." className="bg-white">
              <h4 className="font-display text-primary drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">Bad Shadow</h4>
            </DontCard>
          </div>
          <div className="mt-12 p-4 bg-surface-light rounded border border-secondary/20">
            <h4 className="text-sm font-bold text-primary mb-2">Need help?</h4>
            <p className="text-xs text-primary/60 mb-3">Contact the design team for approval on new assets.</p>
            <a className="text-secondary text-xs font-bold hover:underline" href="mailto:design@kalavya.co">design@kalavya.co</a>
          </div>
        </div>
      </aside>
    </div>
  </motion.div>
);

const TypeCard = ({ name, role, fontClass, examples }: { name: string, role: string, fontClass: string, examples: any[] }) => (
  <div className="p-8 bg-surface-light border border-primary/10 rounded-lg shadow-sm">
    <div className="flex justify-between items-start mb-6 border-b border-primary/10 pb-4">
      <div>
        <h3 className={`text-3xl ${fontClass} text-primary`}>{name}</h3>
        <p className="text-sm text-secondary uppercase tracking-widest mt-1">{role}</p>
      </div>
      <span className={`text-4xl ${fontClass} opacity-20`}>Aa</span>
    </div>
    <div className="space-y-6">
      {examples.map((ex, i) => (
        <div key={i}>
          <p className="text-xs text-primary/50 uppercase mb-2">{ex.label}</p>
          <p className={`${fontClass} ${ex.size} text-primary leading-tight`}>{ex.text}</p>
        </div>
      ))}
    </div>
  </div>
);

const ImageGuide = ({ src, title, desc }: { src: string, title: string, desc: string }) => (
  <div className="bg-surface-light rounded-lg overflow-hidden shadow-sm">
    <div className="h-64 overflow-hidden relative group">
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
        <CheckCircle size={14} />
        <span>DO</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-display font-bold text-lg mb-2 text-primary">{title}</h3>
      <p className="text-sm text-primary/70">{desc}</p>
    </div>
  </div>
);

const DontCard = ({ children, label, className = "bg-gray-100" }: { children: ReactNode, label: string, className?: string }) => (
  <div className="relative group">
    <div className={`${className} h-32 flex items-center justify-center rounded overflow-hidden relative mb-2 border border-dashed border-mithila-red/30`}>
      <div className="absolute inset-0 bg-mithila-red/10 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <X className="text-mithila-red w-12 h-12" />
      </div>
      {children}
      <div className="absolute top-2 right-2 text-mithila-red">
        <CircleX size={20} />
      </div>
    </div>
    <p className="text-xs text-primary/70 font-bold">{label}</p>
  </div>
);

const MockupsView = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.02 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
  >
    <div className="mb-16 border-b border-primary/10 pb-8">
      <div className="flex items-center space-x-2 mb-4">
        <span className="h-px w-8 bg-secondary"></span>
        <span className="text-secondary font-medium tracking-widest uppercase text-xs">Section 04</span>
      </div>
      <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary mb-4">Design Mockups</h1>
      <p className="text-lg text-primary/70 font-body max-w-3xl">
        A glimpse into how the Kalavya.Co brand identity translates across various physical and digital touchpoints, from packaging and stationery to digital experiences.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <MockupCard
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoW5SG_1PKPX0x-on7XCtRBF4kGpSYiG8r_XEcCZQLAZ2-xk22of-5HQFrSPhqZLaEFpQrfQdbf-S9RXP3gPR5TwDdlEWWIIxxiHT88sTap1-7H0LUeiGpBdzwlAA8ddctiPm-V1i00Y5f_tu27UEEfiEh8Y3QHwE1wDYY1lgkkC3SVifW5U6XS62y_5LnbZsCo2-3v7CoKyo07kKH0Wqk8KMsnJ0S61fvnOFHHQ2KpxU1y0_IJP_LPpv_VtOa3ANYxVgugNovxF4"
        title="Mobile Interface"
        desc="Digital experience on mobile devices highlighting the artisanal collection with clean typography and ample whitespace."
        overlayImage="/side.png"
        overlayClassName="w-[28%] top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 object-contain z-10 drop-shadow-md"
      />
      <MockupCard
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIRkryHmBNKpYQR7PcY8ntJFb78F8pQGuETI0sT_15GJWkV4RmArSHGOdiQd_VMXEbzSdfKI1tberAIVUN1duLA1F-o9A-L1S6i1ZGiMIynVJ2S3VG-OcLNbVJiUMAqeXT8v3amYqA_3HP3X17c37Lkey3iG3BBf-ZDTlyorfE0JztzlUvyGxpmPACy1faEnwkPlyDwm6QQHbfaOcnWVvlL2nrfydlvv9jZQnhjo2QAeP2bAVnmPp39mHLx7e6SXzBMi5DrG-0LFI"
        title="Heavy Cotton Oversized Tee"
        desc="Lifestyle wear featuring the Kalavya logo printed cleanly on premium heavy cotton apparel."
        overlayImage="/side.png"
        overlayClassName="w-[20%] top-[38%] left-[50%] -translate-x-1/2 -translate-y-1/2 object-contain z-10 opacity-90 filter invert brightness-200"
      />
      <MockupCard
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzbx_Y4vzlUU7kjnRqR95hM2vPGqXGufauaUPsWIQBuXG3AoNeSq2e73VyIuRM6musl3WKFhvDxyQnD8pddt9LdBSX8daPK9Pw0zKTOskatzE9BXPOQJJ342QINU3fkslybU_eTUoW8iOlCKZddSwsQfGl6nswiYf_q9iktC3bA8V00k6Y9i2QfzHwP4T0FE95c0x03JrIK3tggkZQEJGWXrHkv0MAHzXDLuqDhq-6lXBDZxt_DqgARj-1HRUJp5bORUY2n8mQHfg"
        title="Artisanal Canvas Tote"
        desc="Everyday sustainable accessories blending geometric Mithila patterns with minimalist branding."
        overlayImage="/side.png"
        overlayClassName="w-[20%] top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 object-contain z-10 drop-shadow-sm mix-blend-multiply opacity-85 rotate-[-2deg]"
      />
      <MockupCard
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZXIcY6JOvCF8-odhBCymXOy3IVUxX3lOUS043pJUgDsEbcAy-fAW44x8q6RqPLSFDoOBwe7_oIT69tB_aPGEl88FjFNue3j4_j48MTVy42aVN35H_hTDIuqpP5skHmGN0MEQymJmZvrAOrxbETlY4lR7ZZU-ii2EyMUbXgnSyzxQID6994wy2E6sIy4LW6nldLq_0zqKunqPkCFTConB2aRJjQlvT73Th-T6_xcHEF5WcoeOzr0tgZUtUwvJ1Qi2T988lRmQfNzs"
        title="Metropolitan Banner"
        desc="Out of home promotional signage utilizing brand colors to draw attention gracefully in urban environments."
        overlayImage="/side.png"
        overlayClassName="w-[50%] top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 object-contain z-10 drop-shadow-lg opacity-90"
      />
      <MockupCard
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkydh3-25K2t1Nr8cbBk28zB2iPkxBpwY7WbivNHri97XNXyD1j_mGh4uIHfRMhjo8PDdZo99HdPx3eOzlwLVkt7PWOc3B_EW6zB_SZKLqKTtEzh0O8OmGmBmrhRXxpK5zploOuV_R5jBwLKV8fyJpx1jXZbZtDPz5NUB6-XKSao87snXvg12YcIP0T4R25ieiB1vjusqtfkhVK7vh1FmQUFRltu8tA5hOmFIpc5Y0uTDZZ3is9VuURivZCk5hreT_P3S9kCwBuew"
        title="Landing Page Design"
        desc="Hero section for the web presence, showing the logo lockups effectively framing the digital narrative."
      />
      <MockupCard
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoU4xqYczAk5Vo0O64SkIOFlR0i2OAyagHwimznfYHremC3mgklDeTDx8i0gPXrU6N9Y00V4myUB0ZyxpPfKHLfn-bfpBWjnqHDNbSg2NVkjSOD3rZL-xJOZ8VoCCV_-njdU9Ra3YNCfIxAEXaflmswoanZ59J8OlqNWVkbQigZNNZU70OtAGOW3ajMfwe7HvI00GoGt-2leZbGh6mWRr6hXF2nQRN9dkjzgi6lf9IzI4e5iwoK-iTAgAP3nmSDo1LZK42A93u9Tg"
        title="Instagram Presence"
        desc="Social media grid layout maintaining the balance between traditional imagery and modern whitespace."
        overlayImage="/side.png"
        overlayClassName="w-[22%] top-[35%] left-[45%] -translate-x-1/2 -translate-y-1/2 object-contain z-10 drop-shadow-sm mix-blend-multiply opacity-80"
      />
    </div>
  </motion.div>
);

const MockupCard = ({ src, title, desc, overlayImage, overlayClassName }: { src: string, title: string, desc: string, overlayImage?: string, overlayClassName?: string }) => (
  <div className="group cursor-pointer">
    <div className="overflow-hidden rounded-lg bg-surface-light mb-6 aspect-[4/3] shadow-sm group-hover:shadow-md transition-shadow relative flex items-center justify-center">
      <img
        src={src}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      {overlayImage && (
        <img
          src={overlayImage}
          alt={`${title} Overlay`}
          className={`absolute pointer-events-none group-hover:scale-105 transition-transform duration-700 ${overlayClassName || ''}`}
        />
      )}
    </div>
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-display text-2xl font-bold text-primary">{title}</h3>
      <ArrowRight className="text-secondary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={20} />
    </div>
    <p className="text-primary/70 font-body leading-relaxed">{desc}</p>
  </div>
);

const Footer = () => (
  <footer className="bg-surface-light border-t border-primary/10 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <img src="/side.png" className="h-10 w-auto object-contain opacity-80" alt="Kalavya.Co Footer Logo" />
          <div className="h-8 w-px bg-primary/20 hidden sm:block"></div>
          <p className="text-xs text-primary/50 uppercase tracking-widest font-subheading leading-none hidden sm:block">
            Internal Brand Document
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm text-primary/70 font-body">© 2023 Kalavya.Co. Confidential.</p>
          <p className="text-xs text-primary/50 mt-1">Last Updated: October 2023</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [section, setSection] = useState<Section>('strategy');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentSection={section} setSection={setSection} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {section === 'strategy' && <StrategyView key="strategy" />}
          {section === 'logo' && <LogoSystemView key="logo" />}
          {section === 'typography' && <TypographyImageryView key="typography" />}
          {section === 'mockups' && <MockupsView key="mockups" />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
