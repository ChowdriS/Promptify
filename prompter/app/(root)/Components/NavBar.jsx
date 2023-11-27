import Link from 'next/link'
import { SignedIn,SignedOut,UserButton,auth } from '@clerk/nextjs'

const NavBar = () => {
  const { userId } =auth();
  return (
    <div className=" flex items-center justify-between mt-0 px-2 text-xl font-semibold text-white bg-gradient-to-r from-red-500 via-red-400 to-red-500 h-16">
        <div className='ml-8'>
            Logo
        </div>
        <div className='ml-32'>
            Promptify
          </div>
        <SignedOut>

          <div className='text-white'>
            <Link
              href='sign-in'
              className=' hover:text-black mr-4'
              >
              Sign In
            </Link>
            <Link
              href='sign-up'
              className=' hover:text-black mr-8'
              >
              Sign Up
            </Link>
          </div>
        </SignedOut>
        <SignedIn>
        <div className='flex items-center text-white'>
          <Link href='create-post' className=' hover:text-black mr-8'>
            Create Post
          </Link>
        <div className='mr-8'>
          <UserButton />
        </div>
        </div>
        </SignedIn>
    </div>
  )
}

export default NavBar