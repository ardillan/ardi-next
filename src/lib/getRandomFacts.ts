export const getRandomFacts = (
  facts: { fact: string; link: string }[],
  count: number
) => {
  const shuffled = [...facts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
