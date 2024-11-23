import { selectUser } from '@/features/auth/authSlice';
import { useAppSelector } from '@/shared/types/redux';

const UserInfo = () => {
  const user = JSON.stringify(useAppSelector(selectUser), null, 4);
  return (
    <div>
      <pre>{user}</pre>
    </div>
  );
};

export default UserInfo;
