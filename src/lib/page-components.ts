// src/lib/page-components.ts

interface ComponentInfo {
    name: string;
    path: string;
}

export const pageComponentMap: Record<string, ComponentInfo[]> = {
    // --- Main Site ---
    "Página de Inicio": [
        { name: "Header Optimizado", path: "src/components/homenew/optimized-header.tsx" },
        { name: "Hero Animado", path: "src/components/homenew/hero-animado.tsx" },
        { name: "Sección de Visión y Estadísticas", path: "src/components/homenew/vision-section.tsx" },
        { name: "Resumen de Servicios Principales", path: "src/components/homenew/services-overview.tsx" },
        { name: "Sección de Llamado a la Acción (CTA)", path: "src/components/homenew/cta-section.tsx" },
        { name: "Soluciones para Emprendedores (Home)", path: "src/components/homenew/emprendedores-home.tsx" },
        { name: "Slider de Servicios para Negocios", path: "src/components/homenew/slider-servicios.tsx" },
        { name: "Carrusel de Redes Sociales", path: "src/components/homenew/carrusel-redes.tsx" },
        { name: "Footer con Botón 'Volver Arriba'", path: "src/components/homenew/footer.tsx" },
    ],
    "Envíos Express": [
        { name: "Hero de Envíos Express", path: "src/components/ui/HeroSection.tsx" }, // Reusable
        { name: "Contenido de Envíos Express", path: "src/components/express/express-content.tsx" },
        { name: "Tabla de Precios Express", path: "src/components/express/express-pricing-ranges.tsx" },
        { name: "Beneficios del Servicio Express", path: "src/components/express/express-benefits.tsx" },
        { name: "Escenarios de Uso Urgente", path: "src/components/express/urgent-scenarios.tsx" },
        { name: "CTA de Envíos Express", path: "src/components/express/express-cta.tsx" },
    ],
    "Envíos LowCost": [
        { name: "Hero de Envíos Low Cost", path: "src/components/lowcost/lowcost-hero.tsx" },
        { name: "Contenido de Envíos Low Cost", path: "src/components/lowcost/lowcost-content.tsx" },
        { name: "Comparativa de Precios Low Cost", path: "src/components/lowcost/pricing-comparison.tsx" },
        { name: "Beneficios del Servicio Low Cost", path: "src/components/lowcost/lowcost-benefits.tsx" },
        { name: "Cómo Funciona Low Cost", path: "src/components/lowcost/how-lowcost-works.tsx" },
        { name: "CTA de Envíos Low Cost", path: "src/components/lowcost/lowcost-cta.tsx" },
    ],
    "Plan Emprendedores": [
        { name: "Hero del Plan Emprendedores", path: "src/components/entrepreneur/entrepreneur-hero.tsx" },
        { name: "Información del Plan", path: "src/components/entrepreneur/plan-information.tsx" },
        { name: "Beneficios para Emprendedores", path: "src/components/entrepreneur/entrepreneur-benefits.tsx" },
        { name: "Tarifas para Emprendedores", path: "src/components/entrepreneur/entrepreneur-pricing-ranges.tsx" },
        { name: "CTA del Plan Emprendedores", path: "src/components/entrepreneur/entrepreneur-cta.tsx" },
    ],
    "Mercado Libre Flex": [
        { name: "Hero de Envíos Flex", path: "src/components/envios-flex/envios-flex-hero.tsx" },
        { name: "Contenido de Envíos Flex", path: "src/components/envios-flex/envios-flex-content.tsx" },
        { name: "Beneficios de Mercado Libre", path: "src/components/envios-flex/mercadolibre-benefits.tsx" },
        { name: "Tarifas de Envíos Flex", path: "src/components/envios-flex/flex-pricing-ranges.tsx" },
        { name: "Cómo Funciona Envíos Flex", path: "src/components/envios-flex/how-it-works.tsx" },
        { name: "Requisitos y Restricciones", path: "src/components/envios-flex/requirements.tsx" },
        { name: "CTA de Envíos Flex", path: "src/components/envios-flex/envios-flex-cta.tsx" },
    ],
    "Cotizar Express": [
        { name: "Hero del Cotizador Express", path: "src/components/calculator/calculator-hero.tsx" },
        { name: "Calculadora Express", path: "src/components/calculator/express-calculator.tsx" },
        { name: "Características del Mapa", path: "src/components/calculator/map-features.tsx" },
        { name: "Información de Precios", path: "src/components/calculator/pricing-info.tsx" },
        { name: "Consejos para Cotizar", path: "src/components/calculator/calculator-tips.tsx" },
        { name: "Contacto para Casos Especiales", path: "src/components/calculator/calculator-contact.tsx" },
    ],
    "Cotizar LowCost": [
        { name: "Hero del Cotizador Low Cost", path: "src/components/calculator/lowcost-calculator-hero.tsx" },
        { name: "Calculadora Low Cost", path: "src/components/calculator/lowcost-calculator.tsx" },
        { name: "Características del Mapa", path: "src/components/calculator/map-features.tsx" },
        { name: "Información de Precios", path: "src/components/calculator/pricing-info.tsx" },
        { name: "Consejos para Cotizar", path: "src/components/calculator/calculator-tips.tsx" },
        { name: "Contacto para Casos Especiales", path: "src/components/calculator/calculator-contact.tsx" },
    ],
    "Sobre Nosotros": [
        { name: "Hero de Sobre Nosotros", path: "src/components/about/about-hero.tsx" },
        { name: "Sección Quiénes Somos", path: "src/components/about/who-we-are.tsx" },
        { name: "Valores de la Empresa", path: "src/components/about/company-values.tsx" },
        { name: "Historia de la Empresa", path: "src/components/about/company-story.tsx" },
        { name: "Sección del Equipo", path: "src/components/about/team-section.tsx" },
        { name: "Misión y Visión", path: "src/components/about/mission-vision.tsx" },
    ],
    "Preguntas Frecuentes": [
        { name: "Hero de Preguntas Frecuentes", path: "src/components/faq/faq-hero.tsx" },
        { name: "Categorías de Preguntas", path: "src/components/faq/faq-categories.tsx" },
        { name: "CTA de Contacto para Dudas", path: "src/components/faq/faq-contact-cta.tsx" },
    ],
    "Nuestras Redes": [
        { name: "Hero de Redes Sociales", path: "src/components/social/social-hero.tsx" },
        { name: "Conexión a Redes Sociales", path: "src/components/social/social-connect.tsx" },
        { name: "Feed de Publicaciones Sociales", path: "src/components/social/social-feed.tsx" },
        { name: "Beneficios de Seguirnos", path: "src/components/social/social-benefits.tsx" },
        { name: "Suscripción a Newsletter", path: "src/components/social/newsletter-signup.tsx" },
    ],
    "Contacto": [
        { name: "Página de Contacto (Client)", path: "src/components/contact/contact-page-client.tsx" },
    ],
    "Generar Orden": [
        { name: "Formulario para Generar Envío", path: "src/components/ordenes/GenerarEnvioForm.tsx" },
    ],

    // --- Admin Panel ---
    "Dashboard": [
        { name: "Header de Administración", path: "src/components/layout/AdminHeader.tsx" },
        { name: "Panel de Control Principal (Dashboard)", path: "src/components/admin/AdminDashboard.tsx" },
        { name: "Footer", path: "src/components/homenew/footer.tsx" },
    ],
    "Órdenes": [
        { name: "Header de Administración", path: "src/components/layout/AdminHeader.tsx" },
        { name: "Tabla de Órdenes", path: "src/components/admin/ordenes/OrdenesTable.tsx" },
        { name: "Footer", path: "src/components/homenew/footer.tsx" },
    ],
     "Clientes": [
        { name: "Header de Administración", path: "src/components/layout/AdminHeader.tsx" },
        { name: "Formulario para Crear Cliente", path: "src/components/admin/clientes/CreateClientForm.tsx" },
        { name: "Tabla de Clientes", path: "src/components/admin/clientes/ClientsTable.tsx" },
        { name: "Footer", path: "src/components/homenew/footer.tsx" },
    ],
    "Repartidores": [
        { name: "Página de Cliente de Repartidores", path: "src/components/admin/repartidores/RepartidoresClientPage.tsx" },
    ],
    "Tarifas": [
        { name: "Header de Administración", path: "src/components/layout/AdminHeader.tsx" },
        { name: "Tabla de Precios Editable", path: "src/components/admin/cotizaciones/EditablePriceTable.tsx" },
        { name: "Footer", path: "src/components/homenew/footer.tsx" },
    ],
    "Etiquetas": [
        { name: "Página de Cliente de Etiquetas", path: "src/components/admin/etiquetas/EtiquetasClientPage.tsx" },
    ],
    "Agregar Publicación": [
        { name: "Header de Administración", path: "src/components/layout/AdminHeader.tsx" },
        { name: "Formulario para Añadir Post Social", path: "src/components/admin/AddPostForm.tsx" },
        { name: "Footer", path: "src/components/homenew/footer.tsx" },
    ],
    "Prompts de Imagen": [
        { name: "Header de Administración", path: "src/components/layout/AdminHeader.tsx" },
        { name: "Generador de Prompts de Imagen (IA)", path: "src/components/admin/crea-imagenes/ImagePromptGenerator.tsx" },
        { name: "Footer", path: "src/components/homenew/footer.tsx" },
    ],
    "Generador de Prompts": [
        { name: "Página de Cliente de Prompts", path: "src/app/admin/prompts/page.tsx" },
    ]
};
