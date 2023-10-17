import userService from "../Services/UserServices"

export default class UserAction {

  static async registerCustomer(data) {
    return userService.registerCustomer(data).then(res => {

      return res.data || {};
    });
  }
  static async getMangers(data) {
    
    return userService.getManagers(data).then(res => {

      return res.data || {};
    });
  }

  static async getCustomers(data) {
    return userService.getCustomers(data).then(res => {

      return res.data || {};
    });
  }

}

export const registerCustomer = UserAction.registerCustomer;
export const getManagers = UserAction.getMangers;
export const getCustomers = UserAction.getCustomers;