import * as Yup from 'yup';

export const validateInputNumber = async (
  inputValue: string,
): Promise<void> => {
  const stringValidator = Yup.number()
    .max(999, 'Must be less than 999')
    .min(1, 'Must be greater than 1')
    .typeError('Must be a valid number')
    .required('This field is required');

  await stringValidator.validate(inputValue);
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
