import React, { ReactNode } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import paths from '@constants/paths';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import {
  GridIcon,
  LogoutIcon,
  TrendIcon,
  UsersIcon,
  logo,
  ManageIcon,
  DiscountsIcon,
  InformationIcon,
  SettingsIcon,
} from '@assets/icons';
import SidebarToggle from '@assets/icons/SidebarToggle';

interface SidebarProps {
  sidebarExpanded: boolean;
  setSidebarExpanded: (value: boolean) => void;
}

interface Navigation {
  name: ReactNode;
  icon: ReactNode;
  href: string;
}

const navigation: Navigation[] = [
  {
    name: 'Dashboard',
    icon: <GridIcon />,
    href: paths.dashboard,
  },
  {
    name: 'Analytics',
    icon: <TrendIcon />,
    href: paths.analytics,
  },
  {
    name: 'Users',
    icon: <UsersIcon />,
    href: paths.users,
  },
  {
    name: 'Manage',
    icon: <ManageIcon />,
    href: paths.manage,
  },
  {
    name: 'Discounts',
    icon: <DiscountsIcon />,
    href: paths.discounts,
  },
  {
    name: 'Information',
    icon: <InformationIcon />,
    href: paths.information,
  },
];

const variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.05,
      type: 'linear',
    },
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.05,
      type: 'linear',
    },
  },
};

const Sidebar: React.FC<SidebarProps> = ({ sidebarExpanded, setSidebarExpanded }) => {
  const { pathname } = useLocation();
  const isActive = (href: string) => href === pathname || (href !== '/' && pathname.includes(href));
  return (
    <motion.nav
      initial={false}
      key="sidebar"
      animate={{
        width: sidebarExpanded ? '240px' : '80px',
        transition: {
          duration: 0.05,
          type: 'linear',
        },
      }}
      className={classNames(
        'fixed inset-y-0 z-[91] flex flex-col justify-between overflow-y-auto overflow-x-hidden border-r-2 border-[#EBECF2] bg-[#F7F8FA] pt-5'
      )}
    >
      <div>
        <img
          src={logo}
          alt="logo"
          className={classNames(
            'mx-auto h-[40px] w-[40px] rounded-full transition-all duration-200'
          )}
        />
        <ul className="mt-[28px] flex h-full flex-col gap-[20px]">
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <li
                key={item.href}
                className={`hover:active-indicator px-2 ${active ? 'active-indicator' : ''}`}
              >
                <Link
                  to={item.href}
                  className={classNames(
                    'rounded-5 group flex items-center gap-4 px-2.5 py-[0.4375rem] text-sm font-medium leading-none text-dark transition-colors duration-300',
                    { 'justify-center': !sidebarExpanded }
                  )}
                >
                  {item.icon}
                  <AnimatePresence initial={false}>
                    {sidebarExpanded && (
                      <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={variants}
                        key="secondSlicedNav"
                        className="flex flex-1 items-center justify-between"
                      >
                        {item.name}{' '}
                        {item.name === 'Settings' && (
                          <span className="text-primary ml-auto transition-all duration-300 group-hover:translate-x-1">
                            <Icon icon="eva:arrow-ios-forward-outline" />
                          </span>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            );
          })}
          <div
            className={classNames(
              'mx-auto flex w-max items-center justify-center gap-4 rounded-full bg-white p-2',
              {
                'flex-col': !sidebarExpanded,
              }
            )}
          >
            <Icon icon="bitcoin-icons:sun-filled" className="size-[30px] text-[#B2ABAB]" />
            <Icon icon="bitcoin-icons:moon-filled" className="size-[30px] text-[#B2ABAB]" />
          </div>
          <div className="mt-auto grid gap-[20px]">
            <li className="px-2">
              <button
                type="button"
                onClick={() => {}}
                className={classNames(
                  'rounded-5 text-text-grey primary-transition hover:bg-delete group flex w-full items-center gap-x-4 px-2.5 py-[0.4375rem] text-sm',
                  { 'justify-center': !sidebarExpanded }
                )}
              >
                <LogoutIcon className="primary-transition text-grey-text" />
                <AnimatePresence initial={false}>
                  {sidebarExpanded && (
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={variants}
                      key="logout"
                    >
                      Logout
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </li>
            <li className="px-2">
              <button
                type="button"
                onClick={() => {}}
                className={classNames(
                  'rounded-5 text-text-grey primary-transition hover:bg-delete group flex w-full items-center gap-x-4 px-2.5 py-[0.4375rem] text-sm',
                  { 'justify-center': !sidebarExpanded }
                )}
              >
                <SettingsIcon className="primary-transition text-grey-text" />
                <AnimatePresence initial={false}>
                  {sidebarExpanded && (
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={variants}
                      key="settings"
                    >
                      Settings
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </li>
            <li className="px-2">
              <button
                onClick={() => setSidebarExpanded(!sidebarExpanded)}
                type="button"
                className={classNames('group flex px-2.5 py-[0.4375rem]', {
                  'mx-auto block justify-center px-0': !sidebarExpanded,
                  'w-full justify-end': sidebarExpanded,
                })}
                aria-label="sidebar-open"
              >
                <SidebarToggle
                  className={classNames(
                    'transition-all duration-500',
                    sidebarExpanded
                      ? 'scale-x-[-1] group-hover:-translate-x-1'
                      : 'scale-x-[1] group-hover:translate-x-1'
                  )}
                />
              </button>
            </li>
          </div>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Sidebar;
