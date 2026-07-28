import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Clock, Users, FileCheck2, Cpu, Rocket, PlayCircle, ShieldCheck, BookOpenText, MessageSquare, Star, ArrowRight, Layers, Bug, ClipboardCheck, ClipboardList, GitBranch, Laptop, Smartphone, Mail, Phone, MapPin } from "lucide-react";
import bookCover from "./assets/frente_livro_simplificando_teste.png"; 
import mentora from "./assets/annerocha_branco.png"; 

const BOOK_TITLE = "Livro Simplificando Teste de Software";
const BOOK_SUBTITLE = "Conceitos essenciais e exemplos sobre Teste de Software";
const BOOK_LINK = "https://www.amazon.com.br/dp/B0CBDXJB7B";         // ⟵ troque pelo link real (ex.: Amazon/Hotmart)
const BOOK_SAMPLE_LINK = "https://www.amazon.com.br/Simplificando-Teste-Software-Caroline-Rocha/dp/6500722159/ref=cm_cr_arp_d_product_top?ie=UTF8&asin=B0CBDXJB7B&revisionId=eb94ca7b&format=3&depth=1";  // ⟵ troque pelo PDF/landing da amostra
const BOOK_COVER_URL = bookCover;           // ⟵ troque pela imagem da capa
const MENTORA = mentora; 
 
// === Depoimentos (edite os nomes/roles/quotes aqui) ===
const TESTIMONIALS = [
  {
  name: "R. Queiroz",
  role: "Aluna do curso",
  quote: "O Conteúdo, muito bem explicado e as tarefas com a participação de toda a turma, simulando o ambiente real de trabalho. Fui promovida para QA Pleno.",
  },
  {
  name: "J. Ferreira",
  role: "Aluna do curso",
  quote: "Me ajudou a migrar de carreira como QA júnior. Comecei do zero na área de TI hoje já participo de reuniões de refinamento, crio o BDD das histórias junto com o time e realizo inspeção na documentação.",
  },
  {
  name: "T. Alves",
  role: "Aluno do curso",
  quote: "Foi um curso muito completo. Agregou muito no meu aprendizado. Professora Anne Rocha sabe conduzir as aulas de forma que prende a atenção e desperta interesse pelo conteúdo.",
  },
  ];

