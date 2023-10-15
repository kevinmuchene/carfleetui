import defaultRestApi from '../common/RestApiInstance';
import APIs from '../common/APIs';


export default class AuthService {

  static login = (data) => {
    return defaultRestApi.post(APIs.getToken(), data);
  }

}