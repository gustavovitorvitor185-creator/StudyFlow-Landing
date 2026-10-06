import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { motion } from 'motion/react'
import Features from './components/Features'

const ease = [0.22, 1, 0.36, 1] as const

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
}

function App() {
  return (
    <main className="relative isolate min-h-screen overflow-clip bg-[#050816] text-slate-100">
      {/* Fundo atmosférico */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 35, -15, 0],
            y: [0, 25, 45, 0],
            scale: [1, 1.12, 0.96, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-48 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-600/[0.15] blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, -35, 20, 0],
            y: [0, 35, -20, 0],
            scale: [1, 0.92, 1.1, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-48 top-[28%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/[0.10] blur-[120px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.10)_0.7px,transparent_0.7px)] [background-size:28px_28px] opacity-20" />

        <div className="absolute inset-x-0 top-0 h-[700px] bg-gradient-to-b from-blue-950/10 via-transparent to-transparent" />
      </div>


          {/* Cabeçalho premium StudyFlow */}
        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050816]/80 backdrop-blur-2xl">
  {/* Linha de luz inferior */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

  <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-10">
    {/* Logo */}
    <motion.a
      href="#inicio"
      aria-label="StudyFlow - voltar ao início"
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="group relative flex shrink-0 items-center"
    >
      <span className="pointer-events-none absolute -inset-5 rounded-full bg-cyan-400/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <img
        src="/studyflow-logo.png"
        alt="StudyFlow"
        className="relative h-auto w-36 object-contain drop-shadow-[0_0_0px_rgba(34,211,238,0)] transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.18)] sm:w-44 lg:w-48"
      />
    </motion.a>

    {/* Navegação em vidro */}
    <nav
      aria-label="Navegação principal"
      className="hidden items-center gap-1 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-1.5 shadow-inner shadow-white/[0.02] md:flex"
    >
      {[
        { label: 'Início', href: '#inicio' },
        { label: 'Recursos', href: '#recursos' },
        { label: 'Sobre', href: '#sobre' },
      ].map((item) => (
        <motion.a
          key={item.href}
          href={item.href}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="group relative rounded-xl px-4 py-2.5 text-sm font-medium text-slate-400 transition-colors duration-300 hover:bg-white/[0.055] hover:text-white lg:px-5"
        >
          <span className="relative z-10">{item.label}</span>

          <span className="absolute inset-x-4 bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-blue-400 to-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
        </motion.a>
      ))}
    </nav>

    {/* Ação principal */}
    <motion.a
      href="#recursos"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="group relative isolate inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-xl border border-cyan-300/20 bg-gradient-to-br from-blue-500/[0.13] to-cyan-400/[0.06] px-3.5 py-3 text-xs font-semibold text-white shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-cyan-300/40 hover:shadow-[0_8px_30px_rgba(34,211,238,0.10)] sm:px-5 sm:text-sm"
    >
      {/* Reflexo ao passar o mouse */}
      <span className="pointer-events-none absolute inset-y-0 -left-1/2 -z-10 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition-transform duration-700 group-hover:translate-x-[450%]" />

      <span>Conhecer projeto</span>

      <motion.span
        className="flex items-center"
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowRight className="h-4 w-4 text-cyan-300 transition-colors duration-300 group-hover:text-white" />
      </motion.span>
    </motion.a>
  </div>
      </header>

      {/* Apresentação principal */}
      <section
        id="inicio"
        className="relative z-10 mx-auto grid min-h-[75vh] max-w-7xl scroll-mt-24 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.08,
              },
            },
          }}
        >
          <motion.div
            variants={reveal}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-sm text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.04)]"
          >
            <motion.span
              animate={{ rotate: [0, 12, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.span>
            Seu potencial merece organização
          </motion.div>

          <motion.h1
            variants={reveal}
            className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Transforme seus estudos em{' '}
            <span className="text-gradient">
              conquistas reais.
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            Organize sua rotina, mantenha o foco e acompanhe sua evolução.
            Tudo o que você precisa para estudar com mais intenção e
            consistência em um só lugar.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#recursos"
              whileHover={{
                y: -3,
                boxShadow: '0 16px 45px rgba(6,182,212,0.18)',
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-medium text-white shadow-lg shadow-cyan-950/30 transition-shadow duration-300"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Explorar recursos</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            <span className="text-sm text-slate-500">
              Feito para quem quer evoluir.
            </span>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400"
          >
            {['Organização', 'Foco', 'Evolução'].map((item, index) => (
              <motion.span
                key={item}
                whileHover={{ y: -2, color: '#a5f3fc' }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  className={`h-4 w-4 ${
                    index === 1 ? 'text-blue-400' : 'text-cyan-400'
                  }`}
                />
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Prévia ilustrativa do produto */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-lg"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="glass relative rounded-3xl p-5 shadow-2xl shadow-blue-950/30 transition-shadow duration-500 hover:shadow-cyan-950/30 sm:p-7"
          >
            {/* Reflexo decorativo */}
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div>
                <p className="text-sm text-slate-400">
                  Seu espaço de estudos
                </p>
                <h2 className="mt-1 text-xl font-semibold">
                  Visão geral
                </h2>
              </div>

              <motion.div
                animate={{ rotate: [0, 4, 0, -4, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/10 bg-gradient-to-br from-blue-400/15 to-cyan-300/[0.04]"
              >
                <BrainCircuit className="h-6 w-6 text-cyan-300" />
              </motion.div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(34,211,238,0.3)' }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors duration-300"
              >
                <p className="text-sm text-slate-400">Tarefas</p>
                <p className="mt-3 text-3xl font-semibold">12</p>
                <p className="mt-2 text-xs text-cyan-300">
                  Sua rotina organizada
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(96,165,250,0.3)' }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors duration-300"
              >
                <p className="text-sm text-slate-400">Foco</p>
                <p className="mt-3 text-3xl font-semibold">25 min</p>
                <p className="mt-2 text-xs text-blue-300">
                  Um passo de cada vez
                </p>
              </motion.div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">
                  Progresso semanal
                </span>
                <span className="text-sm font-medium text-cyan-300">
                  75%
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.07]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 1.6, delay: 0.8, ease }}
                  className="relative h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"
                >
                  <div className="absolute inset-0 animate-pulse bg-white/20" />
                </motion.div>
              </div>
            </div>

            <motion.div
              whileHover={{ borderColor: 'rgba(34,211,238,0.25)' }}
              className="mt-4 flex items-center gap-3 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.05] p-4 transition-colors duration-300"
            >
              <Sparkles className="h-5 w-5 shrink-0 text-cyan-300" />
              <p className="text-sm leading-6 text-slate-300">
                Pequenos passos, grandes resultados. Continue no seu ritmo.
              </p>
            </motion.div>
          </motion.div>

          {/* Halo externo */}
          <div className="pointer-events-none absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full bg-blue-500/20 blur-[80px]" />
          <div className="pointer-events-none absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-[70px]" />

          {/* Indicador flutuante */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.7, ease }}
            className="absolute right-2 top-16 hidden rounded-xl border border-cyan-300/10 bg-[#0b1225]/95 px-4 py-3 shadow-xl shadow-cyan-950/20 backdrop-blur-xl sm:block lg:right-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Ritmo de estudos</p>
                <p className="text-sm font-medium text-white">Em evolução</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Recursos */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease },
          },
        }}
      >
        <Features />
      </motion.div>

      {/* Sobre o projeto */}
      <section
        id="sobre"
        className="relative mx-auto max-w-7xl scroll-mt-24 px-6 pb-28 pt-10 lg:px-10"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease },
            },
          }}
          className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/[0.08] blur-[90px]"
          />

          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-blue-500/[0.08] blur-[90px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <motion.div
              whileHover={{ scale: 1.06, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-2 shadow-lg shadow-blue-950/20"
            >
              <img
                src="/studyflow-icon.png"
                alt="Símbolo do StudyFlow"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </motion.div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Sobre o projeto
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Aprender também é construir o seu futuro.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              O StudyFlow é um projeto voltado à organização da rotina
              acadêmica, reunindo recursos de planejamento, concentração
              e apoio aos estudos em uma experiência simples e intuitiva.
            </p>

            <motion.a
              href="#inicio"
              whileHover={{ y: -2, x: 2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors duration-300 hover:text-white"
            >
              Voltar ao início
              <ArrowRight className="h-4 w-4 -rotate-45" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Rodapé */}
      <footer className="relative border-t border-white/[0.07] bg-[#050816]/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <a
            href="#inicio"
            aria-label="StudyFlow - voltar ao início"
            className="group inline-flex w-fit items-center"
          >
            <img
              src="/studyflow-logo.png"
              alt="StudyFlow"
              className="h-auto w-32 object-contain transition duration-500 group-hover:scale-[1.04] sm:w-36"
              loading="lazy"
            />
          </a>

          <p className="text-sm text-slate-500">
            Projeto de portfólio desenvolvido com React e TypeScript.
          </p>

          <a
            href="#inicio"
            className="text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App