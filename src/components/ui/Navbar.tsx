"use client"

import Image from 'next/image'
import MainLogo from '../../../public/MainLogo.png'
import SearchInput from './SearchInput'
import Link from 'next/link'
import Mybutton from './Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState<boolean>(false)
  const accountRef = useRef<HTMLDivElement>(null)

  let navlinkList = ['Home', 'Features', 'Open Account', 'Cards', 'Loans']
  let accountLinks = ['Sign In', 'Dashboard', 'Setting']


  
  //  To handle the outclick event for Account menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(e.target as Node)
      ) {
        setAccountMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])




  return (
    <>
      <header>
        <nav className='lg:flex-row flex flex-col p-1 items-center justify-evenly border-b  gap-4'>
          <div className=' w-40 h-16 flex items-center'>
            <Image src={MainLogo} alt='Bank Logo' width={250} height={250} />
          </div>
          <div>
            <SearchInput className='flex-1 w-4 ' placeholder='Search ' />
          </div>

          <ul className='flex gap-4 text-gray-600 lg:text-base text-sm '>
            {navlinkList?.map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                  className='hover:text-black transition-all duration-300 text-sm  '
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div ref={accountRef} className='relative lg:mb-0 mb-4'>
            <Mybutton
              variant='outlined'
              label='Account'
              endIcon={
                <KeyboardArrowDownIcon
                  className={`transform transition-transform duration-500 ${
                    accountMenuOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              }
              size='small'
              onClick={() => setAccountMenuOpen(prev => !prev)}
            />

            {accountMenuOpen && (
              <ul className='absolute left-0 bg-white  w-full rounded-xs mt-1 border border-gray-300 text-sm text-gray-600'>
                {accountLinks?.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                      className='flex  p-2 w-full hover:bg-gray-100 hover:text-black transition-all duration-300 '
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
