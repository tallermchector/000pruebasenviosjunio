# Google Genkit & Gemini Integration Guidelines

This project utilizes **Google Genkit** to orchestrate and manage AI workflows powered by Google Gemini foundation models. This document outlines the technical standards for maintaining and extending AI capabilities within the codebase.

---

## ⚙️ 1. Core Configuration & Authentication

### 1.1 Centralized Initialization
- Genkit is centrally configured in `src/ai/genkit.ts`.
- **Strict Requirement:** The `GEMINIENLACE` environment variable is mandatory for authenticating with the Google AI SDK. The application must throw a critical error during initialization if this variable is missing.

### 1.2 Plugin Setup
- Use the official Google AI Studio plugin (`googleAI`).
- The default model should be set to `"googleai/gemini-2.5-flash"` for optimal latency and cost balance.

---

## 🧠 2. Model Tiering Strategy

Select the appropriate Gemini model based on the complexity and performance requirements of the specific task:

### Tier 1: `googleai/gemini-2.5-flash` (Speed & Efficiency)
- **Primary Use Cases:** Fast synthesis, creative parameter suggestions, generating short text snippets, and low-latency user interactions.
- **Goal:** Optimize response times and minimize API quota usage.

### Tier 2: `googleai/gemini-2.5-pro` (Deep Reasoning)
- **Primary Use Cases:** Complex logic generation, full source code analysis, meta-prompting, and tasks requiring extensive context retention.
- **Goal:** Provide deep analytical reasoning for complex architectural or coding challenges.

---

## 📝 3. Structured Prompt Engineering

All prompts driving AI flows must be defined using Genkit's `ai.definePrompt` API to ensure type safety and backend stability.

### 3.1 Zod Schema Enforcement
- **Strict Validation:** Both `input` and `output` properties of the prompt definition must be strictly constrained using Zod schemas.
- **JSON Output:** This forces the Gemini model to return structured JSON data that perfectly aligns with TypeScript types.

### 3.2 Handlebars Templating
- Define prompts using Handlebars templates.
- Utilize Handlebars features like `{{#each}}` for iterating over lists and `{{#if}}` for conditional logic to inject complex variables cleanly into the prompt context.

### 3.3 Separation of Concerns
- Store all prompt definitions in isolated files within the `src/ai/flows/` directory.
- This separation facilitates easier maintenance, version control, and testing via the Genkit Developer UI.

---

## 🛡️ 4. Resiliency & Rate Limiting

To prevent service disruptions due to Google AI Studio API rate limits (e.g., HTTP 429), implement robust retry mechanisms.

### 4.1 Exponential Backoff
- Utilize the retry wrapper located at `src/ai/utils/retry.ts` (`withExponentialBackoff`).
- **Error Detection:** Automatically intercept `429` status codes, `RESOURCE_EXHAUSTED` errors, or "Too Many Requests" messages.
- **Dynamic Delay:** Attempt to use the `retryDelay` provided natively by Google AI Studio. If unavailable, fallback to a standard exponential formula (e.g., `initialDelayMs * 2^(attempt - 1)`).
- **Max Retries:** Configure a sensible maximum number of retries before throwing a final exception to the client.

**Example Usage:**
```typescript
const result = await withExponentialBackoff(async () => {
  return await prompt(flowInput);
});
```