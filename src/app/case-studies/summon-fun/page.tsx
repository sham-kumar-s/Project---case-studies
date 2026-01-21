import PageTransition from "@/app/components/animations/PageTransition";
import SubHeading from "@/app/components/ui/SubHeading";
import BulletList from "@/app/components/ui/BulletList";
import SectionDivider from "@/app/components/ui/SectionDivider";
import Card from "@/app/components/ui/Card";

export default function SummonOverview() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 bg-linear-to-r from-white to-neutral-500 bg-clip-text text-transparent">
          Summon.fun
        </h1>

        <p className="text-lg text-neutral-300 leading-relaxed mb-8">
          Summon.fun is a Web3-based interactive platform that allows users to
          trigger on-chain and off-chain actions through wallet-based identity.
          The project focuses on seamless blockchain UX, secure interactions,
          and responsive frontend design.
        </p>

        <SectionDivider />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <SubHeading className="mt-0">Tech Stack</SubHeading>
            <BulletList
              items={[
                "Frontend: React / Next.js",
                "Wallets: MetaMask / WalletConnect",
                "Blockchain: EVM-compatible chain",
                "Backend: Node.js (off-chain logic)",
              ]}
            />
          </Card>

          <Card>
            <SubHeading className="mt-0">Key Focus Areas</SubHeading>
            <BulletList
              items={[
                "Web3 authentication",
                "Smart contract interaction",
                "Frontend UX performance",
                "Security & trust",
              ]}
            />
          </Card>
        </div>
      </section>
    </PageTransition>
  );
}
