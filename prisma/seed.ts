import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from root
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const connectionString = process.env.DIRECT_URL || process.env.ENVIOS_PRISMA_DATABASE_URL || process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

function parseCSV(filePath: string) {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split(/\r?\n/).filter(line => line.trim().length > 0);
  const header = parseCSVLine(lines[0]);
  const records: any[] = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const record: any = {};
    header.forEach((key, index) => {
      record[key.trim()] = values[index] !== undefined ? values[index].trim() : "";
    });
    records.push(record);
  }
  return records;
}

async function main() {
  console.log("Iniciando el proceso de seeding desde archivos CSV...");

  try {
    // 1. Limpieza de datos
    console.log("Limpiando tablas PriceRange y SocialPost...");
    await prisma.priceRange.deleteMany({});
    await prisma.socialPost.deleteMany({});

    // 2. Cargar PriceRange desde CSV
    const priceRangeCsvPath = path.join(__dirname, "datos", "public-PriceRange-selection.csv");
    console.log(`Cargando PriceRange desde: ${priceRangeCsvPath}`);
    const priceRangeRecords = parseCSV(priceRangeCsvPath);

    for (const record of priceRangeRecords) {
      await prisma.priceRange.create({
        data: {
          id: parseInt(record.id),
          serviceType: record.serviceType,
          distanciaMinKm: parseFloat(record.distanciaMinKm),
          distanciaMaxKm: parseFloat(record.distanciaMaxKm),
          precioRango: parseFloat(record.precioRango),
          isActive: record.isActive === "true",
          createdAt: new Date(record.createdAt),
          updatedAt: new Date(record.updatedAt),
        },
      });
    }
    console.log(`-> ${priceRangeRecords.length} rangos de precios insertados.`);

    // 3. Cargar SocialPost desde CSV
    const socialPostCsvPath = path.join(__dirname, "datos", "public-SocialPost-selection.csv");
    console.log(`Cargando SocialPost desde: ${socialPostCsvPath}`);
    const socialPostRecords = parseCSV(socialPostCsvPath);

    for (const record of socialPostRecords) {
      await prisma.socialPost.create({
        data: {
          id: parseInt(record.id),
          platform: record.platform,
          userName: record.userName || "Envios DosRuedas",
          userAvatar: record.userAvatar || "/LogoEnviosDosRuedas.webp",
          userUrl: record.userUrl || null,
          content: record.content,
          postUrl: record.postUrl,
          imageUrl: record.imageUrl || null,
          imageHint: record.imageHint || null,
          likes: record.likes ? parseInt(record.likes) : null,
          comments: record.comments ? parseInt(record.comments) : null,
          shares: record.shares ? parseInt(record.shares) : null,
          timestamp: new Date(record.timestamp),
        },
      });
    }
    console.log(`-> ${socialPostRecords.length} publicaciones sociales insertadas.`);

    console.log("\n¡Seeding completado exitosamente!");
  } catch (error) {
    console.error("Error durante el seeding:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
