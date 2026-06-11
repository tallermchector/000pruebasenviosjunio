import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from root
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Force DATABASE_URL to be DIRECT_URL for this script to bypass accelerator
if (process.env.DIRECT_URL) {
  process.env.DATABASE_URL = process.env.DIRECT_URL;
}

import { PrismaClient } from "../generated/prisma/client/index.js";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando el proceso de seeding...");

  try {
    // 1. Limpieza de datos
    console.log("Limpiando tablas PriceRange y SocialPost...");
    await prisma.priceRange.deleteMany({});
    await prisma.socialPost.deleteMany({});

    // 2. Datos para PriceRange
    console.log("Insertando datos en PriceRange...");
    const priceRangeData = [
      { id: 1, serviceType: "EXPRESS", distanciaMinKm: 0.0, distanciaMaxKm: 2.99, precioRango: 3000.0, isActive: true, createdAt: new Date("2025-06-21T05:44:15.923Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 2, serviceType: "EXPRESS", distanciaMinKm: 3.0, distanciaMaxKm: 4.99, precioRango: 3700.0, isActive: true, createdAt: new Date("2025-06-21T05:44:16.198Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 3, serviceType: "EXPRESS", distanciaMinKm: 5.0, distanciaMaxKm: 5.99, precioRango: 4500.0, isActive: true, createdAt: new Date("2025-06-21T05:44:16.394Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 4, serviceType: "EXPRESS", distanciaMinKm: 6.0, distanciaMaxKm: 6.99, precioRango: 5400.0, isActive: true, createdAt: new Date("2025-06-21T05:44:16.586Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 5, serviceType: "EXPRESS", distanciaMinKm: 7.0, distanciaMaxKm: 7.99, precioRango: 6200.0, isActive: true, createdAt: new Date("2025-06-21T05:44:16.767Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 6, serviceType: "EXPRESS", distanciaMinKm: 8.0, distanciaMaxKm: 8.99, precioRango: 7000.0, isActive: true, createdAt: new Date("2025-06-21T05:44:16.948Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 7, serviceType: "EXPRESS", distanciaMinKm: 9.0, distanciaMaxKm: 10.0, precioRango: 7800.0, isActive: true, createdAt: new Date("2025-06-21T05:44:17.136Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 8, serviceType: "EXPRESS", distanciaMinKm: 10.01, distanciaMaxKm: 11.0, precioRango: 8700.0, isActive: true, createdAt: new Date("2025-06-21T05:44:17.326Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 9, serviceType: "EXPRESS", distanciaMinKm: 11.01, distanciaMaxKm: 12.0, precioRango: 9500.0, isActive: true, createdAt: new Date("2025-06-21T05:44:17.510Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 10, serviceType: "EXPRESS", distanciaMinKm: 12.01, distanciaMaxKm: 13.0, precioRango: 10300.0, isActive: true, createdAt: new Date("2025-06-21T05:44:17.709Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 11, serviceType: "EXPRESS", distanciaMinKm: 13.01, distanciaMaxKm: 14.0, precioRango: 11100.0, isActive: true, createdAt: new Date("2025-06-21T05:44:17.882Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 12, serviceType: "EXPRESS", distanciaMinKm: 14.01, distanciaMaxKm: 15.0, precioRango: 11900.0, isActive: true, createdAt: new Date("2025-06-21T05:44:18.077Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 13, serviceType: "EXPRESS", distanciaMinKm: 15.01, distanciaMaxKm: 16.0, precioRango: 12700.0, isActive: true, createdAt: new Date("2025-06-21T05:44:18.261Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 14, serviceType: "EXPRESS", distanciaMinKm: 16.01, distanciaMaxKm: 17.0, precioRango: 13500.0, isActive: true, createdAt: new Date("2025-06-21T05:44:18.441Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 15, serviceType: "EXPRESS", distanciaMinKm: 17.01, distanciaMaxKm: 18.0, precioRango: 14300.0, isActive: true, createdAt: new Date("2025-06-21T05:44:18.619Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 16, serviceType: "EXPRESS", distanciaMinKm: 18.01, distanciaMaxKm: 19.0, precioRango: 15100.0, isActive: true, createdAt: new Date("2025-06-21T05:44:18.794Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 17, serviceType: "EXPRESS", distanciaMinKm: 19.01, distanciaMaxKm: 20.0, precioRango: 15900.0, isActive: true, createdAt: new Date("2025-06-21T05:44:18.975Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 18, serviceType: "LOW_COST", distanciaMinKm: 0.0, distanciaMaxKm: 2.99, precioRango: 2150.0, isActive: true, createdAt: new Date("2025-06-21T05:44:19.166Z"), updatedAt: new Date("2025-06-21T06:23:23.368Z") },
      { id: 19, serviceType: "LOW_COST", distanciaMinKm: 3.0, distanciaMaxKm: 4.99, precioRango: 2900.0, isActive: true, createdAt: new Date("2025-06-21T05:44:19.341Z"), updatedAt: new Date("2025-06-21T06:23:23.550Z") },
      { id: 20, serviceType: "LOW_COST", distanciaMinKm: 5.0, distanciaMaxKm: 8.99, precioRango: 4000.0, isActive: true, createdAt: new Date("2025-06-21T05:44:19.519Z"), updatedAt: new Date("2025-06-21T06:23:23.724Z") },
      { id: 21, serviceType: "LOW_COST", distanciaMinKm: 9.0, distanciaMaxKm: 12.99, precioRango: 5800.0, isActive: true, createdAt: new Date("2025-06-21T05:44:19.702Z"), updatedAt: new Date("2025-06-21T06:23:23.903Z") },
      { id: 22, serviceType: "LOW_COST", distanciaMinKm: 13.01, distanciaMaxKm: 20.0, precioRango: 8200.0, isActive: true, createdAt: new Date("2025-06-21T05:44:19.882Z"), updatedAt: new Date("2025-06-21T06:23:24.074Z") },
      { id: 23, serviceType: "EXPRESS", distanciaMinKm: 10.0, distanciaMaxKm: 99999.0, precioRango: 1000.0, isActive: true, createdAt: new Date("2025-06-21T05:44:19.882Z"), updatedAt: new Date("2025-11-01T05:27:43.057Z") },
      { id: 24, serviceType: "LOW_COST", distanciaMinKm: 10.0, distanciaMaxKm: 99999.0, precioRango: 700.0, isActive: true, createdAt: new Date("2025-06-21T05:44:19.882Z"), updatedAt: new Date("2025-06-21T06:23:24.074Z") },
    ];

    for (const data of priceRangeData) {
      await prisma.priceRange.create({ data: data as any });
    }
    console.log(`-> ${priceRangeData.length} rangos de precios insertados.`);

    // 3. Datos para SocialPost
    console.log("Insertando datos en SocialPost...");
    const socialPostData = [
      {
        id: 7,
        comments: 10,
        content: "En cada envío, nos das tu confianza. Con cada entrega, te demostramos por qué vale la pena. 🤝 En Envíos Dos Ruedas, la responsabilidad es nuestro motor...",
        imageHint: "",
        imageUrl: "/redes/ig3.webp",
        likes: 20,
        platform: "instagram",
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DK12WIDslKW/",
        shares: 0,
        timestamp: new Date("2025-06-21T06:16:02.648Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://www.instagram.com/enviosdosruedas/",
      },
      {
        id: 15,
        comments: 10,
        content: "En Envíos DosRuedas, nuestro servicio se construye sobre tres pilares fundamentales: Responsabilidad, Eficiencia y Confianza...",
        imageHint: "",
        imageUrl: "/redes/ig1.webp",
        likes: 20,
        platform: "instagram",
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DJhlS5xOrTb/",
        shares: 2,
        timestamp: new Date("2025-06-21T06:30:06.365Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://www.instagram.com/enviosdosruedas/",
      },
      {
        id: 17,
        comments: 0,
        content: 'Para vos, que vendés en Mar del Plata y hacés envíos... ¿Soles usar las apps para tus envíos? Pero no te generan confianza?',
        imageHint: "",
        imageUrl: "/redes/fac1.webp",
        likes: 0,
        platform: "facebook",
        postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid0a1i4tygsZQjwp9bsvS9xSHApJqMe5JkeoJbqx12Qvas18nSojtGhj6U9cFn3m5hDl",
        shares: 0,
        timestamp: new Date("2025-06-21T06:51:19.635Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://facebook.com/enviosdosruedas",
      },
      {
        id: 19,
        comments: 2,
        content: "📦 MENSAJERÍA ENVÍOS DOSRUEDAS 🚀 ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Te ofrecemos un servicio confiable...",
        imageHint: "",
        imageUrl: "/redes/ig4.webp",
        likes: 14,
        platform: "instagram",
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DEaAGAmRMKj/",
        shares: 2,
        timestamp: new Date("2025-06-21T07:01:58.906Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://instagram.com/enviosdosruedas",
      },
      {
        id: 21,
        comments: 10,
        content: "📦 MENSAJERÍA ENVÍOS DOSRUEDAS 🚀 ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Confianza y responsabilidad son nuestros pilares.",
        imageHint: "",
        imageUrl: "/redes/fac2.webp",
        likes: 12,
        platform: "facebook",
        postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid03WPv5ZE93ZNwL5PMRwuTpJxGaGSBzLigJqDSyzATNcSkRT3xBMZz7GKbhPv1mC53l",
        shares: 0,
        timestamp: new Date("2025-06-21T07:07:40.127Z"),
        userAvatar: "/LogoEnviosDosRuedas.webp",
        userName: "Envios DosRuedas",
        userUrl: "https://facebook.com/enviosdosruedas",
      },
    ];

    for (const post of socialPostData) {
      await prisma.socialPost.create({ data: post as any });
    }
    console.log(`-> ${socialPostData.length} publicaciones sociales insertadas.`);

    console.log("\n¡Seeding completado exitosamente!");
  } catch (error) {
    console.error("Error durante el seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
