<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand" style="font-size:30px !important;">R<a style="color: rgb(59, 89, 134);">É</a>CIT</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li>
              <a class="nav-link">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Profile</a>
            </li>
            <li v-if="is_logged_in" class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Actions
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item">Hot Topics</a>
                <a class="dropdown-item">Categories</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">Following</a>
                <a class="dropdown-item">Followers</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">Chat Groups</a>
              </div>
            </li>
          </ul>
          <!-- <form class="form-inline my-2 my-lg-0"> -->
            <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
            
            <button v-if="!is_logged_in" class="btn btn-primary my-2 my-sm-0" type="submit">login</button>
            <button v-if="!is_logged_in" class="btn btn-primary my-2 my-sm-0" type="submit">register</button>
            <button v-if="is_logged_in" v-on:click="logout()" class="btn btn-primary my-2 my-sm-0" type="submit">logout</button>
          <!-- </form> -->
        </div>
    </nav>
</template>

<script>

$('.alert').alert()

export default {
    name: 'Navbar',
    props: ['is_logged_in'],
    methods: {
        loggingin() {
        let self = this
        axios({
            method: 'POST',
                url: 'http://localhost:3000/login',
                data: {
                email: self.email,
                password: self.password
            }
        })
            .then(response => {
                // console.log('Bisaaaaaaa');
                // console.log('Heii ini datanya' + JSON.stringify(response.data))

                localStorage.setItem('token', response.data.token)
                // this.$router.push({name: 'Homepage'})
                // self.getUserData()
            })
            .catch(err => {
            console.log(err);
            
            })
        },
        logout() {
            console.log('aku, logot, ke pencet');
            
            localStorage.removeItem('token')
            this.$emit('changeLoginStatus', false)
        }
    }
}
</script>

