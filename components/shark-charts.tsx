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
          <div className="text-center mb-20 px-4">
  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance text-primary">
    Comprendiendo el océano a través de los tiburones
  </h2>

  <div className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed space-y-6 text-pretty">
    <p>
      El estudio combina diferentes variables satelitales —como la presencia de fitoplancton, la profundidad del mar, la temperatura superficial y las corrientes oceánicas— para identificar patrones en el comportamiento de los tiburones. 
      Estas condiciones del océano influyen directamente en la distribución de alimento, la temperatura corporal y las rutas migratorias de cada especie, lo que nos permite entender por qué se concentran en ciertas zonas y cómo reaccionan ante los cambios ambientales.
    </p>

    <p>
      Sin embargo, este modelo no se limita solo a los tiburones. Al integrar múltiples fuentes de datos, podemos aplicar la misma metodología para estudiar otras especies marinas e incluso detectar señales tempranas de fenómenos naturales, como ciclones o alteraciones en las corrientes. 
      De hecho, se ha observado que muchos animales —incluidos los tiburones— modifican su comportamiento antes de una tormenta, alejándose de las áreas de riesgo. 
      Comprender estos patrones no solo amplía nuestro conocimiento sobre la vida marina, sino que también ayuda a mejorar los sistemas de monitoreo y predicción ambiental.
    </p>
  </div>
</div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card
              className={`p-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Imagen del satélite</h3>
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
              <h3 className="text-2xl font-bold mb-4 text-center">Imagen con filtros espectrales</h3>
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