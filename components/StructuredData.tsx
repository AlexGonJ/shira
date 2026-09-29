export default function StructuredData() {
  const services = ['Landscaping & mulch','Hardscaping','Carpentry','Lawn maintenance','Fencing','Irrigation','Snow & ice management'];
  const data = {'@context':'https://schema.org','@type':'HomeAndConstructionBusiness','@id':'https://www.shiralandscaping.com/#business',name:'Shira Landscaping & Build',url:'https://www.shiralandscaping.com',telephone:'+1-781-330-2608',email:'shiralandscaping@gmail.com',areaServed:{'@type':'AdministrativeArea',name:'Greater Boston, MA'},description:'Landscaping, hardscaping, carpentry, fencing, irrigation, lawn maintenance, and snow and ice management.',sameAs:['https://www.youtube.com/@ShiraLandscaping'],hasOfferCatalog:{'@type':'OfferCatalog',name:'Outdoor services',itemListElement:services.map(name=>({'@type':'Offer','itemOffered':{'@type':'Service',name}}))}};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}} />;
}
