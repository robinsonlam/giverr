import firebase from 'firebase';

const API = {
	auth: {
		signIn: (email, password) => {
			// alert(`Sign in with email as ${email} and password as ${password}!`);
			console.log("signing in");
		},

		createUser: (email, password) => {
			return firebase.auth().createUserWithEmailAndPassword(email, password);
		}
	}
}

export default API;
