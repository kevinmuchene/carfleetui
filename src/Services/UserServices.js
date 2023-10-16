import defaultRestApi from '../Common/RestAPiInstance';
import APIs from "../Common/API"


export default class UserService {

  static registerCustomer = (data) => {
    return defaultRestApi.post(APIs.register(), data);
  }

}