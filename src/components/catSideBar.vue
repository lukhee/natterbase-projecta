<template>
  <div class="category">
    <ul>
        <li class="catHead"> <span> CATEGORIES </span>  </li>
        <li>
            <ul v-for="(cat) in categories" :key="cat.id">
                <!-- <router-link to="./catgoeies"> -->
                <router-link :to="{ name: 'catPage', params:{ category: cat.id}}">
                    <li class="cat-list"> 
                        <span>{{cat.name}}</span> 
                       <span>  <i class="fa fa-angle-right" aria-hidden="true"></i> </span>
                    </li>
                </router-link>
            </ul>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'catCard',
  data () {
    return {
      msg: '',
      categories:null
    }
  },
     mounted(){
      this.axios.get('http://demo4507124.mockable.io/categories').then((response) => {
      this.categories = response.data
    })
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category{
 /* padding: 20px; */
 /* margin-left: 10px; */
 border: 1px solid #80808021;
 border-bottom: none;
 /* border-radius: 5px; */
 width: 300px
}
span{
    padding: 20px;
}

ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
}

li{
    /* padding: 5px 10px ; */

    color: grey;
    text-align: left;
    line-height: 16px;
    font-size: 20px;
    border-bottom: 1px solid #80808021
}
.cat-list{
 /* padding: 20px 0px; */
 text-decoration: none;
 display: flex;
 justify-content: space-between
 
}

li a {
    text-decoration: none;
    }

.catHead{
    background: green;
    color: white;
    padding: 17px 0;
    font-size: 25px;
    font-weight: 550
}
</style>
