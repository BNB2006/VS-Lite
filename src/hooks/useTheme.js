import { useState } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(true);
  
  const theme = isDark ? 'vs-dark' : 'light';
  const toggleTheme = () => setIsDark(!isDark);
  
  return { theme, isDark, toggleTheme };
}