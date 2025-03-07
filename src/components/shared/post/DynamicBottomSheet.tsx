// components/post/DynamicBottomSheet.tsx
import React from 'react';
import { BottomSheetType } from '@/stores/post-form';
import BottomSheetPlace from '@/components/shared/post/BottomSheetPlace';
import BottomSheetDate from '@/components/shared/post/BottomSheetDate';
import BottomSheetPersonnel from '@/components/shared/post/BottomSheetPersonnel';
import BottomSheetCategorySelect from './BottomSheetCategorySelect';

interface DynamicBottomSheetProps {
  activeSheet: BottomSheetType;
  onClose: () => void;
}

const DynamicBottomSheet: React.FC<DynamicBottomSheetProps> = ({ activeSheet, onClose }) => {
  // BottomSheet 렌더링 함수
  switch (activeSheet) {
    case 'place':
      return <BottomSheetPlace isOpen={true} onClose={onClose} />;
    case 'date':
      return <BottomSheetDate height={'380px'} className={'flex justify-center'} isOpen={true} onClose={onClose} />;
    case 'personnel':
      return <BottomSheetPersonnel isOpen={true} onClose={onClose} />;
    case 'category':
      return <BottomSheetCategorySelect isOpen={true} onClose={onClose} />;
    default:
      return null;
  }
};

export default DynamicBottomSheet;
