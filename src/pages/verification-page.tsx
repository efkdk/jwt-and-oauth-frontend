import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const VerificationPage = () => {
  const { verificationCode } = useParams();

  const verificationFormSchema = z.object({
    verificationCode: z.string(),
  });

  const form = useForm<z.infer<typeof verificationFormSchema>>({
    resolver: zodResolver(verificationFormSchema),
    defaultValues: {
      verificationCode,
    },
  });

  return (
    <Form {...form}>
      <div className="flex items-center justify-center mt-8">
        <form className="flex flex-col justify-center w-1/2 gap-4">
          <FormField
            control={form.control}
            name="verificationCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium">Enter your verification code:</FormLabel>
                <FormControl>
                  <Input placeholder="verification code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="self-center w-32" type="submit">
            Verify
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default VerificationPage;
