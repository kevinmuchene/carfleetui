import defaultRestApi from '../Common/RestAPiInstance';
import APIs from "../Common/API"


export default class UserService {

  static registerCustomer = (data) => {
    return defaultRestApi.post(APIs.register(), data);
  }
  static getManagers = (token) => {
    return defaultRestApi.get(APIs.getManagers(), {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
  static getCustomers = (token) => {
    return defaultRestApi.get(APIs.getCustomers(), {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  static addManager = (data) => {
    console.log(localStorage.getItem('token'))
    return defaultRestApi.post(APIs.addManager(), data, {
      
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    })
  }

  static getCustomer = (email) => {
    return defaultRestApi.get(APIs.getCustomer(email), {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

}