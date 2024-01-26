import { AverageSalesIcon, TotalOrderIcon, TotalRefundIcon } from '@assets/icons';
import BarChart from '@components/Dashboard/BarChart';
import MetricsCard from '@components/Dashboard/MetricsCard';
import Platform from '@components/Dashboard/Platform';
import { headers, orders, platforms } from '@constants/store';
import { Icon } from '@iconify/react/dist/iconify.js';
import classNames from 'classnames';

interface Metric {
  id: number;
  name: string;
  value: number | string;
  icon: React.ReactNode;
  isPositive: boolean;
  percentage: string;
}

const metrics: Metric[] = [
  {
    id: 1,
    name: 'Total Order',
    value: 350,
    icon: <TotalOrderIcon className="size-6" />,
    isPositive: true,
    percentage: '23,5%',
  },
  {
    id: 2,
    name: 'Total Refund',
    value: 270,
    icon: <TotalRefundIcon className="size-6" />,
    isPositive: false,
    percentage: '23,5%',
  },
  {
    id: 3,
    name: 'Average Sales',
    value: 1567,
    icon: <AverageSalesIcon className="size-6" />,
    isPositive: false,
    percentage: '23,5%',
  },
  {
    id: 4,
    name: 'Total Order',
    value: '$350.000',
    icon: <TotalOrderIcon className="size-6" />,
    isPositive: true,
    percentage: '23,5%',
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        <div className="border-primary white-transparent-bg order-2 flex flex-col gap-[10px] rounded-[14px] border p-5 lg:order-1 lg:col-span-3">
          <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-center">
            <h2 className="text-[18px] font-semibold">Sales Trends</h2>
            <div className="flex items-center gap-[10px]">
              <p className="text-[14px] font-medium text-[#3A3F51] dark:text-neutral">Short by:</p>
              <div className="border-primary flex items-center justify-between gap-3 rounded-[28px] border px-3 py-1">
                <p className="text-[16px]">Weekly</p>
                <Icon icon="eva:arrow-ios-downward-outline" className="size-[20px]" />
              </div>
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <BarChart />
          </div>
        </div>
        <div className="order-1 grid grid-cols-1 gap-5 md:grid-cols-2 lg:order-2 lg:col-span-2">
          {metrics.map((metric) => (
            <MetricsCard
              key={metric.id}
              name={metric.name}
              value={metric.value}
              icon={metric.icon}
              isPositive={metric.isPositive}
              percentage={metric.percentage}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        <div className="border-primary white-transparent-bg order-2 flex flex-col gap-[10px] overflow-x-auto rounded-[14px] border p-5 lg:order-1 lg:col-span-3">
          <div className="mb-[14px] flex items-center justify-between">
            <h2 className="text-[18px] font-semibold">Last Orders</h2>
            <span className="cursor-pointer text-[18px] font-medium text-accent hover:underline">
              See All
            </span>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-primary border-b">
                  {headers.map((header, index) => (
                    <th
                      key={`${String(index + 1)}-header`}
                      className={classNames(
                        `align-left h-[1.71538rem] whitespace-nowrap px-[0.813rem] py-2 text-left text-base font-medium text-[#9CA4AB]`
                      )}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DADDDD] dark:divide-[#26282C]">
                {orders.map((item, rowIndex) => (
                  <tr
                    key={`${String(rowIndex + 1)}-row`}
                    className={classNames(`cursor-pointer transition-all duration-300`)}
                  >
                    <td className="flex w-max items-center gap-[10px] whitespace-nowrap px-[0.813rem] py-[18px] align-middle font-medium text-[#3A3F51] dark:text-white-text">
                      <img src={item.image} alt={item.name} className="size-[32px] rounded-full" />
                      <span>{item.name}</span>
                    </td>
                    <td className="w-max whitespace-nowrap px-[0.813rem] py-[18px] align-middle font-medium text-neutral">
                      {item.date}
                    </td>
                    <td className="w-max whitespace-nowrap px-[0.813rem] py-[18px] align-middle font-medium">
                      {item.amount}
                    </td>
                    <td
                      className={classNames(
                        `w-max whitespace-nowrap px-[0.813rem] py-[18px] align-middle font-medium`,
                        item.status === 'Paid' ? 'text-[#34CAA5]' : 'text-[#ED544E]'
                      )}
                    >
                      {item.status}
                    </td>
                    <td className="flex w-max items-center gap-[6px] whitespace-nowrap px-[0.813rem] py-[18px] align-middle">
                      <Icon icon="solar:file-download-linear" className="size-[16px]" />
                      View
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="border-primary white-transparent-bg order-2 flex flex-col gap-[10px] rounded-[14px] border p-5 lg:order-1 lg:col-span-2">
          <div className="mb-[14px] flex items-center justify-between">
            <h2 className="text-[18px] font-semibold">Top Platforms</h2>
            <span className="cursor-pointer text-[18px] font-medium text-accent hover:underline">
              See All
            </span>
          </div>
          <div className="flex max-h-[400px] flex-col gap-5 overflow-y-auto">
            {platforms.map((platform) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <Platform key={platform.name} {...platform} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
