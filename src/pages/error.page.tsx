import { Button } from '@/components/ui/button';

const ErrorPage = () => {
  return (
    <div className="flex-col h-screen flex-center">
      <p className="mb-8 font-bold text-red-500 text-7xl">404</p>
      <p className="mb-4 text-xl font-medium">
        Oops! Page which you are looking for is not found :(
      </p>
      <Button variant={'default'} onClick={() => window.history.back()}>
        Go back
      </Button>
    </div>
  );
};

export default ErrorPage;
