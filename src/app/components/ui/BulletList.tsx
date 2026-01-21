import { Check } from "lucide-react";

interface BulletListProps {
  items: string[];
}

export default function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-3 my-6">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 group">
          <div className="mt-1.5 shrink-0 w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
            <Check className="w-2.5 h-2.5 text-blue-400" />
          </div>
          <span className="text-neutral-400 text-[15px] leading-relaxed group-hover:text-neutral-300 transition-colors">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
