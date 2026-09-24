'use client';

import { useState } from 'react';

interface DemoAccessProps {
  email: string;
  passwordPlaceholder: string;
}

export default function DemoAccess({ email, passwordPlaceholder }: DemoAccessProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `Email: ${email}\nPassword: ${passwordPlaceholder}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 p-3 bg-slate-900/80 border border-slate-800 rounded-md text-xs font-mono">
      <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-800">
        <span className="text-amber-500 font-sans font-semibold uppercase tracking-wider text-[10px]">
          Credenciales de Acceso Demo
        </span>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white transition-colors bg-slate-800 hover:bg-slate-700 px-2 py-0.5 rounded text-[10px]"
        >
          {copied ? 'Copiado' : 'Copiar Credenciales'}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
        <div>
          <span className="text-slate-500">Correo:</span> {email}
        </div>
        <div>
          <span className="text-slate-500">Contraseña:</span> {passwordPlaceholder}
        </div>
      </div>
    </div>
  );
}