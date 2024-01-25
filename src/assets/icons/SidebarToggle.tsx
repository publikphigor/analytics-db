/* eslint-disable react/jsx-props-no-spreading */
import { SVGProps } from 'react';

const SidebarToggle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <path
        stroke="#B2ABAB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 12h6M12.5 15l3-3-3-3"
      />
      <path
        stroke="#B2ABAB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
      />
    </svg>
  );
};

export default SidebarToggle;
