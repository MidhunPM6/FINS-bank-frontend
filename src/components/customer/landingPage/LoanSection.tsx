import Image from 'next/image'
import LoanImg from '../../../../public/LoanImg.jpg'
import Mybutton from '@/components/ui/Button'

const LoanSection = () => {
  return (
    <>
      <section className='lg:flex-row flex flex-col justify-evenly items-center bg-gray-100 lg:min-h-[70vh]  p-4'>
        <figure>
          <Image
            src={LoanImg}
            alt='Taking loan'
            width={600}
            className='rounded-sm'
          />
        </figure>

        <div className=' p-2 flex flex-col justify-center items-center'>
          <div className='flex flex-col text-center  mb-10 '>
            <h1 className='text-4xl font-semibold text-gray-700'>
              Empowering You to Learn,
            </h1>
            <p className='text-gray-600 mt-2 lg:w-[30vw] leading-7 p-2 '>
              From beginners taking their first step to professionals sharpening
              their edge, our platform delivers trusted, high-quality content
              for everyone.
            </p>
          </div>
          <Mybutton
            variant='contained'
            size='large'
            sx={{ backgroundColor: '#0083E6' }}
            label='Get Home Loan'
          />
        </div>
      </section>
    </>
  )
}

export default LoanSection
