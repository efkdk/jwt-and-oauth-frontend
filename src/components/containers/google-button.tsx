import type { FC } from 'react';
import { getGoogleUrl } from '@/utils/getGoogleUrl';
import GoogleLogo from '@/components/ui/google-logo';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type GoogleButtonProps = {
  type: 'signup' | 'login';
  className?: string;
};

const GoogleButton: FC<GoogleButtonProps> = ({ type, className, ...props }) => {
  const googleURL = getGoogleUrl({ from: '/', type });
  const styleClasses =
    cn(buttonVariants({ variant: 'outline' })) +
    ' !px-16 py-2 !text-lg font-medium !w-fit ' +
    className;
  return (
    <a {...props} className={styleClasses} href={googleURL}>
      <GoogleLogo />
      Google
    </a>
  );
};

export default GoogleButton;
