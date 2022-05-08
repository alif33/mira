import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SalesStatisticsChart = () => {
  const data = [
    {
      name: "Page A",
      uv: 2,
      pv: 3,
      amt: 2,
    },
    {
      name: "Page b",
      uv: 4,
      pv: 5,
      amt: 2,
    },
    {
      name: "Page c",
      uv: 6,
      pv: 7,
      amt: 2,
    },
    {
      name: "Page d",
      uv: 8,
      pv: 9,
      amt: 2,
    },
    {
      name: "Page e",
      uv: 10,
      pv: 11,
      amt: 2,
    },
    {
      name: "Page Af",
      uv: 12,
      pv: 13,
      amt: 2,
    },
    {
      name: "Page g",
      uv: 14,
      pv: 15,
      amt: 2,
    },
  ];

  return (
    // <ResponsiveContainer width="100%" height="100%">
     
    // </ResponsiveContainer>
    <LineChart
    width={350}
    height={320}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" fontSize="5px" />
    <YAxis fontSize="5px" />
    <Tooltip />
    {/* <Legend /> */}
    <Line
      type="monotone"
      dataKey="pv"
      stroke="#8884d8"
      activeDot={{ r: 8 }}
    />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>
  );
};

export default SalesStatisticsChart;
