import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Благодаря занятиям я сдала ЕГЭ по истории на 87 баллов! Никогда не думала, что смогу так хорошо разобраться в этом предмете. Очень понятные объяснения и море терпения.",
    name: "Алина",
    role: "Выпускница, поступила в МГИМО",
  },
  {
    quote:
      "Мой сын боялся обществознания, считал его скучным. После нескольких занятий — совсем другой человек! Сдал ОГЭ на «5» и теперь сам читает книги по праву и экономике.",
    name: "Марина Сергеевна",
    role: "Мама ученика 9 класса",
  },
  {
    quote:
      "Готовился к олимпиаде по истории и попал на занятия — это было лучшее решение. Занял 2-е место на региональном этапе. Педагог умеет зажечь интерес к предмету!",
    name: "Дмитрий",
    role: "Призёр регионального этапа ВОШ",
  },
  {
    quote:
      "Пришла с нулевыми знаниями за полгода до ЕГЭ. Думала, что 60 баллов — уже хорошо. В итоге — 79! Доступная подача материала и постоянная поддержка сделали своё дело.",
    name: "Екатерина",
    role: "Выпускница, поступила на юрфак",
  },
  {
    quote:
      "Занимаемся уже второй год — сначала готовились к ОГЭ, теперь к ЕГЭ. Очень ценим стабильность и результат. Дочь стала увереннее и самостоятельнее в учёбе.",
    name: "Ирина Петровна",
    role: "Мама ученицы 11 класса",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят ученики и родители
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Реальные отзывы тех, кто уже прошёл подготовку и достиг своих целей.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
