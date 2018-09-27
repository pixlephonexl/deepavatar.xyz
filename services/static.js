const url = (path) => {
  return [
    process.env.PREFIX,
    path,
  ].join('');
};

export default {
  url,
};

