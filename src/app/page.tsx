import { Container } from "@/components";
import { IconVashaPainter } from "@/components/icons";

export default async function Home() {
  return (
    <Container classNames="flex items-center justify-center">
      <h1 className="text-2xl font-bold">Vasha React Kit</h1>
      <IconVashaPainter />
    </Container>
  );
}
