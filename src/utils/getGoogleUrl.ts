type OptionsType = {
  redirect_uri: string;
  client_id: string;
  response_type: string;
  prompt: string;
  scope: string;
  state: string;
  access_type?: string;
};

export const getGoogleUrl = ({ from, type }: { from: string; type: 'signup' | 'login' }) => {
  const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;

  let options: OptionsType = {
    redirect_uri: import.meta.env.VITE_GOOGLE_OAUTH_REDIRECT as string,
    client_id: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID as string,
    response_type: 'code',
    prompt: type === 'signup' ? 'consent' : 'select_account',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'openid',
    ].join(' '),
    state: from, // will be redirected back to this path
  };

  options = type === 'signup' ? { ...options, access_type: 'offline' } : options;

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};
