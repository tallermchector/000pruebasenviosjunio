'use server';
/**
 * @fileOverview Flow to generate a detailed image prompt for a specific service using pre-suggested details.
 *
 * - generateOptimalImagePrompt: A function that creates a prompt for an image generation model.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import companyProfile from '@/lib/empresa.json';

const GenerateOptimalImagePromptInputSchema = z.object({
  serviceName: z.string().describe("The name of the service."),
  serviceContext: z.string().describe("The full JSON context of the service."),
  sectionType: z.string().describe("The intended use of the image, e.g., 'Banner Web (16:9)'."),
  visualStyle: z.string().describe("The desired visual style, e.g., 'Fotografía Urbana y Cinematográfica'."),
  backgroundDetails: z.string().describe("The selected background detail, either from AI suggestions or custom input."),
  contentDetails: z.string().describe("The selected content detail, either from AI suggestions or custom input."),
  includeText: z.boolean().describe("Whether to include the service name as text in the image."),
  includeBrand: z.boolean().describe("Whether to include the company name and phone number in the image."),
  fontToInclude: z.string().optional().describe("The specific font to use for the text."),
  additionalDetails: z.string().optional().describe("Any additional user-provided details for the image."),
});

const GenerateOptimalImagePromptOutputSchema = z.object({
  prompt: z.string().describe("The final, detailed prompt for the image generation model."),
});
type GenerateOptimalImagePromptOutput = z.infer<typeof GenerateOptimalImagePromptOutputSchema>;

export async function generateOptimalImagePrompt(input: z.infer<typeof GenerateOptimalImagePromptInputSchema>): Promise<GenerateOptimalImagePromptOutput> {
  const aspectRatio = input.sectionType.match(/\(([^)]+)\)/)?.[1] || '16:9';

  const flowInput = {
    ...input,
    aspectRatio,
    company: companyProfile.company_profile,
  };

  return generateOptimalImagePromptFlow(flowInput);
}

const promptTemplate = ai.definePrompt({
  name: 'generateOptimalImagePromptTemplate',
  input: { schema: z.any() },
  output: { schema: GenerateOptimalImagePromptOutputSchema },
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
    - Location Pillar: Must subtly evoke a coastal city like {{company.location_contact.primary_city}} (e.g., coastal roads, sea in the background). {{#if additionalDetails}} Include user specifics: "{{additionalDetails}}".{{/if}}
    - Color Palette: The scene must prominently and naturally feature the brand's colors: a primary blue (like {{company.branding.colors.theme_primary.hex}}) and a secondary vibrant yellow/orange (like #FBBF24).

    **Pillar Breakdown Instructions:**
    1. **[Subject + Adjectives] & [Action]:**
       - The entire concept revolves around the service "{{serviceName}}".
       - Integrate brand elements (e.g., "A professional Envíos DosRuedas courier wearing a navy blue and amber jacket").
       - Base the action on this core idea: "{{contentDetails}}".
    2. **[Location/Context]:**
       - Base the environment on: "{{backgroundDetails}}".
       - Incorporate the coastal vibe and any additional user details mentioned above.
    3. **[Composition/Camera Angle]:**
       - Optimized for "{{aspectRatio}}".
       - Use technical terms (e.g., "Macro close-up shot, shallow depth of field f/1.8", "Wide isometric shot").
    4. **[Lighting/Atmosphere]:**
       - E.g., "Cinematic lighting, golden hour sunlight, neon reflections".
    5. **[Style/Medium]:**
       - Based on "{{visualStyle}}":
         - For 'Fotografía Urbana y Cinematográfica': "Photorealistic 8k render, professional photography, DSLR".
         - For 'Ilustración Vectorial Infográfica': "Clean vector illustration, isometric perspective, corporate SaaS aesthetic".
         - For 'Render 3D Promocional': "3D render, promotional style, hyper-detailed, Unreal Engine 5".
         - For 'Fotografía Humanizada (con Enfoque Minimalista)': "Authentic photography, minimalist composition, natural light".
    6. **[Text Constraint/Specific Details]:**
       {{#if includeText}}
       - The sign clearly reads "{{serviceName}}" in bold, modern sans-serif font {{#if fontToInclude}}(similar to '{{fontToInclude}}'){{/if}}. The colors of the text should mix white and yellow/orange.
       {{/if}}
       {{#if includeBrand}}
       - A smaller text clearly reads "Envíos DosRuedas" and "{{company.location_contact.phone}}".
       {{/if}}
       {{#unless includeText}}{{#unless includeBrand}}
       - Do NOT include any text, letters, logos, or writing of any kind.
       {{/unless}}{{/unless}}

    **OUTPUT RULE:**
    Do not output conversational text. Output ONLY the final image prompt following the 5 Pillars formula.
  `,
});

const generateOptimalImagePromptFlow = ai.defineFlow(
  {
    name: 'generateOptimalImagePromptFlow',
    inputSchema: z.any(),
    outputSchema: GenerateOptimalImagePromptOutputSchema,
  },
  async (input) => {
    const { output } = await promptTemplate(input);
    return output!;
  }
);
