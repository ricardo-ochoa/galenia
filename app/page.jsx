"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import {
  AlertCircle,
  ArrowUpRight,
  Calendar,
  DollarSign,
  TrendingUp,
  Activity,
  Clock,
  CheckCircle,
  Package,
  Stethoscope,
} from "lucide-react"

export default function DashboardPage() {
  const [showConsultasModal, setShowConsultasModal] = useState(false)
  const [showPaquetesModal, setShowPaquetesModal] = useState(false)
  const [view, setView] = useState("cards")

  const consultasDiarias = [
    {
      id: 1,
      paciente: "María González",
      hora: "08:00",
      tipo: "Consulta General",
      doctor: "Dr. Ramírez",
      status: "completada",
    },
    { id: 2, paciente: "Juan Pérez", hora: "09:30", tipo: "Seguimiento", doctor: "Dra. López", status: "en-progreso" },
    { id: 3, paciente: "Ana Martínez", hora: "10:00", tipo: "Primera Vez", doctor: "Dr. García", status: "programada" },
    {
      id: 4,
      paciente: "Carlos Ruiz",
      hora: "11:30",
      tipo: "Consulta Especializada",
      doctor: "Dr. Rodríguez",
      status: "programada",
    },
    {
      id: 5,
      paciente: "Laura Sánchez",
      hora: "14:00",
      tipo: "Control Post-Op",
      doctor: "Dra. López",
      status: "programada",
    },
  ]

  const paquetesActivos = [
    { id: 1, nombre: "Colecistectomía Laparoscópica", precio: "$45,200", margen: "32%", casos: 12 },
    { id: 2, nombre: "Cirugía Bariátrica", precio: "$125,000", margen: "28%", casos: 8 },
    { id: 3, nombre: "Apendicectomía", precio: "$32,500", margen: "35%", casos: 15 },
    { id: 4, nombre: "Hernia Inguinal", precio: "$28,000", margen: "30%", casos: 10 },
    { id: 5, nombre: "Cesárea", precio: "$38,000", margen: "25%", casos: 22 },
  ]

  const revenueData = [
    { month: "Ene", ingresos: 1.8, presupuesto: 2.0 },
    { month: "Feb", ingresos: 2.1, presupuesto: 2.2 },
    { month: "Mar", ingresos: 2.3, presupuesto: 2.4 },
    { month: "Abr", ingresos: 2.0, presupuesto: 2.3 },
    { month: "May", ingresos: 2.5, presupuesto: 2.5 },
    { month: "Jun", ingresos: 2.4, presupuesto: 2.8 },
  ]

  const quirofanosData = [
    { dia: "Lun", ocupacion: 75 },
    { dia: "Mar", ocupacion: 82 },
    { dia: "Mié", ocupacion: 78 },
    { dia: "Jue", ocupacion: 85 },
    { dia: "Vie", ocupacion: 80 },
    { dia: "Sáb", ocupacion: 65 },
    { dia: "Dom", ocupacion: 45 },
  ]

  const satisfaccionData = [
    { mes: "Ene", satisfaccion: 4.3 },
    { mes: "Feb", satisfaccion: 4.4 },
    { mes: "Mar", satisfaccion: 4.5 },
    { mes: "Abr", satisfaccion: 4.6 },
    { mes: "May", satisfaccion: 4.7 },
    { mes: "Jun", satisfaccion: 4.7 },
  ]

  const leadsData = [
    { fuente: "Web", leads: 23 },
    { fuente: "Referidos", leads: 15 },
    { fuente: "Redes", leads: 9 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-balance">Dashboard del Director General</h1>
          <p className="text-muted-foreground">Torre de Control - Visión consolidada de todos los KPIs</p>
        </div>

        {/* Switch de vista */}
      <div className="mb-6 flex items-center gap-2">
        <Button
          variant={view === "cards" ? "default" : "outline"}
          size="sm"
          onClick={() => setView("cards")}
        >
          Tarjetas
        </Button>
        <Button
          variant={view === "charts" ? "default" : "outline"}
          size="sm"
          onClick={() => setView("charts")}
        >
          Gráficas
        </Button>
      </div>
{view === "cards" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* KPI Financiero */}
          <Link href="/presupuestos">
            <Card className="hover:border-primary transition-colors cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Ingresos vs. Presupuesto</CardTitle>
                  <DollarSign className="h-5 w-5 text-chart-1" />
                </div>
                <CardDescription>KPI Financiero</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-chart-1">$2.4M</span>
                    <span className="text-sm text-muted-foreground">/ $2.8M</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-chart-2">+12.5%</span>
                    <span className="text-muted-foreground">vs. mes anterior</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-4">
                    <div className="bg-chart-1 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          {/* 
          <Card
            className="hover:border-primary transition-colors cursor-pointer h-full"
            onClick={() => {
              console.log("[v0] Paquetes card clicked")
              setShowPaquetesModal(true)
            }}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Paquetes Activos</CardTitle>
                <Package className="h-5 w-5 text-chart-1" />
              </div>
              <CardDescription>KPI Comercial</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-chart-1">{paquetesActivos.length}</span>
                  <span className="text-sm text-muted-foreground">paquetes disponibles</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-chart-2">30%</span>
                  <span className="text-muted-foreground">margen promedio</span>
                </div>
                <div className="mt-4 p-3 bg-muted rounded-md">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total casos Q3</span>
                    <span className="font-semibold">{paquetesActivos.reduce((acc, p) => acc + p.casos, 0)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card> */}

          {/* KPI Operativo */}
          <Link href="/quirofanos">
            <Card className="hover:border-primary transition-colors cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Ocupación de Quirófanos</CardTitle>
                  <Calendar className="h-5 w-5 text-chart-2" />
                </div>
                <CardDescription>KPI Operativo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-chart-2">78%</span>
                    <span className="text-sm text-muted-foreground">tasa de ocupación</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ArrowUpRight className="h-4 w-4 text-chart-2" />
                    <span className="text-muted-foreground">6 cirugías programadas hoy</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-4">
                    <div className="bg-chart-2 h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* KPI Clínico */}
          <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Alertas de IA</CardTitle>
                <AlertCircle className="h-5 w-5 text-destructive" />
              </div>
              <CardDescription>KPI Clínico</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-4 w-4 text-destructive mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">3 cirugías con riesgo de retraso</p>
                    <p className="text-xs text-muted-foreground">Requieren atención inmediata</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-4 w-4 text-destructive mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">2 médicos requieren credencialización</p>
                    <p className="text-xs text-muted-foreground">Vencimiento próximo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* KPI Comercial */}
          <Link href="/demanda">
            <Card className="hover:border-primary transition-colors cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Leads Turismo Médico</CardTitle>
                  <TrendingUp className="h-5 w-5 text-chart-3" />
                </div>
                <CardDescription>KPI Comercial</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-chart-3">47</span>
                    <span className="text-sm text-muted-foreground">leads activos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-chart-3">+30%</span>
                    <span className="text-muted-foreground">demanda predictiva Q4</span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <div className="flex-1 text-center p-2 bg-muted rounded">
                      <div className="text-lg font-bold text-chart-3">23</div>
                      <div className="text-xs text-muted-foreground">Calientes</div>
                    </div>
                    <div className="flex-1 text-center p-2 bg-muted rounded">
                      <div className="text-lg font-bold">24</div>
                      <div className="text-xs text-muted-foreground">Fríos</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Resumen General */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Resumen General</CardTitle>
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <CardDescription>Estado del Sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Eficiencia Operativa</span>
                  <span className="text-sm font-semibold text-primary">92%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Satisfacción Pacientes</span>
                  <span className="text-sm font-semibold text-primary">4.7/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Rentabilidad</span>
                  <span className="text-sm font-semibold text-primary">+18%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Predicciones Activas</span>
                  <span className="text-sm font-semibold text-primary">127</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="hover:border-primary transition-colors cursor-pointer h-full"
            onClick={() => {
              setShowConsultasModal(true)
            }}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Consultas Diarias</CardTitle>
                <Stethoscope className="h-5 w-5 text-chart-4" />
              </div>
              <CardDescription>KPI de Paciente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-chart-4">{consultasDiarias.length}</span>
                  <span className="text-sm text-muted-foreground">consultas hoy</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-chart-2" />
                  <span className="text-muted-foreground">
                    {consultasDiarias.filter((c) => c.status === "completada").length} completadas
                  </span>
                </div>
                <div className="mt-4 p-3 bg-muted rounded-md">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tiempo promedio espera</span>
                    <span className="font-semibold">2.3m</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
)}
        {view === "charts" && (   
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Análisis de Tendencias</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Ingresos vs. Presupuesto</CardTitle>
                <CardDescription>Comparación mensual (en millones MXN)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    ingresos: {
                      label: "Ingresos",
                      color: "var(--chart-1)",
                    },
                    presupuesto: {
                      label: "Presupuesto",
                      color: "var(--chart-2)",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="ingresos"
                        stroke="var(--chart-1)"
                        strokeWidth={2}
                         dot={{ fill: "var(--chart-1)" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="presupuesto"
                        stroke="var(--chart-2)"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={{ fill: "var(--chart-2)" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Operating Room Utilization Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Ocupación de Quirófanos</CardTitle>
                <CardDescription>Porcentaje de ocupación semanal</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    ocupacion: {
                      label: "Ocupación",
                      color: "var(--chart-2)",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={quirofanosData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="dia" className="text-xs" />
                      <YAxis className="text-xs" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="ocupacion" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Patient Satisfaction Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Satisfacción del Paciente</CardTitle>
                <CardDescription>Calificación promedio mensual (escala 1-5)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    satisfaccion: {
                      label: "Satisfacción",
                      color: "var(--chart-4)",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={satisfaccionData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="mes" className="text-xs" />
                      <YAxis domain={[0, 5]} className="text-xs" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="satisfaccion"
                        stroke="var(--chart-4)"
                        fill="var(--chart-4)"
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Medical Tourism Leads Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Leads por Fuente</CardTitle>
                <CardDescription>Distribución de leads de turismo médico</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    leads: {
                      label: "Leads",
                      color: "var(--chart-3)",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={leadsData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis type="number" className="text-xs" />
                      <YAxis dataKey="fuente" type="category" className="text-xs" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="leads" fill="var(--chart-3)" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
)}

        <Dialog open={showConsultasModal} onOpenChange={setShowConsultasModal}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">Consultas Diarias</DialogTitle>
              <DialogDescription>Listado de consultas programadas y completadas para hoy</DialogDescription>
            </DialogHeader>
            <div className="space-y-3 mt-4">
              {consultasDiarias.map((consulta) => (
                <Card key={consulta.id} className={consulta.status === "completada" ? "bg-muted/50" : ""}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{consulta.paciente}</h3>
                          <Badge
                            variant={
                              consulta.status === "completada"
                                ? "secondary"
                                : consulta.status === "en-progreso"
                                  ? "default"
                                  : "outline"
                            }
                          >
                            {consulta.status === "completada"
                              ? "Completada"
                              : consulta.status === "en-progreso"
                                ? "En Progreso"
                                : "Programada"}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {consulta.hora}
                          </div>
                          <div className="text-muted-foreground">{consulta.tipo}</div>
                          <div className="text-muted-foreground">{consulta.doctor}</div>
                        </div>
                      </div>
                      {consulta.status === "completada" && <CheckCircle className="h-5 w-5 text-chart-2" />}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={showPaquetesModal} onOpenChange={setShowPaquetesModal}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">Paquetes Activos</DialogTitle>
              <DialogDescription>
                Listado de paquetes quirúrgicos disponibles con métricas de rentabilidad
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3 mt-4">
              {paquetesActivos.map((paquete) => (
                <Card key={paquete.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{paquete.nombre}</h3>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Precio</p>
                            <p className="text-lg font-bold text-chart-1">{paquete.precio}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Margen</p>
                            <p className="text-lg font-bold text-chart-2">{paquete.margen}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Casos (Q3)</p>
                            <p className="text-lg font-bold text-chart-3">{paquete.casos}</p>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setShowPaquetesModal(false)
                          window.location.href = "/presupuestos"
                        }}
                      >
                        Ver Detalles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}
