'use client';

import { BookOpen, Users, Lightbulb, Award, ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => (
  <section className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center pt-20 pb-20 px-4">
    {/* Animated background gradient */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>

    <div className="max-w-6xl w-full relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image side */}
        <div className="flex justify-center md:justify-start order-2 md:order-1">
          <div className="relative w-full max-w-md group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl group-hover:border-primary/60 transition-all duration-500">
              <img
                src="/hero-portrait.jpg"
                alt="Ki Hajar Dewantara"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="space-y-8 order-1 md:order-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full w-fit group cursor-pointer hover:bg-primary/15 transition-all">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Educational Hero</span>
          </div>

          {/* Main heading */}
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Ki Hajar Dewantara
            </h1>
          </div>

          {/* Quote section */}
          <div className="relative space-y-4">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-primary to-accent"></div>
            <p className="text-xl md:text-2xl text-foreground italic font-medium leading-relaxed pl-4">
              "Pendidikan adalah tempat untuk membentuk kepribadian, mengasah bakat dan kemampuan peserta didik."
            </p>
            <p className="text-sm text-muted-foreground pl-4">
              Education is a place to form personality and sharpen students' talents and abilities.
            </p>
          </div>

          {/* Description */}
          <p className="text-foreground/80 text-lg leading-relaxed">
            Founder of Taman Siswa movement, visionary educator who revolutionized Indonesian education through innovative teaching methods centered on student dignity and cultural values.
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#biography" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#impact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:border-primary">
              View Legacy
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <p className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</p>
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
);

const BiographySection = () => (
  <section id="biography" className="py-24 px-4 bg-background relative">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-5xl mx-auto relative z-10">
      {/* Section header */}
      <div className="mb-16 text-center space-y-4">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground">
          Biography & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Legacy</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover the remarkable journey of a visionary educator who transformed education
        </p>
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>
      </div>

      {/* Biography cards */}
      <div className="space-y-6">
        {[
          {
            year: "1889-1921",
            title: "Early Life & Vision",
            description: "Born Suwardi Suryaningrat in an aristocratic Javanese family, Ki Hajar Dewantara witnessed the shortcomings of colonial education systems. His critical perspective on Western pedagogical approaches shaped his vision for culturally-rooted education that truly served Indonesian students.",
            icon: "📚"
          },
          {
            year: "1922",
            title: "Founding of Taman Siswa",
            description: "Officially changed his name to Ki Hajar Dewantara and founded Taman Siswa (Garden of Students). This revolutionary movement established the first truly inclusive educational system in Indonesia, breaking down class-based barriers and introducing holistic student-centered learning.",
            icon: "🌱"
          },
          {
            year: "1922-1945",
            title: "Revolutionary Approach",
            description: "Introduced the iconic 'Tut Wuri Handayani' philosophy—teaching from behind to inspire student independence. Integrated traditional Javanese wisdom with modern methods, creating an atmosphere where students explored knowledge independently while developing national consciousness.",
            icon: "✨"
          },
          {
            year: "1945-1959",
            title: "National Recognition",
            description: "After Indonesian independence, served as Minister of Education and Culture. Continued expanding Taman Siswa and influenced national educational policy. His legacy was recognized globally, establishing him as a pioneer of progressive education worldwide.",
            icon: "🏆"
          }
        ].map((item, index) => (
          <div key={index} className="group relative">
            {/* Timeline line */}
            {index < 3 && (
              <div className="absolute left-12 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 to-transparent"></div>
            )}

            <div className="flex gap-8 items-start">
              {/* Timeline dot */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-4 pb-8">
                <div className="p-6 bg-card border border-primary/20 rounded-xl group-hover:border-primary/50 group-hover:bg-card/80 transition-all duration-300">
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">{item.year}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ImpactSection = () => (
  <section id="impact" className="py-24 px-4 bg-background relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      {/* Section header */}
      <div className="mb-16 text-center space-y-4">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground">
          The <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">"Educate"</span> Impact
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Ki Hajar Dewantara's profound contributions to education continue to shape how we teach and learn today, inspiring educators worldwide.
        </p>
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>
      </div>

      {/* Impact cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: Users,
            title: "Democratic Education for All",
            description: "Established the first truly inclusive educational system in Indonesia. Taman Siswa accepted students from all social classes, breaking down barriers and democratizing access to quality education.",
            color: "from-primary to-primary/60"
          },
          {
            icon: Lightbulb,
            title: "Student-Centered Learning",
            description: "Pioneered 'Tut Wuri Handayani'—shifting focus from teacher-centered to student-centered education. Empowered students as active learners, emphasizing critical thinking and creativity.",
            color: "from-accent to-accent/60"
          },
          {
            icon: BookOpen,
            title: "Cultural Integration",
            description: "Integrated Indonesian cultural values and local wisdom into curriculum. Balanced traditional culture with modern knowledge, respecting heritage while preparing students for contemporary challenges.",
            color: "from-secondary to-secondary/60"
          },
          {
            icon: Award,
            title: "Holistic Development",
            description: "Promoted education that develops intellect, moral character, emotional intelligence, and spiritual values. A comprehensive approach that remains central to discussions about student well-being.",
            color: "from-primary to-accent"
          },
          {
            icon: Users,
            title: "Teacher Empowerment",
            description: "Recognized teachers as transformative leaders. Emphasized continuous professional development and deep community connections, setting standards for educator professionalism globally.",
            color: "from-accent to-primary"
          },
          {
            icon: Sparkles,
            title: "Educational Independence",
            description: "Established that nations should control their own educational systems. His vision contributed to educational sovereignty movements, influencing how countries develop their own philosophies.",
            color: "from-secondary to-accent"
          }
        ].map((impact, index) => {
          const IconComponent = impact.icon;
          return (
            <div key={index} className="group relative h-full">
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" style={{backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>

              {/* Card content */}
              <div className="relative h-full p-8 bg-card border border-muted/30 rounded-2xl group-hover:border-primary/50 transition-all duration-300 flex flex-col hover:shadow-xl hover:shadow-primary/10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${impact.color} p-0.5 mb-4`}>
                  <div className="w-full h-full bg-card rounded-md flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {impact.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 leading-relaxed flex-1">
                  {impact.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const LegacySection = () => (
  <section className="py-24 px-4 bg-gradient-to-r from-primary/10 via-background to-secondary/10 relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
    </div>

    <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
      <h2 className="text-5xl md:text-6xl font-bold text-foreground">
        A <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Living Legacy</span>
      </h2>

      <p className="text-foreground/80 text-lg leading-relaxed text-balance">
        Taman Siswa operates as a network of schools across Indonesia to this day, continuing Ki Hajar Dewantara's mission of providing accessible, culturally-grounded education. His principles have influenced educational reforms in countries worldwide and remain a testament to the power of visionary leadership.
      </p>

      {/* Motto card */}
      <div className="mt-12 p-8 md:p-12 bg-card border border-primary/30 rounded-2xl space-y-4 hover:border-primary/60 transition-all hover:shadow-xl hover:shadow-primary/10">
        <p className="text-2xl md:text-3xl font-bold text-foreground italic text-balance">
          "Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani"
        </p>
        <p className="text-base text-foreground/70">
          In front, be an example. In the middle, build motivation and courage. From behind, encourage and support.
        </p>
        <p className="text-sm text-muted-foreground pt-4">
          This trio of principles encapsulates Ki Hajar Dewantara's educational philosophy and continues to guide educators and leaders globally.
        </p>
      </div>
    </div>
  </section>
);

const FooterSection = () => (
  <footer className="bg-muted border-t border-muted/50 py-16 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-3">
          <h4 className="font-bold text-lg text-foreground">About Ki Hajar Dewantara</h4>
          <p className="text-foreground/60 text-sm leading-relaxed">
            A legendary Indonesian educator and founding father of progressive education in Southeast Asia, whose revolutionary approach to teaching continues to inspire educators worldwide.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-bold text-lg text-foreground">Rizky Afandi</h4>
          <p className="text-foreground/60 text-sm leading-relaxed">
            Founded in 1922, continues operating schools throughout Indonesia with over 100 years of educational excellence and commitment to accessible, culturally-grounded learning.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-bold text-lg text-foreground">Learn More</h4>
          <ul className="text-foreground/60 text-sm space-y-2">
            <li><a href="#" className="hover:text-primary transition-colors">Rizky Afandi Official Website</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Instagram@kik.i118</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">https://github.com/afandirizky-gif</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <p className="text-center text-foreground/50 text-sm">
          © 2026 Tribute to Ki Hajar Dewantara. Dedicated to progressive education and cultural heritage.
        </p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-background">
      <HeroSection />
      <BiographySection />
      <ImpactSection />
      <LegacySection />
      <FooterSection />
    </main>
  );
}
