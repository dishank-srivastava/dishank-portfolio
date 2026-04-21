"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <span>
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">Dishank Srivastava</span>
        </span>
        <span className="text-xs">
          Product Manager · B2B SaaS · IoT · Connected Vehicles · Telecom
        </span>
      </div>
    </footer>
  );
}
