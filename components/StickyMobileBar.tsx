type StickyMobileBarProps = {
  phoneHref: string;
};

export function StickyMobileBar({ phoneHref }: StickyMobileBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-cyan-300/20 bg-black/90 px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={phoneHref}
          className="flex-1 rounded-full border border-cyan-300/35 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-200"
        >
          Zadzwoń
        </a>
        <a
          href="#rezerwacja"
          className="flex-1 rounded-full bg-[linear-gradient(135deg,#ff38a8,#9067ff)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
        >
          Rezerwacja
        </a>
      </div>
    </div>
  );
}
