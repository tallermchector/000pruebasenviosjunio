'use server';
/**
 * @fileOverview Flow para generar prompts detallados para modelos de generación de imágenes.
 *
 * - generateImagePrompt - Genera un prompt para un modelo de imagen.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import companyProfile from '@/lib/empresa.json';
import imageProfiles from '@/lib/imagenes.json';

const GenerateImagePromptInputSchema = z.object({
  sectionType: z.string().describe("El tipo de sección de la página donde se usará la imagen (ej: Hero, Card, Banner)."),
  serviceName: z.string().describe("El nombre del servicio para el cual es la imagen (ej: Envíos Express, Plan Emprendedores)."),
  serviceContext: z.string().optional().describe("Información detallada sobre el servicio para dar contexto y enriquecer el prompt."),
  aspectRatio: z.string().describe("La relación de aspecto de la imagen (ej: '16:9' para panorámica, '1:1' para cuadrada)."),
  style: z.string().describe("El estilo visual deseado para la imagen (ej: 'Fotografía Realista', 'Ilustración Digital')."),
  background: z.string().optional().describe("Descripción del fondo deseado para la imagen."),
  additionalDetails: z.string().optional().describe("Detalles adicionales o requerimientos específicos del usuario para la imagen."),
  inspirationImageName: z.string().optional().describe("Nombre de una imagen existente en imagenes.json para usar como inspiración."),
  textToInclude: z.string().optional().describe("Texto opcional para incluir en la imagen."),
});
type GenerateImagePromptInput = z.infer<typeof GenerateImagePromptInputSchema>;

const GenerateImagePromptOutputSchema = z.object({
  prompt: z.string().describe("El prompt detallado y optimizado para ser usado en un modelo de generación de imágenes como Imagen o Nano Banana."),
});
type GenerateImagePromptOutput = z.infer<typeof GenerateImagePromptOutputSchema>;

export async function generateImagePrompt(input: GenerateImagePromptInput): Promise<GenerateImagePromptOutput> {
  const companyData = companyProfile.company_profile;
  
  let inspirationImageData = null;
  if (input.inspirationImageName && input.inspirationImageName !== 'none') {
    inspirationImageData = imageProfiles.image_profiles.find(img => img.name === input.inspirationImageName) || null;
  }

  const flowInput = {
    ...input,
    company: companyData,
    inspirationImage: inspirationImageData,
    isMercadoLibreFlex: input.serviceName === "Mercado Libre Flex",
    isDeliveryGastronomico: input.serviceName === "Delivery Gastronómico",
    isEnviosExpress: input.serviceName === "Envíos Express",
    isEnviosLowCost: input.serviceName === "Envíos LowCost"
  };

  return generateImagePromptFlow(flowInput);
}

const promptTemplate = ai.definePrompt({
  name: 'generateImagePromptTemplate',
  input: { schema: z.any() }, // Accept any since we augment it
  output: { schema: GenerateImagePromptOutputSchema },
  prompt: `
    You are a world-class expert in "prompt engineering" for Google's most advanced image generation models (like Imagen, Google Flow, or Nano Banana Pro).
    Your task is to create a highly detailed, effective, and professional prompt in English based on the specific creative direction provided.

    **MANDATORY FORMULA (The 5 Pillars):**
    You MUST structure your final prompt EXACTLY according to this formula:
    [Subject + Adjectives] doing [Action] in [Location/Context]. [Composition/Camera Angle]. [Lighting/Atmosphere]. [Style/Medium]. [Text Constraint/Specific Details].

    **Brand Identity & Context:**
    - The company name is strictly "Envíos DosRuedas".
    - Company Location: {{company.location_contact.primary_city}}, Argentina.
    - Vibe: Professional, trustworthy, modern, and friendly.
    - Location Pillar: Must subtly evoke a coastal city like {{company.location_contact.primary_city}} (e.g., coastal roads, sea in the background). {{#if background}} Focus background on: "{{background}}".{{/if}}
    - Color Palette: The scene must prominently and naturally feature the brand's colors: a primary blue (like {{company.branding.colors.theme_primary.hex}}) and a secondary vibrant yellow/orange (like #FBBF24).

    **Pillar Breakdown Instructions:**
    1. **[Subject + Adjectives] & [Action]:**
       - Concept heavily revolves around "{{serviceName}}" for a "{{sectionType}}" section.
       - Integrate brand elements appropriately (e.g., uniforms, vehicles).
       - {{#if isMercadoLibreFlex}} Incorporate Mercado Libre elements (yellow color, cardboard boxes). {{/if}}
       - {{#if isDeliveryGastronomico}} Focus on food delivery (thermal bags, food containers). {{/if}}
       - {{#if isEnviosExpress}} Focus on high speed and motion blur. {{/if}}
       - {{#if isEnviosLowCost}} Focus on smart routing and economy. {{/if}}
       - Use this context: "{{serviceContext}}".
    2. **[Location/Context]:**
       - Combine the coastal vibe with any additional details: "{{additionalDetails}}".
    3. **[Composition/Camera Angle]:**
       - Optimized for "{{aspectRatio}}".
       - E.g., "Wide panoramic shot" (for Hero 16:9), "Macro close-up" (for Card 1:1).
    4. **[Lighting/Atmosphere]:**
       - Based on the mood of the service. E.g., "Cinematic lighting", "Studio lighting".
    5. **[Style/Medium]:**
       - Based on "{{style}}":
         - For 'Fotografía Realista': "Photorealistic 8k render, professional photography, DSLR".
         - For 'Ilustración Digital': "Vibrant digital illustration, clean lines, graphic novel style".
         - For 'Arte 3D': "3D render, hyper-detailed, Unreal Engine 5".
    6. **[Text Constraint/Specific Details]:**
       {{#if textToInclude}}
       - The sign clearly reads "{{textToInclude}}" in bold, modern sans-serif font (like Orbitron). The colors of the text should mix white and yellow/orange.
       {{/if}}
       {{#unless textToInclude}}
       - Do NOT include any text, letters, logos, or writing of any kind.
       {{/unless}}

    {{#if inspirationImage}}
    **Inspiration Override:**
    Use this existing image concept to heavily influence the [Subject], [Action], and [Location] pillars, but upgrade the [Composition], [Lighting], and [Style] to be vastly superior:
    - Concept: {{inspirationImage.description}}
    - Tags: {{inspirationImage.tags}}
    {{/if}}

    **OUTPUT RULE:**
    Do not output conversational text. Output ONLY the final image prompt following the 5 Pillars formula.
  `,
});

const generateImagePromptFlow = ai.defineFlow(
  {
    name: 'generateImagePromptFlow',
    inputSchema: z.any(),
    outputSchema: GenerateImagePromptOutputSchema,
  },
  async (input) => {
    const { output } = await promptTemplate(input);
    return output!;
  }
);
