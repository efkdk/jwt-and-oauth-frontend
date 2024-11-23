import { useLogoutMutation } from '@/features/auth/authApi';
import { Button } from '../ui/button';
import { showToast } from '@/helpers/toast-helper';
import { getErrorMessage } from '@/helpers/error-helper';

const LogoutButton = () => {
  const [logout, { isLoading }] = useLogoutMutation();

  async function handleLogout() {
    const { error } = await logout();
    if (error) {
      const errorMessage = getErrorMessage(error);
      showToast(errorMessage || 'Failed to logout :(', { type: 'error' });
    } else {
      showToast('You successfully logged out!', { type: 'success' });
    }
  }
  return (
    <Button loading={isLoading} onClick={() => handleLogout()} variant="destructive">
      Logout
    </Button>
  );
};

export default LogoutButton;
