import {
  ConsultationsIcon,
  OrdersPlacedIcon,
  ConversionIcon,
  TotalSalesValueIcon,
  AverageOrderValueIcon,
  CommissionPaidIcon,
  GraphDirectionIcon,
} from "../icon";

const SummaryCard = ({ data }) => {
  const Icon =
    data.category === "consultations"
      ? ConsultationsIcon
      : data?.category == "ordersPlaced"
      ? OrdersPlacedIcon
      : data?.category == "conversion"
      ? ConversionIcon
      : data?.category == "totalSalesValue"
      ? TotalSalesValueIcon
      : data?.category == "averageOrderValue"
      ? AverageOrderValueIcon
      : data?.category == "commissionPaid"
      ? CommissionPaidIcon
      : null;

  const isIncrease = data.percentageChange.includes("+");

  return (
    <a
      href="#"
      className="block w-full p-6 bg-white border border-gray-200 rounded-lg"
    >
      <h5 className="flex items-center mb-3 font-semibold text-xs text-textGrey">
        {Icon ? <Icon className="mr-2" /> : null}{" "}
        {data.category.replace(/([A-Z])/g, " $1").toUpperCase()}
      </h5>
      <h4>
        {data.type === "count" ? (
          <span className="text-3xl font-medium">{data.value}</span>
        ) : data.type === "percentage" ? (
          <span className="text-3xl font-medium">{data.value}%</span>
        ) : data.type === "currency" ? (
          <span className="text-3xl font-medium">${data.value}</span>
        ) : null}
      </h4>
      <p className="flex items-center text-sm mt-3">
        <GraphDirectionIcon
          color={isIncrease ? "#15B79F" : "#F04438"}
          className={isIncrease? "mr-2" : "rotate-90 mr-2"}
        />
        <span
          style={{
            color: isIncrease ? "#15B79F" : "#F04438",
          }}
        >
          {data.percentageChange.slice(1)}
        </span>
        <span className="text-textGrey ml-1">
          {isIncrease ? "increase" : "decrease"}
        </span>
      </p>
    </a>
  );
};

export default SummaryCard;
