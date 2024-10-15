import HeroImg from '../assets/Hero.png';
import { AiOutlineLinkedin,AiOutlineWhatsApp,AiOutlineMail } from "react-icons/ai";


export default function Hero(){
    const config={
        subtitle:'Im a Electronics & Communication Engineering Student'
    }



    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        

        <div className='md:w-1/2 flex flex-col py-2'>
        <h2 className=' text-white text-5xl font-hero-font py-3'>Hi, <br/>I'm <span className='text-black font-hero-font2 hover:text-white'>YONA D</span>
        <p className='text-2xl '>{config.subtitle}</p>
        </h2>

        <div className='flex'>
            <a href='#' className='pr-3 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href='#' className='pr-3 hover:text-white' ><AiOutlineMail size={40}/></a>
            <a href='#' className=' hover:text-white'><AiOutlineWhatsApp size={40}/></a>
        </div>
        </div>
        <img className = ' md:w-1/3'src={HeroImg}/>
    </section>
}