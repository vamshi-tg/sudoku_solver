export const unsolvedPuzzles = [
  [
    [null, 9, 6, null, 4, null, null, 3, null],
    [null, 5, 7, 8, 2, null, null, null, null],
    [1, null, null, 9, null, null, 5, null, null],
    [null, null, 9, null, 1, null, null, null, 8],
    [5, null, null, null, null, null, null, null, 2],
    [4, null, null, null, 9, null, 6, null, null],
    [null, null, 4, null, null, 3, null, null, 1],
    [null, null, null, null, 7, 9, 2, 6, null],
    [null, 2, null, null, 5, null, 9, 8, null],
  ],
  [
    [null, null, null, null, null, 1, null, 3, null],
    [null, 8, null, null, null, null, null, null, 9],
    [null, 2, 3, null, null, null, null, null, null],
    [null, 1, 7, null, null, 6, null, null, null],
    [2, null, null, null, null, null, null, 7, null],
    [null, null, 4, null, null, null, null, 8, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, 4],
    [null, null, null, 5, null, null, null, null, null],
  ],
];

export const getRandomPuzzle = () => {
  const random = Math.floor(Math.random() * unsolvedPuzzles.length);
  return unsolvedPuzzles[random];
};
