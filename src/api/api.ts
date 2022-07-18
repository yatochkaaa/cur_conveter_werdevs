const requestURL = 'https://api.exchangerate.host/';

export const requestConvert = async (ccy1: string, ccy2: string) => {
  const response = await fetch(`${requestURL}convert?from=${ccy1}&to=${ccy2}`);

  if (!response.ok) {
    throw Error(`${response.status} ${response.statusText}`);
  }

  return response.json();
};
