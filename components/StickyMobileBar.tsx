type StickyMobileBarProps = {
  phoneHref: string;
};

export function StickyMobileBar({ phoneHref }: StickyMobileBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold-400/20 bg-night-950/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={phoneHref}
          className="flex-1 rounded-full border border-gold-400/35 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-gold-300 hover:text-gold-300"
        >
          Zadzwoń
        </a>
        <a
          href="#rezerwacja"
          className="flex-1 rounded-full bg-gold-400 px-4 py-3 text-center text-sm font-semibold text-night-950 transition hover:bg-gold-300"
        >
          Rezerwacja
        </a>
      </div>
    </div>
  );
}
