<template>
   <div class="container">
     <div class="foot-top">
       <ul class="footer-content">
         <li class="each-div">
           <ul>
             <li class="head-content">PAYMOSMO</li>
             <li class="each-spec">Help give out inventory loan to coorperate members with ease</li>
           </ul>
         </li>
         <li class="each-div">
           <ul>
             <li class="head-content">Contact</li>
             <li class="each-spec">Registration</li>
             <li class="each-spec">About Us</li>
             <li class="each-spec">Contact Us</li>
           </ul>
         </li>
         <li class="each-div">
           <ul>
             <li class="head-content">Help</li>
             <li class="each-spec">Private policy</li>
             <li class="each-spec">How it works</li>
             <li class="each-spec">Terms & Condtion</li>
           </ul>
         </li>
         <li class="each-div">
           <ul>
             <li class="head-content">Stay Connected</li>
             <li class="each-spec social-spec">
               <span class="social"> <i class="fa fa-facebook" aria-hidden="true"></i></span>
               <span class="social"> <i class="fa fa-twitter" aria-hidden="true"></i></span>
               <span class="social"><i class="fa fa-instagram" aria-hidden="true"></i></span>
             </li>
           </ul>
         </li>
         <li>
           <ul>
             <li class="head-content">BACK TO TOP <span class="up-arrow"><i class="fa fa-angle-up" aria-hidden="true"></i></span></li>
            </ul>
         </li>
       </ul>
     </div>
     <div class="foot-bottom">
       <span><i class="fa fa-copyright" aria-hidden="true"></i></span>
       2018 PAYSMOSMO
     </div>
   
    </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      msg: ""
    }
  }
}
</script>
<style scoped>
.container{
  width: 100%;
  /* min-height: 400px; */
  background:	#161b23d1;
  color: #cecece94
}

.foot-top{
  padding: 40px
}

ul{
  list-style: none;
  padding: 0;
  padding: 0
}

.each-div{
    width: 20%
}

.social-spec{
 display: flex;
}

.social{
  padding: 5px;
  margin-right: 20px;
  font-size: 20px;
  border-radius:15px;
  border: 1px solid grey
}

.footer-content{
  text-align: left;
  display: flex;
  justify-content: space-evenly;
  padding: 50 0px
}

.up-arrow{
  font-size: 20px;
  padding-left: 20px;
}

.head-content{
  padding: 20px 0px;
  font-size: 20px;
  font-weight: 600px;
}

.each-spec{
  padding: 10px 0
}

.foot-bottom{
  width: 100%;
  height: 50px;
  padding-top: 18px;
  background: #161b23;
  font-size: 20px;
  font-weight: 600;
}


</style>
