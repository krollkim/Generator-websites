import GSAPInit from '@/components/GSAPInit'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import WhatWeDo from '@/components/sections/WhatWeDo'
import PrankDivider from '@/components/sections/PrankDivider'
import Curriculum from '@/components/sections/Curriculum'
import MidCTA from '@/components/ui/MidCTA'
import Instructor from '@/components/sections/Instructor'
import Testimonials from '@/components/sections/Testimonials'
import EnrollCTA from '@/components/sections/EnrollCTA'
import brand from '../../brand.json'

/**
 * LANDING mode — single page. Navbar + Footer live here (PIC pattern).
 * Section order: Hero → מה לומדים → divider (מבוא לתעלולים) → תוכנית לימודים
 * → המדריך → המלצות → CTA. Copy is wired from brand.json `sections`.
 */
export default function Home() {
  const s = brand.sections
  return (
    <>
      <GSAPInit />
      <Navbar brand={brand.brand.name} links={brand.nav.links} cta={brand.nav.cta} />
      <main>
        <Hero
          badge={s.hero.badge}
          headline={s.hero.headline}
          subhead={s.hero.subhead}
          ctaPrimary={s.hero.ctaPrimary}
          ctaSecondary={s.hero.ctaSecondary}
          backgroundImage={s.hero.backgroundImage}
        />
        <WhatWeDo title={s.whatWeDo.title} subtitle={s.whatWeDo.subtitle} items={s.whatWeDo.items} />
        <PrankDivider
          courseCode={s.divider.courseCode}
          title={s.divider.title}
          marquee={s.divider.marquee}
          peekImage="/images/loki-pop-suit.png"
        />
        <Curriculum
          title={s.curriculum.title}
          subtitle={s.curriculum.subtitle}
          courses={s.curriculum.courses}
          certification={s.curriculum.certification}
        />
        <MidCTA line={s.midCtas.afterCurriculum.line} cta={s.midCtas.afterCurriculum.cta} />
        <Instructor
          title={s.instructor.title}
          name={s.instructor.name}
          role={s.instructor.role}
          bio={s.instructor.bio}
          facts={s.instructor.facts}
          image={s.instructor.image}
        />
        <Testimonials
          title={s.testimonials.title}
          subtitle={s.testimonials.subtitle}
          items={s.testimonials.items}
        />
        <MidCTA line={s.midCtas.afterTestimonials.line} cta={s.midCtas.afterTestimonials.cta} />
        <EnrollCTA
          title={s.enroll.title}
          subtitle={s.enroll.subtitle}
          cta={s.enroll.cta}
          microcopy={s.enroll.microcopy}
          image={s.enroll.image}
        />
      </main>
      <Footer brand={brand.brand.name} tagline={brand.footer.tagline} />
    </>
  )
}
