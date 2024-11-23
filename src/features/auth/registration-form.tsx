import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ToastContainer } from 'react-toastify';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useSignupMutation } from './authApi';
import { showToast } from '@/helpers/toast-helper';
import { getErrorMessage } from '@/helpers/error-helper';
import FormPart from '@/components/containers/form-part';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const navigate = useNavigate();

  const formSchema = z
    .object({
      username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
      }),
      email: z.string().email(),
      password: z
        .string()
        .min(6, {
          message: 'Password must be at least 6 characters.',
        })
        .max(32, {
          message: 'Password must be at most 32 characters.',
        }),
      confirmPassword: z
        .string()
        .min(6, {
          message: 'Password must be at least 6 characters.',
        })
        .max(32, {
          message: 'Password must be at most 32 characters.',
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match!",
      path: ['confirmPassword'],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(credentials: z.infer<typeof formSchema>) {
    const { error } = await signup(credentials);
    if (error) {
      const errorMessage = getErrorMessage(error);
      showToast(errorMessage || 'Oops! Please try again...', {
        type: 'error',
        containerId: 'registrationFormContainer',
      });
    } else {
      form.reset();
      showToast('You successfully signed up!', { type: 'success' }); // will be displayed in root-layout
      navigate('/');
    }
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormPart
          form={form}
          name="username"
          label="Username"
          description="This is your public display name."
          placeholder="username"
        />
        <FormPart form={form} name="email" label="Email" placeholder="email" inputType="email" />
        <FormPart
          form={form}
          name="password"
          label="Password"
          placeholder="password"
          inputType="password"
        />
        <FormPart
          form={form}
          name="confirmPassword"
          label="Confirm your password"
          placeholder="your password again"
          inputType="password"
        />
        <Button loading={isLoading} className="self-center px-10 mt-6" type="submit">
          {isLoading ? 'Loading...' : 'Sign up'}
        </Button>
        <ToastContainer containerId="registrationFormContainer" />
      </form>
    </Form>
  );
};

export default RegistrationForm;
