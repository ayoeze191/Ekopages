import CheckoutContainer from "./components/checkout/CheckoutContainer"
import Quizes from "./components/quiz/Quizes"
import ShortStory from "./components/shortStory/ShortStory"
import { AboutPage } from "./pages/About/about"
import Dashboardcontainer from "./pages/dashboard/Dashboardcontainer"
import EkoNewsContain from "./pages/EkoNews/EkoNewsContain"
import EkoStoreContainer from "./pages/EkoStore/EkoStoreContainer"
import FaqContainer from "./pages/FAQ/FaqContainer"
import LandingPage from "./pages/landingpage/landingPage"
import ProjectsContainer from "./pages/Project/ProjectsContainer"
import ServicesContainer from "./pages/Services/ServicesContainer"
import ShppoingCarts from "./pages/ShoppingCart/ShppoingCarts"
import WhishlistContainer from "./pages/WhishlistContainer/WhishlistContainer"
import Login from "./components/Login/Login"
import StoreDetails from "./components/EkoStore/StoreDetails/StoreDetails"
import Test from "./components/Test"
import VerifyEmail from "./pages/Verify-email"
import Beapublisher from "./pages/Beapublisher/Beapublisher"
import Productdetails from "./components/ProductDetails/Productdetails"
import ExploreCourses from "./pages/ExploreCourses/ExploreCourses"


export const BasicRoutes = [
    {
        path: "/",
        component:<LandingPage></LandingPage>
        
    },
    {
        path: "/about",
        component:<AboutPage></AboutPage>  
    },
    {
        path: '/faq',
        component: <FaqContainer/>
    },
    {
        path: '/services/*',
        component: <ServicesContainer />
    },
    {
        path: '/projects/*',
        component: <ProjectsContainer />
    },
    {
        path: '/ekostore',
        component: <EkoStoreContainer />
    },
    {
        path: '/ekostore/product/:id',
        component: <Productdetails />
    },
    {
        path: '/ekonews/*',
        component: <EkoNewsContain />
    },
    {
        path: '/cart',
        component: <ShppoingCarts />
    },
    {
        path: '/checkout',
        component: <CheckoutContainer />
    },
    {
        path: '/whishlist',
        component: <WhishlistContainer />
    },
    {
        path: "/quizes/:category",
        component: <Quizes />
    },
    {
        path: "/story/:category",
        component: <ShortStory />
    },
    {
        path: '/dashboard/*',
        component: <Dashboardcontainer />
    },
    {
        path: '/login',
        component: <Login />
    },
    {
        path: "/registration/account-confirm-email/:token", 
        component: <VerifyEmail />
    },
    {
        path: "/beapublisher",
        component: <Beapublisher />
    },
    {
        path: "/explore-courses",
        component: <ExploreCourses />
    }
   
    
]

export const PrivateRoutes = [
    {
        path: '/dashboard/*',
        component: <Dashboardcontainer />
    }
]

