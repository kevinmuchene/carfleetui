
const apiGatewayURL = 'http://localhost:8889';

const authService = '/auth-service/uaa';

const userService = '/user-service/users';

const APIs = {

  getToken: function () {
    return `${apiGatewayURL}${authService}`;
  },


  register: function () {
    return `${apiGatewayURL}${userService}/register`;
  },

}

export default APIs;