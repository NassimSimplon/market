import { lazy } from 'react'

const pagesLazyLoad = (path, path2, named) => {
  return lazy(async () => {
    const promise = import(`./${path}/${path2}.jsx`);
    if (named == null) {
      return promise;
    } else {
      return await promise.then(module => ({ default: module[named] }));
    }

  })
};
export default pagesLazyLoad