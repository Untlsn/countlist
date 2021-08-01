import { useSelector } from 'react-redux';
import useComposedDispatch from '~/hooks/useComposedDispatch';
import { mini } from '~/store/actions';

interface OptionShell {
  visible: boolean
  switch(): void
}
export const useOptionShell = (): OptionShell => {
  return {
    visible: useSelector(({ mini }) => mini.optionVisible),
    switch: useComposedDispatch()(mini.switchOptions) as () => void,
  };
};