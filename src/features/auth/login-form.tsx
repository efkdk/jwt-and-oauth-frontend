import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLoginMutation } from './authApi';
import { ToastContainer } from 'react-toastify';
import { getErrorMessage } from '@/helpers/error-helper';
import { showToast } from '@/helpers/toast-helper';
import { useNavigate } from 'react-router-dom';
import FormPart from '@/components/containers/form-part';

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const formSchema = z.object({
    login: z
      .string()
      .min(2, {
        message: 'Login must be at least 2 characters.',
      })
      .or(
        z.string().email({
          message: "It doesn't appear to email!",
        }),
      ),
    password: z
      .string()
      .min(6, {
        message: 'Password must be at least 6 characters.',
      })
      .max(32, {
        message: 'Password must be at most 32 characters.',
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  async function onSubmit(credentials: z.infer<typeof formSchema>) {
    const { error } = await login(credentials);
    if (error) {
      const errorMessage = getErrorMessage(error);
      showToast(errorMessage || 'Oops! Please try again...', {
        type: 'error',
        containerId: 'loginFormContainer',
      });
    } else {
      form.reset();
      showToast('You successfully logged in!', { type: 'success' }); // will be displayed in root-layout
      navigate('/');
    }
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormPart form={form} name="login" label="Your login" placeholder="username or email" />
        <FormPart
          form={form}
          name="password"
          label="Password"
          placeholder="password"
          inputType="password"
        />
        <Button loading={isLoading} className="self-center px-10 mt-6" type="submit">
          Log in
        </Button>
        <ToastContainer containerId="loginFormContainer" />
      </form>
    </Form>
  );
};

export default LoginForm;
