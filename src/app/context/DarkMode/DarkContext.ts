import { createContext } from 'react';

export type DarkContextType = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const DarkContext = createContext<DarkContextType>({
  isDark: true,
  setIsDark: () => null,
})

export default DarkContext;