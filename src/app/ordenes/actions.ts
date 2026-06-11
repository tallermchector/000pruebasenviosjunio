"use server"

import { QuoteShipmentInput, QuoteShipmentResult } from '@/types/order-actions';

export async function quoteShipment(input: QuoteShipmentInput): Promise<QuoteShipmentResult> {
  // Mock implementation, update as needed
  return {
    success: true,
    data: {
      price: 100,
      distanceText: "10 km",
      durationText: "20 min",
      originLat: 0,
      originLng: 0,
      destinationLat: 0,
      destinationLng: 0,
    }
  };
}
