<template>
<div>
    <div>
        <div class="upper-head">
            <span class="about"> <h3>How it work</h3></span>
            <span> <h3>Log In</h3></span>
            <span> <h3> | </h3></span>
            <span class="sign-up"> <h3> Sign Up </h3> </span>

        </div>
    </div>

     <div class="header-container">
        <div>
            <router-link :to="{ name: 'homePage'}">
                    <h2> PAYSMOSMO </h2>
            </router-link>
        </div>
        <div class="search">
            <input type="text" placeholder="Enter your search here">
            <button>SEARCH</button>
            <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <div class="cart">
            <div class="cart-content">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <span class="cart-text">cart</span>
            </div>
            <div class="cart-content">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <span class="cart-text">favorite</span>
            </div>
            <div class="cart-content">
                <i class="fa fa-bell-o" aria-hidden="true"></i>
                <span class="cart-text">notification</span>
            </div>
        </div>
     </div>
     </div>
</template>

<script>
export default {
  name: 'tophead',
  data () {
    return {
      msg: ""
    }
  }
}
</script>
<style scoped>
.header-container{
    display : flex;
    justify-content: space-between;
    padding: 2px 20px;
    margin-bottom: 20px
}

.upper-head{
    display: flex;
    padding: 10px;
    justify-content: flex-end;
    box-shadow: 0 4px 4px #0000000a;
    width: 100%;
}


span{
    padding: 0 4px;
}

a {
    text-decoration: none;
    
    }

.about{
 padding-right: 30px
}

.sign-up{
    color: green
}

input{
  font-size:15px;
  width:75%;
  border:1px solid #f5f5f5;
  padding:10px;
  color:gray;
  padding-left:50px
}
button{
    color: white;
    position: absolute;
    background: gold;
    height: 100%;
    top: 0;
    right: 0px;
    width:25%;
    border:none;
}

.fa-search{
    position: absolute;
    left: 10px;
    top: 11px;
    font-size: 15px !important;
}

.cart{
    margin: auto 10px;
    display: flex
}

.cart-content{
    display: flex;
    flex-direction: column
}

.search{
    margin: auto 0px;
    width: 600px;
    text-align: left;
    position: relative;
}

span>h3{
    margin: 3px;
}

.cart-text{
    font-size: 10px;
    padding-top: 5px;
    color: grey
}


.fa{
    font-size: 20px;
    padding: 0 15px
}
</style>
