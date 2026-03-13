import { Container } from "@/components/Container";

type FooterProps = {
  name: string;
  address: string;
  phoneDisplay: string;
};

export function Footer({ name, address, phoneDisplay }: FooterProps) {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col gap-3 pb-20 text-sm text-white/55 md:flex-row md:items-center md:justify-between md:pb-0">
        <p>{name}</p>
        <p>{address}</p>
        <p>{phoneDisplay}</p>
      </Container>
    </footer>
  );
}
