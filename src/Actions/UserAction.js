import userService from "../Services/UserServices"

export default class UserAction {

  static async registerCustomer(data) {
    return userService.registerCustomer(data).then(res => {

      return res.data || {};
    });
  }

}

export const registerCustomer = UserAction.registerCustomer;