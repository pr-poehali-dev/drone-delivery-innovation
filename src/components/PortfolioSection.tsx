import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const achievements = [
  {
    title: "Победители олимпиад",
    category: "Олимпиадные достижения",
    image: "/placeholder.jpg",
    description:
      "Мои ученики ежегодно становятся призёрами и победителями муниципального и регионального этапов Всероссийской олимпиады по истории и обществознанию.",
    tags: ["Всерос", "Регион", "Муниципальный этап"],
  },
  {
    title: "ЕГЭ 90+ баллов",
    category: "Результаты ЕГЭ",
    image: "/placeholder.jpg",
    description:
      "Более 30 выпускников получили 90 и выше баллов на ЕГЭ по истории, что открыло им двери в ведущие вузы страны: МГУ, МГИМО, ВШЭ и другие.",
    tags: ["ЕГЭ История", "90+ баллов", "Топ-вузы"],
  },
  {
    title: "Авторские методики",
    category: "Методическая работа",
    image: "/placeholder.jpg",
    description:
      "Разработала авторские карточки и схемы по ключевым темам истории и обществознания, которые используют ученики по всей стране. Публикации на педагогических порталах.",
    tags: ["Методика", "Материалы", "Публикации"],
  },
  {
    title: "Подготовка к ОГЭ",
    category: "Результаты ОГЭ",
    image: "/placeholder.jpg",
    description:
      "100% моих учеников успешно сдают ОГЭ по истории и обществознанию, большинство — на «4» и «5». Индивидуальный подход позволяет даже слабым ученикам показать отличный результат.",
    tags: ["ОГЭ", "9 класс", "Отличные оценки"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Мои достижения</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Результаты учеников — лучшее подтверждение качества работы. Вот чего мы достигаем вместе.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="Award" size={80} className="text-primary/30 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
