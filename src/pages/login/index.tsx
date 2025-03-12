import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const url = 'http://bobsoolting-server-env.eba-bkceqrym.ap-northeast-2.elasticbeanstalk.com/api/member/auth/kakao';
    const fetchLogin = async () => {
      try {
        const res = await axios.post(url, {
          code: code,
        });
        if (res.status === 200) {
          const data = await res.data;
          localStorage.setItem('accessToken', data.access_token);
          localStorage.setItem('refreshToken', data.refresh_token);
          router.push('/register');
        }
      } catch (err) {
        alert(`로그인 과정 중 에러 발생 : ${err}`);
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
