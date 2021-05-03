<script>
	import Home from './Home.svelte';
	import CreateNote from './Notes/CreateNote.svelte';
	import Notes from './Notes/Notes.svelte';
	import Note from './Notes/Note.svelte';

	import Nav from './Nav.svelte';
	import Register from './Auth/Register.svelte';
	import Login from './Auth/Login.svelte';	

	import { user } from './store';

	import Router from 'svelte-spa-router';

	import { wrap } from 'svelte-spa-router/wrap';
	import { push } from 'svelte-spa-router';
import { detach } from 'svelte/internal';

	const routes = {
		'/': wrap({ component: Home }),
		'/notes/create': wrap({
			asyncComponent: () => CreateNote,
			conditions: [
				async(detail) => {
					if ($user.isLoggedIn) {
						return true;
					} else {
						push('/login');
					}
				}
			]
		}),
		'/notes': wrap({
			asyncComponent: () => Notes,
			conditions: [
				async(detail) => {
					if ($user.isLoggedIn) {
						return true;
					} else {
						push('/login');
					}
				}
			]
		}),
		'/notes/create/:id': wrap({
			asyncComponent: () => CreateNote,
			conditions: [
				async(detail) => {
					if ($user.isLoggedIn) {
						return true;
					} else {
						push('/login');
					}
				}
			]
		}),
		'/login': wrap({
			asyncComponent: () => Login,
			conditions: [
				async(detail) => {
					if ($user.isLoggedIn) {
						push('/');
					} else {
						return true;
					}
				}
			]
		}),
		'/signup': wrap({
			asyncComponent: () => Register,
			conditions: [
				async(detail) => {
					if ($user.isLoggedIn) {
						push('/');
					} else {
						return true;
					}
				}
			]
		})
	};
</script>

<style>
	.app {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}
	.main{
		padding: 5%;
	}
</style>

<div class="app">
	<Nav />
	<div class="main">
		<Router { routes } />
	</div>
</div>