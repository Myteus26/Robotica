import { useEffect, useMemo, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Download,
  FileImage,
  FolderOpen,
  Gift,
  Image as ImageIcon,
  Mail,
  Monitor,
  Plus,
  ShieldCheck,
  Star,
} from "lucide-react";

const ASSETS = {
  principal: "/manus-storage/principal-ptpt_892a8840.png",
  completeLarge: "/manus-storage/plan-completo-960-ptpt_8470e7fb.png",
  basic: "/manus-storage/plan-basico-ptpt_59a26f7d.png",
  complete: "/manus-storage/plan-completo-ptpt_c8f10c0c.png",
  bonus1: "/manus-storage/bono-01-ptpt_ae8f06fa.png",
  bonus2: "/manus-storage/bono-02-ptpt_9c6eb626.png",
  bonus3: "/manus-storage/bono-03-ptpt_cabd016c.png",
  guarantee: "/manus-storage/garantia-ptpt_48694e45.png",
  payments: "/manus-storage/formas-pago_dfabec22.webp",
};

const previews = [
  "/manus-storage/previa-01-ptpt_3e949f0c.png",
  "/manus-storage/previa-02-ptpt_9db7ce21.png",
  "/manus-storage/previa-03-ptpt_7095a502.png",
  "/manus-storage/previa-04-ptpt_c14ab698.png",
  "/manus-storage/previa-05-ptpt_1e025757.png",
];

const usagePhotos = [
  "/manus-storage/uso-01_8a1c4a95.webp",
  "/manus-storage/uso-02_53f65288.webp",
  "/manus-storage/uso-03_2871aa3d.webp",
  "/manus-storage/uso-04_55134281.webp",
  "/manus-storage/uso-05_3d0f57ad.webp",
];

const CHECKOUT_COMPLETE =
  "https://pay.hotmart.com/S107172851F?off=nf4omupe&checkoutMode=10&utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&xcod=&sck=";
const CHECKOUT_UPGRADE =
  "https://pay.hotmart.com/S107172851F?off=uc94w62z&checkoutMode=10&utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&xcod=&sck=";
const CHECKOUT_BASIC =
  "https://pay.hotmart.com/Y107179794S?checkoutMode=10&utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&xcod=&sck=";

const heroBullets = [
  "50 fichas técnicas ilustradas para consulta rápida",
  "Patologias organizadas por sinais, causas e nível de atenção",
  "Comparações entre problemas visualmente semelhantes",
  "Orientações de prevenção e possíveis formas de correção",
  "Material digital para telemóvel, tablet e computador",
];

const benefits = [
  "Deixe de confundir fissuras superficiais com sinais que exigem mais atenção",
  "Compreenda por que motivo as infiltrações podem reaparecer mesmo depois de uma reparação",
  "Identifique os sinais que devem ser observados durante uma inspeção",
  "Distinga problemas visualmente semelhantes",
  "Relacione manifestações com possíveis erros de projeto ou execução",
  "Explique as suas observações a clientes e equipas com maior clareza",
];

const targetCards = [
  ["Reconhecer patologias com maior facilidade", "Utilize exemplos ilustrados para identificar fissuras, infiltrações, manchas, destacamentos e outras manifestações frequentes."],
  ["Compreender as causas mais prováveis", "Relacione cada sinal observado com possíveis falhas de projeto, execução, materiais, utilização ou manutenção."],
  ["Realizar visitas técnicas mais organizadas", "Consulte fichas rápidas e descubra que pontos merecem observação, registo e investigação complementar."],
  ["Evitar correções apenas superficiais", "Compreenda por que razão tratar apenas o sintoma pode fazer com que o problema regresse em pouco tempo."],
  ["Explicar problemas com maior clareza", "Utilize uma sequência lógica para apresentar manifestações, hipóteses, riscos e recomendações iniciais."],
  ["Trabalhar com mais segurança e menos improvisação", "Tenha um material técnico de apoio para consultar durante estudos, remodelações, inspeções e acompanhamento de obras."],
];

