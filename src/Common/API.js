
const apiGatewayURL = 'http://localhost:8889';

const authService = '/auth-service/uaa';

const userService = '/user-service/users';

const carService = '/car-fleet-service/car-fleet';

// /maintenance-history?carId=1

// const getManagers = '/user-service/users/manager/list'

// const addManagerService = "/user-service/users/manager/add"

const APIs = {

  getToken: function () {
    return `${apiGatewayURL}${authService}`;
  },

  getRefreshToken: function() {
    return `${apiGatewayURL}${authService}/refreshToken`
  },


  register: function () {
    return `${apiGatewayURL}${userService}/register`;
  },

  getManagers: function() {
    return `${apiGatewayURL}${userService}/manager/list`;
  },
  getManager: function(email) {
    return `${apiGatewayURL}${userService}?email=${email}`
  },
  getCustomerRentalHisotry: function() {
    return `${apiGatewayURL}${userService}/rental-history`;
  },

  getCustomers: function() {
    // console.log(`${apiGatewayURL}${userService}/list`)
    return `${apiGatewayURL}${userService}/list`;
  },
  getCars: function() {
    // console.log(`${apiGatewayURL}${userService}/list`)
    // console.log(`${apiGatewayURL}${carService}/search`)
    return `${apiGatewayURL}${carService}/car/search`;
  },
  addManager: function() {
    return `${apiGatewayURL}${userService}/manager/add`
  },

  updateManager: function(id) {
    return `${apiGatewayURL}${userService}/manager/update/${id}`
  },
  getCarMaintenanceHistory: function(id) {
    return `${apiGatewayURL}${carService}/maintenance-history?carId=${id}`
  },

  getCustomer: function(email) {
    return `${apiGatewayURL}${userService}?email=${email}`
  },

  addCard: function() {
    return `${apiGatewayURL}${carService}`
  }


}

export default APIs;