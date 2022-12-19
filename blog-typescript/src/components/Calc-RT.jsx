const CalcRT = (ev) => {
  const wordsPerMinute = 25; // Average case.
  let result;
  let textLength = ev.split(" ").length; // Split by words
  if (textLength > 0) {
    result = Math.ceil(textLength / wordsPerMinute);
  }
  return result;
};

export default CalcRT;
