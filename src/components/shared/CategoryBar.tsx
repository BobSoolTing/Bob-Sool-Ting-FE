import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

const menuItems = [
    { href: '/bst/bob', label: '밥약' },
    { href: '/bst/sul', label: '술약' },
    { href: '/bst/ting', label: '과팅' },
];

interface CategoryProps {
    children?: ReactNode;
}

export default function CategoryBar({ children }: CategoryProps) {
    const router = useRouter();
    const { pathname } = router;

    const getActiveClass = (targetPath: string) => {
        return pathname.includes(targetPath) ? 'text-[#1B1B1B]' : 'text-[#999]';
    };

    const getActiveLinePosition = () => {
        if (pathname.startsWith('/bst/sul')) return 'left-[50%] -translate-x-[50%]';
        if (pathname.startsWith('/bst/ting')) return 'left-[294px]';
        return 'left-[38px]';
    };

    return (
        <div>
            {children}
            <div className="relative w-[412px]">
                <div className="w-[412px] h-px absolute bottom-0 bg-[#D9D9D9]" />
                <div className={`w-20 h-0.5 absolute bottom-0 duration-300 ${getActiveLinePosition()} bg-[#1B1B1B]`} />
                <div className="relative flex justify-between items-center w-full h-[39px] px-16">
                    {menuItems.map(({ href, label }) => (
                        <Link href={href} key={href}>
                            <p
                                className={`text-base font-medium text-center ${getActiveClass(href)}`}
                            >
                                {label}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}