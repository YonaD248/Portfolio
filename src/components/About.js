import AboutImg from '../assets/About.png';

export default function About(){
    return <section className='flex flex-col md:flex-row bg-secondary justify-center px-5' id='about'>
        <div className=' px-15 md:w-1/3'>
            <img className='h-[400px]' src={AboutImg}/>
        </div>
        <div className='md:w-1/2 justify-center py-12'>
            <div className='flex flex-col  text-white px-2 pl-9 pr-5'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[200px] font-bold'>About Me</h1>
        <p className='pb-5'>Hello! I'm YONA D, a passionate web developer and embedded systems enthusiast with a strong focus on creating innovative and user-friendly solutions. </p>
        <p className='pb-5'>I love working on projects that combine creativity and technology to solve real-world problems.</p>
            </div>

        </div>
    </section>
}