import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { getGoogleUrl } from '@/utils/getGoogleUrl';
import GoogleLogo from '../ui/google-logo';

type GoogleButtonProps = {
  type: 'signup' | 'login';
  className?: string;
};

const GoogleButton: FC<GoogleButtonProps> = ({ type, className, ...props }) => {
  return (
    <Button className={`py-4 w-52 ${className}`} {...props} variant="outline">
      <GoogleLogo />
      <a className="text-lg first-letter:uppercase" href={getGoogleUrl({ from: '/', type })}>
        Google
      </a>
    </Button>
  );
};

export default GoogleButton;
