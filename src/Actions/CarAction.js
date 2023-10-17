import CarService from "../Services/CarService";

export default class CarActions {

  static async getCars() {
    return CarService.getCars().then(res => {
      return res.data || {};
    });
  }

}
export const getCars = CarActions.getCars();
