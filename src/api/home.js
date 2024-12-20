export const fetchHomeData = async () => {
  const data = {
    summarizedData: [
      {
        category: "consultations",
        type: "count",
        value: 24,
        percentageChange: "+15%",
      },
      {
        category: "ordersPlaced",
        type: "count",
        value: 12,
        percentageChange: "-10%",
      },
      {
        category: "conversion",
        type: "percentage",
        value: 50,
        percentageChange: "-5%",
      },
      {
        category: "totalSalesValue",
        type: "currency",
        value: 2400,
        percentageChange: "+15%",
      },
      {
        category: "averageOrderValue",
        type: "currency",
        value: 240,
        percentageChange: "+10%",
      },
      {
        category: "commissionPaid",
        type: "currency",
        value: 200,
        percentageChange: "-5%",
      },
    ],
    consultationsData: [
      {
        day: "Mon",
        incoming: 39,
        answered: 29,
        expertsOnline: 11,
      },
      {
        day: "Tue",
        incoming: 37,
        answered: 31,
        expertsOnline: 13,
      },
      {
        day: "Wed",
        incoming: 41,
        answered: 34,
        expertsOnline: 51,
      },
      {
        day: "Thu",
        incoming: 49,
        answered: 38,
        expertsOnline: 12,
      },
      {
        day: "Fri",
        incoming: 50,
        answered: 38,
        expertsOnline: 32,
      },
      {
        day: "Sat",
        incoming: 52,
        answered: 39,
        expertsOnline: 16,
      },
      {
        day: "Sun",
        incoming: 54,
        answered: 39,
        expertsOnline: 15,
      },
    ],
    pastCompareData: [
      {
        name: "This Week",
        Consultations: 22,
        "Orders closed": 18,
      },
      {
        name: "Last Week",
        Consultations: 16,
        "Orders closed": 10,
      },
    ],
    forecastData: [
      {
        value: "+15%",
        message:
          "forecasted increase in your sales closed by the end of the current month",
      },
      {
        value: "-10%",
        message:
          "forecasted decrease in consultations by the end of the current month",
      },
    ],
    orders: [
      {
        id: 101,
        product: "Headphones",
        price: 200,
        date: "2024-11-22T14:30:00.000Z",
        timeSpent: 2950000,
        commission: 15,
        image: "/productImages/headphone.png",
      },
      {
        id: 102,
        product: "Earbuds",
        price: 150,
        date: "2024-11-30T18:30:00.000Z",
        timeSpent: 3600000,
        commission: 10,
        image: "/productImages/earbuds.png",
      },
      {
        id: 103,
        product: "Smart Watch",
        price: 300,
        date: "2024-12-05T16:30:00.000Z",
        timeSpent: 2700000,
        commission: 20,
        image: "/productImages/smart-watch.png",
      },
      {
        id: 104,
        product: "Charger",
        price: 50,
        date: "2024-12-07T12:30:00.000Z",
        timeSpent: 3000000,
        commission: 5,
        image: "/productImages/charger.png",
      },
      {
        id: 105,
        product: "Power Bank",
        price: 100,
        date: "2024-12-10T14:30:00.000Z",
        timeSpent: 2800000,
        commission: 5,
        image: "/productImages/power-bank.png",
      },
      {
        id: 106,
        product: "Charger",
        price: 50,
        date: "2024-12-15T12:30:00.000Z",
        timeSpent: 3000000,
        commission: 2.5,
        image: "/productImages/charger.png",
      },
    ],
  };
  return data;
};
