"use client"

import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const populationData = [
  { year: "2010", ballena: 75000, blanco: 3500 },
  { year: "2013", ballena: 78000, blanco: 3200 },
  { year: "2016", ballena: 82000, blanco: 3000 },
  { year: "2019", ballena: 85000, blanco: 2800 },
  { year: "2022", ballena: 88000, blanco: 2600 },
  { year: "2024", ballena: 90000, blanco: 2500 },
]

const migrationData = [
  { mes: "Ene", distancia: 800 },
  { mes: "Feb", distancia: 1200 },
  { mes: "Mar", distancia: 1800 },
  { mes: "Abr", distancia: 2400 },
  { mes: "May", distancia: 3000 },
  { mes: "Jun", distancia: 3200 },
  { mes: "Jul", distancia: 2800 },
  { mes: "Ago", distancia: 2200 },
  { mes: "Sep", distancia: 1600 },
  { mes: "Oct", distancia: 1200 },
  { mes: "Nov", distancia: 900 },
  { mes: "Dic", distancia: 800 },
]

export function SharkCharts() {
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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Análisis de Datos de Tiburones</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Los datos científicos revelan tendencias preocupantes en las poblaciones de tiburones a nivel mundial. El
              gráfico de población muestra cómo el tiburón ballena mantiene números estables gracias a esfuerzos de
              conservación, mientras que el gran tiburón blanco enfrenta un declive continuo debido a la pesca
              incidental y la pérdida de hábitat. El gráfico de migración ilustra los patrones de desplazamiento
              promedio de tiburones marcados, mostrando picos de actividad migratoria durante los meses de verano cuando
              siguen las corrientes cálidas y las concentraciones de alimento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card
              className={`p-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Población Estimada (2010-2024)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={populationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="ballena" fill="hsl(var(--ocean-medium))" name="Tiburón Ballena" />
                  <Bar dataKey="blanco" fill="hsl(var(--ocean-deep))" name="Tiburón Blanco" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card
              className={`p-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Distancia de Migración Promedio (km/mes)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={migrationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="distancia"
                    stroke="hsl(var(--ocean-accent))"
                    strokeWidth={3}
                    name="Distancia (km)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
