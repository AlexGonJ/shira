import Image from 'next/image';

export default function BotanicalDivider() {
  return <div className="post-hero-botanical-edge" aria-hidden="true">
    <Image src="/landscapes/botanical-edge.webp" alt="" width={2172} height={724} sizes="(max-width: 760px) 760px, (max-width: 1636px) 88vw, 1440px" quality={70} />
  </div>;
}
