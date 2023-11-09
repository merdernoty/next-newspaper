import Link from "next/link";
import Navigation from "./Navigation";

const navItems = [
    { label: "Home", href: "/" },
    { label: "blog", href: "/blog" },
    { label: "about", href: "/about" },
];


const Header = () => {
    return ( 
        <div className="Wrapper-route">
            <Navigation navLinks={navItems}/>
        </div>
     );
}
 
export default Header;