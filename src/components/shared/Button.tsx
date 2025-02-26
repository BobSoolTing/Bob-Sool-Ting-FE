import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  isComplete: boolean;
  onClick?: () => void;
}

export default function Button({ children, className, isComplete, onClick }: ButtonProps) {
  return (
    <div className={className} onClick={onClick}>
      {isComplete ? (
        <div className='w-[380px] h-[50px] flex items-center justify-center rounded-md bg-[#2f7dff] mx-auto cursor-pointer hover:bg-[#2768FF]'>
          <p className='text-xl font-bold text-white'>{children}</p>
        </div>
      ) : (
        <div className='w-[380px] h-[50px] flex items-center justify-center rounded-md bg-[#999999] mx-auto cursor-pointer hover:bg-[#8A8A8A]'>
          <p className='text-xl font-bold text-white'>{children}</p>
        </div>
      )}
    </div>
  );
}
