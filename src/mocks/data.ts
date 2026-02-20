import type { User, RoulettePrize, ReferralInfo, Task, NavTab } from '../types';

export const mockUser: User = {
  id: '1',
  username: '@hunter',
  displayName: 'Hunter',
  avatarUrl: '/avatar.png',
  crystals: 380,
};

export const mockPrizes: RoulettePrize[] = [
  { id: 1, amount: 15, type: 'crystal' },
  { id: 2, amount: 15, type: 'crystal' },
  { id: 3, amount: 15, type: 'crystal' },
  { id: 4, amount: 15, type: 'crystal' },
  { id: 5, amount: 15, type: 'crystal' },
  { id: 6, amount: 5, type: 'crystal' },
  { id: 7, amount: 10, type: 'crystal' },
  { id: 8, amount: 25, type: 'crystal' },
  { id: 9, amount: 50, type: 'crystal' },
  { id: 10, amount: 20, type: 'crystal' },
  { id: 11, amount: 30, type: 'crystal' },
  { id: 12, amount: 100, type: 'crystal' },
];

export const mockReferralInfo: ReferralInfo = {
  invitesCount: 0,
  spinsPerInvite: 1,
};

export const mockTasks: Task[] = [
  { id: '1', title: 'Посмотреть 5 видео', reward: 10, completed: false },
  { id: '2', title: 'Поделиться контентом', reward: 15, completed: false },
  { id: '3', title: 'Подписаться на канал', reward: 20, completed: true },
];

export const mockNavTabs: NavTab[] = [
  { id: 'trends', label: 'Тренды', icon: 'sparkles', active: false },
  { id: 'crystals', label: 'Кристаллы', icon: 'crystal', active: true },
  { id: 'examples', label: 'Примеры', icon: 'play', active: false },
];

export const INITIAL_SPINS = 15;
export const TOTAL_CREDITED = 380;
