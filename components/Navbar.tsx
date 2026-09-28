import PillNav from '@/components/PillNav';

export default function Navbar() {
  return <header className="header wrap"><PillNav logo="/logo.png" logoAlt="Shira Landscaping & Build" items={[
    { label:'Services', href:'#services' },
    { label:'About us', href:'#about' },
    { label:'Our work', href:'#our-work' },
  ]} phoneHref="tel:+17813302608" phoneLabel="(781) 330-2608" /></header>;
}
