import { ValidationRule } from 'react-hook-form';

type extend = string|boolean|number|RegExp

export const createRule = <T extends extend>(value: T, message: string): ValidationRule<T> => (
  { value, message }
);