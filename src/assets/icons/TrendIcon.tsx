/* eslint-disable react/jsx-props-no-spreading */
import { SVGProps } from 'react';

const TrendIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <path
        stroke="#B2ABAB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      />
      <path
        stroke="#B2ABAB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.17 12-.47-.7-3.2 3.2M16.5 9.5l-1.51 1.51L14 12M14.5 9.5h2v2"
      />
    </svg>
  );
};

export default TrendIcon;
