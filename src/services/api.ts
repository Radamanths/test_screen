import type { User, RoulettePrize, SpinResult } from '../types';
import { mockUser, mockPrizes } from '../mocks/data';

// Abstraction layer for API calls.
// Currently uses mock data, can be swapped to real endpoints without changing component logic.

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  /** Fetch user profile */
  async getUser(): Promise<User> {
    await delay(200);
    return { ...mockUser };
  },

  /** Fetch roulette prizes */
  async getPrizes(): Promise<RoulettePrize[]> {
    await delay(100);
    return [...mockPrizes];
  },

  /** Perform a spin and get result */
  async spin(): Promise<SpinResult> {
    await delay(300);
    const randomIndex = Math.floor(Math.random() * mockPrizes.length);
    const prize = mockPrizes[randomIndex];
    return {
      prize,
      newBalance: mockUser.crystals + prize.amount,
    };
  },
};