// === Configurações de vídeo (YouTube) ===
// Substitua a URL abaixo pelo link do seu vídeo do YouTube.
// Ex.: https://www.youtube.com/watch?v=ysz5S6PUM-U ou https://youtu.be/ysz5S6PUM-U
const YOUTUBE_URL = "https://www.youtube.com/watch?v=9UGdpJqywAc";

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
            <a href="#instrutora" className="hover:opacity-80">Mentora</a>
            <a href="#matricula" className="hover:opacity-80">Matrícula</a>
          </nav>
          <a href="#matricula" className="md:inline-block hidden"><Button className="rounded-2xl">Quero evoluir minha carreira</Button></a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(108,99,255,0.06),transparent)]" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 text-5 px-3 py-1 rounded-full border border-insprak-300 mb-4 text-insprak-700">
              <Rocket className="h-5 w-5 text-insprak-600" />
              Curso de formação em TI
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
             <span className=" decoration-wavy decoration-insprakAccent">Evolua sua Carreira como QA</span></h1>
            <p className="mt-4 text-lg text-insprak-700 max-w-xl">Pare de apenas executar testes. 
             Os melhores QAs não são reconhecidos porque encontram mais bugs. 
             São reconhecidos porque ajudam o time a construir software com menos defeitos desde a especificação.</p>          
             <p className="mt-4 text-lg text-insprak-700 max-w-xl">Aprenda a influenciar a qualidade do software antes da primeira linha de código. 
             Um treinamento para QAs que desejam evoluir da execução de testes para a definição de estratégias, 
             revisão de especificações e tomada de decisões baseada em métricas.</p>
             
            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 text-insprak-800"><GraduationCap className="h-6 w-6 text-insprak-600" /> Certificado</div>
              <div className="flex items-center gap-2 text-insprak-800"><Users className="h-6 w-6 text-insprak-600" /> 5 mentorias ao vivo</div>
              <div className="flex items-center gap-2 text-insprak-800"><Clock className="h-6 w-6 text-insprak-600" /> Aulas gravadas</div>
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
<p className="text-6 text-center text-insprak-700 mt-2">Curso para evolução na carreira como QA</p>
</motion.div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4">
      <a href="#matricula"><Button className="w-full rounded-2xl mt-2">Quero evoluir minha carreira</Button></a>
      </div>
 
      {/* Benefícios */}
      <section id="beneficios" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            <Feature icon={PlayCircle} title="Shift Left na prática" desc="Aprenda revisão de especificações com Inspeção PBR para evoluir para um QA mais estratégico." />
            <Feature icon={Bug} title="Testes Manuais" desc="Roteiros de testes estratégicos com cenários mais críticos" />
            <Feature icon={Layers} title="Scrum, Jira & Confluence" desc="Entenda o papel do QA em processos ágeis." /> 
          </div>
        </div>
      </section>

      {/* Conteúdo do curso */}
      <section id="conteudo" className="py-16 bg-white border-y border-insprak-200">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold">O que você vai aprender?</motion.h2>
           

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
           
            <ModuleItem title="Encontrando defeitos antes do código" topics={[ 
              "Ao vivo: Revisar os critérios de aceite e BDD das user stories.",
              "Ao vivo: Revisão de Especificações usando Inspeção PBR",
              "Ao vivo: Identificar requisitos ambíguos ou inconsistentes",
              "Ao vivo: Descobrir cenários esquecidos",
              "Aprimorar a qualidade ainda durante o Refinamento",
            ]} />
           <ModuleItem title="Decisões baseadas em Métricas" topics={[
              "Ao vivo: Exemplos práticos de Métricas em Teste de Software",
              "Ao vivo: Tomadas de decisão com base nas Métricas",
              "Ao vivo: Priorização baseada em risco",
              "Ao vivo: Pensamento crítico aplicado à qualidade",
            ]} />
           <ModuleItem title="Pensamento Estratégico em QA" topics={[
              "Fundamentos de testes manuais para sistemas web",
              "Tipos x níveis de teste",
              "Ciclo de vida do bug",
              "Histórias de usuário, critérios de aceite",
              "Requisitos funcionais, não-funcionais e regras de negócio",
            ]} /> 
            <ModuleItem title="Construção inteligente de cenários" topics={[
              "Ao vivo: Roteiros de teste, cenários e casos de teste que realmente encontram bugs", 
              "Ao vivo: Técnicas de roteiro de teste baseadas em diagramas BPMN e Máquina de estados",      
              "Ao vivo: Partição de equivalência e análise de valor limite",
            ]} />
            <ModuleItem title="Classificação e priorização de defeitos" topics={[
              "Ao vivo: Como executar testes",
              "Ao vivo: Como criar relatórios de defeitos detalhados",
              "Ao vivo: Como classificar e priorizar os bugs",
              "Ao vivo: Acesso às ferramentas Jira e Confluence",
            ]} />
            <ModuleItem title="Processos Ágeis e Carreira" topics={[
              "Ao vivo: Documentação de testes no Jira/Confluence",
              "Ao vivo: Scrum: papéis e cerimônias na prática",
              "Ao vivo: Scrum: planejamento da sprint e retrospectiva",
              "Ao vivo: Dicas para evoluir na carreira",
            ]} />
            
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section id="publico" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-start">
          <motion.div {...fadeUp} className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold">Para quem é o curso?</h2>
            <p className="text-insprak-700 mt-2">Perfeito tanto para iniciantes quanto profissionais que já atuam em QA e desejam evoluir tecnicamente.</p>
          </motion.div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
            <Feature icon={Laptop} title="Profissionais de QA" desc="Quer evoluir a carreira para um QA Estratégico essencial nos projetos" /> 
            <Feature icon={GitBranch} title="QA Iniciante" desc="Para aprimorar o pensamento estratégico e se destacar na carreira." />
            <Feature icon={ClipboardCheck} title="Profissionais de TI" desc="Profissionais de TI que trabalham com engenharia de software" />
            <Feature icon={Smartphone} title="Pessoas de produto" desc="Profissionais de TI, POs, Agilistas, UX Design que desejam melhorar a qualidade das entregas." />
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section id="metodologia" className="py-16 bg-white border-y border-insprak-200">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-6 items-start">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold">Metodologia</h2>
            <p className="text-insprak-700 mt-2">Aprendizado ativo, com teoria objetiva e prática guiada a cada módulo.</p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { icon: Clock, text: "Segundas das 19:30h às 21:30h (GMT-3 Brazil)" },
                { icon: ClipboardList, text: "Exercícios corrigidos ao vivo" },
                { icon: BookOpenText, text: "Templates de caso de teste, checklist e relatório" },
                { icon: MessageSquare, text: "Interação com outros alunos" },
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
                <CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5 text-insprak-600" />O que você será capaz de fazer?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-insprak-700">
                <p>Encontrar problemas antes do desenvolvimento</p> 
                <p>Melhorar histórias de usuário</p>
                <p>Participar de refinamentos com olhar mais crítico</p>
                <p>Criar estratégias de teste para diferentes cenários</p>
                <p>Utilizar métricas para tomada de decisão</p>
                <p>Gerar mais valor para Product Owner e Desenvolvedores</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5 text-insprak-600" />Formato</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-insprak-700">
                <p>Aulas gravadas + 5 encontros ao vivo.</p> 
                <p>Carga horária: 5 h/sem dedicadas para atividades</p>
                <p>Acesso: Vitalício na plataforma do Hotmart para rever quando quiser.</p>
                <p>Materiais: PDFs, checklists, planilhas.</p>
                <p>Certificado de conclusão com verificação por QRCode.</p>
                <p>Critério para certificado: 100% das atividades do curso.</p>
              </CardContent>
            </Card>             
          </motion.div>
        </div>
      </section>

     {/* Diferencial do curso */}
      <section id="publico" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-start">
          <motion.div {...fadeUp} className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold">Qual o diferencial do curso?</h2>
            <p className="text-insprak-700 mt-2">Além de ...<br/>
              ✔ Criar cenários de teste<br/>
              ✔ Executar testes<br/>
              ✔ Reportar defeitos no Jira<br/>
              Neste curso você aprenderá também....</p>
          </motion.div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
            <Feature icon={Laptop} title="Shift left na prática" desc="Utilizar a inspeção PBR para identificar insconsistências na especificação" /> 
            <Feature icon={GitBranch} title="Estratégias de teste" desc="Construção inteligente de cenários de teste" />
            <Feature icon={ClipboardCheck} title="Pensamento crítico" desc="Participar de refinamentos de histórias com mais precisão" />
            <Feature icon={Smartphone} title="Métricas de teste" desc="Decisões estratégicas baseadas em Métricas" />
          </div>
        </div>
      </section>

      {/* Instrutora */}
      <section id="instrutora" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.1fr,2fr] gap-8 items-start">
          <motion.div {...fadeUp} className="rounded-2xl border border-insprak-200 shadow-sm overflow-hidden bg-white">
            <div className="aspect-[4/5] w-full grid place-items-center">
              <img alt="Instrutora" src={MENTORA} className="h-full w-full object-cover" />
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold">Sobre a Mentora</h2>
            <p className="text-insprak-700 mt-2">Tech Lead QA. Mestre em Ciência da Computação e referência em Qualidade de Software, com mais de 18 anos de carreira, certificação BSTQB (CTFL-AT) e autora do livro “Simplificando Teste de Software”. Desde 2012, ensina em pós-graduação e formações em TI, unindo teoria e prática em Web e Mobile (React, Flutter, Rails, Java, HTML/CSS/JS). Apaixonada por ensinar, ajuda iniciantes e profissionais a evoluírem em Testes de Software, acreditando que qualidade transforma carreiras e rotinas na TI.</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Feature icon={Star} title="Experiência prática" desc="Testes em sistemas web, API e mobile. Domina tecnologias como React, Flutter, Ruby on Rails, Java, HTML, CSS e JavaScript." />
              <Feature icon={Cpu} title="Visão de carreira" desc="Percebi que muitos profissionais aprendem a executar testes, mas poucos aprendem a construir uma cultura de qualidade desde o início do projeto." />
            </div>
          </motion.div>
        </div>
      </section>
     
      
     
      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 bg-white border-y border-insprak-200">
      <div className="max-w-6xl mx-auto px-4">
      <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold">O que alunos dizem?</motion.h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
      {TESTIMONIALS.map((t, i) => (
      <Card key={i} className="rounded-2xl">
      <CardContent className="pt-6">
      <p className="text-sm text-insprak-800">“{t.quote}”</p>
      <div className="mt-4 flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-insprak-200 grid place-items-center text-insprak-900 text-xs font-semibold">
      {t.name.split(' ').map((n) => n[0]).join('').slice(0,2)}
      </div>
      <div>
      <p className="text-sm font-semibold text-insprak-900">{t.name}</p>
      <p className="text-xs text-insprak-700">{t.role}</p>
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
            <h2 className="text-2xl md:text-3xl font-bold">Pense como um QA Estratégico</h2> 
            <p className="text-insprak-700 mt-2"><b>Antes do curso</b></p>
            <p className="text-insprak-700 mt-2">"Vou esperar a funcionalidade ficar pronta para testar."</p> 
            <p className="text-insprak-700 mt-2">"A quantidade de bugs só aumenta e o time nem está corrigindo."</p>
            <p className="text-insprak-700 mt-2"><b>Depois do curso</b></p>            
            <p className="text-insprak-700 mt-2">"Já encontrei três inconsistências na especificação antes do desenvolvimento começar."</p>
            <p className="text-insprak-700 mt-2">"Quase não temos incidentes em produção, a equipe agora tem o foco em qualidade."</p>
            <div className="grid md:grid-cols-1 gap-6 mt-6">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Torne-se o profissional que agrega mais valor para o time antes mesmo da implementação começar.</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="text-3xl font-black text-insprak-900">R$ 149</div>
                  <ul className="space-y-2">
                    {["Acesso vitalício", "5 mentorias ao vivo", "Exercícios práticos em projeto real no Jira", "Certificado"].map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-insprak-800"><CheckCircle2 className="h-5 w-5 mt-0.5 text-insprak-600" /> {t}</li>
                    ))}
                  </ul>
                  <a href="https://pay.hotmart.com/D93730200N"><Button className="w-full rounded-2xl mt-2">Quero evoluir minha carreira</Button></a>
                </CardContent>
              </Card>

               
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div {...fadeUp} className="bg-white rounded-2xl border border-insprak-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold">Perguntas frequentes</h3>
            <div className="mt-4 space-y-4 text-sm">
             <details className="group border border-insprak-200 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Esse curso serve para quem já trabalha como QA?</summary>
                <p className="mt-2 text-insprak-700">Sim. As atividades práticas exigem uma análise mais crítica do negócio. 
                 Apesar de abordar fundamentos importantes, o maior diferencial do treinamento está nas práticas de revisão de especificações usando Inspeção PBR, 
                 métricas de teste e construção de estratégias de qualidade, conteúdos normalmente pouco explorados em cursos introdutórios.
                </p>
              </details>
              <details className="group border border-insprak-200 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Estou em transição de carreira</summary>
                <p className="mt-2 text-insprak-700">O curso foi pensado para atender pessoas que querem evoluir como QA ou iniciantes do zero, pois teremos acompanhamento semanal em grupo.</p>
              </details>
              <details className="group border border-insprak-200 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Qual o horário das mentorias ao vivo?</summary>
                <p className="mt-2 text-insprak-700"> Segundas das 19:30h às 21:30h <br/>(GMT-3 Brazil)</p>
              </details>
              <details className="group border border-insprak-200 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Preciso saber programar?</summary>
                <p className="mt-2 text-insprak-700">Não. O curso além de introdutório com foco em testes manuais, também aborda técnicas e estratégias de teste com base em métricas.</p>
              </details>
              <details className="group border border-insprak-200 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Este curso ensina automação de teste?</summary>
                <p className="mt-2 text-insprak-700">Não. O foco está em desenvolver capacidade analítica, revisão de especificações, métricas e estratégias de teste.
                </p>
              </details>
             
              <details className="group border border-insprak-200 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Não consigo assistir ao vivo</summary>
                <p className="mt-2 text-insprak-700">Caso não possa participar da mentoria ao vivo, você terá acesso à gravação da aula da sua turma.</p>
              </details>
              <details className="group border border-insprak-200 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Como recebo o certificado?</summary>
                <p className="mt-2 text-insprak-700">Ao concluir o desafio final e atingir 100% das atividades, você recebe um certificado com verificação por código.</p>
              </details>
              <details className="group border border-insprak-200 rounded-xl p-4">
                <summary className="font-medium cursor-pointer">Por quanto tempo tenho acesso?</summary>
                <p className="mt-2 text-insprak-700">Vitalício na plataforma do Hotmart.</p>
              </details>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Livro: Simplificando Teste */}
      <section id="livro" className="py-16 bg-white border-y border-insprak-200">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.1fr,2fr] gap-8 items-center">
      <div className="rounded-2xl overflow-hidden border border-insprak-200 shadow-sm bg-insprak-50">
      <div className="aspect-[3/4] w-full">
      <img src={BOOK_COVER_URL} alt="Capa do livro Simplificando Teste de Software" className="h-full w-full object-cover" />
      </div>
      </div>
      <div>
      <h2 className="text-2xl md:text-3xl font-black text-insprak-900">{BOOK_TITLE}</h2>
      <p className="mt-2 text-insprak-700">{BOOK_SUBTITLE}</p>


      <ul className="mt-6 space-y-3 text-sm">
      <li className="flex items-start gap-2 text-insprak-800"><CheckCircle2 className="h-5 w-5 mt-0.5 text-insprak-600" /> Linguagem simples e direta, ideal para iniciantes e pessoas migrando de área.</li>
      <li className="flex items-start gap-2 text-insprak-800"><CheckCircle2 className="h-5 w-5 mt-0.5 text-insprak-600" /> Fundamentos: tipos e níveis de teste, plano estratégico de teste, relatório de defeitos.</li>
       
      </ul>


      <div className="mt-6 flex flex-wrap items-center gap-3">
      <a href={BOOK_LINK} target="_blank" rel="noreferrer">
      <Button size="lg" className="rounded-2xl">Adquirir o livro</Button>
      </a>
      <a href={BOOK_SAMPLE_LINK} target="_blank" rel="noreferrer">
      <Button variant="outline" size="lg" className="rounded-2xl">Ver amostra</Button>
      </a>
      </div>


      <p className="mt-4 text-xs text-insprak-600">* Links externos abrem em nova aba.</p>
      </div>
      </div>
      </section>

      {/* Rodapé */}
      <footer className="py-12 border-t border-insprak-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-bold text-lg text-insprak-900">Simplificando<b className="text-insprak-600"> Teste de Software</b></p>
            <p className="text-insprak-700 mt-2">Formação para QA para quem quer evoluir na carreira.</p>
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
