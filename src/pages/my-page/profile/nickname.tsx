import React from 'react';
import { ReactNode } from 'react';
import { useState } from 'react';
import BottomBar from '@/components/shared/bst/BottomBar';
import Header from '@/components/shared/bst/Header';
import { ClearIcon } from '@/assets/icons/SvgIcon';
import Button from '@/components/shared/Button';

export default function NicknamePage() {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // 8자 이상으로는 입력 제한
    if (value.length <= 8) {
      setText(value);
    }
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <div className='w-[380px] mx-4 my-4'>
      {/* 닉네임 입력 + 글자 수 & 클리어 버튼 */}
      <div className='flex items-center justify-between w-full h-10 border-b border-[#CCC] focus-within:border-[#2768FF] px-[2px]'>
        <input
          type='text'
          value={text}
          onChange={handleChange}
          placeholder='이름 입력'
          className='text-xl text-[#1b1b1b] outline-none bg-transparent w-full'
        />
        <div className='flex items-center gap-2'>
          <div className='text-xl text-[#ccc]'>{text.length}/8</div>
          {text && (
            <button onClick={handleClear}>
              <ClearIcon />
            </button>
          )}
        </div>
      </div>

      {/* 닉네임 안내 문구 */}
      <div className='mt-8 w-full'>
        <p className='text-lg text-left text-[#767676]'>· 닉네임은 최소 두 글자, 최대 여덟 글자까지 작성 가능합니다.</p>
      </div>
    </div>
  );
}

NicknamePage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'닉네임 변경'}</Header>
      <BottomBar>{page}</BottomBar>
      <Button>확인</Button>
    </>
  );
};
