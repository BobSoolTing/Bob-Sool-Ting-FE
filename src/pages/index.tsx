import Image from 'next/image';
import kakaoLogin from '@/assets/images/kakaoLogin.png';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className='w-[412px] h-[100vh] bg-white'>
      <div className='flex flex-col items-center justify-center h-full gap-8'>
        <div className='h-[300px] text-2xl font-bold'>로고 변경 예정입니다</div>
        <Image
          src={kakaoLogin}
          alt='카카오 로그인 버튼'
          className='w-full max-w-[280px] cursor-pointer'
          onClick={() => {
            router.push('/login');
          }}
        />
      </div>
    </div>
  );
}
