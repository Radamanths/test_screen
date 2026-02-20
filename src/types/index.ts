// User profile data
export interface User {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string;
  crystals: number;
}

// Roulette prize item
export interface RoulettePrize {
  id: number;
  amount: number;
  type: 'crystal';
}

// Spin result
export interface SpinResult {
  prize: RoulettePrize;
  newBalance: number;
}

// Referral info
export interface ReferralInfo {
  invitesCount: number;
  spinsPerInvite: number;
}

// Task for earning crystals
export interface Task {
  id: string;
  title: string;
  reward: number;
  completed: boolean;
}

// Bottom navigation tab
export interface NavTab {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}
