import { useState } from 'react';

export const useTooltipControl = (): {
  onMouseProps: {
    onMouseOver(): void;
    onMouseLeave(): void;
  };
  showTooltip: boolean;
  setShowTooltip: (state: boolean) => void;
} => {
  const [showTooltip, setShowTooltip] = useState(false);

  return {
    onMouseProps: {
      onMouseOver: () => {
        setShowTooltip(true);
      },
      onMouseLeave: () => {
        setShowTooltip(false);
      },
    },
    showTooltip,
    setShowTooltip,
  };
};
