"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { RefreshCw } from "lucide-react"

export function SharkGallery() {
  const [currentSet, setCurrentSet] = useState<"set1" | "set2">("set1")
  const { ref, isVisible } = useScrollAnimation()


  const gallerySet1 = [
    "/gallery/gallery-1.jpg",
    "/gallery/gallery-2.jpg",
    "/gallery/gallery-3.jpg",
    "/gallery/gallery-4.jpg",
    "/gallery/gallery-5.jpg",
    "/gallery/gallery-6.jpg",
    "/gallery/gallery-7.jpg",
    "/gallery/gallery-8.jpg",
    "/gallery/gallery-9.jpg",
  ]

  const gallerySet2 = [
    "/gallery/gallery-10.jpg",
    "/gallery/gallery-11.jpg",
    "/gallery/gallery-12.jpg",
    "/gallery/gallery-13.jpg",
    "/gallery/gallery-14.jpg",
    "/gallery/gallery-15.jpg",
    "/gallery/gallery-16.jpg",
    "/gallery/gallery-17.jpg",
    "/gallery/gallery-18.jpg",
  ]

  const currentImages = currentSet === "set1" ? gallerySet1 : gallerySet2

  const toggleSet = () => {
    setCurrentSet(currentSet === "set1" ? "set2" : "set1")
  }

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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Ejemplos de datos procesados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Prueba darle al boton y veras la magia!😀
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {currentImages.map((image, index) => (
              <div
                key={`${currentSet}-${index}`}
                className={`relative aspect-square overflow-hidden rounded-lg bg-ocean-deep/10 transition-all duration-700 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Tiburón ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button
              onClick={toggleSet}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              {currentSet === "set1" ? "MIRA EL FILTRADO!" : "VOLVER"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
