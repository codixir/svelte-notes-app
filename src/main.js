import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from './firebase.js';
import { user } from './store';

let app;

auth.onAuthStateChanged((u) => {
	if(!u) {
		user.set({ ...user, isLoggedIn: false, email: '' });
	} else {
		user.set({ ...user, isLoggedIn: true, email: u.email });
	}

	app = new App({
		target: document.body,
		props: {
			name: 'world'
		}
	});
});



export default app;