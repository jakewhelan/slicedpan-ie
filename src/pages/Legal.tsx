import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import '@/index.css';

function Legal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal & Privacy</h1>
          <p className="text-gray-600">
            Last updated: 2022
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Privacy Policy</CardTitle>
              <CardDescription>
                Sliced Pan Solutions respects your privacy and is committed to protecting your personal information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Information We Collect</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Contact information provided voluntarily through our contact form</li>
                  <li>Technical information from website visits (standard web analytics)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">How We Use Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>To respond to inquiries and provide requested services</li>
                  <li>To improve our website and services</li>
                  <li>To communicate about projects and business matters</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Information Sharing</h3>
                <p className="text-gray-600">
                  We do not sell, trade, or share your personal information with third parties without your consent, except as required by law.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Services</h3>
                <p className="text-gray-600">
                  Sliced Pan Solutions provides technology consulting and development services as described on our website.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Engagement</h3>
                <p className="text-gray-600">
                  All work is performed under separate service agreements that outline specific terms, deliverables, and expectations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Intellectual Property</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Client work: Rights transfer to client upon completion and payment</li>
                  <li>Our tools and methodologies: Remain our intellectual property</li>
                  <li>Open source contributions: Subject to respective licenses</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <p className="text-center text-gray-600">
              For any questions about these policies, please contact us at{' '}
              <a href="mailto:jake@slicedpan.ie" className="text-blue-600 hover:text-blue-700">
                jake@slicedpan.ie
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legal;

// Render the component
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Legal />
  </React.StrictMode>
);