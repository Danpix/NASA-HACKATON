import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ruler, Weight, Waves, Heart, AlertTriangle, Globe } from "lucide-react"

export function SharkInfo() {
  return (
    <section className="w-full bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Conoce a los Gigantes del Océano
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            Información fascinante sobre dos de las especies más impresionantes
          </p>
        </div>

        {/* Tiburón Ballena */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">Tiburón Ballena</Badge>
            <span className="text-sm italic text-muted-foreground">Rhincodon typus</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="overflow-hidden p-0">
              <img src="/whale-shark-spotted-pattern-underwater-close-up-ma.jpg" alt="Tiburón ballena" className="h-full w-full object-cover" />
            </Card>

            <div className="space-y-6">
              <p className="text-pretty leading-relaxed text-foreground">
                El tiburón ballena es el pez más grande del mundo, alcanzando longitudes de hasta 18 metros. A pesar de
                su tamaño imponente, es completamente inofensivo para los humanos, alimentándose principalmente de
                plancton y peces pequeños.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Ruler className="h-8 w-8 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Longitud</p>
                      <p className="text-xl font-semibold">Hasta 18m</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Weight className="h-8 w-8 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Peso</p>
                      <p className="text-xl font-semibold">Hasta 21 ton</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Waves className="h-8 w-8 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Velocidad</p>
                      <p className="text-xl font-semibold">5 km/h</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Heart className="h-8 w-8 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Longevidad</p>
                      <p className="text-xl font-semibold">70-100 años</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="border-accent/50 bg-accent/5 p-4">
                <div className="flex gap-3">
                  <Globe className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-accent">Hábitat</p>
                    <p className="text-sm leading-relaxed text-foreground">
                      Aguas tropicales y templadas cálidas. Común en el Caribe, Maldivas, Filipinas y Australia
                      Occidental.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-destructive/50 bg-destructive/5 p-4">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-destructive">Estado de Conservación</p>
                    <p className="text-sm leading-relaxed text-foreground">
                      En peligro de extinción. Amenazado por la pesca accidental, colisiones con embarcaciones y el
                      cambio climático.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Gran Tiburón Blanco */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-2">Gran Tiburón Blanco</Badge>
            <span className="text-sm italic text-muted-foreground">Carcharodon carcharias</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="order-2 space-y-6 lg:order-1">
              <p className="text-pretty leading-relaxed text-foreground">
                El gran tiburón blanco es uno de los depredadores más formidables del océano. Con sus poderosas
                mandíbulas y sentidos agudos, es un cazador supremo que ha existido durante millones de años,
                prácticamente sin cambios evolutivos.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Ruler className="h-8 w-8 text-secondary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Longitud</p>
                      <p className="text-xl font-semibold">4-6m</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Weight className="h-8 w-8 text-secondary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Peso</p>
                      <p className="text-xl font-semibold">680-1,100 kg</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Waves className="h-8 w-8 text-secondary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Velocidad</p>
                      <p className="text-xl font-semibold">56 km/h</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <Heart className="h-8 w-8 text-secondary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Longevidad</p>
                      <p className="text-xl font-semibold">70+ años</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="border-secondary/50 bg-secondary/5 p-4">
                <div className="flex gap-3">
                  <Globe className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-secondary">Hábitat</p>
                    <p className="text-sm leading-relaxed text-foreground">
                      Aguas costeras templadas de todos los océanos. Común en Sudáfrica, California, Australia y el
                      Mediterráneo.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-destructive/50 bg-destructive/5 p-4">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-destructive">Estado de Conservación</p>
                    <p className="text-sm leading-relaxed text-foreground">
                      Vulnerable. Amenazado por la pesca deportiva, captura accidental y la demanda de aletas de
                      tiburón.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="order-1 overflow-hidden p-0 lg:order-2">
              <img src="/great-white-shark-breaching-water-dramatic-powerfu.jpg" alt="Gran tiburón blanco" className="h-full w-full object-cover" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
