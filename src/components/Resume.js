import ResumeImg from '../assets/Resume.png';

export default function Resume() {
    return (
        <section id='resume' className='flex flex-col md:flex-row bg-secondary justify-center pt-10'>
            <div className='px-15 md:w-1/3 flex justify-center py-5'>
                <img 
                    className='size-80 rounded-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.8)] ' 
                    src={ResumeImg} 
                    alt="Resume" 
                />
            </div>
            <div className='md:w-1/2 justify-center py-12'>
                <div className='flex flex-col text-white px-2 pl-9 pr-5'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[150px] font-bold'>Resume</h1>
                    <p className='pb-5'>
                        You can view my resume here. <a className='btn' href='#' >Download</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
