
export {};

declare global {
  interface Window {
    fbq?: (event: string, ...params: any[]) => void;
  }
}
