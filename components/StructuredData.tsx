export default function StructuredData() {
  const data = {'@context':'https://schema.org','@type':'HomeAndConstructionBusiness',name:'Shira Landscaping & Build',url:'https://www.shiralandscaping.com',telephone:'+1-781-330-2608',email:'shiralandscaping@gmail.com',areaServed:'Greater Boston, MA',description:'Landscaping, hardscaping, carpentry, fencing, irrigation, lawn maintenance, and snow and ice management.'};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}} />;
}
