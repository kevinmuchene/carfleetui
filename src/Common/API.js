
const apiGatewayURL = 'http://localhost:8889';

const authService = '/auth-service/uaa';

const userService = '/user-service/users';

const carService = '/car-fleet-service/car-fleet';

// const getManagers = '/user-service/users/manager/list'

const APIs = {

  // getToken: function () {
  //   return `${apiGatewayURL}${authService}`;
  // },


  // register: function () {
  //   return `${apiGatewayURL}${userService}/register`;
  // },

  // getManagers: function() {
  //   return `${apiGatewayURL}${userService}/manager/list`;
  // },

  // getCustomers: function() {
  //   // console.log(`${apiGatewayURL}${userService}/list`)
  //   return `${apiGatewayURL}${userService}/list`;
  // },
  // getCars: function() {
  //   // console.log(`${apiGatewayURL}${userService}/list`)
  //   console.log(`${apiGatewayURL}${carService}/search`)
  //   return `${apiGatewayURL}${carService}/car/search`;
  // }

}

export default APIs;