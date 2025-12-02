(() => {
  function manufactureGifts(
    giftsToProduce: Array<{ toy: string; quantity: number }>
  ): string[] {
    return giftsToProduce.flatMap(({ toy, quantity }) => {
      const n = Math.max(0, Math.floor(quantity));
      return n ? Array(n).fill(toy) : [];
    });
  }
})();
