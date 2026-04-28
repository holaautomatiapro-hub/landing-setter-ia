import React, { useState } from 'react';
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Clock,
  Brain,
  MessageSquare,
  BarChart3,
  Users,
  Sparkles,
  CheckCircle2,
  XCircle,
  Headphones,
  Target,
  TrendingUp,
  Dumbbell,
  Apple,
  Activity,
  Calendar,
  Bot,
  Layers,
  Gauge,
  PlayCircle,
  Trophy,
  GraduationCap,
  Settings,
} from 'lucide-react';

const InlineCta: React.FC = () => (
  <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 flex justify-center">
    <a
      href="#activar"
      className="group inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-500 px-8 py-4 rounded-2xl font-black uppercase tracking-wider text-sm shadow-2xl shadow-primary-600/30 transition-all active:scale-95"
    >
      Activar mi Setter IA PRO
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
);

// Vídeos disponibles (sube el archivo a public/testimonios/videos/{n}.mp4 y añade el número aquí)
// Testimonios en vídeo de YouTube (Shorts).
// Para añadir más: { id: 'YOUTUBE_ID', thumbnail?: '/testimonios/videos/X.jpg' }
// Si no especificas thumbnail, se usa el auto-generado por YouTube.
const VIDEO_TESTIMONIALS: { id: string; thumbnail?: string }[] = [
  { id: 'u_pgRdinRe0', thumbnail: '/testimonios/videos/1.jpg' },
  { id: 'QIZInV4t7pc', thumbnail: '/testimonios/videos/2.jpg' },
  { id: 'cjzxovA3VQo', thumbnail: '/testimonios/videos/3.jpg' },
];
const TOTAL_VIDEO_SLOTS = 6;

