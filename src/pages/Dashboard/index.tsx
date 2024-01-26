import { AverageSalesIcon, TotalOrderIcon, TotalRefundIcon } from '@assets/icons';
import BarChart from '@components/Dashboard/BarChart';
import MetricsCard from '@components/Dashboard/MetricsCard';
import { Icon } from '@iconify/react/dist/iconify.js';

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
    id: 1,
    name: 'Total Refund',
    value: 270,
    icon: <TotalRefundIcon className="size-6" />,
    isPositive: false,
    percentage: '23,5%',
  },
  {
    id: 1,
    name: 'Average Sales',
    value: 1567,
    icon: <AverageSalesIcon className="size-6" />,
    isPositive: false,
    percentage: '23,5%',
  },
  {
    id: 1,
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
        <div className="border-primary white-transparent-bg order-2 flex flex-col gap-[10px] rounded-[14px] p-5 lg:order-1 lg:col-span-3">
          <div className="flex items-center justify-between">
            <h2 className="text-[18px] font-semibold">Sales Trends</h2>
            <div className="flex items-center gap-[10px]">
              <p className="text-[14px] font-medium text-[#3A3F51]">Short by:</p>
              <div className="border-primary flex items-center justify-between gap-3 rounded-[28px] px-3 py-1">
                <p className="text-[16px]">Weekly</p>
                <Icon icon="eva:arrow-ios-downward-outline" className="size-[20px]" />
              </div>
            </div>
          </div>
          <BarChart />
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
    </div>
  );
};

export default Dashboard;
