
const apiGatewayURL = 'http://localhost:8889';

const authService = '/auth-service/uaa';

const APIs = {

  getToken: function () {
    return `${apiGatewayURL}${authService}`;
  },

}

export default APIs;