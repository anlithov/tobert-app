export const shortDottedText = (
  text: string,
  showOnStart: number,
  showFromEnd: number,
) => {
  return `${text.slice(0, showOnStart)}...${text.slice(-showFromEnd)}`;
};
