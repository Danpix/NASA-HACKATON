import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Cpu,
  Radio,
  Battery,
  Satellite,
  Waves,
  Shield,
  Zap,
  BookOpen,
  ListChecks,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TrackingDevicePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6 flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al Inicio
            </Button>
          </Link>

          {/* (Opcional) Botón para abrir el PDF si lo colocas en /public */}
          <div className="ml-auto">
            <Link href="/Project-AURORA-Segundo-reto.pdf" target="_blank">
              <Button variant="outline" size="sm" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Ver PDF
              </Button>
            </Link>
          </div>
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
            <h2 className="text-3xl font-bold mb-4">Diseño eficiente y operación</h2>
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

      {/* ========================  SECCIONES AGREGADAS DEL PDF  ======================== */}

      {/* TOC / Índice rápido */}
      <section id="aurora-toc" className="py-10 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">
              <BookOpen className="h-4 w-4 mr-2" />
              AURORA — Contenido del PDF
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold">Resumen de secciones</h2>
            <p className="text-muted-foreground mt-2">Secciones agregadas del documento para consulta rápida.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="#aurora-arquitectura">
              <Card className="p-4 hover:shadow-md transition">Arquitectura general</Card>
            </Link>
            <Link href="#aurora-stl">
              <Card className="p-4 hover:shadow-md transition">STL-ULTRA (Shark-Tag Live)</Card>
            </Link>
            <Link href="#aurora-stl-diseno">
              <Card className="p-4 hover:shadow-md transition">STL — Diseño y forma</Card>
            </Link>
            <Link href="#aurora-hnr">
              <Card className="p-4 hover:shadow-md transition">HNR-ULTRA (Hydro-Net Relay)</Card>
            </Link>
            <Link href="#aurora-operacion">
              <Card className="p-4 hover:shadow-md transition">Diseño eficiente y operación</Card>
            </Link>
            <Link href="#aurora-referencias">
              <Card className="p-4 hover:shadow-md transition">Referencias</Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Arquitectura general (PDF) */}
      <section id="aurora-arquitectura" className="py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3">
              <Cpu className="h-4 w-4 mr-2" />
              Arquitectura AURORA
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Arquitectura general del sistema</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
              AURORA integra una unidad implantable <strong>STL-ULTRA</strong> y una boya de relevo{" "}
              <strong>HNR-ULTRA</strong> para telemetría bioenergética, localización submétrica (TDOA) y envío satelital
              seguro (VSAT).
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-semibold">STL-ULTRA (Shark-Tag Live)</h3>
              </div>
              <p className="text-muted-foreground">
                Unidad embarcada para procesamiento en el borde, almacenamiento cifrado y transmisión acústica/GPS hacia
                HNR-ULTRA.
              </p>
              <ul className="list-disc pl-5 mt-3 text-sm text-muted-foreground space-y-1">
                <li>Variables: ingestión (Pt1000 + Micro-NIR), ubicación (GPS RTK), profundidad, temperatura.</li>
                <li>Autonomía objetivo: 3–5 años con BMS y duty-cycle.</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <Radio className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-semibold">HNR-ULTRA (Hydro-Net Relay)</h3>
              </div>
              <p className="text-muted-foreground">
                Boya de referencia y relevo: recibe paquetes acústicos cifrados, valida firmas y reenvía por VSAT.
              </p>
              <ul className="list-disc pl-5 mt-3 text-sm text-muted-foreground space-y-1">
                <li>Localización TDOA submétrica con base de tiempo de rubidio.</li>
                <li>Energía solar + batería para operación de largo plazo.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* STL-ULTRA — Componentes y funciones */}
      <section id="aurora-stl" className="py-16 border-t">
        <div className="container mx-auto px-4">
          <Badge className="mb-4">
            <Shield className="h-4 w-4 mr-2" />
            STL-ULTRA
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Componentes principales y funciones</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Carcasa Ti-6Al-4V</h3>
              <p className="text-muted-foreground text-sm">Resistencia a presión y biocompatibilidad; recubrimiento anti-fouling.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Batería Li-SOCl₂ + supercap</h3>
              <p className="text-muted-foreground text-sm">Fuente principal y picos de corriente; 3–5 años con BMS.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Pt1000 (interno)</h3>
              <p className="text-muted-foreground text-sm">Detección de caídas térmicas → eventos de ingestión.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Micro-NIR</h3>
              <p className="text-muted-foreground text-sm">Clasificación química de presas por espectroscopía de reflexión.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Termistor externo</h3>
              <p className="text-muted-foreground text-sm">Temperatura ambiente con rejilla anti-fouling.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">GPS RTK</h3>
              <p className="text-muted-foreground text-sm">Localización submétrica con antena dorsal de bajo perfil.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Transductor acústico</h3>
              <p className="text-muted-foreground text-sm">Paquetes cortos y robustos para enlace con HNR.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Sensor de presión</h3>
              <p className="text-muted-foreground text-sm">Profundidad con membrana protectora anti-fouling.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Electrónica central (BMS + sensores)</h3>
              <p className="text-muted-foreground text-sm">Gestión energética inteligente y multiplexado de sensores.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* STL — Diseño y forma */}
      <section id="aurora-stl-diseno" className="py-16 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Diseño y forma del STL-ULTRA</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Geometría e hidrodinámica</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Perfil oval/torpedo, bordes redondeados, proa levemente apuntada.</li>
                <li>Superficie lisa para reducir arrastre; orientación paralela al eje del animal.</li>
                <li>Dimensiones: ~15–20 cm (largo), 4–6 cm (diám. máx.).</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Ubicación y anclaje</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>GPS dorsal al ras; transductor lateral/ventral; presión y Micro-NIR en ventral.</li>
                <li>Implantación dorsolateral 10–15 cm posterior a la aleta dorsal.</li>
                <li>Aletas subdérmicas de titanio para fijación y alineamiento de flujo.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* HNR-ULTRA — Componentes y proceso */}
      <section id="aurora-hnr" className="py-16 border-t">
        <div className="container mx-auto px-4">
          <Badge className="mb-4">
            <Satellite className="h-4 w-4 mr-2" />
            HNR-ULTRA
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Boya de relevo y referencia</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Componentes principales</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Estructura flotante 5083-H116 (anticorrosiva).</li>
                <li>Panel solar + batería recargable (&gt;5 años).</li>
                <li>Oscilador de rubidio (base de tiempo ultra precisa).</li>
                <li>Receptor acústico (compatible ATM-885).</li>
                <li>VSAT para reenvío a servidores remotos.</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Proceso de recepción y transmisión</h3>
              <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                <li>Recepción de paquetes acústicos cifrados (≈ cada 5 min).</li>
                <li>Validación de seguridad y firmas digitales.</li>
                <li>Localización submétrica mediante TDOA.</li>
                <li>Transmisión satelital priorizada (VSAT) a servidores.</li>
              </ol>
            </Card>
          </div>
        </div>
      </section>

      {/* Diseño eficiente y operación */}
      <section id="aurora-operacion" className="py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <ListChecks className="h-5 w-5 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold">Diseño eficiente y operación</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Minimiza impacto en comportamiento, optimiza energía para 3–5 años, prioriza datos críticos (ingestión,
            ubicación, temperatura) y asegura retransmisión automática al recuperar cobertura con HNR-ULTRA.
          </p>
        </div>
      </section>

      {/* Referencias */}
      <section id="aurora-referencias" className="py-16 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Referencias</h2>
          <Card className="p-6 space-y-2 text-sm text-muted-foreground">
            <p>
              Coloca aquí los enlaces del PDF (ACS Sensors, ScienceDirect, WHOI, NOAA, etc.) y agrúpalos por categoría:
              sensores, energía, antifouling, telemetría y TDOA.
            </p>
            <div className="pt-2">
              <Link
                href="https://github.com/Danpix/NASA-HACKATON"
                target="_blank"
                className="inline-flex items-center gap-2 text-primary underline"
              >
                <ExternalLink className="h-4 w-4" /> Código del proyecto
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* ======================  FIN SECCIONES PDF  ====================== */}
    </main>
  )
}

