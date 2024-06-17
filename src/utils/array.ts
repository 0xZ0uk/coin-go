export const fisherShuffle = <T>(array: T[]): T[] => {
  let currentIndex = array.length;
  let shuffled: T[] = [];

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    shuffled[currentIndex] = array[randomIndex];
    shuffled[randomIndex] = array[currentIndex];
  }

  return shuffled;
};

export const durstenfeldShuffle = <T>(array: T[]): T[] => {
  let shuffled: T[] = [];

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
  // Create a seeded random number generator
  const seededRandom = (seed: number) => {
    let x = seed;
    return () => {
      x = (1103515245 * x + 12345) % 2 ** 31;
      return x / 2 ** 31;
    };
  };

  // Create two seeded random number generators
  const privateRandom = seededRandom(privateSeed);
  const publicRandom = seededRandom(publicSeed);

  // Shuffle the array using the Durstenfeld algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor((privateRandom() + publicRandom()) * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // Remove undefined values
  array = array.filter((item) => item !== undefined);

  // Return the shuffled array
  return array;
};
