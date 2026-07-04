import Reveal from "./Reveal";

type Props = {
  index: string;
  title: string;
  blurb?: string;
};

export default function SectionHeading({ index, title, blurb }: Props) {
  return (
    <Reveal className="mb-12">
      <p className="font-mono text-sm text-accent">/{index}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {blurb && <p className="mt-3 max-w-2xl text-muted">{blurb}</p>}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-accent/60 via-edge to-transparent" />
    </Reveal>
  );
}
