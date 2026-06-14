"use client";

import React from "react";
import { 
  Menu, 
  Zap, 
  Clock, 
  Package, 
  Building2, 
  ShieldCheck, 
  Mail, 
  Share2, 
  Phone, 
  Calculator 
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/LogoEnviosDosRuedas.webp",
    alt: "Logo Dos Ruedas",
    title: "Envíos DosRuedas",
  },
  menu = [
    { title: "Inicio", url: "/" },
    {
      title: "Servicios",
      url: "#",
      items: [
        {
          title: "Envíos Express",
          description: "Mensajería instantánea en menos de 2 horas",
          icon: <Zap className="size-5 shrink-0 text-primary" />,
          url: "/servicios/envios-express",
        },
        {
          title: "Envíos LowCost",
          description: "Envíos programados al mejor precio",
          icon: <Clock className="size-5 shrink-0 text-primary" />,
          url: "/servicios/envios-lowcost",
        },
        {
          title: "Envíos Flex (MeLi)",
          description: "Entregas en el día para e-commerce",
          icon: <Package className="size-5 shrink-0 text-primary" />,
          url: "/servicios/enviosflex",
        },
        {
          title: "E-Commerce & 3PL",
          description: "Soluciones de almacenamiento y distribución",
          icon: <Building2 className="size-5 shrink-0 text-primary" />,
          url: "/servicios/plan-emprendedores",
        },
      ],
    },
    {
      title: "Nosotros",
      url: "#",
      items: [
        {
          title: "Sobre Nosotros",
          description: "Nuestra historia y valores logísticos",
          icon: <ShieldCheck className="size-5 shrink-0 text-primary" />,
          url: "/nosotros/sobre-nosotros",
        },
        {
          title: "Preguntas Frecuentes",
          description: "Resolvé tus dudas sobre envíos y tarifas",
          icon: <Mail className="size-5 shrink-0 text-primary" />,
          url: "/nosotros/preguntas-frecuentes",
        },
        {
          title: "Nuestras Redes",
          description: "Conectá con nosotros en redes sociales",
          icon: <Share2 className="size-5 shrink-0 text-primary" />,
          url: "/nosotros/nuestras-redes",
        },
      ],
    },
    {
      title: "Cotizar",
      url: "#",
      items: [
        {
          title: "Cotizar Express",
          description: "Cotizador inmediato de mensajería",
          icon: <Calculator className="size-5 shrink-0 text-primary" />,
          url: "/cotizar/express",
        },
        {
          title: "Cotizar LowCost",
          description: "Cotizador de envíos económicos",
          icon: <Calculator className="size-5 shrink-0 text-primary" />,
          url: "/cotizar/lowcost",
        },
      ],
    },
    {
      title: "Contacto",
      url: "/contacto",
    },
  ],
  mobileExtraLinks = [
    { name: "Sobre Nosotros", url: "/nosotros/sobre-nosotros" },
    { name: "Contacto", url: "/contacto" },
    { name: "Redes", url: "/nosotros/nuestras-redes" },
  ],
  auth = {
    login: { text: "Llamar", url: "tel:+5492236602699" },
    signup: { text: "WhatsApp", url: "https://wa.me/5492236602699" },
  },
}: Navbar1Props) => {
  return (
    <section className="py-4 border-b border-white/5 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <nav className="hidden justify-between items-center lg:flex">
          <div className="flex items-center gap-8">
            <a href={logo.url} className="flex items-center gap-3 group">
              <div className="w-9 h-9 relative rounded-xl overflow-hidden flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-110 bg-primary/10">
                <img src={logo.src} className="object-contain w-8 h-8" alt={logo.alt} />
              </div>
              <span className="font-display font-black text-xl tracking-tighter uppercase italic text-white">
                Envíos<span className="text-secondary">Dosruedas</span>
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline" size="sm" className="rounded-xl px-5 border-white/10 text-white hover:bg-white/5">
              <a href={auth.login.url} className="flex items-center gap-2">
                <Phone className="size-3.5" />
                {auth.login.text}
              </a>
            </Button>
            <Button asChild size="sm" className="rounded-xl px-5 bg-gradient-to-t from-blue-500 to-blue-600 hover:opacity-90 border border-blue-500 text-white shadow-md">
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-3 group">
              <div className="w-8 h-8 relative rounded-lg overflow-hidden flex items-center justify-center bg-primary/10">
                <img src={logo.src} className="object-contain w-7 h-7" alt={logo.alt} />
              </div>
              <span className="font-display font-black text-base tracking-tighter uppercase italic text-white">
                Envíos<span className="text-secondary">Dosruedas</span>
              </span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-white/10 text-white hover:bg-white/5 rounded-xl">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-neutral-950 border-white/5 text-white">
                <SheetHeader className="pb-6 border-b border-white/5">
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-3">
                      <div className="w-8 h-8 relative rounded-lg overflow-hidden flex items-center justify-center bg-primary/10">
                        <img src={logo.src} className="object-contain w-7 h-7" alt={logo.alt} />
                      </div>
                      <span className="font-display font-black text-base tracking-tighter uppercase italic text-white">
                        Envíos<span className="text-secondary">Dosruedas</span>
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="border-t border-white/5 py-4">
                    <div className="grid grid-cols-2 justify-start gap-2">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline" className="border-white/10 hover:bg-white/5 text-white rounded-xl">
                      <a href={auth.login.url} className="flex items-center justify-center gap-2">
                        <Phone className="size-4" />
                        {auth.login.text}
                      </a>
                    </Button>
                    <Button asChild className="bg-gradient-to-t from-blue-500 to-blue-600 hover:opacity-90 border border-blue-500 text-white rounded-xl shadow-md">
                      <a href={auth.signup.url}>{auth.signup.text}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-gray-400 list-none">
        <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 hover:text-white data-[state=open]:bg-transparent data-[active]:bg-transparent text-gray-400 font-semibold rounded-xl text-sm transition-colors border-none py-2 px-3">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-neutral-900 border border-white/5 rounded-2xl shadow-2xl p-2 md:w-[350px]">
          <ul className="grid gap-2 p-2">
            {item.items.map((subItem) => (
              <li key={subItem.title} className="list-none">
                <NavigationMenuLink asChild>
                  <a
                    className="flex select-none gap-4 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 group"
                    href={subItem.url}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      {subItem.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white mb-1">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-xs leading-snug text-gray-400">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-9 w-max items-center justify-center rounded-xl bg-transparent px-4 py-2 text-sm font-semibold text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-2 text-sm font-semibold hover:no-underline text-white hover:text-cyan-400 transition-colors">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2 pl-4 border-l border-white/5 flex flex-col gap-1">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none items-center gap-4 rounded-xl p-3 leading-none outline-none transition-colors hover:bg-white/5"
              href={subItem.url}
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                {subItem.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-xs leading-snug text-gray-400 mt-0.5">
                    {subItem.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold text-sm hover:text-cyan-400 transition-colors py-2 block">
      {item.title}
    </a>
  );
};

export { Navbar1 };
export default Navbar1;