const receiveItems = [
  "50 fichas técnicas ilustradas de patologias em edifícios",
  "Fotografias e ilustrações com marcação dos sinais importantes",
  "Identificação das manifestações visíveis",
  "Explicação das causas mais prováveis",
  "Classificação do nível de atenção necessário",
  "Comparações entre patologias visualmente semelhantes",
  "Orientações de prevenção e boas práticas construtivas",
  "Sugestões de investigação para confirmar a origem da falha",
  "Possíveis alternativas de correção e intervenção",
];

const bonuses = [
  {
    number: "BÓNUS #1",
    image: ASSETS.bonus1,
    alt: "Mockup do bónus 1: Checklist Visual de Inspeção de Edifícios",
    title: "Checklist Visual de Inspeção de Edifícios",
    description: "Checklist organizada com os principais pontos a observar em fachadas, coberturas, zonas húmidas, estruturas, pavimentos, paredes, caixilharias e sistemas de impermeabilização.",
    benefit: "Realize visitas técnicas com maior organização e reduza o risco de esquecer sinais importantes durante a inspeção.",
    value: "7,90 €",
  },
  {
    number: "BÓNUS #2",
    image: ASSETS.bonus2,
    alt: "Mockup do bónus 2: Modelo de Relatório de Inspeção",
    title: "Modelo de Relatório de Inspeção",
    description: "Documento editável para organizar a identificação do imóvel, as manifestações observadas, os registos fotográficos, as hipóteses, as recomendações e as limitações da análise.",
    benefit: "Registe a informação de forma mais clara, normalizada e profissional.",
    value: "9,90 €",
  },
  {
    number: "BÓNUS #3",
    image: ASSETS.bonus3,
    alt: "Mockup do bónus 3: Catálogo Visual de Erros de Execução",
    title: "Catálogo Visual de Erros de Execução",
    description: "Material ilustrado com falhas frequentes na betonagem, revestimentos, impermeabilização, colocação de peças, juntas, acabamentos e instalações.",
    benefit: "Reconheça erros que podem gerar retrabalho, infiltrações, fissuras, destacamentos e outros problemas nos edifícios.",
    value: "12,90 €",
  },
];

const fullPlanItems = [
  "Atlas Visual de Patologias Construtivas",
  "50 fichas técnicas ilustradas",
  "Fotografias e ilustrações com marcações",
  "Sinais visíveis de cada patologia",
  "Causas mais prováveis",
  "Classificação do nível de atenção",
  "Comparações entre problemas semelhantes",
  "Orientações de prevenção",
];

const testimonials = [
  {
    quote: "Gostei muito da forma como as patologias estão organizadas. As imagens e as comparações tornam a consulta muito mais rápida durante uma inspeção.",
    author: "Diego R.",
    role: "Engenheiro civil recém-licenciado",
  },
  {
    quote: "O material ajudou-me a distinguir problemas que antes pareciam iguais. Agora é mais fácil perceber o que observar antes de recomendar qualquer intervenção.",
    author: "Valeria M.",
    role: "Arquiteta e responsável pelo acompanhamento de remodelações",
  },
  {
    quote: "Utilizo o atlas para estudar e também como apoio nas visitas técnicas. As fichas são objetivas e facilitam bastante a organização da análise.",
    author: "Andrés C.",
    role: "Estudante de engenharia civil",
  },
];

