// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('be9aea48efe85da61071', {
    cluster: 'us3'
});

var channel = pusher.subscribe('my-channel');

console.log('heeeeey')

// Test Event
channel.bind('my-event', function(data) {
    alert(JSON.stringify(data));
    document.getElementById("viewNum").innerText = JSON.stringify(data);
});

// // View Event
// channel.bind('view-event', function(data) {
//     document.getElementById("viewNum").innerText = JSON.stringify(data);
//     // Connect
//     //
// });
