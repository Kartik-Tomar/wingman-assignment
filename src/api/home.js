export const fetchHomeData = async () => {
  // make api call to fetch data
  const response = await fetch(`${process.env.BASE_URL}/data.json`);
  const data = await response.json();
  return data;
};
