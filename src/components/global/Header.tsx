import React, { useMemo } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  sidebarExpanded: boolean;
}

const Header: React.FC<HeaderProps> = ({ sidebarExpanded }) => {
  const { pathname } = useLocation();

  const nameShown = useMemo(() => {
    if (pathname === '/') return 'Dashboard';
    const name = pathname.split('/')[1];
    return name.charAt(0).toUpperCase() + name.slice(1);
  }, [pathname]);

  return (
    <header
      className={classNames(
        'border-grey-outline fixed right-0 top-0 z-[90] flex h-[4rem] items-center justify-between border-b bg-white px-10 text-[20px] font-semibold capitalize transition-all duration-[0.05]',
        sidebarExpanded ? 'left-[240px]' : 'left-[80px]'
      )}
    >
      {nameShown}
    </header>
  );
};

export default Header;
