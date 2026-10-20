import { intentTone, scoreTone } from "@/lib/ui";

export function IntentBadge({ intent }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-bold ${intentTone(intent)}`}>{intent}</span>;
}

export function ScoreBadge({ score }) {
  return <span className={`inline-flex min-w-14 items-center justify-center rounded-lg border px-2.5 py-1 text-xs font-black ${scoreTone(score)}`}>{score}/100</span>;
}

export function Tag({ children }) {
  return <span className="inline-flex rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-600">{children}</span>;
}
