import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { getGoogleUrl } from '@/utils/getGoogleUrl';

type GoogleButtonProps = {
  type: 'signup' | 'login';
  className?: string;
};

const GoogleButton: FC<GoogleButtonProps> = ({ type, className, ...props }) => {
  return (
    <Button className={className} {...props} variant="outline">
      <a className="first-letter:uppercase" href={getGoogleUrl({ from: '/', type })}>
        {type} with google
      </a>
    </Button>
  );
};

export default GoogleButton;
