"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Satellite, ExternalLink, BookOpen } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function References() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Referencias y Tecnología</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Datos recopilados mediante tecnología satelital avanzada y respaldados por investigaciones científicas
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Satélites */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Satellite className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Satélites Utilizados</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">ARGOS</Badge>
                  <span className="text-sm text-muted-foreground">Sistema Principal</span>
                </div>
                <p className="text-sm text-foreground">
                  Sistema de localización y recopilación de datos por satélite utilizado para rastrear la migración de
                  tiburones en tiempo real. Proporciona datos de ubicación precisos cada 90 minutos.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">SPOT</Badge>
                  <span className="text-sm text-muted-foreground">Sistema Complementario</span>
                </div>
                <p className="text-sm text-foreground">
                  Smart Position and Temperature Transmitting tags. Transmite ubicación cuando el tiburón emerge a la
                  superficie, permitiendo seguimiento de patrones de comportamiento.
                </p>
              </div>
            </div>
          </Card>

          {/* Estudios */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Estudios Consultados</h3>
            </div>
            <div className="space-y-4">
              <a
                href="https://www.nature.com/articles/s41586-019-1444-4"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-l-4 border-accent pl-4 hover:bg-accent/5 transition-colors p-2 -ml-2 rounded-r"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Nature</Badge>
                  <ExternalLink className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  Global patterns of shark movements and behavior
                </p>
                <p className="text-xs text-muted-foreground">
                  Estudio sobre patrones de migración y comportamiento de tiburones a nivel mundial utilizando datos
                  satelitales.
                </p>
              </a>
              <a
                href="https://www.science.org/doi/10.1126/science.aav9898"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-l-4 border-accent pl-4 hover:bg-accent/5 transition-colors p-2 -ml-2 rounded-r"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Science</Badge>
                  <ExternalLink className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  Spatial ecology of sharks in the Anthropocene
                </p>
                <p className="text-xs text-muted-foreground">
                  Investigación sobre la ecología espacial de tiburones y el impacto de actividades humanas en sus
                  hábitats.
                </p>
              </a>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-muted/50">
          <p className="text-sm text-center text-muted-foreground">
            <strong className="text-foreground">Nota:</strong> Los datos presentados en esta plataforma son recopilados
            mediante tecnología de rastreo satelital y validados con estudios científicos publicados en revistas de alto
            impacto. El sistema de rastreo en vivo se encuentra actualmente en desarrollo.
          </p>
        </Card>
      </div>
    </section>
  )
}
