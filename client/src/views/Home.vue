<template>
  <div class="container-fluid">
    <div class="row justify-content-between">
      <div class="col-2 card" style="margin-top: 120px; margin-left: 30px; position: fixed;background: rgb(50, 76, 114); margin-bottom: 10%; z-index: 1000;">
        <div class="card-body">
          <img v-if="is_logged_in" src="https://avatars3.githubusercontent.com/u/37532696?s=460&v=4" alt="" width="100%" style="border-radius: 20px;">
          <br v-if="is_logged_in"><br v-if="is_logged_in">
          <h5 v-if="is_logged_in" >Indira Dayo</h5>
          <button v-if="is_logged_in" class="btn btn-success">Article+</button>
          <!-- <hr v-if="is_logged_in"> -->
          <h5 v-if="!is_logged_in" class="my-topics" style="text-align: left;">Hot Topics</h5>
          <hr>
          <h5 class="my-topics" style="text-align: left;">Search</h5>
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <!-- <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button> -->             
          
          <hr v-if="!is_logged_in">
          <h5 v-if="!is_logged_in" class="my-topics" style="text-align: left;" data-toggle="collapse" data-target="#collapseCategories" aria-expanded="false" aria-controls="collapseCategories">Categories</h5>
          <div v-if="!is_logged_in" class="collapse" id="collapseCategories">
            <br>
            <div class="my-height-2 ">
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
            </div>
            
            
          </div>
          <hr v-if="is_logged_in">
          <h5 v-if="is_logged_in" class="my-topics" style="text-align: left;" data-toggle="collapse" data-target="#collapseArticles" aria-expanded="false" aria-controls="collapseArticles"> My Articles</h5>
          <div v-if="is_logged_in" class="collapse" id="collapseArticles">
            <br>
            <div class="my-height-2 ">
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
              <p class="my-categories"> Lucu nak tembemb</p>
            </div>               
            
          </div>
          
        </div>

      </div>

      <div class="col-2 card" style=" margin-left: 81.5%; position: fixed;background: rgb(50, 76, 114); margin-bottom: 10%; margin-top: 118px; z-index: 1000;">
        <div class="card-body">
          <h5 class="my-topics" style="text-align: left;" data-toggle="collapse" data-target="#collapseChat" aria-expanded="false" aria-controls="collapseCategories">World Chat</h5>
          <hr>

          <div class="collapse" id="collapseChat">
            <div class="my-height-2" style="background: rgb(52, 80, 119); border-radius: 5px 5px 0 0; text-align: left; padding:5px;">
              <p><span class="fa fa-trash">VAn</span>: Lucu nak tembemb ane yang nular ga gitu kali</p>
              <p><span class="fa fa-save">SotonG</span>: Lucu nak tembemb</p>
              <p><span class="fa fa-trash">VAn</span>: Lucu nak tembemb ngilu pipi aku</p>
              <p><span class="fa fa-save">SotonG</span>: Lucu nak tembemb</p>
              <p><span class="fa fa-save">SotonG</span>: Lucu nak tembemb</p>
              <p><span class="fa fa-trash">VAn</span>: Lucu nak tembemb</p>
              <p><span class="fa fa-trash">VAn</span>: Lucu nak tembemb</p>
              <p><span class="fa fa-trash">VAn</span>: Lucu nak tembemb</p>
              <p><span class="fa fa-trash">VAn</span>: Lucu nak tembemb</p>
              <p><span class="fa fa-save">SotonG</span>: Lucu nak tembemb</p>
              <p><span class="fa fa-trash">VAn</span>: Lucu nak tembemb</p>
              <p><span class="fa fa-save">SotonG</span>: Lucu nak tembemb</p>
              <p><span class="fa fa-save">SotonG</span>: Lucu nak tembemb</p>
              <p><span class="fa fa-save">SotonG</span>: Lucu nak tembemb</p>
              <p><span class="fa fa-trash">VAn</span>: Lucu nak tembemb</p>
            </div>
            <input style="border-radius: 0 0 5px 5px;" class="form-control mr-sm-2" type="search" placeholder="say something..." aria-label="Search">
            <br>
          </div>
        
        </div>

      </div>

      <div class="col-lg-7" style="margin-top: 120px; margin-left: 21%; margin-right: 3%; opacity: 80%;">
        <!-- <div > -->
          

          <div style="margin-top: 4%; margin-bottom: 4%; color: white;">
            <div class="gameDiv">
              <!-- <div style="float:left; height: 100%; width: 30%"> -->
                <img class="my-article-cover" width="30%" height="200" src="https://wri-indonesia.org/sites/default/files/styles/large/public/tiger%20%281%29_0.jpg?itok=Cd8_Cx4J" />
              <!-- </div> -->
              <div style=" width: 55%;margin-left: 6%; margin-top: 2%;float:left; text-align: left;" >
                  <p style="margin-bottom: 2%;font-size: 35px; vertical-align: middle;">Title Ahjgjg Ahghgh Afai Yueh Kwueuy</p>
                  
              </div> 
                  <p style="font-size: 15px;">ugjhghjghjg</p>

            </div>
          </div>

          <!-- <br> -->

          <div style="margin-top: 4%; margin-bottom: 4%; color: white;">
            <div class="gameDiv">
              <!-- <div style="float:left; height: 100%; width: 30%"> -->
                <img class="my-article-cover" width="30%" height="200" src="https://awsimages.detik.net.id/community/media/visual/2018/09/26/d5c74124-4de9-4fa3-9d1c-8f4f6e1859ef_11.jpeg?w=780&q=90" />
              <!-- </div> -->
              <div style=" width: 55%;margin-left: 6%; margin-top: 2%;float:left; text-align: left;" >
                  <p style="margin-bottom: 2%;font-size: 35px;">Title</p>

                  <p style="font-size: 15px;">ugjhghjghjg</p>
                  
              </div>              
            </div>
          </div>

          <!-- <br> -->





          <div class="card my-article-thumbnail">
            <div class="card-body">
              <h1>jdshfkjshfshfjsh</h1>
              <h1>jdshfkjshfshfjsh</h1>
            </div>
          </div>

          <br>

          <div class="card my-article-thumbnail">
            <div class="card-body">
              <h1>jdshfkjshfshfjsh</h1>
              <h1>jdshfkjshfshfjsh</h1>
            </div>
          </div>

          <br>

          <div class="card my-article-thumbnail">
            <div class="card-body">
              <h1>jdshfkjshfshfjsh</h1>
              <h1>jdshfkjshfshfjsh</h1>
            </div>
          </div>

          <br>

          <div class="card my-article-thumbnail">
            <div class="card-body">
              <h1>jdshfkjshfshfjsh</h1>
              <h1>jdshfkjshfshfjsh</h1>
            </div>
          </div>
          
        <!-- </div> -->
      </div>

      

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  props: ['is_logged_in'],
  components: {
    HelloWorld
  }
}
</script>
