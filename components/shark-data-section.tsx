"use client"

import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Waves, TrendingUp, Globe, Shield } from "lucide-react"

export function SharkDataSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-ocean-deep/5 to-background">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Datos Clave sobre Tiburones</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Los tiburones son fundamentales para la salud de los océanos. Como depredadores tope, regulan las
                  poblaciones de especies marinas y mantienen el equilibrio de los ecosistemas. Sin embargo, enfrentan
                  amenazas sin precedentes que requieren nuestra atención inmediata.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-6 bg-ocean-light/10 border-ocean-medium/20">
                  <Waves className="h-10 w-10 text-ocean-medium mb-3" />
                  <h3 className="font-bold text-xl mb-2">450+ Millones</h3>
                  <p className="text-sm text-muted-foreground">Años de evolución en los océanos</p>
                </Card>

                <Card className="p-6 bg-ocean-light/10 border-ocean-medium/20">
                  <TrendingUp className="h-10 w-10 text-ocean-accent mb-3" />
                  <h3 className="font-bold text-xl mb-2">500+ Especies</h3>
                  <p className="text-sm text-muted-foreground">Diferentes tipos de tiburones</p>
                </Card>

                <Card className="p-6 bg-ocean-light/10 border-ocean-medium/20">
                  <Globe className="h-10 w-10 text-ocean-medium mb-3" />
                  <h3 className="font-bold text-xl mb-2">Todos los Océanos</h3>
                  <p className="text-sm text-muted-foreground">Presentes en aguas de todo el mundo</p>
                </Card>

                <Card className="p-6 bg-ocean-light/10 border-ocean-medium/20">
                  <Shield className="h-10 w-10 text-ocean-accent mb-3" />
                  <h3 className="font-bold text-xl mb-2">25% Amenazadas</h3>
                  <p className="text-sm text-muted-foreground">Especies en peligro de extinción</p>
                </Card>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img src="/shark-ecosystem.jpg" alt="Tiburón en su ecosistema" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-ocean-deep text-white p-6 rounded-lg shadow-xl max-w-xs">
                <p className="font-bold text-2xl mb-1">100 Millones</p>
                <p className="text-sm opacity-90">Tiburones mueren anualmente por actividad humana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
