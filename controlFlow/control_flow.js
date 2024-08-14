let userRole = "admin";
let accesseLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;

//execute the if ..else block by assigning different rooles
if (userRole === "admin"){
    accesseLevel = "Full access granted";
}else if (userRole === "manager"){
    accesseLevel = "Limited access granted";
}else {
    accesseLevel = "No access granted";
}

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
document.getElementById("test").innerHTML = "Access Level:"+ accesseLevel;
document.getElementById("demo").innerHTML = "User Message:"+ userMessage;
document.getElementById("demo1").innerHTML = "User Category:"+ userCategory;
//console.log("User Message:", userMessage);