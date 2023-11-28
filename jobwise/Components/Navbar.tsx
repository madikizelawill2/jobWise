import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="border-10 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <h2 className="text-3xl font-bold">JobWise</h2>
            <ul className="hidden h-full gap-12 lg:flex">
              
            </ul>
        </Link>
    </nav>
  )
}

export default Navbar