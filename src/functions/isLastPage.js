const isLastPage = (linkResponseHeader) => {
  return linkResponseHeader.split(",")[1] === undefined;
};

export default isLastPage;
