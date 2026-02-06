"use client";
import Chart from "@/components/chart";
import InsightBlock from "@/components/insightBlock";
import Metric from "@/components/metric";
import { useSelectedUser, useSuperData } from "@/components/superDataProvider";

export default function Usage() {
  const { selectedUser } = useSelectedUser();
  const usage = useSuperData(selectedUser.username, "usage");
  return (
    <div className="min-h-screen font-sans py-16">
      <InsightBlock
        caption={usage?.caption}
        insight={usage?.insight}
        highlightedCharacters={usage?.highlightedCharacters} />
      {/* <p>{JSON.stringify(usage, null, 2)}</p> */}
      <div className="grid grid-cols-5 gap-3 mt-8">
        <Metric metric={usage?.metrics[0]} className="col-start-2 col-span-1" />
        <Metric metric={usage?.metrics[1]} className="col-start-3 col-span-1" />
        <Metric metric={usage?.metrics[2]} className="col-start-4 col-span-1" />
        <Chart className="col-start-2 col-span-3 pt-8 h-[240px]" data={usage?.chartData} />
      </div>
    </div>
  );
}