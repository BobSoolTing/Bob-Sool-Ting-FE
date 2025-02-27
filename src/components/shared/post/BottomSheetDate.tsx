// components/shared/post/BottomSheetDate.tsx
import React, { ReactNode } from 'react';
import BottomSheet from './BottomSheet';

interface BottomSheetDateProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheetDate({ className, children, isOpen, onClose }: BottomSheetDateProps) {
  return (
    <BottomSheet className={className} isOpen={isOpen} onClose={onClose}>
      {children}
    </BottomSheet>
  );
}
