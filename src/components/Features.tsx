import {
  ArrowUpRight,
  BrainCircuit,
  CalendarDays,
  Check,
  Clock3,
  Layers3,
  ListTodo,
  Sparkles,
} from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

const features = [
  {
    number: '01',
    title: 'Tarefas inteligentes',
    description:
      'Organize suas atividades, defina prioridades e transforme grandes objetivos em pequenas conquistas diárias.',
    icon: ListTodo,
    accent: 'from-blue-500/[0.16] via-blue-500/[0.04] to-transparent',
    iconColor: 'text-blue-300',
    iconBg: 'bg-blue-400/[0.10]',
    glow: 'rgba(59,130,246,0.14)',
    tag: 'Organização',
    preview: (
      <div className="space-y-3">
        {[
          { title: 'Revisar matemática', done: true },
          { title: 'Estudar programação', done: false },
          { title: 'Praticar redação', done: false },
        ].map((task) => (
          <div
            key={task.title}
            className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-slate-950/40 p-3 transition-colors duration-300 hover:border-blue-300/20 hover:bg-blue-400/[0.03]"
          >
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                task.done
                  ? 'border-cyan-400 bg-cyan-400 text-slate-950'
                  : 'border-slate-600'
              }`}
            >
              {task.done && <Check size={13} strokeWidth={3} />}
            </div>

            <span
              className={`text-sm ${
                task.done
                  ? 'text-slate-500 line-through'
                  : 'text-slate-200'
              }`}
            >
              {task.title}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '02',
    title: 'Calendário de estudos',
    description:
      'Visualize seus compromissos e distribua melhor seu tempo para estudar com planejamento e tranquilidade.',
    icon: CalendarDays,
    accent: 'from-cyan-500/[0.16] via-cyan-500/[0.04] to-transparent',
    iconColor: 'text-cyan-300',
    iconBg: 'bg-cyan-400/[0.10]',
    glow: 'rgba(34,211,238,0.12)',
    tag: 'Planejamento',
    preview: (
      <div className="grid grid-cols-7 gap-2">
        {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((day, index) => (
          <span
            key={`${day}-${index}`}
            className="pb-2 text-center text-xs text-slate-500"
          >
            {day}
          </span>
        ))}

        {Array.from({ length: 14 }, (_, index) => index + 12).map((day) => (
          <div
            key={day}
            className={`flex aspect-square items-center justify-center rounded-lg text-xs transition-all duration-300 hover:scale-105 ${
              day === 18
                ? 'bg-gradient-to-br from-cyan-300 to-blue-400 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20'
                : [14, 16, 21, 24].includes(day)
                  ? 'border border-blue-400/20 bg-blue-400/[0.08] text-blue-200 hover:border-cyan-300/40'
                  : 'border border-transparent bg-white/[0.025] text-slate-400 hover:border-white/10 hover:bg-white/[0.06]'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '03',
    title: 'Modo foco',
    description:
      'Use sessões de concentração inspiradas na técnica Pomodoro para estudar com mais intenção e fazer pausas.',
    icon: Clock3,
    accent: 'from-sky-500/[0.16] via-sky-500/[0.04] to-transparent',
    iconColor: 'text-sky-300',
    iconBg: 'bg-sky-400/[0.10]',
    glow: 'rgba(56,189,248,0.12)',
    tag: 'Produtividade',
    preview: (
      <div className="flex flex-col items-center py-2">
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[5px] border-sky-400/15">
          <div className="absolute inset-0 rounded-full border-[5px] border-transparent border-t-sky-300 border-r-cyan-400 rotate-45" />

          <div className="absolute inset-2 rounded-full bg-sky-400/[0.025] blur-md" />

          <div className="relative text-center">
            <p className="text-3xl font-semibold tracking-tight text-white">
              25:00
            </p>
            <p className="mt-1 text-xs text-slate-400">Hora de focar</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '04',
    title: 'Materiais centralizados',
    description:
      'Mantenha seus conteúdos e materiais de estudo organizados em um espaço pensado para facilitar sua rotina.',
    icon: Layers3,
    accent: 'from-blue-500/[0.16] via-cyan-500/[0.04] to-transparent',
    iconColor: 'text-blue-300',
    iconBg: 'bg-blue-400/[0.10]',
    glow: 'rgba(59,130,246,0.12)',
    tag: 'Organização',
    preview: (
      <div className="space-y-3">
        {[
          { name: 'Matemática', type: 'Anotações', color: 'bg-blue-400' },
          { name: 'Programação', type: 'Material de estudo', color: 'bg-cyan-400' },
          { name: 'Redação', type: 'Referências', color: 'bg-sky-400' },
        ].map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-slate-950/40 p-3 transition-all duration-300 hover:translate-x-1 hover:border-cyan-300/20"
          >
            <div className={`h-9 w-1 shrink-0 rounded-full ${item.color}`} />

            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-200">
                {item.name}
              </p>
              <p className="mt-1 text-xs text-slate-500">{item.type}</p>
            </div>

            <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-colors duration-300 group-hover:text-cyan-300" />
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '05',
    title: 'Assistente com IA',
    description:
      'Explore uma experiência de apoio aos estudos com inteligência artificial para tirar dúvidas e compreender assuntos.',
    icon: BrainCircuit,
    accent: 'from-cyan-500/[0.16] via-blue-500/[0.04] to-transparent',
    iconColor: 'text-cyan-300',
    iconBg: 'bg-cyan-400/[0.10]',
    glow: 'rgba(34,211,238,0.14)',
    tag: 'Inteligência artificial',
    preview: (
      <div className="space-y-4">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm border border-blue-400/20 bg-blue-400/[0.10] p-3 text-sm text-blue-100">
          Pode me explicar um assunto passo a passo?
        </div>

        <div className="max-w-[90%] rounded-2xl rounded-bl-sm border border-white/[0.08] bg-white/[0.04] p-3 text-sm leading-6 text-slate-300">
          <Sparkles className="mb-2 h-4 w-4 text-cyan-300" />
          Vamos começar pelos conceitos fundamentais e avançar juntos.
        </div>
      </div>
    ),
  },
]

function Features() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="recursos"
      className="relative isolate scroll-mt-24 overflow-hidden px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* Iluminação ambiente */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 35, -20, 0],
                  opacity: [0.45, 0.8, 0.55, 0.45],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-1/3 h-[420px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[140px]"
        />

        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/[0.035] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Título da seção */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.035)]">
            <Sparkles size={14} />
            Tudo conectado à sua rotina
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tudo o que você precisa para{' '}
            <span className="text-gradient">evoluir.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Menos tempo tentando se organizar. Mais tempo aprendendo,
            praticando e chegando cada vez mais perto dos seus objetivos.
          </p>
        </motion.div>

        {/* Cards dos recursos */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.article
                key={feature.number}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  delay: reduceMotion ? 0 : (index % 3) * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                        transition: { duration: 0.25 },
                      }
                }
                className={`group relative isolate overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b1120]/75 p-6 backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-500 hover:border-cyan-300/25 hover:bg-[#0d1527]/95 hover:shadow-[0_20px_70px_-35px_var(--card-glow)] sm:p-8 ${
                  index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'
                }`}
                style={{
                  '--card-glow': feature.glow,
                } as React.CSSProperties}
              >
                {/* Gradiente interno */}
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${feature.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Reflexo superior */}
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/0 to-transparent transition-colors duration-500 group-hover:via-cyan-300/50" />

                {/* Brilho de fundo no hover */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 -z-10 h-48 w-48 rounded-full opacity-0 blur-[75px] transition-opacity duration-700 group-hover:opacity-100"
                  style={{ backgroundColor: feature.glow }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={reduceMotion ? undefined : { scale: 1.07, rotate: -3 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.07] shadow-inner shadow-white/[0.02] ${feature.iconBg}`}
                    >
                      <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </motion.div>

                    <span className="font-mono text-xs tracking-wider text-slate-600 transition-colors duration-300 group-hover:text-cyan-300/70">
                      / {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-50 sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-xs text-slate-400">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400/30" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    </span>

                    {feature.tag}
                  </div>

                  {/* Prévia ilustrativa */}
                  <div className="relative mt-7 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#050816]/70 p-4 transition-colors duration-500 group-hover:border-white/[0.11] group-hover:bg-[#050816]/85 sm:p-5">
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
                    {feature.preview}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Mensagem final */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.08]">
            <Check className="h-4 w-4 text-cyan-300" />
          </span>

          <p className="text-sm leading-6 text-slate-400">
            Uma experiência de estudos criada para trazer mais clareza à sua rotina.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Features