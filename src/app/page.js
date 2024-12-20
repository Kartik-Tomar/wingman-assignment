import { fetchHomeData } from "@/api/home";
import ConsultationsChart from "@/components/ConsultationsChart";
import ForecastCard from "@/components/ForecastCard";
import OrderTable from "@/components/OrderTable";
import PastCompareCart from "@/components/PastCompareCart";
import SummaryCard from "@/components/SummaryCard";

export default async function Home() {
  const data = await fetchHomeData();
  return (
    <div
      className="p-4 m-4"
      style={{
        boxShadow: "0px 5px 22px 0px rgba(0, 0, 0, 0.04)",
        borderRadius: "20px",
        border: "1px solid rgb(238, 238, 238)",
      }}
    >
      <div className="mb-8">
        <h3 className="text-2xl font-medium mb-4">At a glance</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {data?.summarizedData.map((item) => (
            <div key={item.category} className="sm:col-span-2 md:col-span-3 lg:col-span-4">
              <SummaryCard data={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-medium mb-4">Insights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4">
          <div className="sm:col-span-2 md:col-span-6 lg:col-span-6">
            <ConsultationsChart data={data?.consultationsData} />
          </div>
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-3">
            <PastCompareCart data={data?.pastCompareData} />
          </div>
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-3">
            <ForecastCard data={data?.forecastData} />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-medium mb-4">Orders</h3>
        <OrderTable data={data?.orders} />
      </div>
    </div>
  );
}
