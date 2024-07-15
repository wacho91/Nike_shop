import HeroPng from '../assets/shoes.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { FaPlay } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='bg-primary text-white'>
        <div className="container grid grid-cols-1 md:grid-cols-3 min-h-[700px]">
            {/*Brand Info*/}
            <div className='flex flex-col justify-end py-14 md:py-20'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                    <h1 className='text-3xl uppercase font-semibold'>Jordan 1 Red</h1>
                    <p>
                        Release date 
                        <br />
                        10/08/2024 <br />
                        color way
                        <br />
                        red
                    </p>
                    {/*Select size section*/}
                    <div className='max-w-[250px] space-y-3 mx-auto md:mx-0'>
                        <p>Select sisze (IN)</p>
                        <div className='flex gap-3 flex-wrap justify-center md:justify-start relative z-10'>
                            <p className='size-box'>sm</p>
                            <p className='size-box'>md</p>
                            <p className='size-box'>lg</p>
                            <p className='size-box'>xl</p>
                            <p className='size-box'>8</p>
                            <p className='size-box'>9</p>
                            <p className='size-box'>10</p>
                            <p className='size-box'>11</p>
                            <p className='size-box'>12</p>
                            <p className='size-box'>13</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/*Hero image section*/}
            <div className='flex flex-col justify-center items-center relative gap-16'>
                <img src={HeroPng} alt="img" className='max-w-[400px] md:max-w-[500px] relative z-10 brightness-110' />

                {/*Play Icon*/}
                <div className='flex gap-4 items-center'>
                    <button className='h-8 w-8 bg-red-500 flex justify-center items-center p-3 rounded-full hover:scale-110 duration-200 mb-10'>
                        <FaPlay />
                    </button>
                    <p className='mb-10'>PLAY VIDEO</p>
                </div>
            </div>
            {/*Left side section*/}
            {/*Right side section*/}
        </div>
    </section>
  )
}

export default Hero
