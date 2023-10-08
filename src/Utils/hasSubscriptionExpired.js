export default function hasSubscriptionExpired (startDate, expiryDate) {
    if(startDate  !== null || expiryDate !== null){
    const currentDate = new Date()
    startDate = new Date(startDate);
    expiryDate = new Date(expiryDate);
    if(currentDate >= expiryDate){
        return "current subscription has expired"
    } 
    else{
        return "Current Subscriber"
    }
    }
    else{
        return "You are not a subscriber"
    }
}