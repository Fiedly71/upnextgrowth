export type ServicePlatform = 'meta' | 'google' | 'tiktok' | 'web';

export type ServiceTier = 'essential' | 'growth' | 'elite';

export interface ServiceFeature {
  text: string;
  included: boolean;
}

export interface ServicePackage {
  id: string;
  tier: ServiceTier;
  name: string;
  tagline: string;
  price: number;
  duration: 'mensuel' | 'trimestriel' | 'annuel';
  discount?: number;
  platforms: ServicePlatform[];
  features: ServiceFeature[];
  popular?: boolean;
  objective: string;
}

export interface OrderStep {
  id: number;
  title: string;
  completed: boolean;
}

export interface OrderConfiguration {
  packageId: string;
  duration: 'mensuel' | 'trimestriel' | 'annuel';
  adBudget: number;
  addons: {
    contentCreation: boolean;
    extraLandingPage: boolean;
    tikTokAds: boolean;
  };
  totalPrice: number;
}

export interface ClientOnboarding {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website?: string;
  facebookBusinessManager?: string;
  googleAdsAccount?: string;
  objectives: string;
  targetAudience: string;
}
