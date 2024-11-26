import type { FC } from 'react';
import { Spinner } from './spinner';
import { selectIsAuth } from '@/features/auth/authSlice';
import { useAppSelector } from '@/shared/types/redux';

type RequestViewerProps = {
  data: string | undefined;
  isFetching: boolean;
  isError: boolean;
};

const RequestViewer: FC<RequestViewerProps> = ({ data, isFetching, isError }) => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <div className="flex flex-col gap-2">
      {isFetching && <Spinner />}
      {isError && !isFetching && !isAuth && (
        <p className="font-medium text-red-400">The authenticated request failed :(</p>
      )}
      {!isFetching && data && !isError && isAuth && (
        <>
          <p className="text-base font-medium">Response:</p>
          <pre>{data}</pre>
        </>
      )}
    </div>
  );
};

export default RequestViewer;
