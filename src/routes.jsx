import CheckoutContainer from "./components/checkout/CheckoutContainer"
import Quizes from "./components/quiz/Quizes"
import Review from "./components/quiz/ReviewQuizzes/Quizes"
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
import CourseQuizes from "./components/Dashboard/CourseQuizzes/CoursesQuizzes"
import { Suspense } from "react"

export const BasicRoutes = [
    {
        path: "/",
        component:<Suspense fallback={<div>Loading</div>}><LandingPage></LandingPage></Suspense>
        
    },
    {
        path: "/about",
        component:<Suspense fallback={<div>Loading</div>}><AboutPage></AboutPage> </Suspense> 
    },
    {
        path: '/faq',
        component: <Suspense fallback={<div>Loading</div>}><FaqContainer/></Suspense>
    },
    {
        path: '/services/*',
        component: <Suspense fallback={<div>Loading</div>}><ServicesContainer /></Suspense>
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
        component:<Suspense fallback={<div>Loading</div>}> <EkoNewsContain /></Suspense>
    },
    {
        path: '/cart',
        component: <Suspense fallback={<div>Loading</div>}><ShppoingCarts /></Suspense>
    },
    {
        path: '/checkout',
        component: <Suspense fallback={<div>Loading</div>}><CheckoutContainer /></Suspense>
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
        component: <Suspense fallback={<div>Loading</div>}><Dashboardcontainer /></Suspense>
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
        component:<Suspense fallback={<div>Loading</div>}> <ExploreCourses /></Suspense>
    }
   
    
]

export const PrivateRoutes = [
    {
        path: '/dashboard/*',
        component: <Dashboardcontainer />
    }
]