const faqs = [
  ["Este material é adequado para principiantes?", "Sim. O conteúdo foi organizado de forma visual e objetiva para ajudar estudantes, técnicos e profissionais recém-licenciados."],
  ["O acesso é imediato?", "Sim. Após a confirmação do pagamento, o acesso é disponibilizado automaticamente na área de membros."],
  ["Posso aceder através do telemóvel?", "Sim. Pode consultar os materiais através do telemóvel, tablet ou computador."],
  ["Os materiais podem ser impressos?", "Sim. Os ficheiros podem ser descarregados e utilizados em formato digital ou impresso."],
  ["Em que opção estão incluídos os bónus?", "Os três bónus exclusivos estão incluídos no Plano Completo."],
  ["Onde ficam disponíveis os materiais?", "Todo o conteúdo fica organizado numa área de membros para facilitar o acesso e a transferência."],
  ["Como funciona a garantia de 15 dias?", "Se, nos 15 dias posteriores à compra, considerar que o material não é adequado para si, poderá solicitar o reembolso sem procedimentos complicados e sem explicação obrigatória."],
  ["Quais são as formas de pagamento?", "O pagamento é efetuado numa única prestação, através dos métodos disponíveis na página de finalização da compra."],
  ["Preciso de conhecimentos avançados de engenharia?", "Não. O material utiliza uma linguagem técnica simplificada e pode ser utilizado tanto por principiantes como por profissionais experientes."],
  ["Posso utilizar o atlas durante visitas técnicas?", "Sim. O conteúdo foi organizado para uma consulta rápida através do telemóvel durante estudos, inspeções, obras e remodelações."],
  ["O material apresenta soluções definitivas para cada patologia?", "O atlas apresenta possíveis causas, medidas preventivas, percursos de investigação e alternativas de intervenção. A definição de uma solução exige a análise do caso concreto e, quando necessário, inspeções mais aprofundadas, ensaios, cálculos ou a avaliação de um profissional legalmente habilitado."],
  ["O Atlas substitui um parecer técnico?", "Não. O material serve de apoio à identificação inicial, ao estudo e à organização da investigação. Não substitui pareceres, peritagens, ensaios ou avaliações técnicas obrigatórias."],
];

function CheckMark() {
  return (
    <span className="check" aria-hidden="true">
      <Check />
    </span>
  );
}

function CTA({ children, className = "", href = "#oferta" }: { children: React.ReactNode; className?: string; href?: string }) {
  return (
    <a href={href} className={`btn ${className}`.trim()}>
      {children} <span className="arr">→</span>
    </a>
  );
}

function AppImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} loading="lazy" decoding="async" className={className} />;
}

