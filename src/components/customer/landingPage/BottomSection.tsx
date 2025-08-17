const BottomSection = () => {
  return (
    <section className='flex flex-col  items-center justify-center bg-cyan-900 lg:min-h-[38vh]'>
      <h1 className='text-4xl font-semibold text-white mt-4'>
        Welcome to FINS
      </h1>
      <h2
        className='text-4xl mt-2 font-semibold  '
        style={{ color: '#33BAEB' }}
      >
        Banking Made Simple
      </h2>
      <p className='lg:w-[70vw] mt-8 text-center text-gray-300'>
        We believe banking should be simple, secure, and accessible to everyone.
        Our platform allows you to open accounts quickly, make transactions
        seamlessly, and track your finances in real time. With advanced security
        measures and 24/7 support, you can manage your money confidently and
        conveniently. Whether you’re saving for the future, paying bills, or
        managing business accounts, our tools and services are designed to help
        you take control of your financial life with ease and peace of mind.
      </p>
    </section>
  )
}

export default BottomSection
