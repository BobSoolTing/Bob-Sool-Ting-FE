import React from 'react';
import BottomSheet from '../post/BottomSheet';
import { useRegisterStore } from '@/stores/register-form';

interface MobileCarrierBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileCarrierBottomSheet({ isOpen, onClose }: MobileCarrierBottomSheetProps) {
  const store = useRegisterStore();
  const setMobileCarrier = store.setMobileCarrier;

  const mobileCarriers = [
    { code: 'SKT', name: 'SKT' },
    { code: 'KT', name: 'KT' },
    { code: 'LGUP', name: 'LGU+' },
  ];

  const handleSelectCarrier = (carrierCode: any) => {
    setMobileCarrier(carrierCode);
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} height='280px'>
      <div className='px-4 pt-6 pb-4'>
        <h2 className='text-xl font-bold mb-6'>통신사 선택</h2>
        {mobileCarriers.map((carrier) => (
          <div
            key={carrier.code}
            onClick={() => handleSelectCarrier(carrier.code)}
            className='py-4 border-b last:border-b-0 hover:text-[#2F7DFF] cursor-pointer text-lg'
          >
            {carrier.name}
          </div>
        ))}
      </div>
    </BottomSheet>
  );
}
