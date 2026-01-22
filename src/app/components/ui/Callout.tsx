import { AlertTriangle, CheckCircle2, Info, Lightbulb } from "lucide-react";
import { clsx } from "clsx";

type CalloutType = "trade-off" | "decision" | "info" | "tip";

interface CalloutProps {
  type: CalloutType;
  children: React.ReactNode;
  title?: string;
}

const styles = {
  "trade-off": {
    container: "bg-amber-50 border-amber-200 text-amber-900",
    icon: <AlertTriangle className="w-5 h-5 text-amber-600" />,
    defaultTitle: "Trade-off",
  },
  decision: {
    container: "bg-emerald-50 border-emerald-200 text-emerald-900",
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
    defaultTitle: "Decision",
  },
  info: {
    container: "bg-blue-50 border-blue-200 text-blue-900",
    icon: <Info className="w-5 h-5 text-blue-600" />,
    defaultTitle: "Note",
  },
  tip: {
    container: "bg-purple-50 border-purple-200 text-purple-900",
    icon: <Lightbulb className="w-5 h-5 text-purple-600" />,
    defaultTitle: "Tip",
  },
};

export default function Callout({ type, children, title }: CalloutProps) {
  const style = styles[type];

  return (
    <div
      className={clsx(
        "my-8 p-5 rounded-xl border flex gap-4 items-start",
        style.container
      )}
    >
      <div className="mt-0.5 shrink-0">{style.icon}</div>
      <div>
        <h4 className="font-bold text-sm uppercase tracking-wider mb-1 opacity-90">
          {title || style.defaultTitle}
        </h4>
        <div className="text-[15px] leading-relaxed opacity-80">{children}</div>
      </div>
    </div>
  );
}
