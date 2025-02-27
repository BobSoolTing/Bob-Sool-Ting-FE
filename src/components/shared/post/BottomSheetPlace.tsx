// components/shared/post/BottomSheetPlace.tsx
import React, { ReactNode } from 'react';
import BottomSheet from './BottomSheet';

interface BottomSheetPlaceProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheetPlace({ className, children, isOpen, onClose }: BottomSheetPlaceProps) {
  return (
    <BottomSheet className={className} isOpen={isOpen} onClose={onClose}>
      {children}
    </BottomSheet>
  );
}
