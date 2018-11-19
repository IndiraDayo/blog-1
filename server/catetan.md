# blog


Firebase 

-push notif
-hosting file

create project

firebase real time database

npm install --save firebase

ke authentication

websetup

var config di kopi

firebase.initializeApp(config)

database.ref('mochachai').set([{ //pakai set itu nge override
    name: 'AliAli'
    github: 'liali'
}])

database.ref('mochachai').push([{ //pakai push itu tambah data
    name: 'AliAli'
    github: 'liali'
}])

database.ref('mochachai').remove()

let key = database.ref('users').push([{ //pakai push itu tambah data
    name: 'AliAli'
    github: 'liali'
}])
 
console.log(key)



const database = firebase.database()
this.database = database

const userRef = this.database.ref('users)

userRef.on('value', snapshot => {    // in yang buat realtime
    console.log(snapshot.val())
})


// Object.entries(user)



userRef.once('value', snapshot => { // untuk ga buat realtime... cuma sekali
    dll
})




VUEX


state management for vue


di store ada data_student =['hai', 'aku', 'kebelet']


buat get data dari store buat function di computed

di dalem nya return this.$store.state.data_student

// mapState

add ke state:

