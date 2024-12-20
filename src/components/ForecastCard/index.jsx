import { ConsultationsIcon, GraphDirectionIcon } from "../icon";

const ForecastCard = ({ data }) => {
  return (
    <div
      className="bg-[url('/forecastBackground.svg')] h-full p-6"
      style={{
        borderRadius: "20px",
        backgroundSize: "450px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "#CCFBEF",
      }}
    >
      <div className="mb-8">
        <h4 className="flex items-center text-xs font-medium font-semibold">
          <ConsultationsIcon color="#CCFBEF" className="mr-1" /> FORECAST
        </h4>
      </div>
      {data?.map((item, index) => (
        <div key={index} className="mt-6">
          <div className="mb-2 flex justify-between">
            <p className="text-white text-5xl font-medium">{item?.value}</p>
            <span>
              <GraphDirectionIcon
                color="#fff"
                className={item?.value?.includes("-") ? "rotate-90" : ""}
              />
            </span>
          </div>
          <p className="text-white text-sm">{item?.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
