const BillPaymentChartStat = () => {
  return (
    <section className="space-y-5.5 flex-1">
      <section className="flex items-center gap-6">
        <span className="block text-x text-black w-25">
          Completed {"(15%)"}
        </span>
        <div className="flex items-center gap-4">
          <div className="bg-surface-muted h-1 rounded overflow-clip w-35 min-[1440px]:w-40">
            <div className="h-full w-3/4 bg-success-green" />
          </div>
          <span className="block text-black text-x font-bold">15</span>
        </div>
      </section>

      <section className="flex items-center gap-6">
        <span className="block text-x text-black w-25">Pending {"(10%)"}</span>
        <div className="flex items-center gap-4">
          <div className="bg-surface-muted h-1 rounded overflow-clip w-35 min-[1440px]:w-40">
            <div className="h-full w-2/4 bg-coral-accent" />
          </div>
          <span className="block text-black text-x font-bold">10</span>
        </div>
      </section>

      <section className="flex items-center gap-6">
        <span className="block text-x text-black w-25"> Failed {"(8%)"} </span>
        <div className="flex items-center gap-4">
          <div className="bg-surface-muted h-1 rounded overflow-clip w-35 min-[1440px]:w-40">
            <div className="h-full w-1/4 bg-deep-slate" />
          </div>
          <span className="block text-black text-x font-bold">2</span>
        </div>
      </section>
    </section>
  );
};

export default BillPaymentChartStat;
