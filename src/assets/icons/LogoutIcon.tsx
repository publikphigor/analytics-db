/* eslint-disable react/jsx-props-no-spreading */
import { SVGProps } from 'react';

const LogoutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <path
        stroke="#B2ABAB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M6.56 14.56 4 12l2.56-2.56M9.24 12H4.07M14.24 12h-1.96M18.01 6.48C19.25 7.84 20 9.71 20 12c0 5-3.58 8-8 8M12 4c1.05 0 2.05.17 2.97.49"
      />
    </svg>
  );
};

export default LogoutIcon;
