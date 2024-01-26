import React, { useMemo } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import { publikphigor } from '@assets/images';

const today = dayjs();
today.locale('en');
const formattedDate = today.format('MMMM D, YYYY');

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
        'white-transparent-bg fixed right-0 top-0 z-[90] flex h-[70px] items-center justify-between border-b border-[#E5EAEF] px-5 py-5 font-inter transition-all duration-[0.05] dark:border-[#26282C] ',
        sidebarExpanded ? 'left-[240px]' : 'left-[80px]'
      )}
    >
      <h1 className="text-[20px] font-semibold capitalize">{nameShown}</h1>
      <div className="flex items-center gap-5">
        <div className="relative overflow-hidden rounded-[24px] border border-transparent focus-within:border-[#DADDDD] dark:border-[#26282C] dark:focus-within:border-[#26282C]">
          <Icon
            icon="eva:search-outline"
            className="absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-[#78828A]"
          />
          <input
            type="text"
            className="w-[350px] rounded-[24px] border-none bg-white py-3 pl-10 pr-4 transition-all duration-200 focus:outline-none focus:ring-0 dark:bg-transparent  dark:text-white-text dark:placeholder-[#78828A]"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <Icon
            icon="solar:calendar-linear"
            className="size-[20px] text-black dark:text-white-text"
          />
          <span className="text-[14px] font-medium">
            {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
          </span>
        </div>
        <div className="border-primary flex size-[40px] items-center justify-center rounded-full border">
          <Icon icon="solar:bell-outline" className="size-[20px]" />
        </div>
        <div className="flex items-center justify-between gap-3 rounded-[28px] border border-[#DADDDD] p-1 dark:border-[#26282C]">
          <img
            src={publikphigor}
            alt="publikphigor"
            className="border-primary size-[38px] rounded-full border"
          />
          <div className="flex flex-col text-right">
            <h3 className="text-[16px]">Koladele Olaitan</h3>
            <a href="mailto:koladeleolaitan@gmail.com" className="text-[14px] text-[##787486]">
              koladeleolaitan@gmail.com
            </a>
          </div>
          <Icon icon="eva:arrow-ios-downward-outline" className="size-[20px]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
