import React, {useState, useRef, useEffect, useCallback} from 'react'

const HttpHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const activeHttpRequests = useRef([]);
  const sendRequest = useCallback(async(url, method = 'GET', body = null, headers = {}) => {
  setIsLoading(true);
  const httpAbortCtrl = new AbortController();
  activeHttpRequests.current.push(httpAbortCtrl);
  try{
    const response = await fetch(url, {
      method, 
      body, 
      headers,
      signal: httpAbortCtrl.signal
    } );
    const responseData = await response.json();

    activeHttpRequests.current = activeHttpRequests.current.filter(reqCtrl => reqCtrl !== httpAbortCtrl);
    
    if(!response.ok){
      throw new Error(responseData.message);
    }
    setIsLoading(false);
    return responseData;
  }
  catch(err){
    setIsLoading(false);
    setError(err.message);
    throw err;
  }
  },[])
  const cancelError = () => {
    setError(null);
  }
  return {isLoading, error, sendRequest, cancelError};
  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach(httpAbortCtrl => { httpAbortCtrl.abort()});
    }
  },[])
}

export default HttpHook;