<template>
  <div class="categories">
      <div class="head">
       <slot> </slot>
      </div>
      <div class="all-cat">
          <div class="each-cat"  v-for="(prod, index) in products" :key="index">
              <div class="image">
                  <img src="../assets/banner.jpeg" alt="">
              </div>
              <div class="content">
                 <div class="content">  {{prod.name}} </div>
                    <div class="content rating">
                        <div v-for="(rating, index) in 4" :key="index"  >
                            <i class="fa fa-star" aria-hidden="true"></i>  
                        </div>
                        <div class="free-star"  >
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                    </div>
                 <div class="content price" v-if="prod.old_price"> <span class="old_price">  ₦{{prod.old_price}} </span>  <span>  ₦{{prod.price}} </span> </div>
                  <div class="content" v-else> <span>  ₦{{prod.price}} </span> </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'catCard',
  props: ["products"],
data(){
    return{
        // products: ["hello", "you", "me", "stay"]
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.categories{
    box-shadow: 2px 2px 2px 2px #cecece;
    /* margin-top: 40px; */
     text-align: left;
}
.head{
    padding: 20px;
    border-bottom: 1px solid #cecece;
}

.all-cat{
    display: flex;
    /* justify-content: space-between; */
    /* flex-wrap: wrap; */
}

.head>h2{
    margin: 0px
}

.each-cat{
    width: 20%;
    /* background: green; */
    margin: 35px
}

.image{
    /* width: 100%; */
    width: auto;
    /* height: auto; */
    /* height: 200px; */
    /* background: yellow; */
}
img{
    width: 98%;
    height: 100%;
    /* max-width: 100%; */
    /* width: auto; */
    max-height: 100%;
    height: auto;
    /* margin: auto */
    /* padding: 0 10px */
}
.content{
    color: black;
    width: 100%;
    padding: 3px
}
.fa-star{
    color: gold;
    font-size: 14px;
    padding: 0 4px;
}

.price {
    display: flex;
    justify-content: space-between;
}

.old_price{
    color: grey;
    text-decoration: line-through;
}

.rating{
    display: flex
}
</style>
