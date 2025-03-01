// 본문 입력 컴포넌트
export default function ContentInput({ updateFormData }: { updateFormData: (field: string, value: string) => void }) {
  return (
    <div className='w-full flex-1 mb-4'>
      <input
        className='text-lg font-medium text-[#999999] border-0 focus:outline-none'
        placeholder='본문 내용을 작성해 주세요'
        onChange={(e) => updateFormData('content', e.target.value)}
      />
    </div>
  );
}
