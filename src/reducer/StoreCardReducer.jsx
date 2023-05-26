import Ade from "./../assets/EkoStore/Ade.png";
import Group_297 from "./../assets/EkoStore/Group_297.png";
import Group298 from "./../assets/EkoStore/Group_298.png";
import nkem from "./../assets/EkoStore/nkem.png";
import two_Bottles_500x500_removebg_preview from "./../assets/EkoStore/two_Bottles_500x500_removebg_preview.png";
import Cap_1_removebg_preview2 from "./../assets/EkoStore/Cap_1_removebg_preview2.png";
// import Group_297 from "./../assets/EkoStore/Group_297.png";
import Group_298 from "./../assets/EkoStore/Group_298.png";
import Group_300 from "./../assets/EkoStore/Group_300.png";
import Group_301 from "./../assets/EkoStore/Group_301.png";
import Group_302 from "./../assets/EkoStore/Group_302.png";
import Group_303 from "./../assets/EkoStore/Group_303.png";
import Group_305 from "./../assets/EkoStore/Group_305.png";
import Group_306 from "./../assets/EkoStore/Group_306.png";
import Group_308 from "./../assets/EkoStore/Group_308.png"
import Group_309 from "./../assets/EkoStore/Group_309.png"
import Group_311 from "./../assets/EkoStore/Group_311.png"
import Group_316 from "./../assets/EkoStore/Group_316.png"
import COTP_bottle_removebg_preview from "./../assets/EkoStore/COTP_bottle_removebg_preview.png"




const initialState = {
    product: [
        {
            Name: "King Hauwa",
            author: 'Tenn Zipa J.',
            category: 'Books',
            size: null,
            image: Group_297,
            instock: true, 
            amount: 500
        },
        {
            Name: "Jemima and the Wind Turbine",
            author: 'Tenn Zipa J. & Yetunde Fadeyi',
            category: 'Books',
            size: null,
            image: Group298,
            instock: true,
            amount: 500
        },
        {
            Name: "The Travails of Nkem",
            author: 'Tenn Zipa J.',
            category: 'Books',
            size: null,
            image: nkem,
            instock: true,
            amount: 500
        },
        {
            Name: "Ade and Baby Oak",
            author: 'Eko Team.',
            category: 'Books',
            size: null,
            image : Ade,
            instock: true,
            amount: 500
        },
        {
            Name: "Eko Bottles",
            author: null,
            category: "Merch",
            size: "1000ml",
            image : two_Bottles_500x500_removebg_preview,
            instock: true,
            amount: 500
        },
        {
            Name: "Eko Bottles",
            author: null,
            category: "Merch",
            size: "1000ml",
            image : COTP_bottle_removebg_preview,
            instock: true,
            amount: 500
        },
        {
            Name: "Eko Hoodie",
            author: null,
            category: "Merch",
            size: "One size fits all",
            image : COTP_bottle_removebg_preview,
            instock: true,
            amount: 500
        },
        {
            Name: "Eko Sweatshirt",
            author: null,
            category: "Merch",
            size: "S, M, L, XL, XXL, XXXL",
            image : Group_301,
            instock: true,
            amount: 500
        },
        {
            Name: "Eko Hoodie",
            author: null,
            category: "Merch",
            size: "S, M, L, XL, XXL, XXXL",
            image : Group_308,
            instock: true,
            amount: 500
        },
        {
            Name: "Eko Sweatshirt",
            author: null,
            category: "Merch",
            size: "S, M, L, XL, XXL, XXXL",
            image : Group_311,
            instock: true,
            amount: 500
        },
    ],
    Category: {
        
    }
}



const storeReducer = (state, action) => {
    // switch (action.type) {
    //     case "LOGIN_MODAL_VISIBILITY":
    //         return ({
    //             ...state,
    //             showLoginModal:action.payload.showLoginModal
    //         })
    //     case "SIGNUP_MODAL_VISIBILITY":
    //         return ({
    //             ...state,
    //             showSignupModal:action.payload.showSignupModal
    //         })
        
    //     }
    }


export {initialState, storeReducer}