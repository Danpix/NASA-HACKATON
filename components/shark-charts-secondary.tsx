"use client"

import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const threatsData = [
  { year: "2015", sobrepesca: 45, cambioClimatico: 25, contaminacion: 30 },
  { year: "2017", sobrepesca: 50, cambioClimatico: 28, contaminacion: 32 },
  { year: "2019", sobrepesca: 55, cambioClimatico: 32, contaminacion: 35 },
  { year: "2021", sobrepesca: 58, cambioClimatico: 38, contaminacion: 38 },
  { year: "2023", sobrepesca: 60, cambioClimatico: 42, contaminacion: 40 },
]

const habitatData = [
  { name: "Aguas Costeras", value: 35, color: "hsl(var(--ocean-light))" },
  { name: "Océano Abierto", value: 40, color: "hsl(var(--ocean-medium))" },
  { name: "Arrecifes", value: 15, color: "hsl(var(--ocean-accent))" },
  { name: "Aguas Profundas", value: 10, color: "hsl(var(--ocean-deep))" },
]

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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Amenazas y Distribución de Hábitats</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              El análisis de amenazas muestra un incremento alarmante en los factores que afectan a las poblaciones de
              tiburones. La sobrepesca continúa siendo la mayor amenaza, seguida por el cambio climático que altera las
              temperaturas oceánicas y las corrientes marinas. La distribución de hábitats revela que la mayoría de
              especies prefieren el océano abierto y aguas costeras, donde lamentablemente también enfrentan mayor
              presión humana.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card
              className={`p-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Evolución de Amenazas (2015-2023)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={threatsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="sobrepesca"
                    stackId="1"
                    stroke="hsl(var(--ocean-deep))"
                    fill="hsl(var(--ocean-deep))"
                    name="Sobrepesca"
                  />
                  <Area
                    type="monotone"
                    dataKey="cambioClimatico"
                    stackId="1"
                    stroke="hsl(var(--ocean-medium))"
                    fill="hsl(var(--ocean-medium))"
                    name="Cambio Climático"
                  />
                  <Area
                    type="monotone"
                    dataKey="contaminacion"
                    stackId="1"
                    stroke="hsl(var(--ocean-accent))"
                    fill="hsl(var(--ocean-accent))"
                    name="Contaminación"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>

            <Card
              className={`p-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Distribución por Tipo de Hábitat</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={habitatData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {habitatData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
