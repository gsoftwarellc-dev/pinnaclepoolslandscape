export default function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-100 ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-2 p-6 text-center text-neutral-400">
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden>
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 16H5V5h14v14ZM8.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9.5 6H6l3.5-4.5 2 2.4L14.5 11 18 17Z" />
        </svg>
        <span className="text-xs font-medium">{label}</span>
      </div>
    </div>
  );
}
