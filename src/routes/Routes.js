import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
// import AddAProduct from '../dashboard/AddAProduct/AddAProduct'
// import AllBuyers from '../dashboard/AllBuyers/AllBuyers'
// import AllSellers from '../dashboard/AllSellers/AllSellers'
// import DashboardLayout from '../dashboard/DashboardLayout/DashboardLayout'
// import MyOrders from '../dashboard/MyOrders/MyOrders'
// import MyProducts from '../dashboard/MyProducts/MyProducts'
// import Payment from '../dashboard/Payment/Payment'
// import ReportedItems from '../dashboard/ReportedItems/ReportedItems'
// import WelcomeScreen from '../dashboard/WelcomeScreen'
import Main from '../layouts/Main'
import Cars from '../pages/cars/Cars'
import Help from '../pages/help/Help'
import Home from '../pages/Home/Home'
import Safety from '../pages/safety/Safety'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'
// import About from '../pages/About/About'
// import Blogs from '../pages/Blogs/Blogs'
// import Categories from '../pages/Categories/Categories'
// import ErrorPage from '../pages/ErrorPage/ErrorPage'
// import Home from '../pages/Home/Home'
// import SignIn from '../pages/SignIn/SignIn'
// import SignUp from '../pages/SignUp/SignUp'
// import PrivateRoute from '../PrivateRoute/PrivateRoute'
// import AdminRoute from './AdminRoute'
// import SellerRoute from './SellerRoute'

const router = createBrowserRouter([
  {
    path: '/',
    // errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/cars',
        element:<Cars></Cars>,
      },
      // {
      //   path: '/categories/:id',
      //   element: (
      //     <PrivateRoute>
      //       <Categories></Categories>
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://mall-of-recondition-laptops-server.vercel.app/categories/${params.id}`
      //     ),
      // },
      {
        path: '/help',
        element:<Help/>,
      },
      {
        path: '/safety',
        element:<Safety/>,
      },
      {
        path: '/login',
        element:<SignIn/>,
      },
      {
        path: '/register',
        element:<SignUp/>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: []
  //     {
  //       path: '/dashboard',
  //       element: (
  //         <PrivateRoute>
  //           <WelcomeScreen></WelcomeScreen>
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: '/dashboard/dashboardd',
  //       element: (
  //         <PrivateRoute>
  //           <MyOrders></MyOrders>
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: '/dashboard/allbuyers',
  //       element: (
  //         <AdminRoute>
  //           <AllBuyers></AllBuyers>
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: '/dashboard/allsellers',
  //       element: (
  //         <AdminRoute>
  //           <AllSellers></AllSellers>
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: '/dashboard/reportedItems',
  //       element: (
  //         <AdminRoute>
  //           <ReportedItems></ReportedItems>
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: '/dashboard/adda-products',
  //       element: (
  //         <SellerRoute>
  //           <AddAProduct></AddAProduct>
  //         </SellerRoute>
  //       ),
  //     },
  //     {
  //       path: '/dashboard/my-products',
  //       element: (
  //         <SellerRoute>
  //           <MyProducts></MyProducts>
  //         </SellerRoute>
  //       ),
  //     },
  //     {
  //       path: '/dashboard/payment/:id',
  //       element: <Payment></Payment>,
  //       loader: ({ params }) =>
  //         fetch(
  //           `https://mall-of-recondition-laptops-server.vercel.app/orders/${params.id}`
  //         ),
  //     },
  //   ],
  },
])
export default router