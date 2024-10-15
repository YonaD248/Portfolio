import { Bars3Icon } from '@heroicons/react/24/solid'
import { useCallback, useState } from 'react'


export default function Header(){
  const [ToggleMenu,setToggleMenu] = useState(false);


    return <header className="flex justify-between px-5 py-2 bg-primary">
        <a className="font-bold text-black" href="#">YONA D</a>
        
        <nav className="hidden md:block">
        
        <ul className="flex text-white">
            <li><a href="/">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href='#resume'>RESUME</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
        </nav>

       {ToggleMenu && <nav className="block md:hidden">
        <ul onClick={()=>setToggleMenu(!ToggleMenu)} className="flex flex-col text-white  mobile-nav ">
            <li><a href="#">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
            
        </ul>
        </nav>}

        <button onClick={()=>setToggleMenu(!ToggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}