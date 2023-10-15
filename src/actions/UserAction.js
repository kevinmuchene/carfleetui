import userService from "../services/UserService";

export default class UserAction {

  static async registerCustomer(data) {
    return userService.registerCustomer(data).then(res => {

      return res.data || {};
    });
  }

}

export const registerCustomer = UserAction.registerCustomer;