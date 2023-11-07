import Link from "next/link";

const Header = () => {
    return ( 
        <div className="Wrapper-route">
            <Link href="/">Home</Link>
            <Link href="/blog">blog</Link>
            <Link href="/about">about</Link>
        </div>
     );
}
 
export default Header;