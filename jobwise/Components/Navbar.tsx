import Link from "next/link"
import { NAV_LINKS } from "../constants"

const Navbar = () => {
  return (
    <nav className="border-4 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <h2 className="text-3xl font-bold">JobWise</h2>
            <ul className="font-bold hidden h-full gap-12 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.href}>
                    {link.label}
                </Link>
              ))}
            </ul>
        </Link>
    </nav>
  )
}

export default Navbar