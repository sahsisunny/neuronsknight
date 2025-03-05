import { ChevronRight as ChessKnight } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ChessKnight className="h-6 w-6" />
              <span className="font-bold text-xl">Neurons Knight</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering chess players worldwide with expert training and resources.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-sm text-muted-foreground hover:text-foreground">Courses</Link></li>
              <li><Link href="/tournaments" className="text-sm text-muted-foreground hover:text-foreground">Tournaments</Link></li>
              <li><Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground">Shop</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">Twitter</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Neurons Knight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}