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
    container: "bg-amber-500/10 border-amber-500/20 text-amber-200",
    icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    defaultTitle: "Trade-off",
  },
  decision: {
    container: "bg-emerald-500/10 border-emerald-500/20 text-emerald-200",
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    defaultTitle: "Decision",
  },
  info: {
    container: "bg-blue-500/10 border-blue-500/20 text-blue-200",
    icon: <Info className="w-5 h-5 text-blue-500" />,
    defaultTitle: "Note",
  },
  tip: {
    container: "bg-purple-500/10 border-purple-500/20 text-purple-200",
    icon: <Lightbulb className="w-5 h-5 text-purple-500" />,
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