const LandingSetterIA: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sent'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sent');
  };

  return (
    <div className="min-h-screen bg-background text-slate-100 relative overflow-hidden">
      {/* Animated ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Radial vignette permanente */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(139,92,246,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(99,102,241,0.18),transparent_70%)]" />

        {/* Blobs animados */}
        <div className="absolute top-[10%] -left-40 w-[520px] h-[520px] bg-brand-violet/25 rounded-full blur-[150px] animate-blob-1" />
        <div className="absolute top-[40%] -right-40 w-[560px] h-[560px] bg-primary-600/25 rounded-full blur-[160px] animate-blob-2" />
        <div className="absolute bottom-[5%] left-1/3 w-[500px] h-[500px] bg-brand-violet/20 rounded-full blur-[160px] animate-blob-3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary-500/10 rounded-full blur-[160px] animate-pulse-slow" />

        {/* Grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(80px, 40px) scale(1.1); }
          66% { transform: translate(-40px, 80px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, 60px) scale(1.05); }
          66% { transform: translate(40px, -50px) scale(0.9); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, -80px) scale(1.15); }
        }
        .animate-blob-1 { animation: blob1 22s ease-in-out infinite; }
        .animate-blob-2 { animation: blob2 28s ease-in-out infinite; }
        .animate-blob-3 { animation: blob3 25s ease-in-out infinite; }
      `}</style>

      {/* NAV */}
      <nav className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Automatia" className="w-9 h-9 object-contain filter invert brightness-150" />
          <span className="font-black text-lg tracking-tight premium-gradient-text uppercase">
            Automat<span className="text-primary-500">IA</span> Pro
          </span>
        </div>
        <a
          href="#activar"
          className="hidden md:inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 px-5 py-2.5 rounded-2xl text-sm font-black uppercase tracking-wider transition-all shadow-lg shadow-primary-600/30"
        >
          Quiero mi Setter IA <ArrowRight size={14} />
        </a>
      </nav>

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-8">
          <span className="premium-gradient-text">Setter IA</span>{' '}
          <span className="text-primary-500">PRO</span>
          <br />
          <span className="text-slate-300 text-3xl md:text-5xl font-bold tracking-tight">
            Convierte más, sin estrés.
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-12">
          El primer Setter IA diseñado específicamente por y para{' '}
          <span className="text-white font-bold">Entrenadores, Nutricionistas y Fisioterapeutas Online</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#activar"
            className="group inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-500 px-8 py-4 rounded-2xl font-black uppercase tracking-wider text-sm shadow-2xl shadow-primary-600/30 transition-all active:scale-95"
          >
            Activar mi Setter IA PRO
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </section>

      {/* VIDEO */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-primary-400 font-black text-xs uppercase tracking-[0.4em] mb-4">Descúbrelo en 2 minutos</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter premium-gradient-text">
            Te lo contamos en vídeo
          </h2>
        </div>

        <div className="relative aspect-video rounded-[2rem] overflow-hidden glass-card border border-brand-violet/30 group cursor-pointer">
          {/* Reemplaza este bloque por tu <video> o <iframe> de YouTube/Vimeo */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-600/20 via-brand-violet/10 to-transparent">
            <div className="text-center">
              <PlayCircle size={80} className="text-white/80 group-hover:text-primary-400 transition-colors mx-auto mb-4" strokeWidth={1.5} />
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Tu vídeo aquí</p>
              <p className="text-slate-600 text-xs mt-1">(sustituye este placeholder por tu embed)</p>
            </div>
          </div>
        </div>
      </section>

      <InlineCta />

      {/* PAIN POINTS */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-primary-400 font-black text-xs uppercase tracking-[0.4em] mb-4">El problema real</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter premium-gradient-text">
            Cada lead sin responder<br />es un cliente que pierdes.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: 'Ansiedad al abrir el móvil', text: 'Decenas de mensajes acumulados cada mañana y la sensación de ir siempre tarde.' },
            { title: 'Ghosting constante', text: 'Leads que se enfrían porque tardaste 4 horas en contestar.' },
            { title: 'Contratar y despedir setters', text: 'Formar a alguien nuevo o despedir cada pocos meses es agotador.' },
            { title: 'Rechazo tras rechazo', text: 'Objeciones repetidas que drenan tu energía y tu tasa de cierre.' },
            { title: 'Dependencia del teléfono', text: 'No puedes desconectar ni una tarde sin perder agendas.' },
            { title: 'Sin métricas claras', text: 'No sabes qué mensajes funcionan, qué objeción cierra peor ni dónde estás perdiendo dinero.' },
          ].map((p, i) => (
            <div key={i} className="glass-card p-6 rounded-3xl">
              <XCircle size={20} className="text-rose-400 mb-3" />
              <h4 className="font-black text-base mb-2">{p.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <InlineCta />

      {/* COMPARATIVA */}
      <section id="comparativa" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-primary-400 font-black text-xs uppercase tracking-[0.4em] mb-4">Comparativa</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter premium-gradient-text mb-4">
            Setter genérico vs. Setter IA PRO
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            La mayoría de soluciones del mercado son bots genéricos.
            Nuestro setter se construye específicamente para tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Competencia */}
          <div className="glass-card p-8 rounded-3xl border border-brand-violet/20 opacity-80">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-slate-700/30 flex items-center justify-center">
                <Bot size={20} className="text-slate-400" />
              </div>
              <div>
                <h3 className="font-black text-lg">Setter IA genérico</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Competencia · 297€/mes</p>
              </div>
            </div>
            <ul className="space-y-3 mt-6">
              {[
                'Prompt estándar reutilizado con todos los clientes',
                'Respuestas robóticas que espantan leads',
                'Métricas básicas',
                'Sin gestión centralizada de leads',
                'Soporte por ticket con respuesta en días',
                'Cero comunidad, cero networking',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                  <XCircle size={16} className="text-rose-400 mt-0.5 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nosotros */}
          <div className="relative glass-card p-8 rounded-3xl border border-primary-500/40 shadow-2xl shadow-primary-600/20">
            <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-primary-600 text-[10px] font-black uppercase tracking-widest">
              Recomendado
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-primary-600/20 flex items-center justify-center">
                <Sparkles size={20} className="text-primary-400" />
              </div>
              <div>
                <h3 className="font-black text-lg">Setter IA PRO</h3>
                <p className="text-xs text-primary-400 uppercase tracking-widest font-bold">Servicio personalizado</p>
              </div>
            </div>
            <ul className="space-y-3 mt-6">
              {[
                'Prompt 100% adaptado a tu nicho y tono de marca',
                'Respuestas humanas indistinguibles de un setter real',
                'Panel profesional con métricas en vivo',
                'Gestión integral de todos tus leads desde un solo lugar',
                'Soporte diario — no pasan días, pasan horas',
                'Comunidad privada con otros profesionales del sector',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={16} className="text-brand-emerald mt-0.5 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-xs text-slate-600 mt-8 uppercase tracking-widest font-bold">
          * Comparativa basada en servicios disponibles en el mercado a fecha de hoy.
        </p>
      </section>

      <InlineCta />

      {/* FUNDADORES */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-brand-violet/30">
          <div className="grid md:grid-cols-[380px_1fr] gap-10 items-center">
            {/* Foto */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary-600/20 via-brand-violet/10 to-transparent border border-brand-violet/30">
              <img
                src="/founders.jpg"
                alt="Jose Maria Casamitjana y Andrea Trujillo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texto */}
            <div>
              <p className="text-primary-400 font-black text-xs uppercase tracking-[0.4em] mb-3">Quiénes estamos detrás</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">
                Jose Maria Casamitjana <span className="text-slate-500 font-bold">y</span> Andrea Trujillo
              </h2>
              <p className="text-primary-400 font-black text-sm uppercase tracking-widest mb-6">
                Co-founders de Setter IA PRO
              </p>

              <p className="text-slate-300 leading-relaxed mb-4">
                Somos entrenadores online dedicándonos al mundo online desde 2018. Tenemos nuestro
                propio negocio de entrenamiento online, "Conquista tu SOP", con el que hemos
                facturado más de +250.000€.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Después de haber probado lo que es trabajar con setters humanos y otras empresas de
                setters IA, decidimos crear la nuestra propia junto a un equipo de programadores
                especializados en Inteligencia Artificial.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { n: '+250K€', l: 'Facturados' },
                  { n: '+11 años', l: 'En el sector' },
                  { n: '+400', l: 'Llamadas agendadas' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 rounded-2xl bg-black/30 border border-brand-violet/20">
                    <div className="text-2xl md:text-3xl font-black text-primary-400 tracking-tighter">{s.n}</div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <InlineCta />

      {/* 7 FASES DE CUALIFICACIÓN */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-primary-400 font-black text-xs uppercase tracking-[0.4em] mb-4">Metodología propia</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter premium-gradient-text mb-4">
            7 Fases de Cualificación
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Entrenado con <span className="text-white font-bold">la mejor formación de setting para profesionales del fitness</span>{' '}
            del mercado y validado por más de 500 profesionales de la salud.
          </p>
        </div>

        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-brand-violet/30">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10">
            {[
              'Contacto',
              'Contexto',
              'Dolor',
              'Objetivo',
              'Objeciones',
              'Compromiso',
              'Cierre',
            ].map((phase, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center text-white font-black text-lg shadow-xl shadow-primary-600/30 mb-3">
                  {i + 1}
                </div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-300">{phase}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 pt-6 border-t border-brand-violet/20">
            <GraduationCap size={18} className="text-brand-emerald" />
            <p className="text-xs font-bold text-slate-400 text-center">
              Sistema validado y entrenado con la mejor formación de setting del sector fitness.
            </p>
          </div>
        </div>
      </section>

      <InlineCta />

      {/* QUÉ RECIBES */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-primary-400 font-black text-xs uppercase tracking-[0.4em] mb-4">Qué recibes</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter premium-gradient-text mb-4">
            Todo lo que tu setter humano<br />nunca te dio.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            No es un Excel ni un dashboard genérico. Es <span className="text-white font-bold">nuestra propia app</span>{' '}
            — diseñada para que veas en tiempo real lo que tu Setter IA está haciendo por tu negocio.
          </p>
        </div>

        {/* CAPTURAS DE LA APP */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: BarChart3,
              tag: 'Métricas',
              title: 'Panel de métricas en vivo',
              text: 'Ve en directo cuántos leads has captado, cuántas agendas se han cerrado y dónde está perdiendo o ganando tu negocio. Decisiones basadas en datos, no en intuición.',
              img: '/app/metricas.png',
            },
            {
              icon: Users,
              tag: 'Leads',
              title: 'CRM integrado de leads',
              text: 'Cada conversación queda registrada, etiquetada y clasificada. Sabes el estado de cada lead, sus objeciones y dónde se quedó la conversación. Cero leads perdidos.',
              img: '/app/leads.png',
            },
            {
              icon: Settings,
              tag: 'Configuración',
              title: 'Ajustes a tu medida',
              text: 'Modifica el prompt, los flujos, las objeciones y el tono cuando quieras. Tu Setter IA evoluciona contigo sin depender de nadie. Total autonomía.',
              img: '/app/configuracion.png',
            },
          ].map(({ icon: Icon, tag, title, text, img }, i) => (
            <div key={i} className="glass-card rounded-3xl border border-brand-violet/30 overflow-hidden flex flex-col group hover:border-brand-violet/60 transition-all">
              <div className="relative aspect-[16/10] overflow-hidden bg-black border-b border-brand-violet/20">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 backdrop-blur-md border border-brand-violet/40">
                  <Icon size={12} className="text-white" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">{tag}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="font-black text-lg">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      <InlineCta />

      {/* CÓMO FUNCIONA */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-primary-400 font-black text-xs uppercase tracking-[0.4em] mb-4">Cómo funciona</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter premium-gradient-text">
            De cero a agendando en <span className="text-primary-500">15 días</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Onboarding estratégico', text: 'Sesión profunda para entender tu nicho, metodología, objeciones y objetivos.' },
            { step: '02', title: 'Configuración y entrenamiento', text: 'Construimos tu prompt personalizado, conectamos canales y afinamos el tono.' },
            { step: '03', title: 'Lanzamiento y optimización', text: 'Activamos. Medimos. Ajustamos semanalmente hasta que convierta al máximo.' },
          ].map((s, i) => (
            <div key={i} className="relative glass-card p-8 rounded-3xl">
              <div className="text-6xl font-black text-brand-violet tracking-tighter mb-2 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">{s.step}</div>
              <h4 className="font-black text-xl mb-3">{s.title}</h4>
              <p className="text-slate-400 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="relative z-10 py-24">
        <div className="text-center mb-12 px-6">
          <p className="text-primary-400 font-black text-xs uppercase tracking-[0.4em] mb-4">Resultados reales</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter premium-gradient-text">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* VIDEOS — fila superior */}
        <div className="relative w-full mb-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex gap-5 animate-marquee-slow w-max">
            {[...Array(2)].flatMap((_, rep) =>
              Array.from({ length: TOTAL_VIDEO_SLOTS }).map((_, idx) => {
                const video = VIDEO_TESTIMONIALS[idx];
                const available = !!video;
                const slotNumber = idx + 1;
                return (
                  <div
                    key={`v-${rep}-${slotNumber}`}
                    onClick={() => available && setPlayingVideoId(video!.id)}
                    className={`relative flex-shrink-0 w-[300px] md:w-[340px] h-[380px] rounded-3xl overflow-hidden border bg-gradient-to-br from-primary-600/20 via-brand-violet/10 to-transparent group transition-all ${
                      available
                        ? 'border-brand-violet/60 cursor-pointer hover:scale-[1.02] shadow-lg shadow-brand-violet/20'
                        : 'border-brand-violet/30 cursor-default opacity-70'
                    }`}
                  >
                    {available && (
                      <img
                        src={video!.thumbnail || `https://img.youtube.com/vi/${video!.id}/maxresdefault.jpg`}
                        alt={`Video testimonio ${slotNumber}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          // fallback a hqdefault si no hay maxres ni thumbnail custom
                          if (!video!.thumbnail) {
                            (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${video!.id}/hqdefault.jpg`;
                          }
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-full backdrop-blur-md border border-brand-violet/40 flex items-center justify-center transition-all ${
                        available
                          ? 'bg-brand-violet/30 group-hover:bg-brand-violet/60 group-hover:scale-110'
                          : 'bg-white/10'
                      }`}>
                        <PlayCircle size={44} className="text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <p className="text-white text-xs font-black uppercase tracking-widest opacity-70">
                        {available ? 'Ver testimonio' : 'Próximamente'}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* CAPTURAS — fila inferior, más pequeñas y dirección contraria */}
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex gap-4 animate-marquee-reverse w-max">
            {[...Array(2)].flatMap((_, rep) =>
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div
                  key={`s-${rep}-${i}`}
                  className="testimonio-card group relative flex-shrink-0 w-[180px] md:w-[220px] h-[320px] glass-card rounded-2xl border border-brand-violet/30 p-1.5 overflow-visible cursor-zoom-in"
                >
                  {/* Imagen recortada en estado normal */}
                  <img
                    src={`/testimonios/${i}.jpg`}
                    alt={`Testimonio ${i}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* Overlay fijo centrado en viewport al hacer hover */}
                  <div className="fixed inset-0 z-[100] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="glass-card rounded-3xl border border-primary-500/40 shadow-2xl shadow-primary-600/40 p-2 bg-black max-h-[90vh]">
                      <img
                        src={`/testimonios/${i}.jpg`}
                        alt={`Testimonio ${i} completo`}
                        className="max-h-[86vh] w-auto rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-slow {
            animation: marquee 60s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marqueeReverse 50s linear infinite;
          }
          .animate-marquee-slow:hover,
          .animate-marquee-reverse:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      <InlineCta />

      {/* GARANTÍA */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="glass-card rounded-[2.5rem] p-10 md:p-14 text-center border border-brand-emerald/20 shadow-2xl shadow-brand-emerald/5">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-brand-emerald/10 flex items-center justify-center mb-6">
            <ShieldCheck size={28} className="text-brand-emerald" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">Nuestra garantía</h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Lo optimizamos semanalmente hasta que funcione.{' '}
            <span className="text-brand-emerald font-bold">
              Si al cabo del primer mes no ves resultados medibles, no pagas el siguiente.
            </span>
          </p>
        </div>
      </section>

      <InlineCta />

      {/* FAQ */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <p className="text-primary-400 font-black text-xs uppercase tracking-[0.4em] mb-4">Preguntas frecuentes</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter premium-gradient-text">Resuelve tus dudas</h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: '¿Mi setter IA hablará como yo?',
              a: 'Sí. El prompt se construye analizando tu forma real de comunicar: tus audios, tus chats anteriores, tu metodología y tu tono. Indistinguible de ti en el 95% de los casos.',
            },
            {
              q: '¿Funciona con objeciones típicas de mi nicho?',
              a: 'Sí. Construimos el bloque de objeciones a partir de las reales de entrenadores, nutricionistas o fisioterapeutas: precio, falta de tiempo, resultados previos fallidos, dudas sobre la metodología, etc.',
            },
            {
              q: '¿Necesito tener muchos leads para que merezca la pena?',
              a: 'No. Incluso con 10–20 leads al mes la diferencia de conversión y tiempo ahorrado ya compensa el servicio. A más volumen, más rentable.',
            },
            {
              q: '¿Qué necesito técnicamente?',
              a: 'Solo una cuenta de WhatsApp Business y/o Instagram profesional. Del resto nos ocupamos nosotros durante los 15 días de setup.',
            },
            {
              q: '¿Y si no funciona?',
              a: 'Lo optimizamos semanalmente durante el primer mes. Si no hay mejora medible, no cobras el siguiente mes. Cero riesgo por tu parte.',
            },
          ].map((f, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-bold text-base">{f.q}</span>
                <span className={`text-primary-400 text-2xl font-black transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA / FORMULARIO */}
      <section id="activar" className="relative z-10 max-w-3xl mx-auto px-6 py-24">
        <div className="glass-card rounded-[2.5rem] p-10 md:p-14 border border-primary-500/30 shadow-2xl shadow-primary-600/20">
          <div className="text-center mb-10">
            <Zap size={32} className="text-primary-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-3 premium-gradient-text">
              Activa tu Setter IA PRO
            </h2>
            <p className="text-slate-400">
              Déjanos tus datos y te contactamos en menos de 24 horas para diseñar tu sistema.
            </p>
          </div>

          {formStatus === 'sent' ? (
            <div className="text-center py-10">
              <CheckCircle2 size={48} className="text-brand-emerald mx-auto mb-4" />
              <p className="text-xl font-black mb-2">¡Recibido!</p>
              <p className="text-slate-400">Te contactaremos muy pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre' },
                { label: 'Email', type: 'email', placeholder: 'tu@email.com' },
                { label: 'WhatsApp', type: 'tel', placeholder: '+34 600 000 000' },
                { label: 'Nombre del negocio', type: 'text', placeholder: 'Tu marca o centro' },
                { label: 'Instagram', type: 'text', placeholder: '@tuusuario' },
              ].map((f, i) => (
                <div key={i}>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 block mb-2">
                    {f.label}
                  </label>
                  <input
                    required
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full bg-black/40 border border-brand-violet/20 p-4 rounded-2xl text-white font-bold outline-none focus:border-primary-500/50 transition-all placeholder:text-slate-700"
                  />
                </div>
              ))}

              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 block mb-2">
                  ¿A qué te dedicas?
                </label>
                <select
                  required
                  className="w-full bg-black/40 border border-brand-violet/20 p-4 rounded-2xl text-white font-bold outline-none focus:border-primary-500/50 transition-all"
                >
                  <option value="">Selecciona tu perfil</option>
                  <option>Entrenador personal</option>
                  <option>Nutricionista</option>
                  <option>Fisioterapeuta</option>
                  <option>Otro</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-500 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary-600/30 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                Quiero mi Setter IA PRO <ArrowRight size={16} />
              </button>

              <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest font-bold mt-4">
                Plazas limitadas · Entrega en 15 días
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-brand-violet/20 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Automatia" className="w-7 h-7 object-contain filter invert brightness-150" />
            <span className="text-xs font-black uppercase tracking-widest text-slate-500">
              © 2026 Automatia Pro
            </span>
          </div>
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Aviso Legal</a>
          </div>
        </div>
      </footer>

      {/* MODAL REPRODUCTOR DE VÍDEO (YouTube embed) */}
      {playingVideoId && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setPlayingVideoId(null)}
        >
          <button
            onClick={() => setPlayingVideoId(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-brand-violet/40 flex items-center justify-center text-white text-2xl font-black transition-all z-10"
            aria-label="Cerrar"
          >
            ×
          </button>
          {/* Marco de móvil */}
          <div
            className="relative h-[92vh] aspect-[9/19] bg-gradient-to-b from-zinc-900 via-black to-zinc-900 rounded-[3rem] border-[3px] border-zinc-700/80 shadow-[0_0_60px_rgba(139,92,246,0.35),inset_0_0_2px_rgba(255,255,255,0.1)] p-[10px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botones laterales del móvil */}
            <div className="absolute -left-[3px] top-[18%] w-[3px] h-10 bg-zinc-700 rounded-l" />
            <div className="absolute -left-[3px] top-[26%] w-[3px] h-16 bg-zinc-700 rounded-l" />
            <div className="absolute -left-[3px] top-[34%] w-[3px] h-16 bg-zinc-700 rounded-l" />
            <div className="absolute -right-[3px] top-[24%] w-[3px] h-20 bg-zinc-700 rounded-r" />

            {/* Pantalla */}
            <div className="relative w-full h-full rounded-[2.4rem] overflow-hidden bg-black">
              <iframe
                key={playingVideoId}
                src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title="Testimonio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full block"
              />

              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]" />

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/50 rounded-full z-30" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingSetterIA;
