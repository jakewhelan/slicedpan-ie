import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import '@/index.css'

// ServiceCard component
interface ServiceSection {
  title: string;
  items: string[];
}

function ServiceCard({ title, sections }: { title: string; sections: ServiceSection[] }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {sections.map((section, sIndex) => (
          <div key={sIndex}>
            <h4 className="font-semibold mb-2">{section.title}</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {section.items.map((item: string, iIndex: number) => (
                <li key={iIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function Services() {
  const serviceCategories = [
    {
      title: "Web Development",
      sections: [
        {
          title: "Modern Frontend Applications",
          items: [
            "React, Vue, and Angular applications",
            "TypeScript and JavaScript development",
            "Responsive design and mobile optimization",
            "Progressive Web Apps (PWAs)",
            "Performance optimization and accessibility"
          ]
        },
        {
          title: "Backend Development",
          items: [
            "Node.js and Express.js APIs",
            "GraphQL and REST services",
            "Database design and integration",
            "Authentication and security implementation",
            "Microservices architecture"
          ]
        }
      ]
    },
    {
      title: "Mobile Development",
      sections: [
        {
          title: "iOS Applications",
          items: [
            "Native iOS app development",
            "App Store optimization and submission",
            "Integration with backend services",
            "User experience design and testing",
            "Performance monitoring and analytics"
          ]
        }
      ]
    },
    {
      title: "Game Development",
      sections: [
        {
          title: "Interactive Experiences",
          items: [
            "Custom game engines and frameworks",
            "Multiplayer and real-time systems",
            "Web-based gaming platforms",
            "Creative technical solutions",
            "Performance optimization for games"
          ]
        }
      ]
    },
    {
      title: "Technical Consulting",
      sections: [
        {
          title: "Architecture & Strategy",
          items: [
            "Technical architecture design",
            "Technology stack selection",
            "Code review and quality assurance",
            "Performance optimization",
            "Scalability planning"
          ]
        },
        {
          title: "Team Leadership",
          items: [
            "Technical mentoring and training",
            "Process improvement and workflow optimization",
            "Developer tooling and automation",
            "Cross-functional collaboration",
            "Engineering best practices"
          ]
        }
      ]
    },
    {
      title: "Prototype Development",
      sections: [
        {
          title: "Rapid MVP Development",
          items: [
            "Quick proof-of-concept implementations",
            "Technical feasibility assessments",
            "User testing and feedback integration",
            "Iterative development cycles",
            "Path to production planning"
          ]
        }
      ]
    }
  ];

  const industries = [
    "Technology Startups: MVP development and technical leadership",
    "Enterprise: Modernization and digital transformation",
    "Gaming: Interactive experiences and technical innovation",
    "Financial Services: Secure, compliant applications"
  ];

  return (
    <Layout>
      <div className="py-8 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Sliced Pan Solutions offers comprehensive technology consulting and development services to help businesses succeed in the digital landscape.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {serviceCategories.map((category, index) => (
            <ServiceCard key={index} title={category.title} sections={category.sections} />
          ))}
        </div>

        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Industries We Serve</CardTitle>
              <CardDescription>
                We have experience working across various industries, bringing technical expertise tailored to specific domain needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {industries.map((industry, index) => (
                  <li key={index}>{industry}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default Services;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Services />
  </React.StrictMode>,
)