
import Link from "next/link"

export default function Footer() {
  return (
    <footer className=" bg-black py-6 md:py-8 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm  text-white text-muted-foreground">
          © 2024 Satish Dhawan Hall of residence. All rights reserved.
        </div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm text-white hover:underline hover:text-gray-500" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-white hover:underline hover:text-gray-500" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  )
}