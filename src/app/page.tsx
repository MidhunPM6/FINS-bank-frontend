import BottomSection from '@/components/customer/landingPage/BottomSection'
import HeroSection from '@/components/customer/landingPage/HeroSection'
import InstructionSection from '@/components/customer/landingPage/InstructionSection'
import LoanSection from '@/components/customer/landingPage/LoanSection'
import Navbar from '@/components/ui/Navbar'


export default function Home () {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InstructionSection />
      <LoanSection />
      <BottomSection />
    </>
  )
}
