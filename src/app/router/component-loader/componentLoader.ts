import type { ReactElement } from 'react';

const couldBeReloaded = () => {
  const hasBeenReloaded = localStorage.getItem('beenReloaded');

  if (!hasBeenReloaded) {
    localStorage.setItem('beenReloaded', 'true');

    return true;
  }

  return false;
};

export const componentLoader = (
  lazyComponent: () => Promise<{ default: (props: any) => ReactElement }>,
  attemptsLeft = 3,
  shouldAutoReload = false,
) => {
  return new Promise<{ default: (props: any) => ReactElement }>(
    (resolve, reject) => {
      lazyComponent()
        .then((result) => {
          localStorage.removeItem('beenReloaded');

          return resolve(result);
        })
        .catch((error) => {
          // retry after 1500 ms
          console.log('Loading error, man') //LOGS
          setTimeout(() => {
            if (attemptsLeft === 1) {
              if (shouldAutoReload && couldBeReloaded()) {
                return window.location.reload();
              }

              reject(error);

              return;
            }
            componentLoader(
              lazyComponent,
              attemptsLeft - 1,
              shouldAutoReload,
            ).then(resolve, reject);
          }, 1500);
        });
    },
  );
};
