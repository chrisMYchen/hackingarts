
// Initialize Firebase
var config = {
  apiKey: "AIzaSyA8CtgabNYjURvHHjjuqEOQ3bkEqCzf3bU",
  authDomain: "hackingarts-60b8c.firebaseapp.com",
  databaseURL: "https://hackingarts-60b8c.firebaseio.com",
  projectId: "hackingarts-60b8c",
  storageBucket: "hackingarts-60b8c.appspot.com",
  messagingSenderId: "659344484965"
};
firebase.initializeApp(config);
// Get a reference to the database service
var database = firebase.database();

function writeCurrentData(player, data) {
  firebase.database().ref('player/' + player).push(data);
}
