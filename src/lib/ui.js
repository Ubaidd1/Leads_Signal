export function scoreTone(score) {
  if (score >= 88) return "border-emerald-200 bg-emerald-50 text-emerald-700";
  if (score >= 80) return "border-amber-200 bg-amber-50 text-amber-700";
  return "border-slate-200 bg-slate-50 text-slate-700";
}

export function intentTone(intent) {
  if (intent === "Strong") return "border-emerald-200 bg-emerald-50 text-emerald-700";
  if (intent === "Medium") return "border-amber-200 bg-amber-50 text-amber-700";
  return "border-slate-200 bg-slate-50 text-slate-600";
}

export function progressWidth(value) {
  if (value >= 95) return "w-full";
  if (value >= 90) return "w-11/12";
  if (value >= 80) return "w-4/5";
  if (value >= 75) return "w-3/4";
  if (value >= 66) return "w-2/3";
  if (value >= 60) return "w-3/5";
  if (value >= 50) return "w-1/2";
  if (value >= 40) return "w-2/5";
  if (value >= 33) return "w-1/3";
  if (value >= 25) return "w-1/4";
  return "w-1/5";
}
