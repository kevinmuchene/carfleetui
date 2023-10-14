import './App.css';
// import Header from './Components/Header';
import MiniDrawer from './Components/Navigation/MiniDrawer';
import SignUp from './Components/SignInOut/SignUp';
// import { TestComponent } from './Components/DashboardUserManagerContainer';
import SignInSide from './Components/SignInOut/SignInUp';
// import SignInUp from './Components/SignInOut/SignInUpTab';
import { CarRegister } from './Components/Car/CarRegister';
import ViewCar from './Components/ResuableComponents/ViewCar';
import ListItems from './Components/ResuableComponents/ListItems';
import SearchComponent from './Components/ResuableComponents/SearchComponent';
import CustomerViewCar from './Components/Customer/CustomerViewCar';
import AdminMangerViewCar from './Components/Manager/AdminMangerViewCar';
// import { ViewCar } from './TestComponent/ViewCar';
// import StackComponent from './TestComponent/StackComponent';
import { ManagerCard } from './Components/Manager/ManagerCard';
import { CustomerCard } from './Components/Customer/CustomerCard';
// import AdminMangerViewCar from './TestComponent/AdminMangerViewCar';



import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import CarRentalOutlinedIcon from '@mui/icons-material/CarRentalOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ReusableListItem from './Components/ResuableComponents/ReusableListItem';
import { Maintainace } from './Components/Car/Maintainance';
import { RentalHistory } from './Components/ResuableComponents/RentalHistory';
import PaymentDetails from './Components/Payment/PaymentDetails';
import AddPayment from './Components/Payment/AddPayment';
import Reservation from './Components/Customer/Reservation';
import DatePickerComponent from './Components/ResuableComponents/DatePickerComponent';
import PickUp from './Components/Customer/PickUp';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SignInUp from './Components/SignInOut/SignInUp';
import DashboardComponent from './Components/ResuableComponents/DashboardComponent';

const adminIcons = [
  {
    title: "Managers",
    icon: <SupervisorAccountOutlinedIcon />,

  },
  {
    title: "Customers",
    icon: <Person3OutlinedIcon />
  },
  {
    title: "Cars",
    icon: <CarRentalOutlinedIcon />
  }
];
const managerIcons = [

  {
    title: "Customers",
    icon: <Person3OutlinedIcon />
  },
  {
    title: "Cars",
    icon: <CarRentalOutlinedIcon />
  }
];
const customerIcons = [


  {
    title: "Cars",
    icon: <CarRentalOutlinedIcon />
  },
  {
    title: "Current Reservation",
    icon: <BookOutlinedIcon />
  },
  {
    title: "Rental History",
    icon: <HistoryOutlinedIcon />
  },
  {
    title: "Payment Details",
    icon: <PaidOutlinedIcon />
  }
];


let adminDrawerContainer = [
  {
    title: "Manager",
    CardComponent: ManagerCard,
    modalUserInfo: {
      firstName: "Kevin",
      lastName: "Insulate",
      phone: "64156987",
      email: "kevininsulate@miu.edu",
      username: "KevinM",
    }
  },
  {
    title: "Customer",
    CardComponent: CustomerCard,
    modalUserInfo: {
      firstName: "Init",
      lastName: "Zoza Kev",
      phone: "69854",
      email: "Zoza@miu.edu",
      username: "ZozaM",
    }
  },
  {
    title: "Cars",
    CardComponent: AdminMangerViewCar
  }
];
let managerDrawerContainer = [
  {
    title: "Customer",
    CardComponent: CustomerCard,
    modalUserInfo: {
      firstName: "Init",
      lastName: "Zoza Kev",
      phone: "69854",
      email: "Zoza@miu.edu",
      username: "ZozaM",
    }
  },
  {
    title: "Cars",
    CardComponent: AdminMangerViewCar
  }
];
let customerDrawerContainer = [

  {
    title: "Cars",
    CardComponent: CustomerViewCar
  }
];



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<SignInUp />} />
      <Route path='admin' element={<MiniDrawer icons={adminIcons} userContainers={adminDrawerContainer} title="Admin Dashboard" />} />
      <Route path='manager' element={<MiniDrawer icons={managerIcons} userContainers={managerDrawerContainer} title="Manager Dashboard" />} />
      <Route path='customer' element={<MiniDrawer icons={customerIcons} userContainers={customerDrawerContainer} title="Customer Dashboard" />} />
      <Route path='/currentreservations' element={<Reservation />} />
      <Route path='/rentalhistory' element={<RentalHistory />} />
      <Route path='/paymentdetails' element={<PaymentDetails />} />

    </Route>
  )
)



function App() {
  return (
    <div className="App">
      {/* <div>It should not go over here</div> */}

      <RouterProvider router={router}></RouterProvider>

      {/* <DashboardComponent userContainers={managerDrawerContainer} /> */}

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