(() => {
  const gifts1: number[] = [3, 1, 2, 3, 4, 2, 5];
  const gifts2: number[] = [6, 5, 5, 5, 5];
  const gifts3: number[] = [];

  function prepareGifts(gifts: number[]): number[] {
    const uniqueGifts: number[] = [...new Set(gifts)];
    return uniqueGifts.sort((a, b) => a - b);
  }

  console.log(prepareGifts(gifts1));
  console.log(prepareGifts(gifts2));
  console.log(prepareGifts(gifts3));
})();
