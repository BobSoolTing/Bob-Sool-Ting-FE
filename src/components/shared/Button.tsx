import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <div className='w-[380px] h-[50px] relative overflow-hidden rounded-md bg-[#2f7dff] mx-auto cursor-pointer hover:bg-[#2768FF]'>
      <p className='w-[210.54px] h-10 absolute left-[85px] top-[5px] text-xl font-bold text-center text-white content-center'>
        {children}
      </p>
    </div>
  );
}
