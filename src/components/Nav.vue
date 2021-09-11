<template>
    <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <div class="container">
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li> -->
                    <li class="nav-item">
                        <router-link class="nav-link text-white" to="/">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white" to="/register">Register</router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>