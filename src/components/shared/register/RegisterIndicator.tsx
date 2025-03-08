import React, { ReactNode } from 'react';

interface RegisterIndicatorProps {
  step: number;
  children: ReactNode;
}

export default function RegisterIndicator({ step, children }: RegisterIndicatorProps) {
  const getProgressPercentage = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return 0;
      case 1:
        return 33;
      case 2:
        return 66;
      case 3:
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className='w-full flex flex-col mb-4'>
      <div className='relative w-full h-[3px] mb-5'>
        <div className='absolute inset-y-0 left-0 bg-[#ccc] w-full h-full'></div>
        <div
          className='absolute inset-y-0 left-0 bg-[#2768ff] h-full transition-all duration-1000 ease-in-out'
          style={{ width: `${getProgressPercentage(step)}%` }}
        ></div>
      </div>
      <h1 className='text-[22px] font-bold text-black'>{children}</h1>
    </div>
  );
}
