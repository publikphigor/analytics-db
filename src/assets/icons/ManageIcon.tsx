/* eslint-disable react/jsx-props-no-spreading */
import { SVGProps } from 'react';

const ManageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <path
        stroke="#B7B0B0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.17 7.44 12 12.55l8.77-5.08M12 21.61v-9.07"
      />
      <path
        stroke="#B7B0B0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.39 9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.97c1.14-.63 3.01-.63 4.15 0l5.34 2.97c1.21.67 2.2 2.35 2.2 3.73v5.65c0 1.38-.99 3.06-2.2 3.73l-5.34 2.97c-1.14.63-3.01.63-4.15 0l-5.34-2.97c-1.21-.67-2.2-2.35-2.2-3.73V14"
      />
      <path
        stroke="#B7B0B0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 13.24V9.58l-6.07-3.51-1.05-.6L7.51 4.1"
      />
    </svg>
  );
};

export default ManageIcon;
