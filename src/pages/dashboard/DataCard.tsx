import { FaCalendarDay } from "react-icons/fa6";

const DataCard: React.FC<{
  value: number | string;
  title: string;
  icon: React.ReactNode;
}> = ({ title, icon, value }) => {
  return (
    <div className="p-5 bg-white border border-gray-200">
      <h4 className="text-base font-semibold text-slate-800">{title}</h4>
      <div className="flex items-center justify-between mt-2 pb-2">
        {icon}
        <p className="text-3xl font-semibold">{value}</p>{" "}
      </div>
      <div className="border-t border-gray-200 flex items-center gap-2 py-1">
        <FaCalendarDay className="text-gray-500 text-sm" />
        <p className="text-sm font-normal">
          {new Date().toLocaleDateString(undefined, {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default DataCard;
