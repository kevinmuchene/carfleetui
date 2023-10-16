import defaultRestApi from '../common/RestApiInstance';
import APIs from '../common/APIs';


export default class UserService {

  static registerCustomer = (data) => {
    return defaultRestApi.post(APIs.register(), data);
  }

}