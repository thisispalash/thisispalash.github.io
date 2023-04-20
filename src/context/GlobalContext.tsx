import { useToast } from '@chakra-ui/react';
import { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext({});

import { UseToastOptions } from '@chakra-ui/react';
import { ReactNode } from 'react';

type showToastWithCode = {
  code: number,
  title?: ReactNode,
  description?: ReactNode,
  status?: UseToastOptions['status']
}

type showCustomToast = {
  title: ReactNode,
  description: ReactNode,
  status: UseToastOptions['status'],
  code?: number,
}

export type showToastProps = showToastWithCode | showCustomToast;

export const GlobalProvider = (
  { state , children }: { state: any, children: any }
) => {

  const [ current, setCurrent ] = useState(state);
  const [ toastConfig, setToastConfig ] = useState<UseToastOptions | undefined>(undefined);

  const toast = useToast();
  

  const initialize = () => {
    setCurrent({
      ...current,
      // Add your initial state here
    });
  }

  const makeToast = (props: showToastProps) => {

    const config: UseToastOptions = {
      title: undefined,
      description: undefined,
      status: undefined,
      position: 'top',
      variant: 'subtle',
      isClosable: true,
      duration: 1337,
    }

    switch(props.code) {
      case 200:
        config.title = props.title ?? 'Success';
        config.description = props.description ?? 'Congratulations! The stars aligned and your action was successful!';
        config.status = 'success' // @dev code 200 is always a success
        break;
      case 400:
        config.title = props.title ?? 'Invalid Input';
        config.description = props.description ?? 'This is the internet. Be careful of what you type.';
        config.status = 'error'; // @dev code 400 is always an error
        break;
      case 401:
        config.title = props.title ?? 'Unauthorized';
        config.description = props.description ?? 'Aw man, you aren\'t in the circle yet. Check back later.';
        config.status = props.status ?? 'warning';
        break;
      case 403:
        config.title = props.title ?? 'Forbidden';
        config.description = props.description ?? 'Hey! No entry here! Go back to where you came from!';
        config.status = props.status ?? 'warning';
        break;
      case 404:
        config.title = props.title ?? 'Not Found';
        config.description = props.description ?? 'You sure you know what you\'re looking for?';
        config.status = props.status ?? 'info';
        break;
      case 500:
        config.title = props.title ?? 'Internal Server Error';
        config.description = props.description ?? 'Something bad happened on the server. Please try again later.';
        config.status = 'error'; // @dev code 500 is always an error
        break;
      case 501:
        config.title = props.title ?? 'Not Implemented';
        config.description = props.description ?? 'This action is not implemented yet. Please check back later.';
        config.status = props.status ?? 'info';
        break;
      default:
        if(props.code) {
          // The passed in code is not handled by this function, yet
          throw new Error('A code is passed to \`showToast\` that is not handled by the function. Change the code or handle it before deploying.')
        } else {
          config.title = props.title ?? 'No Title Provided';
          config.description = props.description ?? 'No Description Provided';
          config.status = props.status ?? 'error';
        }
    }

    setToastConfig(config);
  }

  const callAPI = async (url: string, data: any) => {
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }


  useEffect(() => { if(toastConfig) toast(toastConfig); }, [toastConfig]);
  useEffect(() => { if(Object.keys(current).length === 0) initialize(); }, [current]);

  return (
    <GlobalContext.Provider value={{
      makeToast,
      callAPI
    }}>
      {children}
    </GlobalContext.Provider>
  );

};


export const useGlobalContext = () => useContext(GlobalContext);