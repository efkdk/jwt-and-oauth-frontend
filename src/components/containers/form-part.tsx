import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import type { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { PasswordInput } from '../ui/password-input';

type FormPartProps<TFormValues extends FieldValues> = {
  form: UseFormReturn<TFormValues>; // TODO: make it work
  name: Path<TFormValues>;
  label: string;
  placeholder?: string;
  description?: string;
  inputType?: React.HTMLInputTypeAttribute;
};

const FormPart = <TFormValues extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  description,
  inputType,
}: FormPartProps<TFormValues>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {inputType === 'password' ? (
              <PasswordInput autoComplete="password" placeholder={placeholder} {...field} />
            ) : (
              <Input placeholder={placeholder} {...field} />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormPart;
