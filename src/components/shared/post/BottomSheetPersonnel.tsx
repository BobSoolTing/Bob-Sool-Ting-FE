// components/shared/post/BottomSheetPersonnel.tsx
import React, { ReactNode } from 'react';
import BottomSheet from './BottomSheet';

interface BottomSheetPersonnelProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheetPersonnel({ className, children, isOpen, onClose }: BottomSheetPersonnelProps) {
  return (
    <BottomSheet className={className} isOpen={isOpen} onClose={onClose}>
      {children}
    </BottomSheet>
  );
}
