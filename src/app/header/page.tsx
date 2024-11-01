import Link from "next/link";
export default function Header() {
  return (


    <header className="bg-blue-950 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Nisha</h1>
      <nav>
        <ul className='flex gap-4'>
          <li> <Link href='/home' target="_blank"> Home </Link></li>
          <li> <Link href='/about' target="_blank">About</Link></li>
          <li> <Link href='/portfolio' target ="_blank">Portfolio</Link></li>

        </ul>

      </nav> 
    </header>

  );
}
