export const durstenfeldShuffle = <T>(array: T[]): T[] => {
  const shuffled: T[] = [];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // Shuffle the array
  for (let i = 0; i < array.length; i++) {
    shuffled.push(array[i]);
  }

  return shuffled;
};

export const seededDurstenfeldShuffle = <T>(
  array: T[],
  privateSeed: number,
  publicSeed: number
): T[] => {
  const seededRandom = (seed: number) => {
    let x = seed;
    return () => {
      x = (1103515245 * x + 12345) % 2 ** 31;
      return x / 2 ** 31;
    };
  };

  const privateRandom = seededRandom(privateSeed);
  const publicRandom = seededRandom(publicSeed);

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor((privateRandom() + publicRandom()) * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // Filter undefined
  const filteredArray = array.filter((item) => item !== undefined);

  return filteredArray;
};
