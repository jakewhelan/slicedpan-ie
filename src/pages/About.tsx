import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import '@/index.css'

function About() {
  return (
    <Layout>
      <div className="py-8 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Sliced Pan Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Sliced Pan Solutions was founded to provide high-quality technology consulting and product development services. We specialize in creating innovative solutions that push technological boundaries while maintaining focus on user experience and business impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-12">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">Jake Whelan</CardTitle>
              <CardDescription className="text-lg">Principal Software Engineer & Founder</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Jake brings over 15 years of experience in software engineering and technical leadership. He has led product engineering teams at companies ranging from startups to Fortune 500 enterprises.
              </p>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Expertise</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Frontend Technologies: React, Vue, Angular, TypeScript, JavaScript</li>
                  <li>Backend Development: Node.js, Express, GraphQL, REST APIs</li>
                  <li>Mobile Development: iOS applications and cross-platform solutions</li>
                  <li>Game Development: Custom engines, multiplayer systems, reverse engineering</li>
                  <li>Technical Leadership: Team building, architecture design, product strategy</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Experience Highlights</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Led product engineering for cybersecurity and identity management platforms</li>
                  <li>Architected full-stack solutions serving millions of users</li>
                  <li>Built developer tools and engineering productivity platforms</li>
                  <li>Established technical standards and best practices across organizations</li>
                  <li>Presented to executive teams and enterprise clients</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Technical Excellence",
                description: "Writing clean, maintainable, and performant code"
              },
              {
                title: "User-Centric Design",
                description: "Creating intuitive experiences that solve real problems"
              },
              {
                title: "Agile Development",
                description: "Iterative approach with regular feedback and adaptation"
              },
              {
                title: "Collaborative Partnership",
                description: "Working closely with clients to achieve their goals"
              }
            ].map((approach, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{approach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Founded in 2022 • Tramore, Ireland
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
)