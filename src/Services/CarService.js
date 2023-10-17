import defaultRestApi from '../Common/RestAPiInstance';
import APIs from '../Common/API';


export default class CarService {


  static getCars = () => {
    return defaultRestApi.get(APIs.getCars());
  }

}