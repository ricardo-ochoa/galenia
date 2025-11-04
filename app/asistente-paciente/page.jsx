import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, CheckCircle2, Globe2, MapPin, FileCheck } from "lucide-react"

export default function AsistentePacientePage() {
  const chatMessages = [
    { type: "user", text: "¿Dónde está el consultorio 105?" },
    { type: "bot", text: "El consultorio 105 se encuentra en el segundo piso, ala este. Te muestro el mapa:" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-balance">Asistente de Paciente</h1>
          <p className="text-muted-foreground">Eficiencia operativa y experiencia mejorada</p>
        </div>

        {/* Métricas de Eficiencia */}
        <div className="grid md:grid-cols-4 gap-4 mb-6 p-6 bg-card rounded-lg shadow-lg">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Consultas Diarias</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">342</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Satisfacción</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-chart-1">4.8/5</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Tiempo Ahorrado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-chart-2">18h</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Errores Evitados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-chart-3">47</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Asistente Virtual */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-chart-1" />
                <CardTitle>Asistente Virtual</CardTitle>
              </div>
              <CardDescription>Bot inteligente para consultas frecuentes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Chat Interface Mockup */}
                <div className="border rounded-lg p-4 bg-muted/30 min-h-[300px] flex flex-col">
                  <div className="flex-1 space-y-3 mb-4">
                    {chatMessages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.type === "user" ? "bg-primary text-primary-foreground" : "bg-background border"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    ))}

                    {/* Map Mockup */}
                    <div className="flex justify-start">
                      <div className="max-w-[80%] p-3 rounded-lg bg-background border">
                        <div className="bg-muted rounded-md p-6 flex items-center justify-center mb-2">
                          <MapPin className="h-12 w-12 text-chart-1" />
                        </div>
                        <p className="text-xs text-muted-foreground">Mapa interactivo del hospital</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Escribe tu pregunta..."
                      className="flex-1 px-3 py-2 bg-background border rounded-md text-sm"
                      disabled
                    />
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
                      Enviar
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-chart-1">89%</p>
                    <p className="text-xs text-muted-foreground">Consultas resueltas</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-chart-2">2.3m</p>
                    <p className="text-xs text-muted-foreground">Tiempo promedio</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verificación de Firma */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-chart-2" />
                <CardTitle>Verificación de Ingreso</CardTitle>
              </div>
              <CardDescription>Sistema de verificación automática con IA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Verification Mockup */}
                <div className="border rounded-lg p-4 bg-muted/30">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {/* ID Photo */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Identificación Oficial</p>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center border-2 border-chart-2">
                        <div className="text-center">
                          <FileCheck className="h-12 w-12 text-chart-2 mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground">INE Escaneada</p>
                        </div>
                      </div>
                    </div>

                    {/* Signature */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Firma del Paciente</p>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center border-2 border-chart-2">
                        <div className="text-center">
                          <div className="text-4xl font-signature mb-2">María González</div>
                          <p className="text-xs text-muted-foreground">Firma Digital</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Verification Result */}
                  <div className="p-4 bg-chart-2/10 border-2 border-chart-2 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-8 w-8 text-chart-2" />
                      <div className="flex-1">
                        <p className="font-semibold text-chart-2 mb-1">Firma Verificada por IA</p>
                        <p className="text-sm text-muted-foreground">Coincidencia: 98.7% • Identidad confirmada</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm">Tiempo de verificación</span>
                    <span className="text-sm font-semibold text-chart-2">1.2 seg</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm">Precisión del sistema</span>
                    <span className="text-sm font-semibold text-chart-2">99.2%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm">Errores evitados (mes)</span>
                    <span className="text-sm font-semibold text-chart-2">47</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Asistencia Multilingüe */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe2 className="h-5 w-5 text-chart-3" />
              <CardTitle>Asistencia Multilingüe</CardTitle>
            </div>
            <CardDescription>Soporte en múltiples idiomas para turismo médico</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">🇺🇸</span>
                  <Badge variant="secondary">Inglés</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Soporte completo 24/7</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">🇪🇸</span>
                  <Badge variant="secondary">Español</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Idioma principal</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">🇫🇷</span>
                  <Badge variant="secondary">Francés</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Disponible en horario extendido</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
