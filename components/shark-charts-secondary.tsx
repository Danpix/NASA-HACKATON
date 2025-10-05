"use client"

import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SharkChartsSecondary() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-ocean-deep/5">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Relacion entre fitoplanton y los tiburones</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              El análisis de amenazas muestra un incremento alarmante en los factores que afectan a las poblaciones de
              tiburones. La sobrepesca continúa siendo la mayor amenaza, seguida por el cambio climático que altera las
              temperaturas oceánicas y las corrientes marinas. La distribución de hábitats revela que la mayoría de
              especies prefieren el océano abierto y aguas costeras, donde lamentablemente también enfrentan mayor
              presión humana.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card
              className={`p-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Evolución de Amenazas (2015-2023)</h3>
              <div className="w-full h-[300px] flex items-center justify-center">
                <img
                  src="/gallery/gallery-1.jpg"
                  alt="Gráfico de evolución de amenazas a tiburones: sobrepesca, cambio climático y contaminación"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </Card>

            <Card
              className={`p-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Distribución por Tipo de Hábitat</h3>
              <div className="w-full h-[300px] flex items-center justify-center">
                <img
                  src="/gallery/gallery-10.jpg"
                  alt="Gráfico de distribución de tiburones por tipo de hábitat"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
