Updates to keyboard shortcuts … On Thursday, August 1, 2024, Drive keyboard shortcuts will be updated to give you first-letters navigation.Learn more
export const getFullYear = function () {
  return new Date().getFullYear();
};

export const getFooterCopy = function (isIndex) {
  if (isIndex) return 'Holberton School';
  return 'Holberton School main dashboard';
};
