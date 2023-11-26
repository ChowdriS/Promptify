import Link from 'next/link'

const NavBar = () => {
  return (
    <div className=" flex items-center justify-between mt-0 px-2 text-xl font-semibold text-black bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 h-16">
        <div className='ml-8'>
            Logo
        </div>
        <div className='ml-16'>
            Promptify
        </div>
        <div>
            <Link href='/sign-in' className='mr-5'>SignIn</Link>
            <Link href='/sign-up' className='mr-8'>SignUp</Link>
        </div>
    </div>
  )
}

export default NavBar