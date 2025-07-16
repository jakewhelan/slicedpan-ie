import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import '@/index.css'

function Contact() {
  return (
    <Layout>
      <div className="py-8 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Ready to bring your ideas to life? Let's discuss how Sliced Pan Solutions can help your business succeed.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="md:col-span-2">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Get in Touch</CardTitle>
              <CardDescription className="text-lg">
                We're based in Tramore, Ireland and work with clients globally
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="py-8">
                <a 
                  href="mailto:jake@slicedpan.ie" 
                  className="text-3xl font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  jake@slicedpan.ie
                </a>
                <p className="text-gray-600 mt-2">Email us directly for the fastest response</p>
              </div>
              <div className="text-gray-600">
                <p className="font-semibold">Location</p>
                <p>Tramore, Ireland</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Let's Discuss Your Project</CardTitle>
              <CardDescription>Whether you're looking to:</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Build a new web or mobile application</li>
                <li>Modernize existing technology</li>
                <li>Develop a game or interactive experience</li>
                <li>Get technical consulting and leadership</li>
                <li>Create a prototype or MVP</li>
              </ul>
              <p className="text-gray-700 font-medium">
                We're here to help turn your vision into reality.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What to Include in Your Message</CardTitle>
              <CardDescription>To help us understand your project better, please include:</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Project Overview:</strong> Brief description of what you want to build</li>
                <li><strong>Timeline:</strong> When you'd like to start and your target completion date</li>
                <li><strong>Budget Range:</strong> Helps us tailor our approach to your needs</li>
                <li><strong>Technical Requirements:</strong> Any specific technologies or constraints</li>
                <li><strong>Goals:</strong> What success looks like for your project</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">How We Work Together</CardTitle>
            <CardDescription>Our streamlined process ensures your project's success</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description: "Free 30-minute call to discuss your needs"
                },
                {
                  step: "2",
                  title: "Proposal",
                  description: "Detailed project scope, timeline, and pricing"
                },
                {
                  step: "3",
                  title: "Development",
                  description: "Agile development with regular updates"
                },
                {
                  step: "4",
                  title: "Launch",
                  description: "Deployment and go-live support"
                },
                {
                  step: "5",
                  title: "Support",
                  description: "Ongoing maintenance and optimization"
                }
              ].map((process) => (
                <div key={process.step} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    {process.step}
                  </div>
                  <h3 className="font-semibold mb-1">{process.title}</h3>
                  <p className="text-sm text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export default Contact;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
)