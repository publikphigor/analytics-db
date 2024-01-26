interface PlatformProps {
  name: string;
  amount: string;
  percentage: string;
  color: string;
}

const Platform = ({ name, amount, percentage, color }: PlatformProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[18px] font-semibold text-[#22242C] dark:text-white-text">{name}</h3>
      <div className="h-3 w-full rounded-[40px] bg-[#F5F5F5] dark:bg-slate-800">
        <div
          className="h-full rounded-[40px]"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
      <div className="flex items-center justify-between text-[18px] text-neutral ">
        <span>{amount}</span>
        <span>+{percentage}%</span>
      </div>
    </div>
  );
};

export default Platform;
