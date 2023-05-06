import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;
  const router = useRouter();
  const { t } = useTranslation('common');

  const changeTo = router.locale === 'en-US' ? 'zh-CN' : 'en-US';

  return (
    <header aria-label="Site Header" className={cn('bg-white', className)}>
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority={true}
          />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/about"
                >
                  About
                </Link>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/careers"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/history"
                >
                  History
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-opacity-80"
                href="/"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-200 px-5 py-2.5 text-sm font-medium text-black transition hover:text-black/80 sm:block"
                href="/"
              >
                Register
              </a>
              <Link
                className="hidden rounded-md bg-gray-200 px-5 py-2.5 text-sm font-medium text-black transition hover:text-black/80 sm:block"
                href="/"
                locale={changeTo}
              >
                {t('change-locale', { locale: changeTo })}
              </Link>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
