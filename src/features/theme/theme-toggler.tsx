import { MoonIcon, Sun } from 'lucide-react';
import { useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/shared/types/redux';
import { selectTheme, setTheme } from './themeSlice';
import { useDispatch } from 'react-redux';

const ThemeToggler = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useDispatch();

  const handleSetTheme = useCallback(
    (theme: 'dark' | 'light') => {
      dispatch(setTheme(theme));
      theme === 'dark' ? document.body.classList.add('dark') : (document.body.classList.value = '');
      localStorage.setItem('theme', theme);
    },
    [dispatch],
  );

  // define default theme
  useEffect(() => {
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeFromStorage = localStorage.getItem('theme') as 'dark' | 'light';
    if (themeFromStorage) {
      handleSetTheme(themeFromStorage);
    } else {
      if (isDarkTheme) {
        handleSetTheme('dark');
      } else {
        handleSetTheme('light');
      }
    }
  }, [dispatch, handleSetTheme]);

  return (
    <Button
      onClick={() => handleSetTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center w-8 h-8 rounded-lg dark:bg-white bg-slate-800"
      size="icon"
    >
      {theme === 'dark' ? (
        <MoonIcon className="!w-[1.25rem] !h-[1.25rem]" color="black" />
      ) : (
        <Sun className="!w-[1.25rem] !h-[1.52rem]" color="white" />
      )}
    </Button>
  );
};

export default ThemeToggler;
