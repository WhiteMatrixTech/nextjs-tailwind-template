import Image from 'next/image';
import React from 'react';

import totFoundLogo from '@/assets/images/404.svg';

export default function NotFoundPage() {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <Image
          src={totFoundLogo}
          alt="NotFound Logo"
          width={300}
          height={24}
          priority={true}
        />
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
      </div>
    </div>
  );
}
