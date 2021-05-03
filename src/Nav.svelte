
<script lang="ts">
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'sveltestrap';

  import { user } from './store';
  import { auth } from './firebase';
import { push } from 'svelte-spa-router';

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }

  const handleLogout = () => {
    auth.signOut();
    user.set({ ...$user, isLoggedIn: false, email: '' });
    push('/');
  };
</script>

<style>
  .user-email {
    margin-right: 15px;
  }
</style>

<Navbar color="light" light expand="md">
  <NavbarBrand href="/">Notes</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ml-auto" navbar>
      {#if $user.isLoggedIn} 
        <span class="user-email">{$user.email} test@gmail.com</span>
        <NavItem>
          <a href="#/" on:click|preventDefault={handleLogout}>Logout</a>
        </NavItem>        
      {:else}
        <NavItem>
          <NavLink href="#/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#/signup">Signup</NavLink>
        </NavItem>
      {/if}
    </Nav>
  </Collapse>
</Navbar>