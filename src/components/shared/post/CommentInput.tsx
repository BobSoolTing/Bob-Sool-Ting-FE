import React, { useState } from 'react';
import Image from 'next/image';
import profileImage from '@/assets/images/profileImage.png';

export default function CommentInput() {
  const [input, setInput] = useState('');

  // 타이핑 할때마다 데이터 업데이트
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // 엔터를 눌렀을 때 전송하기 위한 함수
  const onKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      // 입력된 댓글을 처리하는 로직 (예: 서버에 전송)
      console.log('댓글 전송:', input);

      // 댓글 전송 후 input 초기화
      setInput('');
    }
  };

  return (
    <div className='w-[380px] h-[56px] mx-[16px] mb-[16px]'>
      <div className='w-[380px] h-[56px] flex items-center'>
        <Image className='rounded-full' src={profileImage} alt='Profile' width={40} height={40} />
        <div className='w-[332px] h-[36px] ml-4 rounded-[32px] border border-[#999] flex items-center'>
          <input
            type='text'
            placeholder='댓글을 남겨주세요 :)'
            className='w-[300px] h-[28px] mx-auto outline-none focus:ring-0'
            value={input}
            onChange={onChangeInput}
            onKeyDown={onKeyDownEnter}
          />
        </div>
      </div>
    </div>
  );
}
