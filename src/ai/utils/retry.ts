/**
 * Executes a function with exponential backoff retry logic, specifically handling Gemini API HTTP 429 (Resource Exhausted) errors.
 */
export async function withExponentialBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  initialDelayMs: number = 2000
): Promise<T> {
  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (error: any) {
      attempt++;
      
      const errorMessage = error?.message || String(error);
      const isRateLimit = 
        errorMessage.includes("429") || 
        errorMessage.includes("RESOURCE_EXHAUSTED") || 
        errorMessage.includes("Too Many Requests") || 
        error?.status === 429 ||
        error?.statusCode === 429;
        
      if (!isRateLimit || attempt > maxRetries) {
        throw error;
      }
      
      let delay = initialDelayMs * Math.pow(2, attempt - 1);
      
      // Check if the error object has a specific retryDelay property (Google AI Studio)
      if (error?.retryDelay) {
        const parsedDelay = parseFloat(error.retryDelay);
        if (!isNaN(parsedDelay)) {
          delay = parsedDelay * 1000;
        }
      }
      
      console.warn(`[Gemini API] Rate limited (429). Retrying attempt ${attempt}/${maxRetries} after ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
