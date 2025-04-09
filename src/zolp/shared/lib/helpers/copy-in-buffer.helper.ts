export const copyInBuffer = (copyThing: string) => {
  navigator.clipboard.writeText(copyThing).catch(console.error);
};
