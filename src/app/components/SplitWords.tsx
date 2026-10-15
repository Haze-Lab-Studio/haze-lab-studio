import { Fragment, type CSSProperties } from "react";

export default function SplitWords({
  text,
  start = 0,
}: {
  text: string;
  start?: number;
}) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="word" style={{ "--i": start + i } as CSSProperties}>
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
