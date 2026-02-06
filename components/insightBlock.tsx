import { cn, gradientText } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

const InsightBlock = ({
  caption,
  insight,
  insertedImages = [],
  highlightedCharacters = [],
  className,
}: {
  caption?: string;
  insight?: string;
  insertedImages?: Array<{
    src: string;
    alt: string;
    characterPosition: number;
  }>;
  highlightedCharacters?: Array<{
    start: number;
    end: number;
  }>;
  className?: string;
}) => {
  const imageMap = new Map<number, Array<{ src: string; alt: string }>>();
  for (const image of insertedImages) {
    const list = imageMap.get(image.characterPosition) ?? [];
    list.push({ src: image.src, alt: image.alt });
    imageMap.set(image.characterPosition, list);
  }

  const isHighlighted = (index: number) =>
    highlightedCharacters.some(
      (range) => index >= range.start && index < range.end,
    );

  const isHighlightStart = (index: number) =>
    isHighlighted(index) && !isHighlighted(index - 1);

  const isHighlightEnd = (index: number) =>
    isHighlighted(index) && !isHighlighted(index + 1);

  const renderInsight = () =>
    Array.from(insight ?? "").flatMap((char, index) => {
      const elements: ReactNode[] = [];
      const images = imageMap.get(index);

      if (images) {
        images.forEach((image, imageIndex) => {
          elements.push(
            <span
              key={`img-${index}-${imageIndex}`}
              className="inline-flex items-center align-baseline bg-white p-2 rounded-xl border border-border"
            >
              <Image src={image.src} alt={image.alt} width={32} height={32} />
            </span>,
          );
        });
      }

      elements.push(
        <span
          key={`char-${index}`}
          className={
            isHighlighted(index)
              ? [
                "text-white bg-foreground pt-1",
                isHighlightStart(index) ? "rounded-l-md" : undefined,
                isHighlightEnd(index) ? "rounded-r-md" : undefined,
              ]
                .filter(Boolean)
                .join(" ")
              : undefined
          }
        >
          {char}
        </span>,
      );

      return elements;
    });

  return (
    <div className={cn("w-full flex flex-col gap-4 items-center", className)}>
      <h3 className={cn("text-3xl font-semibold text-center", gradientText)}>
        {caption ?? ""}
      </h3>
      <h1 className="text-5xl font-brand text-center px-16 leading-[1.1]">{renderInsight()}</h1>
    </div>
  );
};

export default InsightBlock;