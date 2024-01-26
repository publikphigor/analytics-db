import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useScreenWidth from '@hooks/useScreenWidth';
import classNames from 'classnames';
import ScrollToTop from './ScrollToTop';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {}

const DashboardLayout: React.FC<DashboardLayoutProps> = () => {
  const isMobile = useScreenWidth(1024);
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(!isMobile);
  return (
    <ScrollToTop>
      <Header sidebarExpanded={sidebarExpanded} />
      <Sidebar sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
      <main
        className={classNames(
          'bg-grey-bg min-h-full px-4 pb-10 pt-[90px] transition-all duration-[0.05] lg:px-10',
          sidebarExpanded ? 'ml-[16rem]' : 'ml-[4.625rem]'
        )}
      >
        <section className="container h-full">
          <Outlet />
        </section>
      </main>
    </ScrollToTop>
  );
};

export default DashboardLayout;
