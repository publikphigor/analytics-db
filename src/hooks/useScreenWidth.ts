import { useMedia } from 'react-use';

const useScreenWidth = (width: number) => {
  return useMedia(`(max-width: ${width}px)`);
};

export default useScreenWidth;
