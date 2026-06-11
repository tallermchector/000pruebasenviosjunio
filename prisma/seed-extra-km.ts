import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from root
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import prisma from "../src/lib/prisma";
import { ServiceTypeEnum } from "../generated/prisma/client/client";

async function main() {
  console.log("Iniciando la inyección de Km adicional en la base de datos...");
  try {
    // 1. Inyectar para EXPRESS
    const expressKm = await prisma.priceRange.upsert({
      where: {
        serviceType_distanciaMinKm_distanciaMaxKm: {
          serviceType: ServiceTypeEnum.EXPRESS,
          distanciaMinKm: 10.00,
          distanciaMaxKm: 99999.00,
        }
      },
      update: {
        precioRango: 1000.00,
        isActive: true,
      },
      create: {
        serviceType: ServiceTypeEnum.EXPRESS,
        distanciaMinKm: 10.00,
        distanciaMaxKm: 99999.00,
        precioRango: 1000.00,
        isActive: true,
      }
    });
    console.log("Se inyectó / actualizó Km adicional EXPRESS con ID:", expressKm.id);

    // 2. Inyectar para LOW_COST
    const lowCostKm = await prisma.priceRange.upsert({
      where: {
        serviceType_distanciaMinKm_distanciaMaxKm: {
          serviceType: ServiceTypeEnum.LOW_COST,
          distanciaMinKm: 10.00,
          distanciaMaxKm: 99999.00,
        }
      },
      update: {
        precioRango: 700.00,
        isActive: true,
      },
      create: {
        serviceType: ServiceTypeEnum.LOW_COST,
        distanciaMinKm: 10.00,
        distanciaMaxKm: 99999.00,
        precioRango: 700.00,
        isActive: true,
      }
    });
    console.log("Se inyectó / actualizó Km adicional LOW_COST con ID:", lowCostKm.id);
    
    console.log("¡Inyección completada exitosamente!");
  } catch (error) {
    console.error("Error durante la inyección de rangos extra:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
