
export {};

declare global {
  interface Window {
    fbq?: (event: 'track', name: string, parameters?: Record<string, unknown>) => void;
  }
}
