import { defer } from 'react-router-dom';

function simulateApiRequest(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ testingName: 'test' });
    }, time);
  });
}

export const accountLoader = () => {
  return defer({
    account: simulateApiRequest(2000),
  });
};
