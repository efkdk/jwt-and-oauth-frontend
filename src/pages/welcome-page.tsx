import { Button } from '@/components/ui/button';
import RequestViewer from '@/components/ui/request-viewer';
import UserInfo from '@/components/ui/user-info';
import { useLazyGetPrivateDataQuery } from '@/features/private/privateApi';
import { getErrorMessage } from '@/helpers/error-helper';
import { showToast } from '@/helpers/toast-helper';

const WelcomePage = () => {
  const [getPrivateData, { data, isFetching, isError }] = useLazyGetPrivateDataQuery();

  async function handleClick() {
    const { error } = await getPrivateData();
    if (error) {
      const errorMessage = getErrorMessage(error);
      showToast(errorMessage || 'The authenticated request failed :(', { type: 'error' });
    }
  }

  return (
    <div className="flex flex-col flex-center">
      <h1 className="mb-4 title">Welcome!</h1>
      <p className="mb-4 text-lg font-medium">
        If user data is <code>null</code> try to sign up or log in!
      </p>
      <p className="mb-2">User data:</p>
      <UserInfo />
      <Button variant="outline" className="my-4 text-base" onClick={handleClick}>
        Make an authenticated request
      </Button>
      <RequestViewer data={data} isFetching={isFetching} isError={isError} />
    </div>
  );
};

export default WelcomePage;
