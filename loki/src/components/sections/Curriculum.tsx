import ScrollReveal from '@/components/ui/ScrollReveal'
import StaggerReveal from '@/components/ui/StaggerReveal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import DodgingCard from '@/components/ui/DodgingCard'
import PaperPlanes from '@/components/ui/PaperPlanes'
import PixelIcon from '@/components/icons/PixelIcon'

/**
 * "The Curriculum" — course cards with a deliberately broken grid (council
 * verdict: one violation beats ten additions): cards tilt and drift, and
 * CHAOS-401 — Loki's own seminar — literally dodges the cursor (DodgingCard,
 * the site's single signed mischief moment). Certification banner follows.
 */
interface Course {
  code: string
  credits: string
  title: string
  body: string
}

interface Stat {
  value: number
  suffix: string
  label: string
}

interface CurriculumProps {
  title: string
  subtitle: string
  courses: Course[]
  certification: {
    title: string
    body: string
    stats: Stat[]
  }
}

const CHAOS_CODE = 'CHAOS-401'

function CourseCardBody({ course, chaos = false }: { course: Course; chaos?: boolean }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span
          className={`rounded-pill border px-3 py-1 font-mono text-sm font-bold ${
            chaos ? 'border-gold/60 bg-bg text-gold' : 'border-accent/40 bg-bg text-accent'
          }`}
        >
          {course.code}
        </span>
        <span className="flex items-center gap-1.5 text-sm text-gold">
          <PixelIcon name="bookOpen" size={16} />
          {course.credits}
        </span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-bold text-ink transition-colors group-hover:text-gold">
        {course.title}
      </h3>
      <p className="mt-2 leading-relaxed text-muted">{course.body}</p>
      {chaos && (
        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-gold">
          <PixelIcon name="zap" size={16} />
          Taught by Loki. This card is already running.
        </p>
      )}
    </>
  )
}

export default function Curriculum({ title, subtitle, courses, certification }: CurriculumProps) {
  const cardBase = 'group rounded-card border border-primary/60 bg-surface p-7 transition-all'

  return (
    <section id="curriculum" className="overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Flight zone: from the section top (right under the marquee
            divider) to the end of the four course cards — never over the
            certification banner. Planes fly ABOVE the cards (z-20,
            pointer-events-none) — classroom air traffic.
            Desktop: one overlay spanning the whole zone. Mobile: the zone is
            ~2200px tall, so a fixed overlay keeps the planes off-screen —
            instead a sticky zero-height band rides along with the scroll and
            the planes glide inside it, always in view. */}
        <div className="relative">
          <div className="pointer-events-none sticky top-24 z-20 h-0 md:hidden">
            <PaperPlanes className="absolute inset-x-0 top-0 h-[55vh]" />
          </div>
          <PaperPlanes className="absolute inset-x-0 -top-20 -bottom-4 z-20 hidden md:block" />

          <ScrollReveal className="text-center">
            <p className="font-mono text-sm tracking-widest text-gold">Course Catalog · Class of &#39;27</p>
            <h2 className="mt-2 font-display text-3xl font-black text-ink md:text-5xl">{title}</h2>
            <span
              className="mx-auto mt-4 block h-1 w-16 rounded-pill bg-linear-to-l from-gold/15 via-gold to-gold/15"
              aria-hidden="true"
            />
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
          </ScrollReveal>

          {/* Broken grid: alternating tilts, second card drifts down, and the
              chaos seminar dodges the cursor. */}
          <StaggerReveal columns={2} stagger={0.15} className="relative z-10 mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {courses.map((course, i) =>
            course.code === CHAOS_CODE ? (
              <div key={course.code} className="md:rotate-2">
                <DodgingCard
                  surrenderText="“Fine, you win. Lesson one: persistence.” — Loki"
                  className={`${cardBase} border-gold/50 hover:border-gold hover:shadow-[0_0_30px_rgba(201,162,39,0.2)]`}
                >
                  <CourseCardBody course={course} chaos />
                </DodgingCard>
              </div>
            ) : (
              /* Supporting courses — borderless, gold border on hover only.
                 CHAOS-401 (gold frame + dodge) stays the single focal card. */
              <div
                key={course.code}
                className={`group rounded-card border border-transparent bg-surface/60 p-7 transition-all hover:border-gold/40 hover:bg-surface hover:shadow-[0_0_30px_rgba(201,162,39,0.1)] ${
                  i === 1 ? 'md:-rotate-1 md:translate-y-6' : i === 0 ? 'md:rotate-1' : 'md:-rotate-1'
                }`}
              >
                <CourseCardBody course={course} />
              </div>
            )
          )}
          </StaggerReveal>
        </div>

        {/* Certification banner */}
        <ScrollReveal className="mt-16">
          <div className="rounded-card border-2 border-gold/40 bg-linear-to-l from-primary/30 via-surface to-surface p-8 md:p-10 md:-rotate-1">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <span className="inline-flex shrink-0 rounded-card border border-gold/40 bg-bg p-4 text-gold">
                <PixelIcon name="trophy" size={40} />
              </span>
              <div>
                <h3 className="gold-text font-display text-2xl font-black md:text-3xl">
                  {certification.title}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-ink/80">{certification.body}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-gold/20 pt-8 sm:grid-cols-3">
              {certification.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    className="gold-text text-glow-gold font-display text-4xl font-black"
                  />
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
