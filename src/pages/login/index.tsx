import React, { useEffect } from 'react';
import axios from 'axios';

export default function LoginPage() {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
    const url = 'http://bobsoolting-server-env.eba-bkceqrym.ap-northeast-2.elasticbeanstalk.com/api/member/auth/kakao';
    const fetchLogin = async () => {
      try {
        const res = await axios.post(url, {
          code: code,
        });
        console.log('하하');
        const data = await res.data;
        console.log(data);
      } catch (err) {
        console.error('로그인 과정 중 에러 발생:', err);
      }
    };
    fetchLogin();
  }, []);
  return (
    <div className='w-[412px] h-[100vh] bg-white'>
      <div className='flex flex-col items-center justify-center h-full gap-8'>
        <div className='text-2xl font-bold'>로그인 중입니다</div>
      </div>
    </div>
  );
}
