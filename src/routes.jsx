import CheckoutContainer from "./components/checkout/CheckoutContainer"
import Quizes from "./components/quiz/Quizes"
import Review from "./components/quiz/ReviewQuizzes/Quizes"
import ShortStory from "./components/shortStory/ShortStory"

import Dashboardcontainer from "./pages/dashboard/Dashboardcontainer"
import FaqContainer from "./pages/FAQ/FaqContainer"
// import LandingPage from ""

import GeneralUiOverlay from "./components/ui/GeneralUiOverlayLoader"
import ShppoingCarts from "./pages/ShoppingCart/ShppoingCarts"
import WhishlistContainer from "./pages/WhishlistContainer/WhishlistContainer"
import Login from "./components/Login/Login"
import StoreDetails from "./components/EkoStore/StoreDetails/StoreDetails"
import Test from "./components/Test"
import VerifyEmail from "./pages/Verify-email"
import Beapublisher from "./pages/Beapublisher/Beapublisher"
import Productdetails from "./components/ProductDetails/Productdetails"
import ExploreCourses from "./pages/ExploreCourses/ExploreCourses"
import CourseQuizes from "./components/Dashboard/CourseQuizzes/CoursesQuizzes"
import { Suspense, lazy } from "react"


const LandingPage = lazy(() => import('./pages/landingpage/landingPage')) 
const  AboutPage  = lazy(() => import('./pages/About/about')) 
const ServicesContainer = lazy(() => import("./pages/Services/ServicesContainer"))
const  ProjectsContainer = lazy(() => import("./pages/Project/ProjectsContainer"))
const  EkoStoreContainer = lazy(() => import("./pages/EkoStore/EkoStoreContainer")) 
const EkoNewsContain = lazy(() => import("./pages/EkoNews/EkoNewsContain")) 



export const BasicRoutes = [
    {
        path: "/",
        component:<Suspense fallback={<GeneralUiOverlay />}><LandingPage></LandingPage></Suspense>
        
    },
    {
        path: "/about",
        component:<Suspense fallback={<GeneralUiOverlay />}><AboutPage></AboutPage>  </Suspense>
    },
    {
        path: '/faq',
        component: <FaqContainer/>
    },
    {
        path: '/services/*',
        component: <Suspense fallback={<GeneralUiOverlay />}><ServicesContainer /></Suspense>
    },
    {
        path: '/projects/*',
        component: <Suspense fallback={<GeneralUiOverlay />}><ProjectsContainer /></Suspense>
    },
    {
        path: '/ekostore',
        component: <Suspense fallback={<GeneralUiOverlay />}><EkoStoreContainer /></Suspense>
    },
    {
        path: '/ekostore/product/:id',
        component: <Productdetails />
    },
    {
        path: '/ekonews/*',
        component: <Suspense fallback={<GeneralUiOverlay />}><EkoNewsContain /></Suspense>
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
        path: "/quizes",
        component: <Quizes />
    },
    {
        path: "/quizes/reviewQuizzes",
        component: <Review />
    },
    {
        path: "/quizzes/:redirect_id/:completed_id",
        component: <CourseQuizes />
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

