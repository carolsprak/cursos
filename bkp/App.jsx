import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Clock, Users, FileCheck2, Cpu, Rocket, PlayCircle, ShieldCheck, BookOpenText, MessageSquare, Star, ArrowRight, Layers, Bug, ClipboardCheck, ClipboardList, GitBranch, Laptop, Smartphone, Mail, Phone, MapPin } from "lucide-react";

// === Configurações de vídeo (YouTube) ===
// Substitua a URL abaixo pelo link do seu vídeo do YouTube.
// Ex.: https://www.youtube.com/watch?v=ysz5S6PUM-U ou https://youtu.be/ysz5S6PUM-U
const YOUTUBE_URL = "https://www.youtube.com/watch?v=wsujJqjdJL8";

// Extrai o ID do YouTube de vários formatos de URL
const getYouTubeId = (url) => {
  if (!url) return "";
  try {
  const u = new URL(url);
  if (u.hostname === "youtu.be") return u.pathname.slice(1);
  if (u.searchParams.get("v")) return u.searchParams.get("v");
  const parts = u.pathname.split("/").filter(Boolean);
  const embedIndex = parts.findIndex((p) => p === "embed");
  if (embedIndex !== -1 && parts[embedIndex + 1]) return parts[embedIndex + 1];
  return "";
  } catch {
  return "";
  }
  };
  const YT_ID = getYouTubeId(YOUTUBE_URL);

// === Componentes locais (removem dependência de shadcn/ui) ===
const Button = ({ children, variant = "primary", size = "md", className = "", ...props }) => {
  const base = "inline-flex items-center justify-center font-medium rounded-2xl transition border focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizes = { md: "px-4 py-2 text-sm", lg: "px-5 py-3 text-base" };
  const variants = {
    primary: "bg-insprak-500 text-white hover:bg-insprak-600 border-insprak-500 focus:ring-insprak-300",
    outline: "bg-white text-insprak-900 hover:bg-insprak-50 border-insprak-300 focus:ring-insprak-300",
  };
  return (
    <button className={[base, sizes[size], variants[variant], className].join(" ")} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={["rounded-2xl border bg-white shadow-sm border-insprak-200", className].join(" ")}>{children}</div>
);
const CardHeader = ({ children }) => <div className="p-6 border-b border-insprak-200">{children}</div>;
const CardTitle = ({ children, className = "" }) => <h3 className={["font-semibold text-lg text-insprak-900", className].join(" ")}>{children}</h3>;
const CardContent = ({ children, className = "" }) => <div className={["p-6", className].join(" ")}>{children}</div>;

export default function LandingCursoTesteBasico() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  };

  const Feature = ({ icon: Icon, title, desc }) => (
    <motion.div {...fadeUp} className="flex gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur shadow-sm border border-insprak-200">
      <div className="h-12 w-12 rounded-xl grid place-items-center border border-insprak-200">
        <Icon className="h-6 w-6 text-insprak-600" />
      </div>
      <div>
        <h4 className="font-semibold text-lg text-insprak-900">{title}</h4>
        <p className="text-sm text-insprak-700">{desc}</p>
      </div>
    </motion.div>
  );

  const ModuleItem = ({ title, topics }) => (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {topics.map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-insprak-800">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-insprak-600" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-insprak-50 via-white to-insprak-50 text-insprak-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-insprak-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="font-extrabold text-xl tracking-tight">Simplificando<span className="text-insprak-600"> Teste de Software</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#conteudo" className="hover:opacity-80">Conteúdo</a>
            <a href="#publico" className="hover:opacity-80">Para quem é?</a>
            <a href="#metodologia" className="hover:opacity-80">Metodologia</a>
            <a href="#instrutora" className="hover:opacity-80">Instrutora</a>
            <a href="#matricula" className="hover:opacity-80">Matrícula</a>
          </nav>
          <a href="#matricula" className="md:inline-block hidden"><Button className="rounded-2xl">Inscreva-se</Button></a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(108,99,255,0.06),transparent)]" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 text-5 px-3 py-1 rounded-full border border-insprak-300 mb-4 text-insprak-700">
              <Rocket className="h-5 w-5 text-insprak-600" />
              Comece sua carreira em QA do zero
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">Curso Básico de <span className=" decoration-wavy decoration-insprakAccent">Teste de Software</span></h1>
            <p className="mt-4 text-lg text-insprak-700 max-w-xl">Aprenda os fundamentos de QA, escreva seus primeiros casos de teste, entenda a diferença entre tipos e níveis de testes e valide software com confiança.</p>
             
            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 text-insprak-800"><Clock className="h-6 w-6 text-insprak-600" /> 20h+ de aulas gravadas</div>
              <div className="flex items-center gap-2 text-insprak-800"><GraduationCap className="h-6 w-6 text-insprak-600" /> Certificado</div>
              <div className="flex items-center gap-2 text-insprak-800"><Users className="h-6 w-6 text-insprak-600" /> 5 mentorias ao vivo</div>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative">
