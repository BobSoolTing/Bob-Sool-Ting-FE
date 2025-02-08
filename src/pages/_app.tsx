import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-white'>
      <div className='w-[412px] h-full'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
