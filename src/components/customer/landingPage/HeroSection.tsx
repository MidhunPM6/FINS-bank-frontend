import Mybutton from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'
import HeroImg from '../../../../public/HeroImg.png'

const HeroSection = () => {
  return (
    <section className='lg:flex-row flex flex-col justify-center lg:justify-around items-center bg-gray-100 min-h-[70vh]'>
      <div className='flex flex-col items-center  gap-10'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h1 className='lg:text-5xl text-3xl font-bold text-center lg:mt-0 mt-6'>
            The goal isn't more money.{' '}
          </h1>
          <h2
            className='lg:text-4xl text-2xl text-center text-brandBlue  '
            style={{ color: '#33BAEB' }}
          >
            The goal is living life on your terms.
          </h2>
          <p className='text-center max-w-xl text-gray-600'>
            Build a lifestyle of choice, balance, and independence,where money
            is the tool, not the destination.
          </p>
        </div>
        <Mybutton
          variant='contained'
          sx={{ backgroundColor: '#0083E6' }}
          label='Open a new account'
        />
      </div>

      <figure className='mt-4'>
        <Image src={HeroImg} alt='banking' width={600} height={600} />
      </figure>
    </section>
  )
}

export default HeroSection
