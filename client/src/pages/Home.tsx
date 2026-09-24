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

const HERO_IMAGE =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663961697104/HXzmyDiuWDaPwrHV.png";
const CHECKOUT_URL = "https://pay.hotmart.com/E107649399W";

const projectCategories = [
  {
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663961697104/ncMLpVPxaeakzUiH.jpg",
    alt: "Robô caseiro construído com materiais simples",
    title: "Robôs que se movem",
    text: "Robô andante, robô desenhador, robô-escova e muito mais.",
  },
  {
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663961697104/qVxTNGbIOwQQHKpV.jpg",
    alt: "Veículo elétrico caseiro com hélice",
    title: "Veículos e transportes",
    text: "Carros, barcos, veículos com hélice e projetos motorizados.",
  },
  {
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663961697104/dGTYkozrmBPCHJGw.jpg",
    alt: "Grua caseira construída com cartão e paus de madeira",
    title: "Máquinas e mecanismos",
    text: "Gruas, elevadores, braços mecânicos e outras invenções.",
  },
  {
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663961697104/garJfpEpsIrYbnMn.jpg",
    alt: "Circuito básico com LED, cabos e motor",
    title: "Eletricidade fácil",
    text: "Motores, LED, interruptores e circuitos básicos.",
  },
  {
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663961697104/OYICUyoDLJcAfnhI.jpg",
    alt: "Invenção criativa construída em cartão",
    title: "Invenções em cartão",
    text: "Projetos criativos construídos com materiais simples.",
  },
  {
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663961697104/HBaLfrOlnzpBVhDe.jpg",
    alt: "Robô construído com materiais reciclados",
    title: "Projetos reciclados",
    text: "Garrafas, tampas, caixas, paus de madeira e materiais fáceis de encontrar.",
  },
];

const audience = [
  {
    icon: House,
    title: "Para pais e famílias",
    text: "Que procuram atividades educativas, criativas e diferentes para fazer em casa.",
  },
  {
    icon: Sparkles,
    title: "Para crianças curiosas",
    text: "Que gostam de construir, experimentar e descobrir como funcionam as coisas.",
  },
  {
    icon: Bot,
    title: "Para principiantes",
    text: "Que querem ter um primeiro contacto com a robótica sem começar por conceitos complicados.",
  },
  {
    icon: Lightbulb,
    title: "Para professores e educadores",
    text: "Que procuram ideias práticas para trabalhar ciência, tecnologia, criatividade e STEM.",
  },
];

const included = [
  "+100 projetos passo a passo",
  "Robôs e veículos",
  "Máquinas e mecanismos",
  "Eletricidade básica",
  "Invenções em cartão",
  "Projetos reciclados",
  "Atividades para casa e para a escola",
  "Acesso digital imediato",
  "Material visual e de consulta fácil",
];

