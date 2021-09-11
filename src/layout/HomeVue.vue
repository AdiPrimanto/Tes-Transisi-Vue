<template>
  <div id="homeview">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <router-link class="nav-link text-white" to="/">Logout</router-link>
                  </li>
              </ul>
            </div>
        </div>
    </nav>
    
    <router-view />
    
  </div>
</template>

<script>
export default {
  name: 'HomeVue',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #e2e2e2;
  min-height: 100vh;
}
</style>
