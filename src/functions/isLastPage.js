const isLastPage = (linkResponseHeader) => {
  return !linkResponseHeader.includes(`rel="next"`);
};

export default isLastPage;
