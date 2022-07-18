import { requestConvert } from "../api/api"
import { loadedConvertAction, loadingConvertAction } from "./actionCreators";

const actionLoader = (): any => async (dispatch: any) => {
  dispatch(loadingConvertAction());
    const LoadConvertFromServer = async () => {
      const convertUAHToUSD = await requestConvert('UAH', 'USD');
      const convertUAHToEUR = await requestConvert('UAH', 'EUR');
      const convertUAHToPLN = await requestConvert('UAH', 'PLN');

      dispatch(loadedConvertAction([convertUAHToUSD, convertUAHToEUR, convertUAHToPLN]));
    };

    LoadConvertFromServer();
}

export default actionLoader;
