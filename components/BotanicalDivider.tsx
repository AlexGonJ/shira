import Image from 'next/image';

export default function BotanicalDivider() {
  return <div className="post-hero-botanical-edge" aria-hidden="true">
    <Image src="/landscapes/botanical-edge.png" alt="" width={2172} height={724} sizes="(max-width: 760px) 760px, (max-width: 1536px) 100vw, 1440px" quality={75} />
  </div>;
}
