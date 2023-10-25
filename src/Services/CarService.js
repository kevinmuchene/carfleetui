import defaultRestApi from '../Common/RestAPiInstance';
import APIs from '../Common/API';


export default class CarService {

  static getCars = () => {
    return defaultRestApi.get(APIs.getCars());
  }

  static getCarMaintenanceHistory = (id) => {
    return defaultRestApi.get(APIs.getCarMaintenanceHistory(id), {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  static addCar = (data) => {
    return defaultRestApi.post(APIs.addCard(), data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }
}