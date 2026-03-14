type StickyMobileBarProps = {
  phoneHref: string;
};

export function StickyMobileBar({ phoneHref }: StickyMobileBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-cyan-300/20 bg-night-950/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={phoneHref}
          className="flex-1 rounded-full border border-cyan-300/35 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
        >
          Zadzwoń
        </a>
        <a
          href="#rezerwacja"
          className="flex-1 rounded-full bg-[linear-gradient(135deg,#ff4db8,#8a6bff)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
        >
          Rezerwacja
        </a>
      </div>
    </div>
  );
}
