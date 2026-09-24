'use client';

import { useState } from 'react';

interface DemoAccessProps {
  email: string;
  passwordPlaceholder: string;
}

export default function DemoAccess({ email, passwordPlaceholder }: DemoAccessProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const textToCopy = `Email: ${email}\nPassword: ${passwordPlaceholder}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <details className="group mt-3 border border-slate-800 bg-slate-900/80 rounded-md overflow-hidden text-xs font-mono">
      <summary className="w-full flex items-center justify-between p-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer list-none select-none">
        <div className="flex items-center gap-1.5">
          <span>🔐</span>
          <span className="font-sans font-semibold text-amber-400 text-xs">
            Acceso Demo
          </span>
        </div>
        <span className="text-amber-500 font-bold text-[11px] group-open:hidden">
          Mostrar credenciales ▼
        </span>
        <span className="text-amber-500 font-bold text-[11px] hidden group-open:inline">
          Ocultar ▲
        </span>
      </summary>

      <div className="p-3 bg-slate-950/90 border-t border-slate-800 space-y-2">
        <div className="space-y-1 text-slate-300 text-[11px] bg-slate-900/90 p-2 rounded border border-slate-800/80">
          <div className="break-all">
            <span className="text-slate-500 font-bold">Email:</span> {email}
          </div>
          <div>
            <span className="text-slate-500 font-bold">Pass:</span> {passwordPlaceholder}
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="w-full py-1.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-slate-950 font-sans font-semibold text-[11px] transition-all flex items-center justify-center gap-1.5 active:scale-95"
        >
          {copied ? (
            <>
              <span className="text-emerald-400">✓</span>
              <span>Credenciales copiadas</span>
            </>
          ) : (
            <>
              <span>📋</span>
              <span>Copiar credenciales</span>
            </>
          )}
        </button>
      </div>
    </details>
  );
}