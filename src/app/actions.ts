"use server"

export type ContactFormState = {
  message?: string;
  error?: string;
  fieldErrors?: Record<string, string[]>;
  formError?: string;
  timestamp?: number;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Mock implementation, update as needed
  return {
    message: "Mensaje enviado exitosamente",
    timestamp: Date.now()
  };
}
