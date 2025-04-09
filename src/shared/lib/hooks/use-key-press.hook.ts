export const useKeyPress = ({
  keyCode,
  onPress,
}: {
  keyCode: string[];
  onPress: () => any;
}) => {
  const listener = (event: KeyboardEvent) => {
    if (keyCode.includes(event.code)) {
      event.preventDefault();
      onPress();
    }
  };
  document.addEventListener('keypress', listener);
  return () => {
    document.removeEventListener('keypress', listener);
  };
};
