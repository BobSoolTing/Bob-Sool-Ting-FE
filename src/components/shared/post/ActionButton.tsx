import React from 'react';

interface ActionButtonProps {
  type: 'reject' | 'accept';
  onClick: () => void;
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ type, onClick, children }) => {
  const bgColor = type === 'reject' ? 'bg-[#999] hover:bg-[#8A8A8A]' : 'bg-[#2f7dff] hover:bg-[#2768FF]';

  return (
    <button className={`flex-1 h-[50px] flex items-center justify-center rounded-md ${bgColor} text-white transition-colors`} onClick={onClick}>
      <span className='text-xl font-bold'>{children}</span>
    </button>
  );
};

export default ActionButton;
