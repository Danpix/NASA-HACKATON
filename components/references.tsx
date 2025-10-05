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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Referencias y Tecnología
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Datos recopilados mediante tecnología satelital avanzada y respaldados por investigaciones científicas.
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
                  <Badge variant="secondary">PACE</Badge>
                  <span className="text-sm text-muted-foreground">NASA Earth Science Mission</span>
                </div>
                <p className="text-sm text-foreground">
                  <a
                    href="https://pace.gsfc.nasa.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary"
                  >
                    Satélite PACE
                  </a>{" "}
                  monitorea el color oceánico y la concentración de clorofila, permitiendo detectar fitoplancton
                  y su relación con los ecosistemas marinos.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">SWOT</Badge>
                  <span className="text-sm text-muted-foreground">Topografía Oceánica</span>
                </div>
                <p className="text-sm text-foreground">
                  <a
                    href="https://podaac.jpl.nasa.gov/swot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary"
                  >
                    SWOT (Surface Water and Ocean Topography)
                  </a>{" "}
                  mide la altura y movimiento de la superficie marina, ayudando a analizar corrientes y zonas de alta productividad oceánica.
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
                  Estudio sobre patrones globales de migración y comportamiento de tiburones mediante datos satelitales.
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
                  Investigación sobre cómo las actividades humanas modifican el comportamiento espacial de los tiburones.
                </p>
              </a>
              <a
                href="https://www.pnas.org/doi/abs/10.1073/pnas.1903067116"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-l-4 border-accent pl-4 hover:bg-accent/5 transition-colors p-2 -ml-2 rounded-r"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">PNAS</Badge>
                  <ExternalLink className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  Predicting predator distributions with satellite ocean data
                </p>
                <p className="text-xs text-muted-foreground">
                  Relación entre la distribución de depredadores marinos y variables satelitales como temperatura y clorofila.
                </p>
              </a>
             
            </div>
          </Card>
        </div>

        {/* Repositorio de código */}
        <div className="grid md:grid-cols-1 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Código disponible</h3>
              </div>
              <Badge variant="secondary">GitHub</Badge>
            </div>

            <p className="text-sm text-foreground mb-4">
              Todo el código del proyecto está disponible en el repositorio público. Aquí encontrarás scripts de
              procesamiento de datos, notebooks, y el frontend del sitio.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Danpix/NASA-HACKATON.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline hover:text-primary flex items-center gap-2"
              >
                https://github.com/Danpix/NASA-HACKATON.git
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card>
        </div>

        {/* Nota final */}
        <Card className="p-6 bg-muted/50">
          <p className="text-sm text-center text-muted-foreground">
            <strong className="text-foreground">Nota:</strong> Los datos presentados en esta plataforma provienen de
            observaciones satelitales de misiones de la NASA (PACE, MODIS, SWOT) y están respaldados por investigaciones
            científicas publicadas en revistas de alto impacto. El sistema de rastreo en vivo se encuentra en desarrollo.
          </p>
        </Card>
      </div>
    </section>
  )
}
