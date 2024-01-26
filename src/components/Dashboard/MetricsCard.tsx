import { downtrend, uptrend } from '@assets/images';
import { Icon } from '@iconify/react/dist/iconify.js';
import classNames from 'classnames';
import React from 'react';

interface MetricsCardProps {
  name: string;
  value: number | string;
  icon: React.ReactNode;
  isPositive: boolean;
  percentage: string;
}

const MetricsCard = ({
  name,
  value,
  icon,
  isPositive,
  percentage,
}: MetricsCardProps): JSX.Element => {
  return (
    <div className="border-primary white-transparent-bg flex flex-col gap-[10px] rounded-[14px] p-4">
      <div className="flex items-center justify-between">
        <div className="border-primary flex size-[40px] items-center justify-center rounded-full">
          {icon}
        </div>
        <div className="h-[32px] w-[100px]">
          {isPositive ? (
            <img src={uptrend} alt="uptrend" className="h-full w-full" />
          ) : (
            <img src={downtrend} alt="downtrend" className="h-full w-full" />
          )}
        </div>
      </div>
      <h3 className="text-[18px] font-medium capitalize text-[#898989]">{name}</h3>
      <h3 className="dark:text-white-text text-[24px] font-semibold capitalize text-[#3A3F51]">
        {value}
      </h3>
      <div className="flex flex-wrap items-center gap-[10px]">
        <div
          className={classNames(
            'flex items-center gap-1 rounded-full px-2 py-1 text-[12px] font-medium',
            isPositive ? 'bg-[#34CAA51F] text-[#34CAA5]' : 'bg-[#ED544E1F] text-[#ED544E]'
          )}
        >
          <Icon
            icon={isPositive ? 'ph:trend-up-bold' : 'ph:trend-down-bold'}
            className={classNames('size-[12px]', isPositive ? 'text-[#34CAA5]' : 'text-[#ED544E]')}
          />
          {percentage}
        </div>
        <span className="font-inter w-max shrink-0 text-sm text-[#606060]">vs. previous month</span>
      </div>
    </div>
  );
};
export default MetricsCard;