<div className="aspect-video rounded-2xl border border-insprak-200 shadow-lg overflow-hidden bg-white">
{YT_ID ? (
    <iframe
      className="h-full w-full"
      src={`https://www.youtube.com/embed/${YT_ID}?rel=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
) : (
<div className="h-full w-full grid place-items-center">
<PlayCircle className="h-16 w-16 text-insprak-600" />
</div>
)}
</div>
<p className="text-6 text-center text-insprak-700 mt-2">Assista uma aula sobre Criar Roteiro de Teste</p>
</motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            <Feature icon={PlayCircle} title="Aulas 100% Gravadas" desc="Assista no seu ritmo e revise quando quiser." />
            <Feature icon={Bug} title="Testes Manuais" desc="Foco em fundamentos e prática guiada." />
            <Feature icon={Layers} title="Scrum" desc="Entenda o papel do QA em times ágeis." />
            <Feature icon={FileCheck2} title="Jira & Confluence" desc="Organize casos, defeitos e documentação." />
            <Feature icon={Users} title="5 Mentorias ao vivo" desc="Encontros estratégicos para tirar dúvidas e praticar." />
            <Feature icon={ShieldCheck} title="Certificado" desc="Conclua o curso e receba seu certificado." />
          </div>
        </div>
      </section>

      {/* Conteúdo do curso */}
      <section id="conteudo" className="py-16 bg-white border-y border-insprak-200">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold">O que você vai aprender?</motion.h2>
           

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ModuleItem title="Fundamentos de QA" topics={[
              "Fundamentos de testes manuais para sistemas web",
              "Tipos x níveis de teste",
              "Ciclo de vida do bug",
              "Bug: severidade vs prioridade",
            ]} />
            <ModuleItem title="Processo e Artefatos" topics={[
              "Ao vivo: Revisar os critérios de aceite e BDD das histórias de usuário.",
              "Roteiros de teste, cenários e casos de teste",
              "Ao vivo: Como criar um roteiro de teste",
              
            ]} />
            <ModuleItem title="Técnicas Essenciais" topics={[
              "Ao vivo: aplicar estratégias em roteiros de teste",
              "Partição de equivalência e análise de valor limite",
              "Estratégias e técnicas de teste",             
              
            ]} />
            <ModuleItem title="Execução e Relato" topics={[
              "Ao vivo: Como executar testes",
              "Como criar relatórios de defeitos claros",
              "Acesso às ferramentas Jira e Confluence",
            ]} />
            <ModuleItem title="Ferramentas e Ágil" topics={[
              "Ao vivo: Documentação de testes no Jira/Confluence",
              "Scrum: papéis e cerimônias na prática",
              "Scrum: planejamento da sprint e retrospectiva",
              
            ]} />
            <ModuleItem title="Carreira e Portfólio" topics={[
              "Portfólio inicial com exercícios do curso",
              "Dicas de currículo e entrevistas",
              "Métricas em Teste de Software",
            ]} />
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section id="publico" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-start">
          <motion.div {...fadeUp} className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold">Para quem é o curso?</h2>
            <p className="text-insprak-700 mt-2">Perfeito para iniciantes e profissionais migrando de outras áreas que querem resultados práticos rapidamente.</p>
          </motion.div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
            <Feature icon={Laptop} title="Quem está começando" desc="Primeiro contato com QA e testes, sem pré-requisitos de programação." />
            <Feature icon={Smartphone} title="Pessoas de produto" desc="PMs, POs, BAs que desejam melhorar a qualidade das entregas." />
            <Feature icon={GitBranch} title="Dev júnior" desc="Desenvolvedores que querem entender como colaborar melhor com QA." />
            <Feature icon={ClipboardCheck} title="Suporte/CS" desc="Profissionais de suporte que lidam com bugs e precisam comunicar melhor." />
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section id="metodologia" className="py-16 bg-white border-y border-insprak-200">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-6 items-start">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold">Metodologia</h2>
            <p className="text-insprak-700 mt-2">Aprendizado ativo, com teoria objetiva e prática guiada a cada módulo. Você sairá com templates e exercícios resolvidos.</p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { icon: ClipboardList, text: "Exercícios corrigidos em cada aula" },
                { icon: BookOpenText, text: "Templates de caso de teste, checklist e relatório" },
                { icon: MessageSquare, text: "Feedback assíncrono" },
                { icon: Bug, text: "Atividades práticas preparando para o mercado" },
              ].map((it, i) => (
                <li key={i} className="flex items-start gap-2 text-insprak-800">
                  <it.icon className="h-5 w-5 mt-0.5 text-insprak-600" /> <span>{it.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp} className="lg:col-span-2 grid md:grid-cols-2 gap-4">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5 text-insprak-600" />Formato</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-insprak-700">
                <p>Formato: aulas gravadas + 5 encontros ao vivo.</p>
                <p>Horários: Segundas das 19:30h às 21:30h (GMT-3 Brazil).</p>
                <p>Carga horária: 5 h/semana dedicadas para atividades e mentorias ao vivo.</p>
                <p>Acesso: 12 meses para rever quando quiser.</p>
                <p>Materiais: PDFs, checklists, planilhas.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-insprak-600" />Certificação</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-insprak-700">
                <p>Certificado de conclusão com verificação por código.</p>
                <p>Critério: 100% de aproveitamento do conteúdo do curso.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Instrutora */}
      <section id="instrutora" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.1fr,2fr] gap-8 items-start">
          <motion.div {...fadeUp} className="rounded-2xl border border-insprak-200 shadow-sm overflow-hidden bg-white">
            <div className="aspect-[4/5] w-full grid place-items-center">
              <img alt="Instrutora" src="./images/annerocha_branco.png" className="h-full w-full object-cover" />
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold">Sobre a instrutora</h2>
            <p className="text-insprak-700 mt-2">Mestre em Ciência da Computação e referência em Qualidade de Software!
Com mais de 15 anos de experiência na área, é certificada pelo BSTQB e autora do renomado livro "Simplificando Teste de Software". Desde 2012, compartilha seu conhecimento ensinando em cursos de pós-graduação e formações para carreiras em TI.

Ao longo de sua trajetória, acumulou uma rica experiência em desenvolvimento de software para Web e Mobile, utilizando tecnologias como React, Flutter, Ruby on Rails, Java, HTML, CSS e JavaScript.

Sua grande paixão é ensinar. Ela se dedica a compartilhar não apenas conhecimento teórico, mas também valiosas experiências práticas, ajudando tanto iniciantes quanto profissionais que buscam se especializar em Testes de Software.

Ela acredita firmemente que investir no aprendizado sobre Qualidade de Software transforma carreiras, abre novas oportunidades e otimiza a rotina de trabalho no universo da TI.</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Feature icon={Star} title="Experiência prática" desc="Testes em produtos web e mobile. Domina tecnologias como React, Flutter, Ruby on Rails, Java, HTML, CSS e JavaScript." />
              <Feature icon={Cpu} title="Visão de carreira" desc="Mentoria sobre primeiros passos, currículo e portfólio." />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 bg-white border-y border-insprak-200">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold">O que alunos dizem?</motion.h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {["Conteúdo claro e prático, saí com um plano de estudos.", "Me ajudou a entrar como QA júnior em 2 meses.", "Gostei dos templates e dos exercícios corrigidos."].map((q, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="pt-6">
                  <p className="text-sm text-insprak-800">“{q}”</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-insprak-200" />
                    <div>
                      <p className="text-sm font-semibold text-insprak-900">Aluno {i + 1}</p>
                      <p className="text-xs text-insprak-700">QA Júnior</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preço & Matrícula */}
      <section id="matricula" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-6 items-start">
          <motion.div {...fadeUp} className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold">Garanta sua vaga</h2>
            <p className="text-insprak-700 mt-2">Turmas com vagas limitadas para acompanhamento próximo. Parcelamento disponível no cartão.</p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Plano Essencial</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="text-3xl font-black text-insprak-900">R$ 497</div>
                  <ul className="space-y-2">
                    {["Acesso às aulas gravadas", "Materiais e templates", "Certificado"].map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-insprak-800"><CheckCircle2 className="h-5 w-5 mt-0.5 text-insprak-600" /> {t}</li>
                    ))}
                  </ul>
                  <a href="#checkout-essencial"><Button className="w-full rounded-2xl mt-2">Comprar agora</Button></a>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-insprak-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">Plano Pro <span className="text-xs px-2 py-1 rounded-full border border-insprak-300 text-insprak-700">Mais popular</span></CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="text-3xl font-black text-insprak-900">R$ 697</div>
                  <ul className="space-y-2">
                    {["Tudo do Essencial", "2 encontros ao vivo (dúvidas)", "Correção do desafio final"].map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-insprak-800"><CheckCircle2 className="h-5 w-5 mt-0.5 text-insprak-600" /> {t}</li>
                    ))}
                  </ul>
                  <a href="#checkout-pro"><Button className="w-full rounded-2xl mt-2">Escolher Pro</Button></a>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div {...fadeUp} className="bg-white rounded-2xl border border-insprak-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold">Perguntas frequentes</h3>
            <div className="mt-4 space-y-4 text-sm">
              <details className="group border border-insprak-200 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Preciso saber programar?</summary>
                <p className="mt-2 text-insprak-700">Não. O curso é introdutório e foca em testes manuais e fundamentos.</p>
              </details>
              <details className="group border border-insprak-200 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Como recebo o certificado?</summary>
                <p className="mt-2 text-insprak-700">Ao concluir o desafio final e atingir 70% de aproveitamento, você recebe um certificado com verificação por código.</p>
              </details>
              <details className="group border border-insprak-200 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Por quanto tempo tenho acesso?</summary>
                <p className="mt-2 text-insprak-700">12 meses a partir da compra.</p>
              </details>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-12 border-t border-insprak-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-bold text-lg text-insprak-900">Simplificando<b className="text-insprak-600"> Teste de Software</b></p>
            <p className="text-insprak-700 mt-2">Formação introdutória em QA para quem quer dar os primeiros passos com segurança.</p>
          </div>          
          <div>
            <p className="font-semibold text-insprak-900">Links</p>
            <ul className="mt-2 space-y-2">
              <li><a href="#conteudo" className="hover:underline">Conteúdo</a></li>
              <li><a href="#metodologia" className="hover:underline">Metodologia</a></li>
              <li><a href="#matricula" className="hover:underline">Matrícula</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-8 text-xs text-insprak-700">© {new Date().getFullYear()} Simplificando Teste de Software — Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}
