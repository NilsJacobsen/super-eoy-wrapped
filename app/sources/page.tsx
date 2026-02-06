"use client";

import InsightBlock from "@/components/insightBlock";
import { SourceBar } from "@/components/sourceBar";
import { useSelectedUser, useSuperData } from "@/components/superDataProvider";

export default function Sources() {
  const { selectedUser } = useSelectedUser();
  const sources = useSuperData(selectedUser.username, "sources");
  return (
    <div className="min-h-screen font-sans py-16">
      <InsightBlock
        className="h-[200px]"
        caption={sources?.caption}
        insight={sources?.insight}
        insertedImages={sources?.insertedImages}
        highlightedCharacters={sources?.highlightedCharacters}
      />
      <div className="grid grid-cols-5 gap-2 mt-16">
        {sources?.sources.map((source, index) => (
          <SourceBar
            key={index}
            source={source}
            isFirst={index === 0}
            className="col-span-3 col-start-2"
          />
        ))}
      </div>
    </div>
  );
}