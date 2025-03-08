import React, { useRef } from 'react';
import Image from 'next/image';
import defaultProfileImage from '@/assets/images/defaultProfileImage.png';
import { useRegisterStore } from '@/stores/register-form';

export default function RegisterProfileImage() {
  const { profileImage, setProfileImage } = useRegisterStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className='flex mx-auto mb-4 justify-center'>
      <div className='relative w-[100px] h-[100px] rounded-full overflow-hidden'>
        <Image
          onClick={handleImageClick}
          src={profileImage || defaultProfileImage}
          alt='프로필 사진'
          fill
          sizes='(max-width: 100px) 100px'
          className='cursor-pointer object-cover'
        />
        <input type='file' ref={fileInputRef} onChange={handleImageChange} accept='image/*' className='hidden' />
      </div>
    </div>
  );
}
