import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import StructuredData from '@/components/StructuredData';
const dmSans = DM_Sans({ subsets:['latin'], variable:'--font-dm-sans', display:'swap' });
export const metadata: Metadata = {
  metadataBase:new URL('https://www.shiralandscaping.com'),
  title:'Shira Landscaping & Build | Outdoor Living in Greater Boston',
  description:'Thoughtfully built. Beautifully maintained. Landscaping, hardscaping, carpentry, fencing, irrigation, lawn care and snow management in Greater Boston.',
  openGraph:{title:'Shira Landscaping & Build',description:'Outdoor spaces that feel like home. Serving Greater Boston.',url:'https://www.shiralandscaping.com',siteName:'Shira Landscaping & Build',locale:'en_US',type:'website',images:[{url:'/landscapes/garden-concept.webp',width:1672,height:941,alt:'Conceptual garden inspiration'}]},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) {
  return <html lang="en" className={dmSans.variable}><body className="font-sans"><StructuredData />{children}</body></html>;
}
