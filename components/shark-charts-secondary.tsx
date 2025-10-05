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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Cómo funciona el modelo</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Gracias a los datos obtenidos por el satélite PACE (Plankton, Aerosol, Cloud, ocean Ecosystem), pudimos analizar cómo la presencia de fitoplancton —los diminutos organismos que flotan en el mar y forman la base de la cadena alimenticia— se relaciona con el comportamiento y desplazamiento de los tiburones. Utilizamos mediciones de color oceánico y concentración de clorofila para detectar las zonas donde el fitoplancton es más abundante, ya que esas áreas suelen atraer peces pequeños… y, con ellos, a los grandes depredadores.
            </p>
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
              <h3 className="text-2xl font-bold mb-4 text-center">Imagen con filtros espectrales</h3>
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
