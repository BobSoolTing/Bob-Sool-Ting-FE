import Image from 'next/image';
import kakaoLogin from '@/assets/images/kakaoLogin.png';

export default function Home() {
  const rest_api_key = process.env.NEXT_PUBLIC_KAKAO_CLIENT_KEY;
  const redirect_url = 'http://localhost:3000/login';
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_url}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <div className='w-[412px] h-[100vh] bg-white'>
      <div className='flex flex-col items-center justify-center h-full gap-8'>
        <div className='h-[300px] text-2xl font-bold'>로고 변경 예정입니다</div>
        <Image
          src={kakaoLogin}
          alt='카카오 로그인 버튼'
          className='w-full max-w-[280px] cursor-pointer'
          onClick={() => {
            handleLogin();
          }}
        />
      </div>
    </div>
  );
}
