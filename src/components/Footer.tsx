import { Mail, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium">Sliced Pan Solutions</p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Sliced Pan Solutions. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:jake@slicedpan.ie" className="hover:text-primary transition-colors">
                jake@slicedpan.ie
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Tramore, Ireland</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}