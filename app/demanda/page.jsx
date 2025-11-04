import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Globe, Star, Flame, Snowflake } from "lucide-react"

export default function DemandaPage() {
  const leads = [
    {
      id: 1,
      name: "María González",
      country: "USA",
      procedure: "Cirugía Bariátrica",
      status: "hot",
      probability: 92,
      sentiment: "positive",
    },
    {
      id: 2,
      name: "John Smith",
      country: "Canada",
      procedure: "Cirugía Plástica",
      status: "hot",
      probability: 88,
      sentiment: "positive",
    },
    {
      id: 3,
      name: "Carlos Mendoza",
      country: "Colombia",
      procedure: "Ortopedia",
      status: "warm",
      probability: 65,
      sentiment: "neutral",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      country: "USA",
      procedure: "Dental",
      status: "cold",
      probability: 32,
      sentiment: "neutral",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-balance">Predicción de Demanda</h1>
          <p className="text-muted-foreground">Crecimiento comercial impulsado por IA</p>
        </div>


        {/* Métricas */}
        <div className="grid md:grid-cols-4 gap-4 mt-6 mb-6 p-6 bg-card rounded-lg shadow-lg">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Leads Totales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">47</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Tasa de Conversión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-chart-1">68%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Valor Promedio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-chart-2">$12.5K</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Ingresos Proyectados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-chart-3">$587K</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Tendencias Predictivas */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-chart-1" />
                <CardTitle>Demanda Predictiva de Servicios</CardTitle>
              </div>
              <CardDescription>Basado en búsquedas internacionales y tendencias</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-chart-1/10 border border-chart-1/20 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Cirugía Bariátrica</span>
                  <Badge className="bg-chart-1 text-primary-foreground">+30% Q4</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-chart-1 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Alta demanda de USA y Canadá</p>
              </div>

              <div className="p-4 bg-chart-2/10 border border-chart-2/20 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Cirugía Plástica</span>
                  <Badge className="bg-chart-2 text-primary-foreground">+22% Q4</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-chart-2 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Crecimiento sostenido</p>
              </div>

              <div className="p-4 bg-chart-3/10 border border-chart-3/20 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Tratamientos Dentales</span>
                  <Badge className="bg-chart-3 text-primary-foreground">+18% Q4</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-chart-3 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Mercado emergente</p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Ortopedia</span>
                  <Badge variant="secondary">+12% Q4</Badge>
                </div>
                <div className="w-full bg-muted-foreground/20 rounded-full h-2">
                  <div className="bg-muted-foreground h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Demanda estable</p>
              </div>
            </CardContent>
          </Card>

          {/* Análisis de Reputación */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-chart-4" />
                <CardTitle>Análisis de Sentimiento</CardTitle>
              </div>
              <CardDescription>Reputación online y satisfacción</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-chart-4/10 border border-chart-4/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Calificación General</span>
                  <span className="text-3xl font-bold text-chart-4">4.7/5</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`h-4 w-4 ${star <= 4 ? "fill-chart-4 text-chart-4" : "text-muted"}`} />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Basado en 1,247 reseñas</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm">Sentimiento Positivo</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-muted-foreground/20 rounded-full h-2">
                      <div className="bg-chart-2 h-2 rounded-full" style={{ width: "87%" }}></div>
                    </div>
                    <span className="text-sm font-semibold text-chart-2">87%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm">Sentimiento Neutral</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-muted-foreground/20 rounded-full h-2">
                      <div className="bg-muted-foreground h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                    <span className="text-sm font-semibold">10%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm">Sentimiento Negativo</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-muted-foreground/20 rounded-full h-2">
                      <div className="bg-destructive h-2 rounded-full" style={{ width: "3%" }}></div>
                    </div>
                    <span className="text-sm font-semibold text-destructive">3%</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-background border rounded-lg">
                <p className="text-sm font-medium mb-2">Palabras más mencionadas</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Profesional</Badge>
                  <Badge variant="secondary">Limpio</Badge>
                  <Badge variant="secondary">Atención</Badge>
                  <Badge variant="secondary">Moderno</Badge>
                  <Badge variant="secondary">Eficiente</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CRM con IA */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-chart-3" />
              <CardTitle>Leads Calificados por IA</CardTitle>
            </div>
            <CardDescription>Sistema de calificación automática de prospectos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background">
                      {lead.status === "hot" && <Flame className="h-5 w-5 text-destructive" />}
                      {lead.status === "warm" && <TrendingUp className="h-5 w-5 text-chart-4" />}
                      {lead.status === "cold" && <Snowflake className="h-5 w-5 text-chart-1" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium">{lead.name}</p>
                        <Badge variant="outline" className="text-xs">
                          {lead.country}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{lead.procedure}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Probabilidad</p>
                      <p className="text-lg font-bold">{lead.probability}%</p>
                    </div>
                    <Badge
                      variant={lead.status === "hot" ? "destructive" : lead.status === "warm" ? "default" : "secondary"}
                      className="min-w-20 justify-center"
                    >
                      {lead.status === "hot" ? "Caliente" : lead.status === "warm" ? "Tibio" : "Frío"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  )
}
