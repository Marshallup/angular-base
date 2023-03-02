const getUniqIdFn = () => {
  let counter = 0;

  function uniqId(prefix: string): string;
  function uniqId(): number;
  function uniqId(prefix?: string) {
    const id = ++counter;

    if (typeof prefix === 'string') {
      return `${prefix}-${id}`;
    }

    return id;
  }

  return uniqId;
};

export const getUniqId = getUniqIdFn();
