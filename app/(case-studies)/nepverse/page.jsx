import Image from 'next/image'
import Link from 'next/link'
import '@/assets/css/pages/nepverse.css'

export const metadata = {
  title: 'Nepverse — Nabin Ghimire',
  description:
    'Prototyping a metaverse for virtual exhibitions and events, from sketch to a working Unity build. An R&D case study by Nabin Ghimire.',
}

export default function NepversePage() {
  return (
    <>
      <div className="container">
        <Link href="/#other-work" className="back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
          </svg>
          All work
        </Link>
      </div>

      {/* CASE HERO */}
      <section className="case-hero">
        <div className="container">
          <p className="case-eyebrow">
            <span>R&amp;D case study</span>
            <span className="dot" />
            <span>VR / 3D</span>
            <span className="dot" />
            <span>EKbana</span>
          </p>

          <h1 className="case-title">
            Prototyping a metaverse businesses could actually <em>rent space in</em>.
          </h1>

          <p className="case-subtitle">
            An EKbana R&amp;D project born out of the COVID lockdowns — a multiplayer VR world
            where businesses could rent virtual exhibition halls and concert venues. I worked as
            both product designer and 3D artist across a 5-person team.
          </p>

          <div className="case-visual case-visual--image" role="img" aria-label="A user standing before a large interactive display screen inside the Nepverse virtual exhibition hall">
            <div className="case-visual-bg" />
            <Image
              src="/images/Display screen.png"
              alt="A user standing before a large interactive display screen inside the Nepverse virtual exhibition hall"
              fill
              className="case-visual-img"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
            />
          </div>

          <div className="meta-strip">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Product Designer &amp; 3D Artist</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Company</span>
              <span className="meta-value">EKbana — R&amp;D team of 5</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">2021 — 2022</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Status</span>
              <span className="meta-value">Concluded prototype</span>
            </div>
          </div>

          <div className="nda-notice">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>
              Nepverse was an internal R&amp;D project at EKbana — a working multiplayer prototype
              built to demonstrate what virtual exhibitions and events could look like for
              businesses. It concluded as a proof-of-concept and was never brought to public
              launch.
            </span>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="section">
        <div className="container">
          <div className="tldr">
            <div className="tldr-item">
              <h3>Challenge</h3>
              <p>COVID lockdowns made physically showcasing products or hosting events impossible — a real problem for small and large businesses with no way to demonstrate value in person.</p>
            </div>
            <div className="tldr-item">
              <h3>My role</h3>
              <p>Product Designer &amp; 3D Artist on a 5-person R&amp;D team — owned the UX process end-to-end and built environment art in Cinema 4D and Substance Painter.</p>
            </div>
            <div className="tldr-item">
              <h3>Outcome</h3>
              <p>A working multiplayer VR prototype in Unity — exhibition halls, a 1,000+ capacity concert venue, portal navigation, voice and text chat — proven out as an internal demo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Context</p>
          <h2 className="section-title">A blockchain company&apos;s bet on the metaverse.</h2>
          <div className="prose">
            <p>
              EKbana had already built crypto wallet and blockchain products by the time the
              pandemic hit. When Facebook renamed itself Meta in October 2021 and announced $10
              billion in metaverse investment, the timing lined up with a problem we&apos;d
              already seen up close: businesses couldn&apos;t hold events, run exhibitions, or
              showcase products in person anymore.
            </p>
            <p>
              We formed a 5-person team to explore whether a virtual world could actually solve
              that — not just look impressive in a demo reel. We landed on virtual exhibitions and
              events as the wedge: a space businesses could rent, with a longer-term vision of
              adding parks, concert venues, and more as the idea proved out.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">Process</p>
          <h2 className="section-title">From a Q&amp;A framework to a working build.</h2>

          <div className="decisions">
            <div className="decision">
              <span className="decision-num">01</span>
              <div>
                <h3>Framing the MVP with a Five Ws exercise.</h3>
                <p>Rather than guessing at scope, we ran a structured Five Ws and How process to define exactly what an MVP virtual exhibition needed, before any pixel or polygon.</p>
                <div className="nv-supporting-visual nv-supporting-visual--diagram">
                  <Image
                    src="/images/Planning showroom-floorplan.png"
                    alt="Floor plan of the exhibition hall — stage, floor, and window areas — sketched in Illustrator"
                    fill
                    className="nv-supporting-img"
                    sizes="(max-width: 768px) 100vw, 640px"
                  />
                </div>
                <p className="nv-supporting-caption">The exhibition hall floor plan, sketched in Illustrator before any 3D work began.</p>
              </div>
            </div>
            <div className="decision">
              <span className="decision-num">02</span>
              <div>
                <h3>Sketch to greybox, fast.</h3>
                <p>Ideas moved from pen-and-paper sketches straight into Unity greyboxing — testing scale, navigation, and flow in 3D before investing in final art.</p>
              </div>
            </div>
            <div className="decision">
              <span className="decision-num">03</span>
              <div>
                <h3>Full-fidelity environments, not just blockouts.</h3>
                <p>Once the layout worked, I modeled the environments in Cinema 4D and textured them in Substance Painter and Photoshop — turning a greybox into a space that felt real enough to hold an event in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">What we built</p>
          <h2 className="section-title">A social platform, not just a 3D showroom.</h2>

          <div className="nv-features">
            <div className="nv-feature">
              <span className="nv-feature-num">01</span>
              <h4>Multiplayer exploration</h4>
              <p>Join a shared server and move through the world alongside other avatars, with navigation inspired by Decentraland and open-world games.</p>
            </div>
            <div className="nv-feature">
              <span className="nv-feature-num">02</span>
              <h4>Portals between spaces</h4>
              <p>Sci-fi-styled portal gates with a swirl transition move users between the exhibition hall, concert venue, and outdoor scene without breaking immersion.</p>
              <div className="nv-supporting-visual nv-supporting-visual--square">
                <Image
                  src="/images/Portal.png"
                  alt="Close-up of a portal gate model in Unity, with a swirling blue transition effect"
                  fill
                  className="nv-supporting-img"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
            <div className="nv-feature">
              <span className="nv-feature-num">03</span>
              <h4>Group chat &amp; voice call</h4>
              <p>Text and voice communication built in, so the space functioned as a real social platform, not just a static 3D showroom.</p>
            </div>
            <div className="nv-feature">
              <span className="nv-feature-num">04</span>
              <h4>In-world commerce</h4>
              <p>Products showcased inside the exhibition hall could be browsed and purchased directly within the virtual interface.</p>
            </div>
          </div>

          <div className="nv-scale-strip">
            <div className="nv-scale-item">
              <div className="nv-scale-number">1,000+</div>
              <div className="nv-scale-label">Concurrent users the concert venue was built to hold</div>
            </div>
            <div className="nv-scale-item">
              <div className="nv-scale-number">3</div>
              <div className="nv-scale-label">Environments shipped in the prototype: exhibition hall, concert hall, outdoor scene</div>
            </div>
            <div className="nv-scale-item">
              <div className="nv-scale-number">5</div>
              <div className="nv-scale-label">People on the R&amp;D team, end to end</div>
            </div>
          </div>
        </div>
      </section>

      {/* ENVIRONMENTS */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">A closer look</p>
          <h2 className="section-title">Three spaces, one connected world.</h2>

          <div className="nv-environments">
            <div>
              <div className="nv-env-visual nv-env-visual--image">
                <Image
                  src="/images/hall_showroom.png"
                  alt="Interior of the Nepverse exhibition hall with product booths and screens"
                  fill
                  className="nv-env-img"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="nv-env-label">Exhibition Hall</span>
              <h3>Rentable booths for real businesses.</h3>
              <p>The common ground of the prototype — booths businesses could rent to showcase products, with in-world browsing and purchase built in.</p>
            </div>
            <div>
              <div className="nv-env-visual">
                <div className="nv-mock-concert" aria-hidden="true">
                  <div className="stage" />
                  <div className="row" /><div className="row" /><div className="row" />
                </div>
              </div>
              <span className="nv-env-label">Concert Hall</span>
              <h3>A stage, a balcony, and room for a crowd.</h3>
              <p>A large stage with an LCD screen, a balcony reached by an automated lift, and enough space for 1,000+ people to move freely — built for concerts, events, and movie premieres.</p>
            </div>
            <div>
              <div className="nv-env-visual nv-env-visual--image">
                <Image
                  src="/images/Outdoor planning.png"
                  alt="Top-down layout of the Nepverse outdoor city scene, blocked out in Unity"
                  fill
                  className="nv-env-img"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="nv-env-label">Outdoor Scene</span>
              <h3>A city to connect the rest.</h3>
              <p>An outdoor city scene with a park, linking the exhibition hall and concert venue into one world — the shell for whatever we added next.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">Outcome</p>
          <h2 className="section-title">What the prototype proved.</h2>

          <div className="outcomes-grid">
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.5 5.5 21 7.5 13.5 2 9 9 9 12 2" />
                </svg>
              </div>
              <h4>A working build, not just a concept deck.</h4>
              <p>A playable multiplayer prototype in Unity — proving the idea with something people could actually walk through, not a rendering.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h4>A venue built to hold a real crowd.</h4>
              <p>A concert hall designed for 1,000+ concurrent users, with automated lift and stairs navigation to a balcony level.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                </svg>
              </div>
              <h4>Two disciplines, one deliverable.</h4>
              <p>Full ownership across UX/product design and hands-on 3D art — research, prototyping, and environment modeling on the same project.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h4>A proof-of-concept, honestly labeled.</h4>
              <p>Concluded as an internal demo rather than a public launch — it did what R&amp;D is supposed to do: answer the question before betting more on it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Reflection</p>
          <h2 className="section-title">Not every prototype has to ship to be worth building.</h2>
          <div className="prose">
            <p>
              Working across product design and 3D art on the same project forced a kind of
              discipline I hadn&apos;t needed before — a feature only mattered once it existed in
              the space, not just on a whiteboard. Nepverse never went public, and that&apos;s
              fine: its job was to answer whether the idea worked at all, and it did that clearly
              enough to be worth the year it took.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="next-case">
        <div className="container">
          <Link href="/viveka" className="next-case-card">
            <p className="next-case-label">Back to the main body of work</p>
            <h2 className="next-case-title">Building an enterprise design system from legacy chaos.</h2>
            <p className="next-case-desc">
              Architecting the component library, tokens, and documentation powering Viveka&apos;s
              healthcare platform — with accessibility and developer handoff built in from day one.
            </p>
            <span className="next-case-cta">
              Viveka case study
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
