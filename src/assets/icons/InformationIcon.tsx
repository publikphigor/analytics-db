/* eslint-disable react/jsx-props-no-spreading */
import { SVGProps } from 'react';

const InformationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <path
        stroke="#B2ABAB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v5M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
      />
      <path
        stroke="#B2ABAB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.995 16h.009"
      />
    </svg>
  );
};

export default InformationIcon;
