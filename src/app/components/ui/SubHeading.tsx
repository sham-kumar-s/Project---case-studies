import { clsx } from "clsx";

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SubHeading({ children, className }: SubHeadingProps) {
  return (
    <h3
      className={clsx(
        "text-lg font-semibold text-white mt-10 mb-4 flex items-center gap-2",
        className
      )}
    >
      <span className="w-1 h-5 bg-blue-500 rounded-full" />
      {children}
    </h3>
  );
}
