import './App.css';

import MiniDrawer from './Components/Navigation/MiniDrawer';


import CustomerViewCar from './Components/Customer/CustomerViewCar';
import AdminMangerViewCar from './Components/Manager/AdminMangerViewCar';

import { ManagerCard } from './Components/Manager/ManagerCard';
import { CustomerCard } from './Components/Customer/CustomerCard';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import CarRentalOutlinedIcon from '@mui/icons-material/CarRentalOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { RentalHistory } from './Components/ResuableComponents/RentalHistory';
import PaymentDetails from './Components/Payment/PaymentDetails';
import Reservation from './Components/Customer/Reservation';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import CarfleetSystem from './Components/CarfleetSystem';
import { CarRegister } from './Components/Car/CarRegister';
import RootLayout from './Components/TestComponents/RootLayout';
import Dashboardlayout from './Components/TestComponents/DashboardLayout';
import AdminTab from './Components/TestComponents/AdminTab';
import ManagerTab from './Components/TestComponents/ManagerTab';
import CustomerTab from './Components/TestComponents/CustomerTab';

const adminIcons = [
  {
    title: "Cars",
    icon: <CarRentalOutlinedIcon />
  },
  {
    title: "Managers",
    icon: <SupervisorAccountOutlinedIcon />,

  },
  {
    title: "Customers",
    icon: <Person3OutlinedIcon />
  },
  {
    title: "Add Car",
    icon: <CarRentalOutlinedIcon />
  }

];
const managerIcons = [


  {
    title: "Cars",
    icon: <CarRentalOutlinedIcon />
  },
  {
    title: "Customers",
    icon: <Person3OutlinedIcon />
  },
  {
    title: "Add Car",
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
    title: "Cars",
    CardComponent: AdminMangerViewCar
  },
  {
    title: "Manager",
    CardComponent: ManagerCard,
    // modalUserInfo: {
    //   firstName: "Kevin",
    //   lastName: "Insulate",
    //   phone: "64156987",
    //   email: "kevininsulate@miu.edu",
    //   username: "KevinM",
    // }
  },
  {
    title: "Customer",
    CardComponent: CustomerCard,
    // modalUserInfo: {
    //   firstName: "Init",
    //   lastName: "Zoza Kev",
    //   phone: "69854",
    //   email: "Zoza@miu.edu",
    //   username: "ZozaM",
    // }
  },
  // {
  //   title: "Add Car",
  //   CardComponent: CarRegister
  // }
];
let managerDrawerContainer = [
  {
    title: "Cars",
    CardComponent: AdminMangerViewCar
  },
  {
    title: "Customer",
    CardComponent: CustomerCard,
    // modalUserInfo: {
    //   firstName: "Init",
    //   lastName: "Zoza Kev",
    //   phone: "69854",
    //   email: "Zoza@miu.edu",
    //   username: "ZozaM",
    // }
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
    // <Route>
    //   <Route index element={<CarfleetSystem />} />
    //   <Route path='admin' element={<MiniDrawer icons={adminIcons} userContainers={adminDrawerContainer} title="Admin Dashboard" />} />
    //   <Route path='manager' element={<MiniDrawer icons={managerIcons} userContainers={managerDrawerContainer} title="Manager Dashboard" />} />
    //   <Route path='customer' element={<MiniDrawer icons={customerIcons} userContainers={customerDrawerContainer} title="Customer Dashboard" />} />
    //   <Route path='reservations' element={<Reservation />} />
    //   <Route path='rentalhistory' element={<RentalHistory />} />
    //   <Route path='paymentdetails' element={<PaymentDetails />} />
    //   <Route path='car-register' element={<CarRegister/>}/>

    // </Route>
    <Route>
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<CarfleetSystem/>}/>
      <Route path="home" element={<Dashboardlayout/>}>
        <Route path='' element={<AdminTab/>}/>
        <Route path="manager" element={<ManagerTab/>}/>
         <Route path='reservations' element={<Reservation />} />
         <Route path="customer" element={<CustomerTab/>}/>
         <Route path='rentalhistory' element={<RentalHistory />} />
         <Route path='paymentdetails' element={<PaymentDetails />} />
         <Route path='car-register' element={<CarRegister/>}/>
      </Route>
    </Route>
    </Route>

  )
)



function App() {
  return (
    <div className="App">
      {/* <div>It should not go over here</div> */}

      <RouterProvider router={router}></RouterProvider>

      {/* <DashboardComponent userContainers={managerDrawerContainer} /> */}

      {/* <YourComponent /> */}

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