const faqs = [
  {
    question: "Preciso de saber robótica para utilizar o material?",
    answer:
      "Não. Os projetos foram concebidos para crianças e principiantes e são explicados passo a passo.",
  },
  {
    question: "Qual é a idade recomendada?",
    answer:
      "O material destina-se principalmente a crianças em idade escolar. Alguns projetos são muito simples e outros podem exigir o acompanhamento de um adulto.",
  },
  {
    question: "Preciso de comprar um kit de robótica?",
    answer:
      "Não. Muitos projetos utilizam materiais comuns, reciclados ou fáceis de encontrar. Alguns projetos podem exigir componentes básicos, como motores, pilhas, cabos ou LED.",
  },
  {
    question: "É um produto físico?",
    answer:
      "Não. É um produto digital ao qual poderá aceder depois de efetuar a compra.",
  },
  {
    question: "Posso utilizá-lo na escola?",
    answer:
      "Sim. O material também pode servir de apoio a professores, oficinas e atividades educativas.",
  },
  {
    question: "As crianças podem fazer os projetos sozinhas?",
    answer:
      "Depende da idade e do projeto. Recomendamos a supervisão de um adulto, sobretudo quando forem utilizadas ferramentas, eletricidade, peças pequenas ou materiais que exijam cuidado.",
  },
  {
    question: "Como recebo o produto?",
    answer:
      "Depois de a compra ser confirmada, receberá as instruções para aceder ao conteúdo digital.",
  },
];

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
          Oferta disponível apenas hoje
          <Zap className="size-4 shrink-0 text-sun" />
        </p>
      </div>

      <section className="mx-auto max-w-5xl px-5 pt-5 pb-8 text-center sm:pt-12 sm:pb-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-sun/40 px-3 py-1 text-[10px] font-extrabold tracking-widest text-navy sm:text-sm">
          <Cog className="size-3 sm:size-4" />
          +100 PROJETOS PASSO A PASSO
        </span>
        <h1 className="mt-3 text-[1.65rem] font-black leading-[1.12] text-navy text-balance sm:mt-6 sm:text-5xl lg:text-6xl">
          +100 projetos de robótica para aprender <span className="text-brand">a construir</span>
        </h1>
        <p className="mt-3 text-base font-semibold text-navy/80 sm:text-xl">
          Robôs, veículos, máquinas e invenções passo a passo para crianças e principiantes.
        </p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-navy/5 sm:mt-10 sm:rounded-3xl">
          <img
            src={HERO_IMAGE}
            alt="Biblioteca digital de projetos de robótica: robô andante, carro elétrico, braço robótico, grua e circuitos passo a passo"
            width="1920"
            height="1920"
            className="h-auto w-full object-cover"
          />
        </div>
        <ul className="mx-auto mt-4 grid max-w-2xl grid-cols-2 gap-2 text-left sm:mt-8 sm:gap-3">
          {["Projetos passo a passo", "Ideal para crianças e principiantes", "Materiais simples e económicos", "Atividades para casa ou para a escola"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2 text-xs font-semibold text-navy/90 sm:text-base">
                <CheckDot />
                {item}
              </li>
            ),
          )}
        </ul>
        <div className="mt-5 flex flex-col items-center gap-2 sm:mt-10 sm:gap-3">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex w-full items-center justify-center rounded-2xl bg-brand px-8 py-4 text-base font-extrabold tracking-wide text-brand-foreground shadow-lg shadow-brand/25 hover:bg-brand/90 sm:w-auto sm:text-lg"
          >
            QUERO ACEDER AOS PROJETOS
          </a>
          <p className="text-xs text-muted-foreground sm:text-sm">Acesso digital imediato após a compra</p>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <SectionTitle>Que a tecnologia não sirva apenas para observar</SectionTitle>
          <p className="mx-auto mt-5 max-w-3xl text-muted-foreground leading-relaxed">
            Atualmente, as crianças passam muito tempo a utilizar tecnologia, mas raramente têm a oportunidade de construir algo com as próprias mãos.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-muted-foreground leading-relaxed">
            Com <strong className="text-navy">100 Projetos de Robótica para Crianças</strong>, poderão transformar materiais simples em robôs, veículos, máquinas e invenções enquanto aprendem de forma prática.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { icon: Hammer, title: "Constrói", text: "Cria projetos reais seguindo instruções simples." },
              { icon: Cog, title: "Experimenta", text: "Descobre movimentos, mecanismos, motores e circuitos básicos." },
              { icon: Lightbulb, title: "Aprende", text: "Compreende conceitos de ciência e tecnologia enquanto constróis." },
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
            Menos tempo apenas a consumir. <span className="text-sun">Mais tempo a criar, experimentar e aprender.</span>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <SectionTitle>Mais de 100 projetos à escolha</SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Uma biblioteca repleta de ideias para construir, experimentar e descobrir como funcionam as coisas.
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
          <p className="mt-8 font-bold text-navy">+ muitas outras ideias para construir, experimentar e aprender.</p>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <SectionTitle>Uma biblioteca criada para crianças curiosas e adultos que querem acompanhar a sua aprendizagem</SectionTitle>
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
              Adquira hoje a biblioteca completa de <span className="text-brand">100 Projetos de Robótica para Crianças</span>
            </SectionTitle>
            <div className="mx-auto mt-8 max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <img
                src={HERO_IMAGE}
                alt="Mockup da biblioteca digital de projetos de robótica"
                loading="lazy"
                width="1920"
                height="1920"
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground leading-relaxed">
              Receba acesso a uma coleção completa com mais de 100 projetos de robótica organizados para aprender a construir.
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
              <p className="text-lg font-bold text-muted-foreground line-through">29,99 €</p>
              <p className="mt-1 text-sm font-extrabold tracking-widest text-navy">HOJE POR APENAS</p>
              <p className="text-6xl font-black text-brand sm:text-7xl">9,99 €</p>
              <p className="mt-2 text-[10px] text-muted-foreground sm:text-xs">
                Pagamento único em euros.
              </p>
            </div>
            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex w-full items-center justify-center rounded-2xl bg-brand px-8 py-4 text-base font-extrabold tracking-wide text-brand-foreground shadow-lg shadow-brand/25 hover:bg-brand/90 sm:w-auto sm:text-lg"
              >
                QUERO OS MEUS +100 PROJETOS
              </a>
              <p className="text-sm text-muted-foreground">Acesso imediato após a compra.</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-navy/80">
              <span className="flex items-center gap-2"><Lock className="size-4 text-brand" /> Pagamento seguro</span>
              <span className="flex items-center gap-2"><Download className="size-4 text-brand" /> Produto digital</span>
              <span className="flex items-center gap-2"><Zap className="size-4 text-brand" /> Acesso imediato</span>
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
              <h2 className="text-2xl font-black text-navy sm:text-3xl">Experimente sem risco</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Tem 7 dias de garantia para aceder ao material e consultar o conteúdo. Se, dentro desse prazo, decidir que não é para si, poderá solicitar o reembolso de acordo com as condições da plataforma de pagamento.
              </p>
              <p className="mt-3 font-extrabold text-navy">A sua compra está protegida.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <SectionTitle>Perguntas frequentes</SectionTitle>
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
            100 Projetos de Robótica para Crianças
          </p>
          <p className="mt-2 text-sm text-primary-foreground/70">Produto educativo digital.</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold">
            <a href="#" className="text-primary-foreground/80 hover:text-sun">Termos de utilização</a>
            <a href="#" className="text-primary-foreground/80 hover:text-sun">Política de privacidade</a>
            <a href="#" className="text-primary-foreground/80 hover:text-sun">Contacto</a>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/70">© 2026 — Todos os direitos reservados</p>
          <p className="mx-auto mt-4 max-w-xl text-xs text-primary-foreground/50 leading-relaxed">
            Os resultados e a experiência podem variar consoante a idade, o projeto e o acompanhamento de um adulto.
          </p>
        </div>
      </footer>
    </main>
  );
}
