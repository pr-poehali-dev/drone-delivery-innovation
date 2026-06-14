import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "BookOpen",
    title: "Подготовка к ЕГЭ по истории",
    description:
      "Системная подготовка к единому государственному экзамену. Разбираем все темы кодификатора, тренируемся на реальных заданиях, отрабатываем написание исторических сочинений и развёрнутых ответов.",
  },
  {
    icon: "FileText",
    title: "Подготовка к ЕГЭ по обществознанию",
    description:
      "Глубокое изучение курса обществознания: право, экономика, политика, социология и философия. Особое внимание уделяю эссе и заданиям второй части, которые дают больше всего баллов.",
  },
  {
    icon: "GraduationCap",
    title: "Подготовка к ОГЭ",
    description:
      "Помогаю девятиклассникам уверенно подготовиться к основному государственному экзамену по истории и обществознанию. Разбираем структуру экзамена, типовые ошибки и стратегию выполнения заданий.",
  },
  {
    icon: "Users",
    title: "Индивидуальные занятия",
    description:
      "Персональные уроки с учётом уровня знаний и целей ученика. Работаем в удобном темпе, уделяю внимание именно тем темам, которые вызывают затруднения.",
  },
  {
    icon: "Target",
    title: "Ликвидация пробелов",
    description:
      "Диагностика текущего уровня знаний и целенаправленная работа над слабыми местами. Помогаю быстро наверстать упущенное и выстроить прочную базу по предмету.",
  },
  {
    icon: "Lightbulb",
    title: "Олимпиадная подготовка",
    description:
      "Готовлю к олимпиадам по истории и обществознанию различного уровня. Изучаем углублённые темы, нестандартные задания и развиваем навыки аналитического мышления.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Чем я занимаюсь
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чём я <span className="text-primary">помогаю</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          От школьной программы до олимпиад — помогаю каждому ученику достичь своей цели в истории и обществознании.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} fallback="BookOpen" className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
