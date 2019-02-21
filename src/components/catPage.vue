<template>
  <div class="main-container">
    <topView/>
    <div class="top-display">
       <div class="cat-section">
         <sideBar />
       </div>
        <div class="slide-section">
            <catCard :products ="newProducts">
                 <h2>{{category}} </h2>
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

  name: 'catPage',
  data () {
    return {
      category:this.$route.params.category,
      data: null,
      someData:[]
    }
  },

  computed: {
       newProducts() {
      if(this.data){
        console.log(this.category)
        let dataValue = this.data
        // return [ this.data[0], this.data[1], this.data[2], this.data[3]]
        return dataValue.filter(item => item.categoryid === this.category);
        console.log(this.someData)

      }
    }
  },

  mounted(){
        this.axios.get('http://demo4507124.mockable.io/products').then((response) => {
        this.data = response.data
        // console.log(this.data)
      })
  },

 watch: { 
     '$route.params.category': {
        handler: function(category) {
           this.category = category
        },
        deep: true,
        immediate: true
      }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-display{
  display: flex;
   margin: 20px;
  justify-content: space-between;
  /* margin: 20px */
}

.cat-section{
  width: 25%;
  margin-top: 10px;
}

.slide-section{
  width: 70%;
  /* background: red */
}

.cat-component{
  margin-bottom: 20px
}
</style>
