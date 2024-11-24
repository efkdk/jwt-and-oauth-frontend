import { selectIsLoading, selectUser } from '@/features/auth/authSlice';
import { useAppSelector } from '@/shared/types/redux';
import { Spinner } from '@/components/ui//spinner';
const UserInfo = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const user = JSON.stringify(useAppSelector(selectUser), null, 4);
  return (
    <div>{isLoading ? <Spinner className="text-primary" size="medium" /> : <pre>{user}</pre>}</div>
  );
};

export default UserInfo;
