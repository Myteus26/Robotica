import { useState } from "react";
import {
  Bot,
  Check,
  ChevronDown,
  Cog,
  Download,
  Hammer,
  House,
  Lightbulb,
  Lock,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const HERO_IMAGE = "/manus-storage/hero-mockup_bd3a9dd1.png";
const CHECKOUT_URL =
  "https://pay.hotmart.com/H107527775C?checkoutMode=10&utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&xcod=&sck=";

const projectCategories = [
  {
    image: "/manus-storage/cat-robots_b96eec00.jpg",
    alt: "Robot casero construido con materiales simples",
    title: "Robots que se mueven",
    text: "Robot caminante, robot dibujante, robot cepillo y mucho más.",
  },
  {
    image: "/manus-storage/cat-vehicles_6fc584b1.jpg",
    alt: "Vehículo eléctrico casero con hélice",
    title: "Vehículos y transporte",
    text: "Coches, barcos, vehículos con hélice y proyectos motorizados.",
  },
  {
    image: "/manus-storage/cat-machines_78678d72.jpg",
    alt: "Grúa casera construida con cartón y palitos",
    title: "Máquinas y mecanismos",
    text: "Grúas, elevadores, brazos mecánicos y otros inventos.",
  },
  {
    image: "/manus-storage/cat-electricity_caab3373.jpg",
    alt: "Circuito básico con LEDs, cables y motor",
    title: "Electricidad fácil",
    text: "Motores, LEDs, interruptores y circuitos básicos.",
  },
  {
    image: "/manus-storage/cat-cardboard_64810156.jpg",
    alt: "Invento creativo construido con cartón",
    title: "Inventos con cartón",
    text: "Proyectos creativos construidos con materiales simples.",
  },
  {
    image: "/manus-storage/cat-recycled_0d942c5c.jpg",
    alt: "Robot construido con materiales reciclados",
    title: "Proyectos reciclados",
    text: "Botellas, tapas, cajas, palitos y materiales fáciles de conseguir.",
  },
];

const audience = [
  {
    icon: House,
    title: "Para padres y familias",
    text: "Que buscan actividades educativas, creativas y diferentes para hacer en casa.",
  },
  {
    icon: Sparkles,
    title: "Para niños curiosos",
    text: "Que disfrutan construir, experimentar y descubrir cómo funcionan las cosas.",
  },
  {
    icon: Bot,
    title: "Para principiantes",
    text: "Que quieren tener un primer contacto con la robótica sin empezar con conceptos complicados.",
  },
  {
    icon: Lightbulb,
    title: "Para profesores y educadores",
    text: "Que buscan ideas prácticas para trabajar ciencia, tecnología, creatividad y STEM.",
  },
];

const included = [
  "+100 proyectos paso a paso",
  "Robots y vehículos",
  "Máquinas y mecanismos",
  "Electricidad básica",
  "Inventos con cartón",
  "Proyectos reciclados",
  "Actividades para casa y escuela",
  "Acceso digital inmediato",
  "Material visual y fácil de consultar",
];

const faqs = [
  {
    question: "¿Necesito saber robótica para utilizar el material?",
    answer:
      "No. Los proyectos están pensados para niños y principiantes y se explican paso a paso.",
  },
  {
    question: "¿Qué edad es recomendable?",
    answer:
      "El material está pensado principalmente para niños en edad escolar. Algunos proyectos son muy sencillos y otros pueden requerir el acompañamiento de un adulto.",
  },
  {
    question: "¿Necesito comprar un kit de robótica?",
    answer:
      "No. Muchos proyectos utilizan materiales comunes, reciclados o fáciles de encontrar. Algunos proyectos pueden requerir componentes básicos como motores, pilas, cables o LEDs.",
  },
  {
    question: "¿Es un producto físico?",
    answer:
      "No. Es un producto digital al que podrás acceder después de realizar la compra.",
  },
  {
    question: "¿Puedo utilizarlo en la escuela?",
    answer:
      "Sí. El material también puede servir como apoyo para profesores, talleres y actividades educativas.",
  },
  {
    question: "¿Los niños pueden hacer los proyectos solos?",
    answer:
      "Depende de la edad y del proyecto. Recomendamos la supervisión de un adulto, especialmente cuando se utilicen herramientas, electricidad, piezas pequeñas o materiales que requieran cuidado.",
  },
  {
    question: "¿Cómo recibo el producto?",
    answer:
      "Después de confirmar la compra recibirás las instrucciones para acceder al contenido digital.",
  },
];

function scrollToOffer() {
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
}

function SectionTitle({ children, center = true }: { children: React.ReactNode; center?: boolean }) {
  return (
    <h2
      className={`text-3xl font-black text-navy text-balance sm:text-4xl ${center ? "text-center" : ""}`}
    >
      {children}
    </h2>
  );
}

function CheckDot({ filled = false }: { filled?: boolean }) {
  return (
    <span
      className={`flex size-5 shrink-0 items-center justify-center rounded-full sm:size-6 ${
        filled ? "bg-brand" : "bg-brand/10"
      }`}
    >
      <Check className={`size-3 sm:size-4 ${filled ? "text-brand-foreground" : "text-brand"}`} />
    </span>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-card">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-navy sm:px-6"
      >
        {question}
        <ChevronDown
          className={`size-5 shrink-0 text-brand transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="px-5 pb-5 text-muted-foreground leading-relaxed sm:px-6">{answer}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <div className="bg-navy py-2.5 text-center">
        <p className="inline-flex items-center justify-center gap-2 px-5 text-sm font-extrabold tracking-wide text-primary-foreground sm:text-base">
          <Zap className="size-4 shrink-0 text-sun" />
          Oferta disponible solo hoy
          <Zap className="size-4 shrink-0 text-sun" />
        </p>
      </div>

      <section className="mx-auto max-w-5xl px-5 pt-5 pb-8 text-center sm:pt-12 sm:pb-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-sun/40 px-3 py-1 text-[10px] font-extrabold tracking-widest text-navy sm:text-sm">
          <Cog className="size-3 sm:size-4" />
          +100 PROYECTOS PASO A PASO
        </span>
        <h1 className="mt-3 text-[1.65rem] font-black leading-[1.12] text-navy text-balance sm:mt-6 sm:text-5xl lg:text-6xl">
          +100 proyectos de robótica para aprender <span className="text-brand">construyendo</span>
        </h1>
        <p className="mt-3 text-base font-semibold text-navy/80 sm:text-xl">
          Robots, vehículos, máquinas e inventos paso a paso para niños y principiantes.
        </p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-navy/5 sm:mt-10 sm:rounded-3xl">
          <img
            src={HERO_IMAGE}
            alt="Biblioteca digital de proyectos de robótica: robot caminante, coche eléctrico, brazo robótico, grúa y circuitos paso a paso"
            width="1254"
            height="1254"
            className="h-auto w-full object-cover"
          />
        </div>
        <ul className="mx-auto mt-4 grid max-w-2xl grid-cols-2 gap-2 text-left sm:mt-8 sm:gap-3">
          {["Proyectos paso a paso", "Ideal para niños y principiantes", "Materiales simples y económicos", "Actividades para casa o escuela"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2 text-xs font-semibold text-navy/90 sm:text-base">
                <CheckDot />
                {item}
              </li>
            ),
          )}
        </ul>
        <div className="mt-5 flex flex-col items-center gap-2 sm:mt-10 sm:gap-3">
          <button
            type="button"
            onClick={scrollToOffer}
            className="cta-button inline-flex w-full items-center justify-center rounded-2xl bg-brand px-8 py-4 text-base font-extrabold tracking-wide text-brand-foreground shadow-lg shadow-brand/25 hover:bg-brand/90 sm:w-auto sm:text-lg"
          >
            QUIERO ACCEDER A LOS PROYECTOS
          </button>
          <p className="text-xs text-muted-foreground sm:text-sm">Acceso digital inmediato después de la compra</p>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <SectionTitle>Que la tecnología no sea solo para mirar</SectionTitle>
          <p className="mx-auto mt-5 max-w-3xl text-muted-foreground leading-relaxed">
            Hoy los niños pasan mucho tiempo usando tecnología, pero pocas veces tienen la oportunidad de construir algo con sus propias manos.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-muted-foreground leading-relaxed">
            Con <strong className="text-navy">100 Proyectos de Robótica para Niños</strong>, podrán transformar materiales simples en robots, vehículos, máquinas e inventos mientras aprenden de forma práctica.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { icon: Hammer, title: "Construye", text: "Crea proyectos reales siguiendo instrucciones sencillas." },
              { icon: Cog, title: "Experimenta", text: "Descubre movimientos, mecanismos, motores y circuitos básicos." },
              { icon: Lightbulb, title: "Aprende", text: "Comprende conceptos de ciencia y tecnología mientras construyes." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 text-left shadow-sm">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10">
                  <Icon className="size-6 text-brand" />
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-navy">{title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-2xl bg-navy px-6 py-6 text-lg font-extrabold text-primary-foreground text-balance sm:text-xl">
            Menos tiempo solo consumiendo. <span className="text-sun">Más tiempo creando, experimentando y aprendiendo.</span>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <SectionTitle>Más de 100 proyectos para elegir</SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Una biblioteca llena de ideas para construir, experimentar y descubrir cómo funcionan las cosas.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectCategories.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-shadow hover:shadow-md"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  width="1024"
                  height="512"
                  className="aspect-[2/1] w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-navy">{project.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{project.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 font-bold text-navy">+ muchas otras ideas para construir, experimentar y aprender.</p>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <SectionTitle>Una biblioteca creada para niños curiosos y adultos que quieren acompañar su aprendizaje</SectionTitle>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {audience.map(({ icon: Icon, title, text }) => (
              <article key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 text-left shadow-sm">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-sun/40">
                  <Icon className="size-6 text-navy" />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold text-navy">{title}</h3>
                  <p className="mt-1.5 text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="oferta" className="scroll-mt-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <div className="rounded-3xl border-2 border-brand/20 bg-accent p-6 text-center shadow-xl shadow-brand/10 sm:p-10">
            <SectionTitle>
              Llévate hoy la biblioteca completa de <span className="text-brand">100 Proyectos de Robótica para Niños</span>
            </SectionTitle>
            <div className="mx-auto mt-8 max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <img
                src={HERO_IMAGE}
                alt="Mockup de la biblioteca digital de proyectos de robótica"
                loading="lazy"
                width="1254"
                height="1254"
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground leading-relaxed">
              Recibe acceso a una colección completa con más de 100 proyectos de robótica organizados para aprender construyendo.
            </p>
            <ul className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2.5 font-semibold text-navy/90">
                  <CheckDot filled />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <p className="text-lg font-bold text-muted-foreground line-through">US$ 29.99</p>
              <p className="mt-1 text-sm font-extrabold tracking-widest text-navy">HOY POR SOLO</p>
              <p className="text-6xl font-black text-brand sm:text-7xl">US$ 9.99</p>
              <p className="mt-2 text-[10px] text-muted-foreground sm:text-xs">
                El valor se convertirá a tu moneda local al momento del pago.
              </p>
            </div>
            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex w-full items-center justify-center rounded-2xl bg-brand px-8 py-4 text-base font-extrabold tracking-wide text-brand-foreground shadow-lg shadow-brand/25 hover:bg-brand/90 sm:w-auto sm:text-lg"
              >
                QUIERO MIS +100 PROYECTOS
              </a>
              <p className="text-sm text-muted-foreground">Acceso inmediato después de la compra.</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-navy/80">
              <span className="flex items-center gap-2"><Lock className="size-4 text-brand" /> Pago seguro</span>
              <span className="flex items-center gap-2"><Download className="size-4 text-brand" /> Producto digital</span>
              <span className="flex items-center gap-2"><Zap className="size-4 text-brand" /> Acceso inmediato</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-6 text-center shadow-sm sm:flex-row sm:p-10 sm:text-left">
            <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-brand/10">
              <ShieldCheck className="size-10 text-brand" />
            </span>
            <div>
              <h2 className="text-2xl font-black text-navy sm:text-3xl">Pruébalo sin riesgo</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Tienes 7 días de garantía para acceder al material y revisar el contenido. Si dentro de ese plazo decides que no es para ti, puedes solicitar el reembolso de acuerdo con las condiciones de la plataforma de pago.
              </p>
              <p className="mt-3 font-extrabold text-navy">Tu compra está protegida.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <SectionTitle>Preguntas frecuentes</SectionTitle>
          <div className="mt-10 flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-navy py-12 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="flex items-center justify-center gap-2 text-lg font-extrabold">
            <Bot className="size-6 text-sun" />
            100 Proyectos de Robótica para Niños
          </p>
          <p className="mt-2 text-sm text-primary-foreground/70">Producto digital educativo.</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold">
            <a href="#" className="text-primary-foreground/80 hover:text-sun">Términos de uso</a>
            <a href="#" className="text-primary-foreground/80 hover:text-sun">Política de privacidad</a>
            <a href="#" className="text-primary-foreground/80 hover:text-sun">Contacto</a>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/70">© 2026 — Todos los derechos reservados</p>
          <p className="mx-auto mt-4 max-w-xl text-xs text-primary-foreground/50 leading-relaxed">
            Los resultados y la experiencia pueden variar según la edad, el proyecto y el acompañamiento de un adulto.
          </p>
        </div>
      </footer>
    </main>
  );
}
