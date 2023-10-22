import carService from "../Services/CarService"

export default class CarActions {

  static async getCars() {
    return carService.getCars().then(res => {
      return res.data || {}
    })
  }

  static async getCarMaintenanceHistory(id) {
    return carService.getCarMaintenanceHistory(id).then(res => {
      return res.data || {}
    })
  }

}
export const getCars = CarActions.getCars;
export const getCarMaintenanceHistory = CarActions.getCarMaintenanceHistory;
