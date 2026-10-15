"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { keys, writeStorage } from "@/lib/storage";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("demo@hiringintel.ai");
  const [password, setPassword] = useState("demo123");
  const [error, setError] = useState("");

  function submit(event) {
    event.preventDefault();
    if (email === "demo@hiringintel.ai" && password === "demo123") {
      writeStorage(keys.session, { email, name: "ZoneX Dev" });
      router.push("/dashboard");
      return;
    }
    setError("Use demo@hiringintel.ai / demo123 for this prototype.");
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <section className="hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-sm font-black">HI</span><span className="text-sm font-bold">Hiring Intelligence</span></div>
        <div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-100">Commercial hiring signals</p><h1 className="mt-4 text-5xl font-black leading-tight tracking-tight">Turn hiring activity into qualified business opportunities.</h1><p className="mt-5 text-base leading-7 text-slate-400">Find fresh, deduplicated companies with real hiring intent, transparent lead scores, and verified source data.</p></div>
        <p className="text-xs text-slate-500">Built for agencies, recruiters and business development teams.</p>
      </section>
      <section className="flex items-center justify-center bg-canvas p-6">
        <form onSubmit={submit} className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
          <div className="lg:hidden"><span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-sm font-black text-white">HI</span></div>
          <h2 className="mt-4 text-2xl font-black text-slate-900">Welcome back</h2><p className="mt-1 text-sm text-slate-500">Sign in to your hiring intelligence workspace.</p>
          {error ? <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-semibold text-rose-700">{error}</div> : null}
          <label className="mt-6 block text-xs font-bold text-slate-700">Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10" /></label>
          <label className="mt-4 block text-xs font-bold text-slate-700">Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10" /></label>
          <div className="mt-4 flex items-center justify-between text-xs text-slate-500"><label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="accent-brand-600" />Remember me</label><button type="button" className="font-semibold text-brand-600">Forgot password?</button></div>
          <button className="mt-6 w-full rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-700">Sign in</button>
          <p className="mt-5 text-center text-xs text-slate-500">New workspace? <Link href="/onboarding" className="font-bold text-brand-600">Run onboarding</Link></p>
        </form>
      </section>
    </div>
  );
}
