<template>
 <div>
   <topView/>
  <div class="main-container">
    <div class="top-display">
       <div class="cat-section">
         <sideBar />
       </div>
       <div class="slide-section">
         <div class="img-content" >
           <img src="../assets/slider.jpeg" alt="">
         </div>
         <div class="opacity">   
      `  </div>
      <div class="slide-content">
        <div class="slide-description">
          <h1> NEW COLLECTION</h1>
          <div class="p-content">
              <p> It is a long established fact that a reader will be distrated by a readable </p>
              <p> content of a page when looking at the layout</p>
          </div>
          <button class="shop"><span>SHOP NOW</span></button>
        </div>
        <div class="slide-dot">
          <span><i class="fa fa-current fa-circle" aria-hidden="true"></i></span>
          <span><i class="fa fa-circle" aria-hidden="true"></i></span>
          <span><i class="fa fa-circle" aria-hidden="true"></i></span>
          <span><i class="fa fa-circle" aria-hidden="true"></i></span>
        </div>
      </div>
       </div>
    </div>
    <div class="cat-component">
      <catCard :products="popularProducts">
        <h2>EXPLORE POPULAR CATEGORIES </h2>
      </catCard>
    </div>
    <div class="cat-component">
      <catCard :products="newProducts">
        <h2>EXPLORE NEW STUFFS</h2>
      </catCard>
    </div>
  </div>
  <footComponent/>
</div>
</template>

<script>
import topView from "./tophead.vue"
import catCard from "./catCard.vue"
import sideBar from "./catSideBar.vue"
import footComponent from "./foot.vue"
export default {
  components:{ topView, catCard, sideBar, footComponent },

  name: 'homePage',
  data () {
    return {
       products: null
    }
  },
  computed: {
    popularProducts(){
      if(this.products){
        let products = this.products
        products.sort((a, b) => {
          if (a.rating < b.rating) return 1;
          if (a.rating == b.rating) return 0;
          if (a.rating > b.rating) return -1;
        })

        return products.splice(0, 4)

      }
    },
    newProducts() {
      if(this.products){
        return [ this.products[0], this.products[1], this.products[2], this.products[3]]
      }
    }
  },
//   async mounted(){
//     this.products = await this.$get('http://demo4507124.mockable.io/products')
//   }

    mounted(){
      this.axios.get('http://demo4507124.mockable.io/products').then((response) => {
      this.products = response.data
      console.log(this.products)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-display{
  display: flex;
  justify-content: space-between;
   margin-bottom: 20px
  /* margin: 20px */
}

.cat-section{
  width: 25%
}

.slide-section{
  width: 70%;
  position: relative;
  /* background: red */
  height: 500px
}

.img-content{
  height: 100%;
}

img{
    width: 100%;
    height: 100%;
    max-width: 100%;
    /* width: auto; */
    max-height: 100%;
    /* height: auto;  */
}

.slide-dot{
  margin-top: 50px;
  font-size: 12px
}

.slide-dot>span{
  padding: 5px
}
.opacity{
        position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    opacity: 0.3;
    background: black;
}

h1, p {
  padding: 0;
  margin: 0;
  padding-bottom: 10px
}

h1, p-content{
  padding-bottom: 20px;
}

.shop{
  margin-top:20px;
  background: none;
  color: gold;
  border-radius: 4px;
  border: 2px solid gold;
  padding: 5px;
  
}

.fa-current{
  color: gold
}

.slide-content{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    color: white;
    bottom: 0;
}

.slide-description{
  text-align: left;
  padding-left: 30px;
  padding-top: 200px;
}

.main-container{
  margin: 20px
}

.cat-component{
  margin-bottom: 40px
}
</style>
