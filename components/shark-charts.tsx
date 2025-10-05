"use client"

import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SharkChart() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Análisis de Datos de Tiburones</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Los datos científicos revelan tendencias preocupantes en las poblaciones de tiburones a nivel mundial. El
              gráfico de población muestra cómo el tiburón ballena mantiene números estables gracias a esfuerzos de
              conservación, mientras que el gran tiburón blanco enfrenta un declive continuo debido a la pesca
              incidental y la pérdida de hábitat. El gráfico de migración ilustra los patrones de desplazamiento
              promedio de tiburones marcados, mostrando picos de actividad migratoria durante los meses de verano cuando
              siguen las corrientes cálidas y las concentraciones de alimento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card
              className={`p-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Población Estimada (2010-2024)</h3>
              <div className="w-full h-[300px] flex items-center justify-center">
                <img
                  src="/gallery/gallery-2.jpg"
                  alt="Gráfico de población estimada de tiburones ballena y blanco 2010-2024"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </Card>

            <Card
              className={`p-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Distancia de Migración Promedio (km/mes)</h3>
              <div className="w-full h-[300px] flex items-center justify-center">
                <img
                  src="/gallery/gallery-11.jpg"
                  alt="Gráfico de distancia de migración promedio de tiburones por mes"
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