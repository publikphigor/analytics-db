/* eslint-disable react/jsx-props-no-spreading */
import { SVGProps } from 'react';

const TotalIncomeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <path
        fill="#34CAA5"
        d="M9.99 17.98A7.99 7.99 0 1 0 9.99 2a7.99 7.99 0 0 0 0 15.98Z"
        opacity={0.4}
      />
      <path
        fill="#34CAA5"
        d="M21.97 15.99c0 3.3-2.68 5.98-5.98 5.98a5.97 5.97 0 0 1-4.91-2.57 9.458 9.458 0 0 0 8.32-8.32 5.97 5.97 0 0 1 2.57 4.91ZM11.45 9.71l-2.4-.84c-.24-.08-.29-.1-.29-.45 0-.26.18-.47.41-.47h1.5c.32 0 .58.29.58.65 0 .41.34.75.75.75s.75-.34.75-.75c0-1.15-.89-2.09-2-2.14v-.05a.749.749 0 1 0-1.5 0v.05h-.09c-1.05 0-1.91.88-1.91 1.97 0 .95.42 1.56 1.29 1.86l2.41.84c.24.08.29.1.29.45 0 .26-.18.47-.41.47h-1.5c-.32 0-.58-.29-.58-.65 0-.41-.34-.75-.75-.75s-.75.34-.75.75c0 1.15.89 2.09 2 2.14v.06c0 .41.34.75.75.75s.75-.34.75-.75v-.05h.09c1.05 0 1.91-.88 1.91-1.97 0-.95-.43-1.56-1.3-1.87Z"
      />
    </svg>
  );
};

export default TotalIncomeIcon;
