import cn from 'classnames';
import React, { ReactNode } from 'react';

import { Header } from '../Header';

interface LayoutProps {
  className?: string;
  children: string | ReactNode;
}

export function Layout(props: LayoutProps) {
  const { className, children } = props;

  return (
    <div className={cn(className)}>
      <Header />
      <main className="container mx-auto">{children}</main>
      <footer className="flex items-center justify-center py-4 whitespace-pre">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://nextjs.org/"
          className="underline underline-offset-1"
        >
          Next.js
        </a>
      </footer>
    </div>
  );
}
