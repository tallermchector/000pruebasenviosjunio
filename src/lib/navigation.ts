import { Truck, Zap, Clock, Package, Building2, ShieldCheck, Mail, Share2 } from 'lucide-react';

export const navGroups = [
  {
    label: 'Servicios',
    basePath: '/servicios',
    icon: Truck,
    items: [
      { label: 'Envíos Express', href: '/servicios/envios-express', icon: Zap },
      { label: 'Envíos LowCost', href: '/servicios/envios-lowcost', icon: Clock },
      { label: 'Envíos Flex (MeLi)', href: '/servicios/enviosflex', icon: Package },
      { label: 'E-Commerce & 3PL', href: '/servicios/plan-emprendedores', icon: Building2 },
    ],
  },
  {
    label: 'Nosotros',
    basePath: '/nosotros',
    icon: Building2,
    items: [
      { label: 'Sobre Nosotros', href: '/nosotros/sobre-nosotros', icon: ShieldCheck },
      { label: 'Preguntas Frecuentes', href: '/nosotros/preguntas-frecuentes', icon: Mail },
      { label: 'Nuestras Redes', href: '/nosotros/nuestras-redes', icon: Share2 },
    ],
  },
];
