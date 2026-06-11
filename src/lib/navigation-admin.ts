// src/lib/navigation-admin.ts
import {
  LayoutDashboard,
  Ticket,
  Wand2,
  type LucideIcon,
  ListOrdered,
  BarChart2,
  Users,
  Settings,
  BookImage,
  Bike,
  UserSearch,
  Palette,
  View,
  FileCode,
  Copy,
  Database,
  AppWindow,
  Rocket,
} from "lucide-react";

export interface AdminNavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  description: string;
  color: string;
  bgColor: string;
}

export interface AdminNavGroup {
    label: string;
    icon: LucideIcon;
    description: string;
    items: AdminNavItem[];
}

export const adminNavItems: (AdminNavItem | AdminNavGroup)[] = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
    description: "Vista general del panel de administración.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
  {
    label: "Gestión",
    icon: Settings,
    description: "Administra los componentes clave del negocio.",
    items: [
        {
            href: "/admin/ordenes",
            label: "Órdenes",
            icon: ListOrdered,
            description: "Visualiza, crea y modifica las órdenes de envío.",
            color: "text-blue-500",
            bgColor: "bg-blue-50",
        },
        {
            href: "/admin/clientes",
            label: "Clientes",
            icon: Users,
            description: "Administra la base de datos de clientes.",
            color: "text-cyan-500",
            bgColor: "bg-cyan-50",
        },
        {
            href: "/admin/clientes/portal",
            label: "Portal Cliente",
            icon: UserSearch,
            description: "Busca un cliente y ve su historial de envíos.",
            color: "text-sky-500",
            bgColor: "bg-sky-50",
        },
        {
            href: "/admin/repartidores",
            label: "Repartidores",
            icon: Bike,
            description: "Gestiona la flota y las hojas de ruta.",
            color: "text-fuchsia-500",
            bgColor: "bg-fuchsia-50",
        },
        {
            href: "/admin/cotizaciones",
            label: "Tarifas",
            icon: BarChart2,
            description: "Administra los rangos de precios para los servicios.",
            color: "text-green-500",
            bgColor: "bg-green-50",
        },
    ],
  },
  {
    href: "/admin/etiquetas",
    label: "Etiquetas",
    icon: Ticket,
    description: "Crea y administra etiquetas de envío.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    label: "Herramientas IA",
    icon: BookImage,
    description: "Gestiona el contenido visual y social de la marca.",
    items: [
      {
        href: "/admin/crea-imagenes",
        label: "Prompts de Imágenes",
        icon: Wand2,
        description: "Crea prompts para generar imágenes de marca.",
        color: "text-teal-500",
        bgColor: "bg-teal-50",
      },
      {
        href: "/comenzar",
        label: "Replicador de Proyectos",
        icon: Rocket,
        description: "Genera prompts para replicar páginas y componentes.",
        color: "text-rose-500",
        bgColor: "bg-rose-50",
      },
      {
        href: "/admin/crea-imagenes/hero",
        label: "Refactor Hero",
        icon: View,
        description: "Genera prompts para estandarizar los componentes Hero.",
        color: "text-rose-500",
        bgColor: "bg-rose-50",
      },
       {
        href: "/admin/crea-imagenes/ui-optimizer",
        label: "Optimizador UI (Páginas)",
        icon: Palette,
        description: "Analiza páginas completas o componentes principales para sugerir mejoras de UI/UX.",
        color: "text-purple-500",
        bgColor: "bg-purple-50",
      },
      {
        href: "/admin/crea-imagenes/ui-optimizer/componentes",
        label: "Optimizador de Componentes",
        icon: FileCode,
        description: "Selecciona componentes específicos de una página para una refactorización detallada.",
        color: "text-lime-500",
        bgColor: "bg-lime-50",
      },
      {
        href: "/admin/crear-proyecto-nuevo",
        label: "Replicar Página",
        icon: Copy,
        description: "Genera un prompt detallado para replicar una página en un nuevo proyecto.",
        color: "text-pink-500",
        bgColor: "bg-pink-50",
      },
       {
        href: "/admin/crear-base-de-datos",
        label: "Crear Script de Base de Datos",
        icon: Database,
        description: "Genera un prompt para crear un script SQL de la base de datos basado en los tipos de Supabase.",
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
      },
       {
        href: "/admin/project-structure",
        label: "Estructura del Proyecto",
        icon: AppWindow,
        description: "Analiza la estructura de páginas y componentes.",
        color: "text-gray-500",
        bgColor: "bg-gray-50",
      }
    ],
  }
];
