import Link from "next/link";


export default function Header() {
  return (
    <header className="p-5 bg-blue-500">
        <Link className="p-2 bg-white text-blue-500 rounded-md" href="/">
            Home
        </Link>
        <Link className="p-2 bg-white text-blue-500 rounded-md" href="/todos">
            ToDos
        </Link>
        <Link className="p-2 bg-white text-blue-500 rounded-md" href="/search">
            Search
        </Link>
    </header>
  )
}