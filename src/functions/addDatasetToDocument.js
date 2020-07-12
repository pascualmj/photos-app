const addDatasetToDocument = (dataName, dataValue) => {
  document.documentElement.dataset[dataName] = dataValue;
};

export default addDatasetToDocument;
