import { AverageSalesIcon, TotalOrderIcon, TotalRefundIcon } from '@assets/icons';
import MetricsCard from '@components/Dashboard/MetricsCard';

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
          www
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
