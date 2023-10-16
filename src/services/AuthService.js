import defaultRestApi from '../common/RestApiInstance';
import APIs from '../common/APIs';


export default class AuthService {

  static login = (data) => {
    return defaultRestApi.post(APIs.getToken(), data);
  }

  static registerCustomer = (data) => {
    return defaultRestApi.post(APIs.register(), data);
  }

}