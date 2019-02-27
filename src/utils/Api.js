import firebase from 'firebase';

const API = {
	auth: {
		signIn: (email, password) => {
			// alert(`Sign in with email as ${email} and password as ${password}!`);
			console.log("signing in");
		},

		createUser: (email, password) => {
			// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function() {
			// });

			console.log("creating user");
		}
	}
}

export default API;
