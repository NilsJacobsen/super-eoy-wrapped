"use client";

import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useSelectedUser } from "./superDataProvider";


type ChartData = Array<{
  month: string;
  lastYear: number;
  thisYear: number;
}>

const Chart = ({ className, data }: { className?: string, data: ChartData }) => {
  const { selectedUser } = useSelectedUser();
  const color = selectedUser.color;

  const chartConfig = {
    lastYear: {
      label: "Last Year",
      color: color + "40",
    },
    thisYear: {
      label: "This Year",
      color: color,
    },
  } satisfies ChartConfig

  return (
    <div className={cn("relative h-[240px] w-full border border-border rounded-xl p-4 bg-white", className)}>
      <div className="absolute z-20 top-4 left-4 flex items-center gap-2">
        <div className="w-8 h-8 bg-border/50 rounded-full flex items-center justify-center">
          <CalendarIcon className="w-4 h-4" />
        </div>
        <p className="text-sm font-brand text-muted-foreground">Monthly usage</p>
      </div>
      <ChartContainer config={chartConfig} className="h-full w-full">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value: string) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="lastYear" fill="var(--color-lastYear)" radius={4} />
          <Bar dataKey="thisYear" fill="var(--color-thisYear)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default Chart;