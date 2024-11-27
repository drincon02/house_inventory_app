import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="top-0 left-0 fixed w-full flex flex-row justify-evenly items-center my-7 font-sans text-lg font-bold">
            <Link className="hover:border-dashed hover:border-2 border-cyan-500 p-4" href="/">Products</Link>
            <Link className="hover:border-dashed hover:border-2 border-cyan-500 p-4" href="/reports">Reports</Link> 
        </nav>
    );
}