export default function Home() {
  const [currentDate, setCurrentDate] = useState("");
  const [materialReverse, setMaterialReverse] = useState(false);
  const [materialFast, setMaterialFast] = useState(false);
  const [photoReverse, setPhotoReverse] = useState(false);
  const [photoFast, setPhotoFast] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [upgradeOpen, setUpgradeOpen] = useState(false);

  const repeatedPreviews = useMemo(() => Array.from({ length: 8 }, () => previews).flat(), []);
  const repeatedPhotos = useMemo(() => Array.from({ length: 8 }, () => usagePhotos).flat(), []);

  useEffect(() => {
    const updateDate = () => setCurrentDate(new Date().toLocaleDateString("pt-PT"));
    updateDate();
    const interval = window.setInterval(updateDate, 60000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => setTestimonial((value) => (value + 1) % testimonials.length), 6500);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("upgrade-open", upgradeOpen);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setUpgradeOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("upgrade-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [upgradeOpen]);

  const accelerate = (kind: "material" | "photo", reverse: boolean) => {
    if (kind === "material") {
      setMaterialReverse(reverse);
      setMaterialFast(true);
      window.setTimeout(() => setMaterialFast(false), 1800);
    } else {
      setPhotoReverse(reverse);
      setPhotoFast(true);
      window.setTimeout(() => setPhotoFast(false), 1800);
    }
  };

  return (
    <>
      <div className="offerbar">⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE <b>{currentDate}</b></div>

      <header className="hero">
        <div className="wrap hero-grid">
          <span className="badge-pill in" data-reveal><span className="dot" /> Atlas Visual de Patologias Construtivas</span>
          <h1 className="in" data-reveal>
            Reconheça as principais <span style={{ color: "var(--teal)" }}>patologias em edifícios</span> com <span className="hl">50 fichas técnicas ilustradas.</span>
          </h1>
          <div className="hero-art in" data-reveal>
            <img src={ASSETS.principal} width="1299" height="1211" alt="Atlas Visual de Patologias Construtivas: capa e fichas técnicas ilustradas" loading="eager" fetchPriority="high" decoding="async" />
          </div>
          <div className="hero-copy" data-reveal>
            <p className="lead">Consulte um material técnico, visual e organizado para identificar manifestações patológicas, distinguir problemas semelhantes e realizar análises iniciais com maior segurança durante estudos, obras, remodelações e visitas técnicas.</p>
            <ul className="bullets">
              {heroBullets.map((item) => <li key={item}><CheckMark /> {item}</li>)}
            </ul>
            <CTA className="btn--lg btn-pulse">ACEDER AGORA</CTA>
            <div className="delivery">
              <span className="ico">
                <span><Mail /></span>
                <span><Monitor /></span>
              </span>
              Recebe tudo de imediato no seu correio eletrónico e na área de membros
            </div>
          </div>
        </div>
      </header>

      <section className="sec sec--cream2">
        <div className="wrap">
          <div className="sec-head" data-reveal><h2>Veja os materiais que vai receber</h2></div>
          <div className="marquee" data-reveal>
            <div className={`marquee-track ${materialReverse ? "is-reverse" : ""} ${materialFast ? "is-fast" : ""}`}>
              {repeatedPreviews.map((src, index) => (
                <article className="gal-card" key={`${src}-${index}`} aria-hidden={index >= 20}>
                  <div className="ph"><AppImage src={src} alt={index < 20 ? "Ficha técnica ilustrada do Atlas Visual de Patologias Construtivas" : ""} /></div>
                </article>
              ))}
            </div>
          </div>
          <div className="marquee-ctrl" aria-label="Controlos do carrossel de materiais">
            <button className="navbtn" type="button" onClick={() => accelerate("material", true)} aria-label="Ver materiais anteriores"><ChevronLeft /></button>
            <button className="navbtn" type="button" onClick={() => accelerate("material", false)} aria-label="Ver materiais seguintes"><ChevronRight /></button>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head" data-reveal><h2>Os materiais do Atlas Visual de Patologias Construtivas incluem:</h2></div>
          <div className="feat-grid">
            {[
              [FileImage, "Fichas técnicas ilustradas", "Cada patologia é apresentada com imagens, sinais visíveis e informação organizada para facilitar a consulta."],
              [ClipboardCheck, "Diagnóstico visual orientado", "Setas, marcações e comparações ajudam-no a observar os detalhes mais importantes de cada manifestação."],
              [ImageIcon, "Causas e prevenção", "Compreenda os erros de projeto, execução, utilização ou manutenção que podem estar relacionados com o problema."],
              [FolderOpen, "Consulta rápida", "Escolha a patologia, abra a ficha e consulte-a no telemóvel durante estudos, obras ou visitas técnicas."],
            ].map(([Icon, title, text]) => {
              const FeatureIcon = Icon as typeof FileImage;
              return (
                <article className="feat-card" data-reveal key={String(title)}>
                  <div className="feat-ico"><FeatureIcon /></div>
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </article>
              );
            })}
          </div>
          <div className="feat-close" data-reveal>
            <p className="big">Analise patologias com maior clareza e segurança</p>
            <CTA>Quero o Atlas Visual</CTA>
          </div>
        </div>
      </section>

      <section className="sec sec--cream2">
        <div className="wrap">
          <div className="benefit-block" data-reveal>
            <h2>Com o nosso atlas visual, reconhece manifestações importantes, compreende as suas possíveis causas e organiza uma análise inicial com maior confiança.</h2>
            <ul className="blist">{benefits.map((item) => <li key={item}><CheckMark /> {item}</li>)}</ul>
            <CTA>QUERO ACEDER AGORA</CTA>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="marquee photo-marquee" data-reveal>
            <div className={`marquee-track ${photoReverse ? "is-reverse" : ""} ${photoFast ? "is-fast" : ""}`}>
              {repeatedPhotos.map((src, index) => (
                <div className="photo-card" key={`${src}-${index}`} aria-hidden={index >= 20}>
                  <div className="ph"><AppImage src={src} alt={index < 20 ? "Atlas Visual de Patologias Construtivas em utilização durante uma visita técnica" : ""} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="marquee-ctrl" aria-label="Controlos do carrossel de fotografias">
            <button className="navbtn" type="button" onClick={() => accelerate("photo", true)} aria-label="Ver fotografias anteriores"><ChevronLeft /></button>
            <button className="navbtn" type="button" onClick={() => accelerate("photo", false)} aria-label="Ver fotografias seguintes"><ChevronRight /></button>
          </div>
        </div>
      </section>

      <section className="urgency">
        <div className="wrap" data-reveal>
          <h2>Quantas vezes encontrou um problema na obra e ficou com dúvidas sobre a sua verdadeira origem?</h2>
          <p>Aproveite a oferta por tempo limitado</p>
          <CTA>Quero aceder agora</CTA>
        </div>
      </section>

      <section className="sec sec--cream2">
        <div className="wrap">
          <div className="sec-head" data-reveal><h2>Este material é ideal para si se pretende</h2></div>
          <div className="whom-grid">
            {targetCards.map(([title, text]) => (
              <article className="whom-card" data-reveal key={title}>
                <CheckMark /><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head" data-reveal><h2>Tudo o que vai receber</h2></div>
          <div className="receive-card" data-reveal>
            <div className="art"><AppImage src={ASSETS.completeLarge} alt="Mockup do Plano Completo com o Atlas Visual e os três bónus" /></div>
            <div className="recv-copy">
              <span className="flash-badge">⚡ ACESSO IMEDIATO</span>
              <p className="sub">Tudo foi organizado para que seja simples e fácil de utilizar.</p>
              <p className="txt">Escolha o material e poderá começar nesse mesmo momento.</p>
              <ul className="recv-list">{receiveItems.map((item) => <li key={item}><CheckMark /> {item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--cream2">
        <div className="wrap">
          <div className="bonus-tease" data-reveal>
            <div className="t1">E NÃO FICA POR AQUI...</div>
            <div className="t2">TAMBÉM VAI RECEBER</div>
            <div className="bonus-flag">🎁 3 BÓNUS EXCLUSIVOS</div>
          </div>
          <div className="bonus-grid">
            {bonuses.map((bonus) => (
              <article className="bonus-card" data-reveal key={bonus.number}>
                <div className="top"><span className="bonus-num">{bonus.number}</span><AppImage src={bonus.image} alt={bonus.alt} /></div>
                <div className="body">
                  <h3>{bonus.title}</h3>
                  <p className="desc">{bonus.description}</p>
                  <ul><li><CheckMark /> {bonus.benefit}</li></ul>
                  <div className="value-tag"><span className="strike">Valor: {bonus.value}</span> <span className="free">GRÁTIS</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--plans-cream" id="seccion-oferta">
        <div className="wrap">
          <div className="sec-head">
            <span className="urg-badge" id="oferta">⏰ ÚLTIMA OPORTUNIDADE — A OFERTA TERMINA HOJE</span>
            <h2 style={{ marginTop: 18 }}>Escolha a opção ideal para si</h2>
          </div>
          <div className="plans-grid">
            <article className="plan">
              <h3>PLANO BÁSICO</h3>
              <div className="art"><AppImage src={ASSETS.basic} alt="Mockup do Plano Básico: Atlas Visual com 50 fichas técnicas" /></div>
              <p className="plan-sub">Recebe:</p>
              <ul>
                <li><CheckMark /> Atlas Visual de Patologias Construtivas</li>
                <li><CheckMark /> 50 fichas técnicas ilustradas</li>
              </ul>
              <p className="price-old">De <s>24,90 €</s> por:</p>
              <p className="price-now">9,90 €</p>
              <p className="price-inst">Pagamento único</p>
              <span className="save-chip">Poupa 15,00 €</span>
              <button type="button" className="btn btn--ghost btn--block" onClick={() => setUpgradeOpen(true)}>QUERO APENAS O BÁSICO</button>
              <div className="social-arrow" data-reveal>
                <span className="pill"><b>92%</b><span className="copy">das pessoas aproveitam a oferta completa</span></span>
                <ChevronRight className="down" />
              </div>
            </article>

            <article className="plan plan--feature">
              <span className="mini-urg">⚡ MAIS VENDIDO</span>
              <h3>PLANO COMPLETO</h3>
              <div className="plan-flag3x">⚡ 3x mais conteúdos</div>
              <div className="art"><AppImage src={ASSETS.complete} alt="Mockup do Plano Completo: Atlas Visual e os três bónus" /></div>
              <ul>
                {fullPlanItems.map((item) => <li key={item}><CheckMark /> {item}</li>)}
                <li className="bonus-line"><span className="bonus-icon"><Gift /></span><span><strong>Bónus #1</strong> — Checklist Visual de Inspeção de Edifícios</span></li>
                <li className="bonus-line"><span className="bonus-icon"><Gift /></span><span><strong>Bónus #2</strong> — Modelo de Relatório de Inspeção</span></li>
                <li className="bonus-line"><span className="bonus-icon"><Gift /></span><span><strong>Bónus #3</strong> — Catálogo Visual de Erros de Execução</span></li>
              </ul>
              <p className="price-old">De <s>55,60 €</s> por:</p>
              <p className="price-now">17,90 €</p>
              <p className="price-inst">Pagamento único</p>
              <span className="save-chip">Poupa 37,70 €</span>
              <CTA className="btn--block btn-pulse" href={CHECKOUT_COMPLETE}>Quero o plano completo</CTA>
              <div className="pay-seals">
                <p className="pay-seals__title"><ShieldCheck /> Pagamento seguro processado pela Hotmart</p>
                <AppImage className="pay-seals__logos" src={ASSETS.payments} alt="Hotmart, Visa, Mastercard, PayPal e métodos de pagamento locais" />
                <p className="pay-seals__note">Cartões de crédito e débito, PayPal e métodos de pagamento locais disponíveis consoante o seu país.</p>
              </div>
            </article>
          </div>
          <div className="plans-close" data-reveal>
            <p>Uma única observação correta pode evitar uma intervenção inadequada.</p>
            <p>Tudo o resto se traduz em maior clareza, organização e segurança para conduzir a sua análise inicial.</p>
          </div>
        </div>
      </section>

      <section className="sec sec--cream2">
        <div className="wrap">
          <div className="sec-head" data-reveal><h2>Veja o que dizem os nossos clientes</h2></div>
          <div className="testi-shell" data-reveal>
            <div className="testi-viewport">
              <div className="testi-track" style={{ transform: `translateX(-${testimonial * 100}%)` }}>
                {testimonials.map((item) => (
                  <div className="testi-card" key={item.author}><div className="testi-inner">
                    <div className="stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} fill="currentColor" />)}</div>
                    <p className="testi-quote">“{item.quote}”</p>
                    <p className="testi-author">{item.author}</p>
                    <p className="testi-role">{item.role}</p>
                  </div></div>
                ))}
              </div>
            </div>
            <div className="testi-ctrl">
              <button className="navbtn" type="button" onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Testemunho anterior"><ChevronLeft /></button>
              <div className="dots-nav">{testimonials.map((_, index) => <button key={index} type="button" aria-label={`Testemunho ${index + 1}`} className={testimonial === index ? "on" : ""} onClick={() => setTestimonial(index)} />)}</div>
              <button className="navbtn" type="button" onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Testemunho seguinte"><ChevronRight /></button>
            </div>
            <div style={{ textAlign: "center", marginTop: 34 }}><CTA>QUERO O MEU ACESSO AGORA</CTA></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="guarantee" data-reveal>
            <div className="seal"><AppImage className="seal-img" src={ASSETS.guarantee} alt="Selo de garantia incondicional de 15 dias" /></div>
            <div className="guarantee-copy">
              <h2>Tem 15 dias de garantia no Atlas Visual de Patologias Construtivas.</h2>
              <p>Isto significa que, dentro desse prazo, se considerar que:</p>
              <ul className="gl"><li>o material não se adapta à sua rotina</li><li>o produto não o ajuda a atingir o seu objetivo</li><li>ou simplesmente não pretende continuar com o produto</li></ul>
              <p className="emph">👉 poderá solicitar o reembolso.</p>
              <div className="stack"><span>15 dias completos.</span><span>Sem procedimentos complicados.</span><span>Sem explicação obrigatória.</span></div>
              <p>Esta garantia existe porque acreditamos no valor prático do material.</p>
              <p>Não está a comprar uma promessa. Está a comprar um material organizado para facilitar a sua rotina.</p>
              <p>Se não fizer sentido para si, o risco fica totalmente do nosso lado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--cream2">
        <div className="wrap">
          <div className="sec-head" data-reveal><h2>Como funciona o acesso<br />(passo a passo)</h2></div>
          <div className="steps-grid">
            <article className="step-card" data-reveal><div className="step-num">1</div><h3>Conclua a sua compra</h3><p>Após o pagamento, o seu acesso é disponibilizado automaticamente.</p></article>
            <article className="step-card" data-reveal><div className="step-num">2</div><h3>Entre na área de membros</h3><p>Recebe por correio eletrónico os dados para aceder à área de membros, onde todo o material fica organizado.</p></article>
            <article className="step-card" data-reveal><div className="step-num">3</div><h3>Descarregue os materiais</h3><ul>{["Fichas técnicas ilustradas", "Checklist visual de inspeção", "Modelo editável de relatório", "Catálogo visual de erros de execução"].map((item) => <li key={item}><CheckMark /> {item}</li>)}</ul></article>
            <article className="step-card" data-reveal><div className="step-num">4</div><h3>Comece a utilizá-lo</h3><ul><li><CheckMark /> Escolha a manifestação encontrada, abra a ficha correspondente e consulte os sinais, as possíveis causas, o nível de atenção, a prevenção e as alternativas de investigação.</li></ul></article>
          </div>
          <div style={{ textAlign: "center", marginTop: 42 }} data-reveal><CTA>QUERO O MEU ACESSO AGORA</CTA></div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head" data-reveal><h2>Perguntas frequentes</h2></div>
          <div className="faq" data-reveal>
            {faqs.map(([question, answer], index) => {
              const open = openFaq === index;
              return (
                <div className={`faq-item ${open ? "open" : ""}`} key={question}>
                  <button className="faq-q" type="button" aria-expanded={open} onClick={() => setOpenFaq(open ? null : index)}>
                    {question}<span className="tog"><Plus /></span>
                  </button>
                  <div className="faq-a" style={{ maxHeight: open ? 500 : 0 }}><p>{answer}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="footer"><div className="wrap">
        <p className="cr">Copyright © 2026 | Todos os direitos reservados.</p>
        <p>Este site não está afiliado ao Facebook™, Instagram™, Google™ nem a qualquer outra plataforma mencionada.</p>
        <p>É proibida a reprodução total ou parcial deste material sem autorização.</p>
      </div></footer>

      {!upgradeOpen ? null : (
        <div className="upgrade-modal" onMouseDown={(event) => { if (event.target === event.currentTarget) setUpgradeOpen(false); }}>
          <div className="upgrade-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="upgrade-title" tabIndex={-1}>
            <div className="upgrade-modal__notice"><strong>Ainda vai a tempo de escolher o plano completo</strong><span>Upgrade especial para sair do plano básico e desbloquear tudo por <b>13,90 €</b> nesta página.</span></div>
            <div className="upgrade-modal__card">
              <button className="upgrade-modal__close" type="button" onClick={() => setUpgradeOpen(false)} aria-label="Fechar a oferta">×</button>
              <div className="upgrade-modal__top"><span className="upgrade-modal__eyebrow">upgrade Atlas de Patologias</span><span className="upgrade-modal__best">melhor escolha</span></div>
              <div className="upgrade-modal__grid">
                <div className="upgrade-modal__content">
                  <h3 id="upgrade-title">Leve o Plano Completo por 13,90 €.</h3>
                  <p className="upgrade-modal__lead">Mantém o Atlas Visual com 50 fichas técnicas e desbloqueia todos os bónus.</p>
                  <ul className="upgrade-modal__list">
                    <li><span className="check">✓</span><span>Checklist Visual de Inspeção de Edifícios</span></li>
                    <li><span className="check">✓</span><span>Modelo de Relatório de Inspeção</span></li>
                    <li><span className="check">✓</span><span>Catálogo Visual de Erros de Execução</span></li>
                  </ul>
                  <div className="upgrade-modal__plus">Apenas mais 4,00 € do que o plano básico.</div>
                </div>
                <div className="upgrade-modal__price"><small>Plano completo normal: <s>17,90 €</s></small><span className="now">13,90 €</span><span className="note">Acesso imediato na área de membros</span></div>
              </div>
              <div className="upgrade-modal__actions">
                <a className="btn btn--block btn-pulse upgrade-modal__accept" href={CHECKOUT_UPGRADE}>SIM, QUERO O COMPLETO POR 13,90 €</a>
                <a className="upgrade-modal__decline" href={CHECKOUT_BASIC}>Não, prefiro ficar apenas com o plano básico de 9,90 €</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
