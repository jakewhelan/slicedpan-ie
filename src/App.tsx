import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Code, Globe } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Welcome to SlicedPan.ie
          </h1>
          <p className="text-xl text-muted-foreground">
            A simple React app with shadcn/ui and Tailwind CSS
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                Fast Development
              </CardTitle>
              <CardDescription>
                Built with Vite for lightning-fast development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Experience instant hot module replacement and optimized builds
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Modern Stack
              </CardTitle>
              <CardDescription>
                React, TypeScript, and Tailwind CSS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Type-safe code with beautiful, responsive design
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Ready to Deploy
              </CardTitle>
              <CardDescription>
                Configured for GitHub Pages deployment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Static site generation with simple deployment process
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
              <CardDescription>
                Start building your next project today
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" size="lg">
                View Documentation
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Browse Components
              </Button>
            </CardContent>
            <CardFooter className="text-center text-sm text-muted-foreground">
              Ready to deploy to GitHub Pages
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App