import Image from 'next/image';
import React from 'react';

export const UserProfile = () => (
  <div className='flex items-center space-x-4'>
    <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
    <Image
      width={40}
      height={40}
      src='/profile.png'
      alt='Profile'
      className='cursor-pointer rounded' />
  </div>
);
