import PageTransition from "@/app/components/animations/PageTransition";

export default function SummonOverview() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Summon.fun</h1>

        <p className="text-neutral-300 leading-relaxed mb-6">
          Summon.fun is a Web3-based interactive platform that allows users to
          trigger on-chain and off-chain actions through wallet-based identity.
          The project focuses on seamless blockchain UX, secure interactions,
          and responsive frontend design.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <h3 className="font-semibold mb-2">Tech Stack</h3>
            <ul className="text-sm text-neutral-400 space-y-1">
              <li>Frontend: React / Next.js</li>
              <li>Wallets: MetaMask / WalletConnect</li>
              <li>Blockchain: EVM-compatible chain</li>
              <li>Backend: Node.js (off-chain logic)</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <h3 className="font-semibold mb-2">Key Focus Areas</h3>
            <ul className="text-sm text-neutral-400 space-y-1">
              <li>Web3 authentication</li>
              <li>Smart contract interaction</li>
              <li>Frontend UX performance</li>
              <li>Security & trust</li>
            </ul>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
