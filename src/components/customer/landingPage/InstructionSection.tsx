import Image from 'next/image'
import React from 'react'
import InstructionImg from '../../../../public/InstructionImg.png'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

const InstructionSection = () => {
  const accountOpeningSteps = [
    {
      id: 1,
      point:
        'Choose Your Account Type – Select Savings (for individuals) or Current (for businesses).'
    },
    {
      id: 2,
      point:
        'Fill in Your Details – Provide personal information and upload required KYC documents.'
    },
    {
      id: 3,
      point: 'Verification – Our system verifies your details securely.'
    },
    {
      id: 4,
      point:
        'Start Banking – Once approved, access your dashboard to view balance, make transactions, and manage your account.'
    }
  ]

  return (
    <>
      <section className='lg:flex-row flex flex-col justify-around items-center min-h-[60vh] gap-2'>
        <figure>
          <Image
            src={InstructionImg}
            alt='banking form'
            width={350}
            height={350}
          />
        </figure>

        <div className='border border-gray-300 p-8 rounded-sm shadow hover:shadow-lg transition-all duration-300 lg:m-0  m-3'>
          <h1 className='text-center text-2xl font-semibold mb-6'>
            How to Get Started with FINS
          </h1>
          {accountOpeningSteps?.map(points => (
            <div key={points.id} className='flex gap-5  lg:w-[40vw] p-2'>
              <KeyboardDoubleArrowRightIcon color='primary' />

              <p className=''>{points.point}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default InstructionSection
