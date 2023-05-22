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
