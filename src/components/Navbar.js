import Hamburger from 'hamburger-react'
import { useEffect, useState } from 'react'
import Logo from "../assets/logo.png"

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [menuBtnColor, setMenuBtnColor] = useState("#fff");

    const handleMenuToggle = () => {
        if (!menu && window.scrollY < 300) {
            setMenuBtnColor("#000")
        }

        if (menu && window.scrollY < 300) {
            setMenuBtnColor("#fff")
        }
        setMenu(!menu);
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        var navbar = document.getElementById("navbar");
        var menuDesktop = document.getElementById("menu-desktop");
        var menuMobile = document.getElementById("menu-mobile");

        window.addEventListener("scroll", () => {
            var scroll = window.scrollY;
            if (scroll > 300) {
                navbar.style.backgroundColor = "rgba(277,277,277,1)"
                navbar.style.boxShadow = "0px 1px 20px -12px rgba(0,0,0,0.82)";
                menuDesktop.style.color = "black"
                menuMobile.style.color = "black"
                setMenuBtnColor("#000")
            } else {
                navbar.style.backgroundColor = "rgba(0,0,0,0)"
                navbar.style.boxShadow = "0 0"
                menuDesktop.style.color = "white"
                menuMobile.style.color = "black"
                setMenuBtnColor("#fff")
            }
        })
    }, [])

    return (
        <>
            <div id="navbar" className="w-full h-14 fixed justify-between flex items-center px-10 z-20 transition-all">
                <div id="logo" className="h-10 w-10 hover:cursor-pointer" onClick={scrollToTop}>
                    <img src={Logo} className="object-cover" alt='logo'></img>
                </div>
                <div onClick={handleMenuToggle} className="sm:hidden">
                    <Hamburger size={25} color={menuBtnColor}></Hamburger>
                </div>

                <ul id="menu-desktop" className='max-sm:hidden flex gap-8 text-sm text-white'>
                    <li>
                        <a href='/' className='hover:text-lime-400 transition-all'>Beranda</a>
                    </li>
                    <li>
                        <a href='/profil-usaha' className='hover:text-lime-400 transition-all'>Profil Usaha</a>
                    </li>
                    <li>
                        <a href='/unit-usaha' className='hover:text-lime-400 transition-all'>Unit Usaha</a>
                    </li>
                    <li>
                        <a href='/galeri' className='hover:text-lime-400 transition-all'>Galeri</a>
                    </li>
                </ul>
            </div>

            <ul id="menu-mobile" className={`font-sans w-screen px-10 flex flex-col gap-4 h-screen pt-20 font-semibold bg-white transition-all fixed ${menu ? "opacity-100" : "opacity-0 hidden"} lg:hidden z-10`}>
                <li><a href='/'>Beranda</a></li>
                <li><a href='/profil-usaha'>Profil Usaha</a></li>
                <li><a href='/unit-usaha'>Unit Usaha</a></li>
                <li><a href='/galeri'>Galeri</a></li>
            </ul>
        </>
    )
}
