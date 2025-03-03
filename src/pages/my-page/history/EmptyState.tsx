interface EmptyStateProps {
  title: string;
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, message }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='text-xl font-bold text-[#767676]'>{title}</span>
      <span className='text-sm text-[#999]'>{message}</span>
    </div>
  );
};

export default EmptyState;
