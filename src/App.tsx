import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout } from "@/components/Layout"
import { ServiceCard } from "@/components/ServiceCard"
import { ArrowRight, CheckCircle } from "lucide-react"

function App() {
  const services = [
    {
      icon: "🚀",
      title: "Product Development",
      description: "Custom web applications using React, Vue, and Angular. Full-stack development with Node.js and TypeScript."
    },
    {
      icon: "🎮",
      title: "Game Development",
      description: "Custom game engines and interactive experiences. Multiplayer systems and real-time applications."
    },
    {
      icon: "💡",
      title: "Technical Consulting",
      description: "Frontend architecture and modernization. Technical leadership and team mentoring."
    },
    {
      icon: "🔧",
      title: "Prototype Development",
      description: "Rapid MVP development and proof-of-concept implementations. Technical feasibility assessments."
    }
  ]

  const benefits = [
    "Deep Technical Expertise: Principal-level engineering experience across multiple domains",
    "Full-Stack Capability: From frontend interfaces to backend infrastructure",
    "Product-Minded: Bridge between business goals and technical implementation",
    "Quality Focused: Attention to detail and engineering excellence"
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Sliced Pan Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Technology & Product Development Consulting
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Sliced Pan Solutions is a technology consulting company specializing in modern web development, 
            mobile applications, and innovative product engineering. We help businesses transform ideas into 
            robust, scalable solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/services">View Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-background dark:to-gray-900">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl mb-4">Why Choose Sliced Pan Solutions?</CardTitle>
              <CardDescription className="text-lg">
                Partner with experienced professionals who understand both technology and business
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-8">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how Sliced Pan Solutions can help bring your ideas to life.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">
              Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export default App