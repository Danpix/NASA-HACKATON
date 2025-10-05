"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Activity, Info, Construction } from "lucide-react"
import Link from "next/link"

// Datos simulados de tiburones en tiempo real
const liveSharkData = [
  { id: 1, name: "Luna", species: "Tiburón Ballena", lat: 20.5, lng: -87.3, status: "pendiente" },
  { id: 2, name: "Neptuno", species: "Gran Blanco", lat: -34.5, lng: 18.8, status: "pendiente" },
  { id: 3, name: "Coral", species: "Tiburón Ballena", lat: 8.2, lng: 77.5, status: "pendiente" },
  { id: 4, name: "Atlas", species: "Gran Blanco", lat: 37.8, lng: -122.4, status: "pendiente" },
  { id: 5, name: "Marina", species: "Tiburón Ballena", lat: -12.0, lng: 96.8, status: "pendiente" },
]

export function LiveTrackingMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedShark, setSelectedShark] = useState<number | null>(null)

  useEffect(() => {
    // Aquí se integraría Leaflet o Mapbox para un mapa real
    // Por ahora usamos una visualización simulada
  }, [])

  return (
    <section id="live-tracking" className="w-full bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <Activity className="mr-2 h-4 w-4" />
            En Tiempo Real
          </Badge>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Rastreo en Vivo</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            Sigue el movimiento de tiburones etiquetados alrededor del mundo
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2 overflow-hidden p-0 relative">
            {/* Overlay de en proceso */}
            <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
              <Construction className="h-16 w-16 text-accent animate-pulse" />
              <div className="text-center px-4">
                <h3 className="text-2xl font-bold mb-2">Sistema en Desarrollo</h3>
                <p className="text-muted-foreground mb-4">El rastreo en tiempo real estará disponible próximamente</p>
                <Link href="/tracking-device">
                  <Button className="gap-2">
                    <Info className="h-4 w-4" />
                    Conoce el Dispositivo de Rastreo
                  </Button>
                </Link>
              </div>
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>

            <div
              ref={mapRef}
              className="relative h-[500px] w-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
            >
              {/* Simulación de mapa con marcadores */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/world-map-ocean-blue-topographic.jpg"
                  alt="Mapa mundial"
                  className="h-full w-full object-cover opacity-30"
                />
              </div>
              {/* Marcadores simulados */}
              {liveSharkData.map((shark, index) => (
                <div
                  key={shark.id}
                  className="absolute opacity-30"
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${30 + (index % 3) * 20}%`,
                  }}
                >
                  <MapPin className="h-8 w-8 text-destructive drop-shadow-lg" fill="currentColor" />
                </div>
              ))}
            </div>
          </Card>

          {/* Lista de tiburones */}
          <Card className="p-6">
            <h3 className="mb-4 text-xl font-semibold">Tiburones Rastreados</h3>
            <div className="space-y-3">
              {liveSharkData.map((shark) => (
                <button
                  key={shark.id}
                  onClick={() => setSelectedShark(shark.id)}
                  className={`w-full rounded-lg border p-4 text-left transition-all hover:border-accent ${
                    selectedShark === shark.id ? "border-accent bg-accent/10" : "border-border"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">{shark.name}</p>
                      <p className="text-sm text-muted-foreground">{shark.species}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {shark.lat.toFixed(2)}°, {shark.lng.toFixed(2)}°
                      </p>
                    </div>
                    <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                      {shark.status}
                    </Badge>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
