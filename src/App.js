import './App.css';

import { RentalHistory } from './Components/ResuableComponents/RentalHistory';
import PaymentDetails from './Components/Payment/PaymentDetails';
import Reservation from './Components/Customer/Reservation';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { CarRegister } from './Components/Car/CarRegister';
import RootLayout from './Components/Layouts/RootLayout';
import AdminTab from './Components/Admin/AdminTab';
import ManagerTab from './Components/Manager/ManagerTab';
import CustomerTab from './Components/Customer/CustomerTab';
import CarLayout from './Components/Layouts/CarLayout';
import { Maintainace } from './Components/Car/Maintainance';

import { WelcomePage } from './Components/Welcome/WelcomePage';
import SignIn from './Components/SignInOut/SignIn';
import SignUp from './Components/SignInOut/SignUp';
import CustomerLayout from './Components/Layouts/CustomerLayout';
import AdminLayout from './Components/Layouts/AdminLayout';
import ManagerLayout from './Components/Layouts/ManagerLayout';

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

          <Route index element={<AdminTab />} />
        </Route>

        {/* manager router */}
        <Route path='manager' element={<ManagerLayout />}>
          <Route index element={<ManagerTab />} />
        </Route>

        {/* Customer routers */}
        <Route path='customer' element={<CustomerLayout />}>
          <Route index element={<CustomerTab />} />
          <Route path='reservations' element={<Reservation />} />
          <Route path='rentalhistory' element={<RentalHistory />} />
          <Route path='paymentdetails' element={<PaymentDetails />} />
        </Route>
      </Route>

      {/* car routes */}
      <Route path='car' element={<CarLayout />}>
        <Route path='maintainance' element={<Maintainace />} />
        <Route path='rentalhistory' element={<RentalHistory />} />
        <Route path='addCar' element={<CarRegister />} />
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
