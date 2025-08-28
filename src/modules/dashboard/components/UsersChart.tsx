import UsersChartComponent from "./UsersChartComponent";

const UsersChart = () => {
  return (
    <section className="bg-white rounded-xl w-[58%] p-6 space-y-6">
      <h2 className="capitalize font-semibold text-xl text-primary2 leading-6">
        Users Chart
      </h2>

      <UsersChartComponent />
    </section>
  );
};

export default UsersChart;
