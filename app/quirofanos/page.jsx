"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, Clock, User, Droplet, Package, LayoutList, LayoutGrid, Plus, CheckCircle } from "lucide-react"
import { ResponsiveContainer, AreaChart, Area } from "recharts"

const dataCir = [{v:4},{v:5},{v:6},{v:5},{v:6}]
const dataAcc = [{v:91},{v:92},{v:93},{v:94},{v:94}]
const dataTime = [{v:2.5},{v:2.8},{v:3.1},{v:3.0},{v:3.2}]

export default function QuirofanosPage() {
  const [viewMode, setViewMode] = useState("kanban")
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const handleBooking = (e) => {
    e.preventDefault()
    setBookingConfirmed(true)
    setTimeout(() => {
      setShowBookingModal(false)
      setBookingConfirmed(false)
    }, 2000)
  }

  const surgeries = [
    {
      id: 1,
      type: "Colecistectomía Laparoscópica",
      doctor: "Dr. García Martínez",
      room: "Quirófano 1",
      time: "08:00 - 10:00",
      manualDuration: "2h",
      aiPrediction: "2h 45m",
      status: "scheduled",
      alerts: [{ type: "credentials", message: "Revisar privilegios / credencialización" }],
    },
    {
      id: 2,
      type: "Apendicectomía",
      doctor: "Dra. López Hernández",
      room: "Quirófano 2",
      time: "10:30 - 12:00",
      manualDuration: "1h 30m",
      aiPrediction: "1h 45m",
      status: "in-progress",
      alerts: [],
    },
    {
      id: 3,
      type: "Cirugía Bariátrica",
      doctor: "Dr. Rodríguez Silva",
      room: "Quirófano 3",
      time: "13:00 - 16:00",
      manualDuration: "3h",
      aiPrediction: "3h 30m",
      status: "scheduled",
      alerts: [
        { type: "supplies", message: "Conflicto de insumos" },
        { type: "blood", message: "Requiere banco de sangre" },
      ],
    },
    {
      id: 4,
      type: "Hernia Inguinal",
      doctor: "Dr. Martínez Ruiz",
      room: "Quirófano 1",
      time: "16:30 - 17:30",
      manualDuration: "1h",
      aiPrediction: "1h 15m",
      status: "completed",
      alerts: [],
    },
  ]

  const surgeriesByStatus = {
    scheduled: surgeries.filter((s) => s.status === "scheduled"),
    "in-progress": surgeries.filter((s) => s.status === "in-progress"),
    completed: surgeries.filter((s) => s.status === "completed"),
  }

  const SurgeryCard = ({ surgery, compact = false }) => (
    <Card className={surgery.alerts.length > 0 ? "border-destructive/50" : ""}>
      <CardHeader className={compact ? "pb-3" : ""}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className={compact ? "text-base mb-1" : "text-xl mb-1"}>{surgery.type}</CardTitle>
            <CardDescription className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {surgery.doctor}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {surgery.time}
              </span>
            </CardDescription>
          </div>
          {!compact && (
            <Badge variant={surgery.status === "in-progress" ? "default" : "secondary"}>
              {surgery.status === "in-progress"
                ? "En Progreso"
                : surgery.status === "completed"
                  ? "Completada"
                  : "Programada"}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className={compact ? "space-y-3" : "grid md:grid-cols-2 gap-6"}>
          {/* Duración */}
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Duración Manual</p>
                <p className={compact ? "text-lg font-bold" : "text-2xl font-bold"}>{surgery.manualDuration}</p>
              </div>
              <Clock className={compact ? "h-6 w-6" : "h-8 w-8"} />
            </div>
            <div className="flex items-center justify-between p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <div>
                <p className="text-xs text-primary mb-1">Predicción IA</p>
                <p className={compact ? "text-lg font-bold text-primary" : "text-2xl font-bold text-primary"}>
                  {surgery.aiPrediction}
                </p>
              </div>
              <Clock className={compact ? "h-6 w-6 text-primary" : "h-8 w-8 text-primary"} />
            </div>
          </div>

          {/* Alertas */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-muted-foreground">Alertas Contextuales de IA</h3>
            {surgery.alerts.length > 0 ? (
              <div className="space-y-2">
                {surgery.alerts.map((alert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg"
                  >
                    {alert.type === "credentials" && <User className="h-4 w-4 text-destructive mt-0.5" />}
                    {alert.type === "supplies" && <Package className="h-4 w-4 text-destructive mt-0.5" />}
                    {alert.type === "blood" && <Droplet className="h-4 w-4 text-destructive mt-0.5" />}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-destructive">{alert.message}</p>
                    </div>
                    <AlertCircle className="h-4 w-4 text-destructive" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Sin alertas</p>
              </div>
            )}

            {/* {!compact && ( */}
              <Link href="/presupuestos">
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Ver Análisis de Costos
                </Button>
              </Link>
            {/* )} */}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-balance">Optimizador de Quirófanos</h1>
            <p className="text-muted-foreground">Gestión inteligente del cuello de botella operativo</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setShowBookingModal(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Reservar Quirófano
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="gap-2"
            >
              <LayoutList className="h-4 w-4" />
              Lista
            </Button>
            <Button
              variant={viewMode === "kanban" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("kanban")}
              className="gap-2"
            >
              <LayoutGrid className="h-4 w-4" />
              Kanban
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6 p-6 bg-card rounded-lg shadow-lg">
  {/* Cirugías Hoy */}
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-sm text-muted-foreground">Cirugías Hoy</CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-chart-1">6</span>
        <span className="text-xs text-emerald-600 dark:text-emerald-400">alza reciente</span>
      </div>
      <div className="mt-3 h-16">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dataCir} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
            <Area type="monotone" dataKey="v" stroke="currentColor" fill="currentColor" className="text-chart-1/30" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>

  {/* Precisión IA */}
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-sm text-muted-foreground">Precisión IA</CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-chart-2">94%</span>
        <span className="text-xs text-muted-foreground">objetivo: 96%</span>
      </div>
      <div className="mt-3 h-16">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dataAcc} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
            <Area type="monotone" dataKey="v" stroke="currentColor" fill="currentColor" className="text-chart-2/30" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>

  {/* Tiempo Ahorrado */}
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-sm text-muted-foreground">Tiempo Ahorrado</CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-chart-3">3.2h</span>
        <span className="text-xs text-muted-foreground">últimos 5 días</span>
      </div>
      <div className="mt-3 h-16">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dataTime} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
            <Area type="monotone" dataKey="v" stroke="currentColor" fill="currentColor" className="text-chart-3/30" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
</div>

        {viewMode === "list" ? (
          // List View
          <div className="grid gap-6 mb-6">
            {surgeries.map((surgery) => (
              <SurgeryCard key={surgery.id} surgery={surgery} />
            ))}
          </div>
        ) : (
          // Kanban View
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Programadas Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <h2 className="font-semibold">Programadas</h2>
                <Badge variant="secondary">{surgeriesByStatus.scheduled.length}</Badge>
              </div>
              <div className="space-y-4">
                {surgeriesByStatus.scheduled.map((surgery) => (
                  <SurgeryCard key={surgery.id} surgery={surgery} compact />
                ))}
              </div>
            </div>

            {/* En Progreso Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-primary/20 rounded-lg">
                <h2 className="font-semibold">En Progreso</h2>
                <Badge>{surgeriesByStatus["in-progress"].length}</Badge>
              </div>
              <div className="space-y-4">
                {surgeriesByStatus["in-progress"].map((surgery) => (
                  <SurgeryCard key={surgery.id} surgery={surgery} compact />
                ))}
              </div>
            </div>

            {/* Completadas Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-chart-2/20 rounded-lg">
                <h2 className="font-semibold">Completadas</h2>
                <Badge variant="outline">{surgeriesByStatus.completed.length}</Badge>
              </div>
              <div className="space-y-4">
                {surgeriesByStatus.completed.map((surgery) => (
                  <SurgeryCard key={surgery.id} surgery={surgery} compact />
                ))}
              </div>
            </div>
          </div>
        )}

        <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl">Reservar Quirófano</DialogTitle>
              <DialogDescription>Complete los datos para apartar un quirófano</DialogDescription>
            </DialogHeader>
            {!bookingConfirmed ? (
              <form onSubmit={handleBooking} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="surgery-type">Tipo de Cirugía</Label>
                  <Input id="surgery-type" placeholder="Ej: Colecistectomía Laparoscópica" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor">Médico Cirujano</Label>
                  <Select required>
                    <SelectTrigger id="doctor">
                      <SelectValue placeholder="Seleccionar médico" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="garcia">Dr. García Martínez</SelectItem>
                      <SelectItem value="lopez">Dra. López Hernández</SelectItem>
                      <SelectItem value="rodriguez">Dr. Rodríguez Silva</SelectItem>
                      <SelectItem value="martinez">Dr. Martínez Ruiz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="room">Quirófano</Label>
                  <Select required>
                    <SelectTrigger id="room">
                      <SelectValue placeholder="Seleccionar quirófano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="q1">Quirófano 1</SelectItem>
                      <SelectItem value="q2">Quirófano 2</SelectItem>
                      <SelectItem value="q3">Quirófano 3</SelectItem>
                      <SelectItem value="q4">Quirófano 4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Fecha</Label>
                    <Input id="date" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Hora</Label>
                    <Input id="time" type="time" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duración Estimada</Label>
                  <Select required>
                    <SelectTrigger id="duration">
                      <SelectValue placeholder="Seleccionar duración" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1h">1 hora</SelectItem>
                      <SelectItem value="1.5h">1.5 horas</SelectItem>
                      <SelectItem value="2h">2 horas</SelectItem>
                      <SelectItem value="2.5h">2.5 horas</SelectItem>
                      <SelectItem value="3h">3 horas</SelectItem>
                      <SelectItem value="3.5h">3.5 horas</SelectItem>
                      <SelectItem value="4h">4+ horas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <DialogFooter className="gap-2">
                  <Button type="button" variant="outline" onClick={() => setShowBookingModal(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit">Confirmar Reserva</Button>
                </DialogFooter>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-chart-2/20 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-chart-2" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quirófano Reservado</h3>
                  <p className="text-muted-foreground">La reserva ha sido confirmada exitosamente</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}
