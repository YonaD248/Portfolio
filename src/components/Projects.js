import Soldier from '../assets/Soldier_Project.png'
import Parking from '../assets/Smart_Parking.png'
import Water from '../assets/Water.png'

export default function Projects(){
    return <section className="flex flex-col py-10 px-5 justify-center bg-primary  text-white" id='projects'>
        <div className="w-full">
            <div className="flex flex-col px-10">
            <h1 className='text-4xl  border-b-4 border-secondary mb-5 w-[150px] font-bold'>
                Projects
            </h1>
            <p className='py-5'>These are some of my projects which helped me to increase my knowledge over the domain of Embedded System and IOT.</p>
            </div>
            
        </div>
        <div className="w-full">
    <div className='flex flex-col md:flex-row gap-5 px-8 py-8'>
        
        <div className='relative group w-1/3'>
            <img className=' size-80  object-cover transition duration-500 ease-in-out group-hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.8)] animate-spin-slow' src={Soldier} />
            <div className='project-display'>
                <p className='text-white text-center'>Developed a robust system using ESP-NOW protocol.</p>
            </div>
        </div>

        
        <div className='relative group w-1/3'>
            <img className='size-80 object-cover transition duration-500 ease-in-out group-hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.8)] animate-spin-slow' src={Parking} />
            <div className='project-display'>
                <p className='text-white text-center'>Developed a Smart Parking System, where users can easily get to know about parking slot vacancies.</p>
            </div>
        </div>

        
        <div className='relative group w-1/3'>
            <img className='size-80 object-cover transition duration-500 ease-in-out group-hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.8)] animate-spin-slow' src={Water} />
            <div className='project-display'>
                <p className='text-white text-center'>Implemented an automated hydroponics system using Arduino microcontroller and sensors.</p>
            </div>
        </div>
    </div>
</div>




    </section>
}