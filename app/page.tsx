'use client';

import { BookOpen, Users, Lightbulb, Award } from 'lucide-react';

const HeroSection = () => (
  <section className="min-h-screen bg-background flex items-center justify-center py-20 px-4">
    <div className="max-w-6xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="w-full max-w-md">
            <img
              src="/hero-portrait.jpg"
              alt="Ki Hajar Dewantara"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-primary text-lg font-semibold mb-2">
              Educational Hero
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Ki Hajar Dewantara
            </h1>
          </div>

          <div className="border-l-4 border-primary pl-6 py-4 bg-secondary/30 rounded-r-lg">
            <p className="text-xl md:text-2xl text-foreground italic font-medium leading-relaxed">
              "Pendidikan adalah tempat untuk membentuk kepribadian, mengasah bakat dan kemampuan peserta didik."
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Education is a place to form personality and sharpen students&apos; talents and abilities.
            </p>
          </div>

          <p className="text-foreground text-lg leading-relaxed">
            Founder of Taman Siswa movement, visionary educator who revolutionized Indonesian education through innovative teaching methods centered on student dignity and cultural values.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="#biography" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BiographySection = () => (
  <section id="biography" className="py-20 px-4 bg-secondary/10">
    <div className="max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Biography & Legacy
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="space-y-8 text-foreground text-lg leading-relaxed">
        <div className="bg-card p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">Early Life (1889-1921)</h3>
          <p className="text-base md:text-lg">
            Born Suwardi Suryaningrat on May 2, 1889, in Pakualaman, Ki Hajar Dewantara came from an aristocratic Javanese family. He studied in various schools including a Dutch-language school in Yogyakarta. His early exposure to colonial education systems shaped his critical perspective on Western pedagogical approaches and their unsuitability for Indonesian cultural contexts. He spent his youth studying nationalism and indigenous Indonesian values.
          </p>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">The Founding of Taman Siswa (1922)</h3>
          <p className="text-base md:text-lg">
            In 1922, Suwardi Suryaningrat officially changed his name to Ki Hajar Dewantara (meaning teacher of the nation) and founded Taman Siswa (Garden of Students). This revolutionary educational movement was established with the principle that education should be accessible to all, regardless of social class. Unlike the rigid colonial education system, Taman Siswa promoted a holistic approach emphasizing moral character development, cultural values, and national consciousness alongside academic learning.
          </p>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">Revolutionary Approach</h3>
          <p className="text-base md:text-lg">
            Ki Hajar Dewantara introduced the famous educational philosophy: "Tut Wuri Handayani" (Following from behind), emphasizing that teachers should inspire students from behind, allowing them to explore and discover knowledge independently. His system integrated traditional Javanese wisdom with modern educational methods. He created an atmosphere of learning centered on student development, creativity, and the cultivation of national identity during a period of increasing Indonesian nationalism.
          </p>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">Later Years & Global Recognition (1945-1959)</h3>
          <p className="text-base md:text-lg">
            After Indonesia&apos;s independence, Ki Hajar Dewantara was recognized nationally and served as the Minister of Education and Culture. He continued expanding Taman Siswa and influenced educational policy at the national level. His work has been recognized internationally as a pioneering model for progressive education. He passed away in 1959, leaving behind an educational legacy that continues to inspire educators and policymakers worldwide. The principles of Taman Siswa remain relevant in contemporary education.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ImpactSection = () => (
  <section id="impact" className="py-20 px-4 bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          The &quot;Educate&quot; Impact
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Ki Hajar Dewantara&apos;s profound contributions to education continue to shape how we teach and learn today.
        </p>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card border-2 border-primary/20 rounded-lg p-8 hover:shadow-lg hover:border-primary transition-all">
          <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit">
            <Users className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Democratic Education for All
          </h3>
          <p className="text-foreground leading-relaxed text-base">
            Established the first truly inclusive educational system in Indonesia. Taman Siswa accepted students from all social classes and backgrounds, breaking down barriers of class-based education that were prevalent during the colonial era. This democratization of education became a model for accessible schooling worldwide.
          </p>
        </div>

        <div className="bg-card border-2 border-accent/20 rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all">
          <div className="mb-6 p-4 bg-accent/10 rounded-lg w-fit">
            <Lightbulb className="w-10 h-10 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Student-Centered Learning
          </h3>
          <p className="text-foreground leading-relaxed text-base">
            Pioneered the &quot;Tut Wuri Handayani&quot; philosophy that shifted focus from teacher-centered to student-centered education. This approach empowered students as active learners rather than passive recipients of knowledge, emphasizing critical thinking, creativity, and personal development—concepts now fundamental to modern progressive education.
          </p>
        </div>

        <div className="bg-card border-2 border-secondary/50 rounded-lg p-8 hover:shadow-lg hover:border-secondary transition-all">
          <div className="mb-6 p-4 bg-secondary/20 rounded-lg w-fit">
            <BookOpen className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Cultural Integration in Education
          </h3>
          <p className="text-foreground leading-relaxed text-base">
            Integrated Indonesian cultural values, local wisdom, and national identity into the curriculum. He emphasized the importance of preserving and teaching traditional culture alongside modern knowledge, creating a balanced approach to education that respects cultural heritage while preparing students for contemporary challenges.
          </p>
        </div>

        <div className="bg-card border-2 border-primary/20 rounded-lg p-8 hover:shadow-lg hover:border-primary transition-all md:col-start-1">
          <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit">
            <Award className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Holistic Character Development
          </h3>
          <p className="text-foreground leading-relaxed text-base">
            Promoted education that develops not just intellect but also moral character, emotional intelligence, and spiritual values. This holistic approach to education influenced global educational reforms and remains central to discussions about comprehensive student development and well-being in schools today.
          </p>
        </div>

        <div className="bg-card border-2 border-accent/20 rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all md:col-start-2">
          <div className="mb-6 p-4 bg-accent/10 rounded-lg w-fit">
            <Users className="w-10 h-10 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Teacher Empowerment
          </h3>
          <p className="text-foreground leading-relaxed text-base">
            Recognized teachers as transformative leaders rather than mere instructors. He emphasized continuous professional development and the importance of teachers being deeply connected to their communities, setting standards for educator professionalism that are now recognized globally.
          </p>
        </div>

        <div className="bg-card border-2 border-secondary/50 rounded-lg p-8 hover:shadow-lg hover:border-secondary transition-all md:col-start-3">
          <div className="mb-6 p-4 bg-secondary/20 rounded-lg w-fit">
            <Lightbulb className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Educational Independence
          </h3>
          <p className="text-foreground leading-relaxed text-base">
            Established that nations should control their own educational systems rather than having external forces dictate curriculum and methods. His vision contributed to educational sovereignty movements globally, influencing how countries develop their own educational philosophies and standards.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const LegacySection = () => (
  <section className="py-20 px-4 bg-primary text-primary-foreground">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h2 className="text-4xl md:text-5xl font-bold">
        A Living Legacy
      </h2>

      <p className="text-lg leading-relaxed text-balance">
        Taman Siswa operates as a network of schools across Indonesia to this day, continuing Ki Hajar Dewantara&apos;s mission of providing accessible, culturally-grounded education. His principles have influenced educational reforms in countries worldwide and remain a testament to the power of visionary leadership in education.
      </p>

      <div className="bg-primary-foreground/10 rounded-lg p-8 mt-8">
        <p className="text-xl font-semibold italic">
          &quot;Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani&quot;
        </p>
        <p className="text-base mt-4">
          In front, be an example. In the middle, build motivation and courage. From behind, encourage and support.
        </p>
      </div>

      <p className="text-base pt-8">
        This trio of principles encapsulates Ki Hajar Dewantara&apos;s educational philosophy and continues to guide educators and leaders globally.
      </p>
    </div>
  </section>
);

const FooterSection = () => (
  <footer className="bg-foreground text-background py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h4 className="font-bold text-lg mb-4">About Ki Hajar Dewantara</h4>
          <p className="text-sm leading-relaxed opacity-90">
            A legendary Indonesian educator and founding father of progressive education in Southeast Asia.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Taman Siswa</h4>
          <p className="text-sm leading-relaxed opacity-90">
            Founded 1922, continues operating schools throughout Indonesia with over 100 years of educational excellence.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Learn More</h4>
          <ul className="text-sm space-y-2 opacity-90">
            <li><a href="#" className="hover:opacity-100 transition-opacity">Taman Siswa Official</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">UNESCO Recognition</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Educational Resources</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/20 pt-8">
        <p className="text-center text-sm opacity-75">
          © 2024 Tribute to Ki Hajar Dewantara. Dedicated to progressive education and cultural heritage.
        </p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <BiographySection />
      <ImpactSection />
      <LegacySection />
      <FooterSection />
    </main>
  );
}
