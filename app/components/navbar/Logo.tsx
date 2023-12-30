'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Logo = () => {
    const router = useRouter();
  return (
    <Image
    alt="logo"
    width='100'
    height='100'
    className='hidden md:block cursor-pointer'
    src='/images/logo.png'
    />
  )
}

export default Logo