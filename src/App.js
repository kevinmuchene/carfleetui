import './App.css';
// import { rentalHistoryLoader } from './Components/ResuableComponents/RentalHistory';
import Reservation from './Components/Customer/Reservation';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Components/Layouts/RootLayout';
import CarLayout from './Components/Layouts/CarLayout';
import { WelcomePage } from './Components/Welcome/WelcomePage';
import SignIn from './Components/SignInOut/SignIn';
import SignUp from './Components/SignInOut/SignUp';
import CustomerLayout from './Components/Layouts/CustomerLayout';
import AdminLayout from './Components/Layouts/AdminLayout';
import ManagerLayout from './Components/Layouts/ManagerLayout';
import CustomerViewCar from './Components/Customer/CustomerViewCar';
import ViewManagers from './Components/Manager/ViewManagers';
import ViewCustomers from './Components/Customer/ViewCustomers';
import AdminMangerViewCar from './Components/Manager/AdminMangerViewCar';
import AddCustomer from './Components/Customer/AddCustomer';
import { AddCar } from './Components/Car/AddCar';
import NotReserved from './Components/Customer/NotReserved';
import Accounts from './Components/Payment/Accounts';
import AddPayment from './Components/Payment/AddPayment';
import UpdatePayment from './Components/Payment/UpdatePayment';
import AddManager from './Components/Admin/AddManager';
import UpdateCustomer from './Components/Customer/UpdateCustomer';
import { UpdateCar } from './Components/Car/UpdateCar';
import CarMaintaince from './Components/Car/CarMaintaince';
import CarRentalHistory from './Components/Car/CarRentalHistory';
import CustomerRentalHistory from './Components/Customer/CustomerRentalHistory';
import UpdateManager from './Components/Manager/UpdateManager';
import ManagerCustomerLayout from './Components/Manager/ManagerCustomerLayout';




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
          <Route path='customers' element={<ViewCustomers view={false} />} />
          <Route path='cars' element={<AdminMangerViewCar />}  />
          <Route path='add-manager' element={<AddManager />} />
          <Route path='update-manager/:emailId' element={<UpdateManager />} />
        </Route>

        {/* manager router */}
        <Route path='manager' element={<ManagerLayout />}>
          <Route path='customers' element={<ManagerCustomerLayout/>}>
          <Route index element={<ViewCustomers view={true} />} />
          <Route path='updatecustomer/:email' element={<UpdateCustomer />} />
          </Route>
          
          <Route path='cars' element={<CarLayout />} >
            <Route index element={<AdminMangerViewCar />}/>
            <Route path='maintenanace/:carId' element={<CarMaintaince/>}/>
          </Route>
          
          <Route path='addCustomer' element={<AddCustomer />} />
          <Route path='addCar' element={<AddCar />} />
          
          <Route path='update-car' element={<UpdateCar />} />

        </Route>

        {/* Customer routers */}
        <Route path='customer' element={<CustomerLayout />}>
          <Route path='reservations' element={<Reservation />} />
          <Route path='rentalhistory' element={<CustomerRentalHistory />} />
          <Route path='accounts' element={<Accounts />} />
          <Route path='cars' element={<CustomerViewCar />}  />
          <Route path='notreserved' element={<NotReserved />} />
          <Route path='accounts/add-card' element={<AddPayment />} />
          <Route path='accounts/update-payment/:cardId' element={<UpdatePayment />} />

          <Route
            path=":id"
          // element={}
          // loader={}
          />
        </Route>
      </Route>

      {/* car routes */}
      <Route path='car' element={<CarLayout />}>
        <Route path='maintainance' element={<CarMaintaince />} />
        <Route path='rental-history/:carId' element={<CarRentalHistory />} />
        {/* <Route path='addCar' element={<CarRegister />} /> */}
        <Route path='update-car' element={<UpdateCar />} />
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

      {/* <DrawerTest /> */}

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
