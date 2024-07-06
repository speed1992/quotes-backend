const getMarkedQuotesLength = (quotes) => {
  if (quotes) {
    return Object.values(quotes)?.flat?.()?.length;
  } else {
    return 0;
  }
};

export { getMarkedQuotesLength };
