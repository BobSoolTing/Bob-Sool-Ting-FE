import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchIcon, BobSoolTingIcon, MypageIcon } from '@/assets/icons/SvgIcon';

export default function BottomBar({
    children,
}: {
    children: ReactNode
}) {
    const router = useRouter();
    const { pathname } = router;

    const getActiveClass = (targetPath: string) =>
        pathname === targetPath || pathname.startsWith(targetPath + '/') ? 'text-[#2768FF]' : 'text-[#1B1B1B]';

    return (
        <div>
            {children}
            <div className="fixed bottom-0 w-[412px] h-[56px] bg-white border-t flex justify-around items-center">
                <Link href={'/search'}>
                    <button className={`flex flex-col items-center ${getActiveClass('/search')}`}>
                        <SearchIcon className="fill-current" />
                        <span className="text-xs font-pretendard font-bold">검색</span>
                    </button>
                </Link>
                <Link href={'/bst'}>
                    <button className={`flex flex-col items-center ${getActiveClass('/bst')}`}>
                        <BobSoolTingIcon className="fill-current" />
                        <span className="text-xs font-pretendard font-bold">밥술팅</span>
                    </button>
                </Link>
                <Link href={'/my-page'}>
                    <button className={`flex flex-col items-center ${getActiveClass('/my-page')}`}>
                        <MypageIcon className="fill-current" />
                        <span className="text-xs font-pretendard font-bold">프로필</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}