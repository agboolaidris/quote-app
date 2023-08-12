export const randomStringFromArray = (strings: string[]): string => {
  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
};
