import UsersChartComponent from "./UsersChartComponent";

const UsersChart = () => {
  return (
    <section className="bg-white rounded-lg w-[58%] p-6 space-y-6 border border-gray-100 shadow-sm">
      <h2 className="font-semibold text-lg text-gray-900 leading-6">
        Users Chart
      </h2>

      <UsersChartComponent />
    </section>
  );
};

export default UsersChart;
