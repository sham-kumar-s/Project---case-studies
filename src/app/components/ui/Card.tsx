import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-700 transition-colors",
        className
      )}
    >
      {children}
    </div>
  );
}
