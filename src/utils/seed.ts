export const generateSeed = () => {
  const randomBuffer = crypto.getRandomValues(new Uint8Array(4));
  const seed = parseInt(randomBuffer.toString(), 16);
  return seed;
};
