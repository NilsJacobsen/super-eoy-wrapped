import { cn } from "@/lib/utils";
import { HistoryIcon, SearchIcon, ZapIcon } from "lucide-react";

const Metric = ({ metric, className }: { metric: { name: "search" | "assistant" | "digest", value: number, trend: string, description: string }, className?: string }) => {

  const icons = {
    search: <SearchIcon className="w-4 h-4" />,
    assistant: <ZapIcon className="w-4 h-4" />,
    digest: <HistoryIcon className="w-4 h-4" />,
  }
  return (
    <div className={cn("w-full flex flex-col justify-between gap-2 p-4 border border-border bg-white rounded-xl", className)}>
      <div className="flex items-center justify-between gap-2">
        <div className="w-8 h-8 bg-border/50 rounded-full flex items-center justify-center">
          {icons[metric.name]}
        </div>
        <p className="text-sm font-brand text-muted-foreground">{metric.trend}</p>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <p className="text-3xl font-brand font-bold">{metric.value}</p>
        <p className="text-sm font-brand text-muted-foreground">{metric.description}</p>
      </div>
    </div>
  );
};

export default Metric;