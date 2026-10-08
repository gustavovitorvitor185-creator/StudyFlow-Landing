
import { useState } from 'react'
import type { MouseEvent } from 'react'
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Features from './components/Features'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { label: 'Início', id: 'inicio' },
    { label: 'Recursos', id: 'recursos' },
    { label: 'Sobre', id: 'sobre' },
  ]

  const navigateToSection = (sectionId: string) => {
    setMobileMenuOpen(false)

    const section = document.getElementById(sectionId)

    if (!section) {
      console.error(`Seção não encontrada: #${sectionId}`)
      return
    }

    if (window.location.hash !== `#${sectionId}`) {
      window.history.pushState(null, '', `#${sectionId}`)
    }

    const header = document.querySelector('header')
    const headerHeight = header?.getBoundingClientRect().height ?? 76

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY

    const targetPosition = Math.max(
      0,
      sectionTop - headerHeight - 12,
    )

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    })
  }

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault()
    navigateToSection(sectionId)
  }

  return (
    <main className="relative min-h-screen overflow-clip bg-[#050816] text-slate-100">
      {/* Efeitos de fundo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[8%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.08] blur-[140px]" />
        <div className="absolute right-[-10%] top-[24%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.055] blur-[150px]" />
        <div className="absolute left-[35%] top-[70%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.035] blur-[130px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050816]/90 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="flex h-[76px] items-center justify-between gap-4">
            {/* Logo */}
            <motion.a
              href="#inicio"
              aria-label="StudyFlow - voltar ao início"
              onClick={(event) => handleNavigation(event, 'inicio')}
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex shrink-0 items-center"
            >
              <span className="pointer-events-none absolute -inset-5 rounded-full bg-cyan-400/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <img
                src="/studyflow-logo.png"
                alt="StudyFlow"
                className="relative h-auto w-32 object-contain transition-all duration-500 sm:w-40 lg:w-48"
              />
            </motion.a>

            {/* Navegação desktop */}
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-1 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-1.5 shadow-inner shadow-white/[0.02] md:flex"
            >
              {navigation.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) =>
                    handleNavigation(event, item.id)
                  }
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative rounded-xl px-4 py-2.5 text-sm font-medium text-slate-400 transition-colors duration-300 hover:bg-white/[0.055] hover:text-white lg:px-5"
                >
                  <span className="relative z-10">
                    {item.label}
                  </span>

                  <span className="absolute inset-x-4 bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-blue-400 to-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
                </motion.a>
              ))}
            </nav>

            {/* CTA desktop */}
            <div className="hidden md:block">
              <motion.a
                href="#recursos"
                onClick={(event) =>
                  handleNavigation(event, 'recursos')
                }
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative isolate inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-xl border border-cyan-300/20 bg-gradient-to-br from-blue-500/[0.13] to-cyan-400/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300/40 hover:shadow-[0_8px_30px_rgba(34,211,238,0.10)]"
              >
                <span className="pointer-events-none absolute inset-y-0 -left-1/2 -z-10 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition-transform duration-700 group-hover:translate-x-[450%]" />

                <span>Conhecer projeto</span>

                <ArrowRight className="h-4 w-4 text-cyan-300 transition-colors group-hover:text-white" />
              </motion.a>
            </div>

            {/* Botão mobile */}
            <motion.button
              type="button"
              aria-label={
                mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() =>
                setMobileMenuOpen((open) => !open)
              }
              whileTap={{ scale: 0.92 }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-slate-300 transition-all duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/[0.06] hover:text-cyan-200 md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Menu mobile */}
          <AnimatePresence initial={false}>
            {mobileMenuOpen && (
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden md:hidden"
              >
                <nav
                  aria-label="Navegação mobile"
                  className="mb-4 rounded-2xl border border-white/[0.08] bg-[#0a1020]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
                >
                  {navigation.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 + index * 0.05,
                        duration: 0.2,
                      }}
                      onClick={(event) =>
                        handleNavigation(event, item.id)
                      }
                      className="group flex min-h-14 items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-slate-300 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
                    >
                      <span>{item.label}</span>

                      <ArrowRight className="h-4 w-4 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300" />
                    </motion.a>
                  ))}

                  <div className="my-2 h-px bg-white/[0.06]" />

                  <motion.a
                    href="#recursos"
                    onClick={(event) =>
                      handleNavigation(event, 'recursos')
                    }
                    className="group flex min-h-14 items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-gradient-to-r from-blue-500/[0.14] to-cyan-400/[0.08] px-4 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-400/[0.10]"
                  >
                    <span>Conhecer projeto</span>

                    <ArrowRight className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Início */}
      <section id="inicio" className="relative scroll-mt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-24 sm:px-6 md:pb-32 md:pt-32 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-10">
          {/* Texto principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.04] px-4 py-2 text-sm font-medium text-cyan-200"
            >
              <Sparkles className="h-4 w-4" />
              <span>Seu potencial merece organização</span>
            </motion.div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-100 sm:text-6xl lg:text-[76px]">
              Transforme seus
              <br />
              estudos em
              <br />
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="text-gradient"
              >
                conquistas reais.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg"
            >
              Uma plataforma criada para organizar sua rotina,
              acompanhar seu progresso e transformar seus estudos
              em uma experiência mais inteligente e produtiva.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#recursos"
                onClick={(event) =>
                  handleNavigation(event, 'recursos')
                }
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_10px_35px_rgba(14,165,233,0.18)] transition-shadow duration-300 hover:shadow-[0_15px_45px_rgba(14,165,233,0.28)]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">Explorar recursos</span>

                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <a
                href="#sobre"
                onClick={(event) =>
                  handleNavigation(event, 'sobre')
                }
                className="rounded-xl border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                Conhecer o StudyFlow
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500"
            >
              {['Organização', 'Foco', 'Evolução'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mockup da plataforma */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-blue-500/[0.06] blur-3xl" />

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative rounded-[28px] border border-white/[0.10] bg-white/[0.035] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7"
            >
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                <div>
                  <p className="text-sm text-slate-500">
                    Seu espaço de estudos
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-white">
                    Visão geral
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.06] text-cyan-300">
                  <BrainCircuit className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 transition-colors hover:border-cyan-300/15"
                >
                  <p className="text-sm text-slate-400">Tarefas</p>
                  <p className="mt-4 text-4xl font-semibold text-white">
                    12
                  </p>
                  <p className="mt-3 text-sm text-cyan-300">
                    Sua rotina organizada
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 transition-colors hover:border-cyan-300/15"
                >
                  <p className="text-sm text-slate-400">Foco</p>
                  <p className="mt-4 text-4xl font-semibold text-white">
                    25 min
                  </p>
                  <p className="mt-3 text-sm text-sky-300">
                    Um passo de cada vez
                  </p>
                </motion.div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-400">
                      Progresso semanal
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Evoluindo constantemente
                    </p>
                  </div>

                  <span className="text-2xl font-semibold text-cyan-300">
                    75%
                  </span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{
                      delay: 1,
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Recursos */}
      <div className="relative border-t border-white/[0.05]">
        <Features />
      </div>

      {/* Sobre */}
      <section
        id="sobre"
        className="relative scroll-mt-24 border-t border-white/[0.05]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 md:py-32 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Sobre o projeto
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Tecnologia para
                <span className="text-gradient">
                  {' '}estudar melhor.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="space-y-5 text-base leading-8 text-slate-400 sm:text-lg"
            >
              <p>
                O StudyFlow nasceu com uma ideia simples:
                transformar a organização dos estudos em uma
                experiência mais intuitiva, visual e inteligente.
              </p>

              <p>
                O projeto reúne ferramentas para planejamento,
                acompanhamento de tarefas, calendário, foco,
                materiais e inteligência artificial em um único
                ambiente.
              </p>

              <p>
                Mais do que uma interface bonita, o objetivo é
                mostrar como tecnologia e educação podem trabalhar
                juntas para criar uma rotina de estudos mais
                consistente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section
        id="cta-final"
        className="relative isolate overflow-hidden border-t border-white/[0.06]"
      >
        {/* Efeitos de fundo */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.12] blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/[0.06] blur-[100px]" />
        </div>

        <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-6 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-4 py-2 text-sm font-medium text-cyan-200">
              <Sparkles className="h-4 w-4" />
              <span>Seu próximo passo começa aqui</span>
            </div>

            <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              Organize seus estudos.
              <br />
              <span className="text-gradient">
                Evolua todos os dias.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Conheça as ferramentas do StudyFlow e descubra
              como planejamento, foco e tecnologia podem
              transformar sua rotina de estudos.
            </p>

            {/* Botões da CTA */}
            <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <motion.a
                href="#recursos"
                onClick={(event) =>
                  handleNavigation(event, 'recursos')
                }
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_10px_35px_rgba(14,165,233,0.18)] transition-shadow duration-300 hover:shadow-[0_15px_45px_rgba(14,165,233,0.3)]"
              >
                <span>Explorar recursos</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#inicio"
                onClick={(event) =>
                  handleNavigation(event, 'inicio')
                }
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-300/25 hover:bg-white/[0.06] hover:text-white"
              >
                Voltar ao início
              </motion.a>
            </div>

            {/* Diferenciais */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
              {['Organização', 'Foco', 'Tecnologia'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <a
            href="#inicio"
            onClick={(event) =>
              handleNavigation(event, 'inicio')
            }
            className="flex items-center gap-3"
            aria-label="StudyFlow - voltar ao início"
          >
            <img
              src="/studyflow-icon.png"
              alt=""
              className="h-8 w-8 object-contain"
            />

            <div>
              <p className="text-sm font-semibold text-white">
                StudyFlow
              </p>
              <p className="text-xs text-slate-500">
                Organização. Foco. Evolução.
              </p>
            </div>
          </a>

          <p className="text-xs text-slate-600">
            Projeto desenvolvido para demonstrar tecnologia,
            design e inovação.
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App