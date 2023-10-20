import './App.css';
import { RentalHistory, rentalHistoryLoader } from './Components/ResuableComponents/RentalHistory';
import Reservation from './Components/Customer/Reservation';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Components/Layouts/RootLayout';
import CarLayout from './Components/Layouts/CarLayout';
import { Maintainace } from './Components/Car/Maintainance';
import { WelcomePage } from './Components/Welcome/WelcomePage';
import SignIn from './Components/SignInOut/SignIn';
import SignUp from './Components/SignInOut/SignUp';
import CustomerLayout from './Components/Layouts/CustomerLayout';
import AdminLayout from './Components/Layouts/AdminLayout';
import ManagerLayout from './Components/Layouts/ManagerLayout';
import CustomerViewCar, { customerCarLoader } from './Components/Customer/CustomerViewCar';
import ViewManagers from './Components/Manager/ViewManagers';
import ViewCustomers from './Components/Customer/ViewCustomers';
import AdminMangerViewCar, { adminManagerCarLoader } from './Components/Manager/AdminMangerViewCar';
import AddCustomer from './Components/Customer/AddCustomer';
import { AddCar } from './Components/Car/AddCar';
import NotReserved from './Components/Customer/NotReserved';

import Accounts from './Components/Payment/Accounts';
import AddPayment from './Components/Payment/AddPayment';
import AccountsTest from './Components/TestComponent/AccountsTest';
import UpdatePayment from './Components/Payment/UpdatePayment';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>
      <Route path="/" element={<RootLayout />}>

        {/* Welcome page route */}
        <Route index element={<WelcomePage />} />

        {/* login and register routes */}
        <Route path='login' element={<SignIn />} />
        <Route path='register' element={<SignUp />} />

        {/* amdin routers */}

        <Route path='admin' element={<AdminLayout />}>
          <Route path='managers' element={<ViewManagers />} />
          <Route path='customers' element={<ViewCustomers />} />
          <Route path='cars' element={<AdminMangerViewCar />} loader={adminManagerCarLoader} />
        </Route>

        {/* manager router */}
        <Route path='manager' element={<ManagerLayout />}>
          <Route path='customers' element={<ViewCustomers />} />
          <Route path='cars' element={<AdminMangerViewCar />} loader={adminManagerCarLoader} />
          <Route path='addCustomer' element={<AddCustomer />} />
          <Route path='addCar' element={<AddCar />} />
        </Route>

        {/* Customer routers */}
        <Route path='customer' element={<CustomerLayout />}>
          <Route path='reservations' element={<Reservation />} />
          <Route path='rentalhistory' element={<RentalHistory />} loader={rentalHistoryLoader} />
          <Route path='accounts' element={<Accounts />} />
          <Route path='cars' element={<CustomerViewCar />} loader={customerCarLoader} />
          <Route path='notreserved' element={<NotReserved />} />
          <Route path='accounts/add-card' element={<AddPayment />} />
          <Route path='accounts/update-payment' element={<UpdatePayment />} />
          <Route
            path=":id"
          // element={}
          // loader={}
          />
        </Route>
      </Route>

      {/* car routes */}
      <Route path='car' element={<CarLayout />}>
        <Route path='maintainance' element={<Maintainace />} />
        <Route path='rentalhistory' element={<RentalHistory />} />
        {/* <Route path='addCar' element={<CarRegister />} /> */}
        <Route path=':id' />
      </Route>
    </Route>


  )
)



function App() {
  return (

    <div className="App">
      {/* <div>It should not go over here</div> */}

      <RouterProvider router={router}></RouterProvider>

    </div>

  );
}

export default App;


/**************************************ROUTES*************************************************** */
// {/* <Header /> */ }
// {/* <MiniDrawer icons={adminIcons} userContainers={adminDrawerContainer} title="Admin Dashboard" /> */ }
// {/* <MiniDrawer icons={managerIcons} userContainers={managerDrawerContainer} title="Manager Dashboard" /> */ }
// {/* <MiniDrawer icons={customerIcons} userContainers={customerDrawerContainer} title="Customer Dashboard" /> */ }
// {/* <SignInSide /> */ }
// {/* <TestComponent /> */ }
// {/* <CustomizedDialogs /> */ }
// {/* <StackComponent /> */ }
// {/* <CardComponent /> */ }
// {/* <SignUp /> */ }
// {/* <SignUp /> */ }
// {/* <SignInUp /> */ }
// {/* <SignInSide /> */ }
// {/* <CarRegister /> */ }
// {/* <ViewCar /> */ }
// {/* <ListItems /> */ }
// {/* <SearchComponent /> */ }
// {/* <CustomerViewCar /> */ }
// {/* <AdminMangerViewCar /> */ }
// {/* <ListItems /> */ }
// {/* <ReusableListItem /> */ }
// {/* <Maintainace /> */ }
// {/* <RentalHistory /> */ }
// {/* <PaymentDetails /> */ }
// {/* <AddPayment /> */ }
// {/* <Reservation /> */ }
// {/* <DatePickerComponent /> */ }
// {/* <PickUp /> */ }
