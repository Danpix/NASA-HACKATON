import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Cpu, Radio, Battery, Satellite, Waves, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TrackingDevicePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              <Cpu className="mr-2 h-4 w-4" />
              Tecnología de Rastreo
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Dispositivo de Rastreo Satelital
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Sistema avanzado de telemetría para monitoreo en tiempo real de tiburones en su hábitat natural
            </p>
          </div>

          {/* Device Image */}
          <div className="mb-16 flex justify-center">
            <Card className="overflow-hidden max-w-2xl">
              <Image
                src="/tracking-device-satellite-tag.jpg"
                alt="Dispositivo de rastreo satelital para tiburones"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </Card>
          </div>

          {/* Technical Specifications */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <Card className="p-6">
              <Satellite className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comunicación Satelital</h3>
              <p className="text-muted-foreground">
                Transmisión de datos vía satélite Argos con cobertura global. Envía ubicación GPS cada 2-4 horas cuando
                el tiburón emerge.
              </p>
            </Card>

            <Card className="p-6">
              <Battery className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Batería de Larga Duración</h3>
              <p className="text-muted-foreground">
                Batería de litio de alta capacidad con duración de 3-5 años. Sistema de gestión de energía inteligente
                para maximizar la vida útil.
              </p>
            </Card>

            <Card className="p-6">
              <Waves className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sensores de Profundidad</h3>
              <p className="text-muted-foreground">
                Mide profundidad hasta 2000m, temperatura del agua y patrones de inmersión. Datos cruciales para
                estudios de comportamiento.
              </p>
            </Card>

            <Card className="p-6">
              <Shield className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Diseño Hidrodinámico</h3>
              <p className="text-muted-foreground">
                Carcasa de titanio resistente a la corrosión y presión. Diseño que minimiza la resistencia al agua y no
                afecta el comportamiento natural.
              </p>
            </Card>

            <Card className="p-6">
              <Radio className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sistema de Anclaje</h3>
              <p className="text-muted-foreground">
                Fijación mediante arpón especializado en la aleta dorsal. Procedimiento rápido y mínimamente invasivo
                realizado por expertos.
              </p>
            </Card>

            <Card className="p-6">
              <Zap className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Liberación Automática</h3>
              <p className="text-muted-foreground">
                Mecanismo de desprendimiento programable. El dispositivo se libera automáticamente después del período
                de estudio sin dañar al animal.
              </p>
            </Card>
          </div>

          {/* How It Works */}
          <Card className="p-8 bg-card">
            <h2 className="text-3xl font-bold mb-6 text-center">¿Cómo Funciona?</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Captura y Marcado</h3>
                  <p className="text-muted-foreground">
                    Los científicos capturan temporalmente al tiburón y fijan el dispositivo en la aleta dorsal mediante
                    un procedimiento rápido y seguro.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Recopilación de Datos</h3>
                  <p className="text-muted-foreground">
                    El dispositivo registra continuamente la ubicación GPS, profundidad, temperatura del agua y patrones
                    de movimiento del tiburón.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Transmisión Satelital</h3>
                  <p className="text-muted-foreground">
                    Cuando el tiburón emerge a la superficie, el dispositivo transmite los datos recopilados a satélites
                    Argos en órbita.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Análisis y Visualización</h3>
                  <p className="text-muted-foreground">
                    Los datos se procesan y visualizan en tiempo real en nuestra plataforma, permitiendo a
                    investigadores y público seguir el viaje del tiburón.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Impact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Impacto en la Conservación</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Esta tecnología nos permite comprender mejor las rutas migratorias, áreas de alimentación y reproducción
              de los tiburones. Los datos recopilados son fundamentales para establecer áreas marinas protegidas y
              desarrollar estrategias efectivas de conservación.
            </p>
            <Link href="/">
              <Button size="lg" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver al Rastreo en Vivo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
