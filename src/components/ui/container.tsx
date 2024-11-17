import type { ReactNode } from 'react';

const containerStyles = 'max-w-6xl px-4 mx-auto';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className={containerStyles}>{children}</div>;
};

export { Container, containerStyles };
