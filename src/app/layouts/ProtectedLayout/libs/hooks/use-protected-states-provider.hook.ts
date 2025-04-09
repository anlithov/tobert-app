import { useDebounceRecoil } from '../../../../../zolp/shared/lib/hooks/timer/use-debounce-recoil.hook.ts';
import {
  atomTheoreticalInvestmentDebounced,
  atomTheoreticalInvestmentIsLoading,
  atomTheoreticalInvestmentToBeDebounced,
} from '../../../../store/theoretical-investment.atom.ts';

export const useProtectedStatesProvider = () => {
  useDebounceRecoil(
    {
      atomDebouncedValue: atomTheoreticalInvestmentDebounced,
      atomLoading: atomTheoreticalInvestmentIsLoading,
      atomToBeDebouncedValue: atomTheoreticalInvestmentToBeDebounced,
    },
    1000,
  );
};
