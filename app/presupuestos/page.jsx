"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react"

export default function PresupuestosPage() {
  const [packageCreated, setPackageCreated] = useState(false)

  const handleCreatePackage = () => {
    setPackageCreated(true)
    setTimeout(() => setPackageCreated(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-balance">Asistente de Presupuestos</h1>
          <p className="text-muted-foreground">Protección inteligente de la rentabilidad</p>
        </div>

                {/* Métricas Adicionales */}
        <div className="grid md:grid-cols-4 gap-4 mb-6 p-6 bg-card rounded-lg shadow-lg">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Paquetes Activos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">47</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Precisión de Costos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-chart-1">96%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Margen Promedio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-chart-2">28%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Ahorro Mensual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-chart-3">$38K</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Asistente IA */}
          <Card className="border-primary/50 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <CardTitle>Asistente IA - Creación de Paquete</CardTitle>
              </div>
              <CardDescription>Recomendaciones basadas en datos históricos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-background rounded-lg border border-primary/20">
                <p className="text-sm leading-relaxed mb-4">
                  <span className="font-semibold text-primary">Creando paquete de Colecistectomía Laparoscópica.</span>
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Basado en <span className="font-semibold text-foreground">50 procedimientos similares</span> del{" "}
                  <span className="font-semibold text-foreground">Dr. García</span>, sugiero incluir:
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-background rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-chart-1"></div>
                    <span className="text-sm font-medium">Kit de Laparoscopía Avanzado</span>
                  </div>
                  <Badge variant="secondary">Recomendado</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-chart-2"></div>
                    <span className="text-sm font-medium">Suturas Absorbibles Premium</span>
                  </div>
                  <Badge variant="secondary">Recomendado</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-chart-3"></div>
                    <span className="text-sm font-medium">Anestesia Especializada</span>
                  </div>
                  <Badge variant="secondary">Recomendado</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span className="text-sm font-medium">Cargo de Recuperación Post-Op</span>
                  </div>
                  <Badge variant="destructive">Olvidado frecuentemente</Badge>
                </div>
              </div>

              <div className="p-4 bg-chart-1/10 border border-chart-1/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Costo Estimado del Paquete</span>
                  <span className="text-2xl font-bold text-chart-1">$45,200</span>
                </div>
                <p className="text-xs text-muted-foreground">Margen de rentabilidad: 32%</p>
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg" onClick={handleCreatePackage} disabled={packageCreated}>
                  {packageCreated ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Paquete Creado Exitosamente
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5 mr-2" />
                      Crear Paquete con Recomendaciones IA
                    </>
                  )}
                </Button>
                {packageCreated && (
                  <div className="p-3 bg-chart-2/10 border border-chart-2/20 rounded-lg flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-chart-2" />
                    <p className="text-sm text-chart-2 font-medium">El paquete ha sido creado y está listo para usar</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Análisis de Pérdidas */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-destructive" />
                <CardTitle>Pérdidas por Paquetes Desactualizados</CardTitle>
              </div>
              <CardDescription>Análisis del tercer trimestre (Q3)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Pérdida Total Q3</span>
                    <span className="text-2xl font-bold text-destructive">$127,500</span>
                  </div>
                  <p className="text-xs text-muted-foreground">18 paquetes con costos subestimados</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Cirugía Bariátrica</p>
                      <p className="text-xs text-muted-foreground">8 casos</p>
                    </div>
                    <span className="text-sm font-semibold text-destructive">-$42,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Colecistectomía</p>
                      <p className="text-xs text-muted-foreground">6 casos</p>
                    </div>
                    <span className="text-sm font-semibold text-destructive">-$28,500</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Apendicectomía</p>
                      <p className="text-xs text-muted-foreground">4 casos</p>
                    </div>
                    <span className="text-sm font-semibold text-destructive">-$18,000</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-chart-2/10 border border-chart-2/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Ahorro Potencial con IA</span>
                  <span className="text-2xl font-bold text-chart-2">$115,000</span>
                </div>
                <p className="text-xs text-muted-foreground">90% de pérdidas evitables con actualización automática</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
