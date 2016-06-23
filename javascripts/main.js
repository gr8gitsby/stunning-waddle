console.log('This would be the main JS file.');


document.addEventListener( "DOMContentLoaded", ready, false )

function ready(e){
    //Check for Service Worker
    if(typeof serviceWorker in navigator !== undefined){
        console.log("Service Worker object is found");
    } else {
        console.log("Service Worker object is NOT found");
    }
}