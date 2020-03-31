<template>
<StackLayout  class="card bg-primary">

  <slot name='header' class="card-header"></slot>  
    
</StackLayout>
</template>

<script>


export default {
  name: 'card',
  created () {
      console.log('card created');
  },
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style scoped>

.card{
    font-family: 'Open Sans', sans-serif;
    width:330;
    height:200;
    
    margin-left:20;
    margin-right:20;

    margin: 3;

    color: white;

    border-radius: 10;
    
    display:flex;
    flex-direction:column;
    
    }

    
    .card-header{
        display:flex;
        width:100%;
        height:65;
        max-height:65;
        align-items:center;
        justify-content:space-between;
        flex: 1 0 auto;
        margin: 5;
        
    }
        
    
        
    .card-header-title{
            padding-left:25;
            margin:0;
            color:white;
            line-height:65;
            font-weight:400;
        
    }


    .card-content{
        padding:25px;
        flex: 1 0 auto;
        
    }

    .card-content-text{
            margin:0;
            color:white;
            letter-spacing:1px;
        }
    .card-footer{
        height:40px;
        display:flex;
        justify-content:flex-end;
            
        flex-shrink: 0;
        
    }

    
            
    

    .card:nth-child(1){
        background-color:#3498db;
    
    
    }


    .card:nth-child(2){
        background-color:#34495e;
    }


    .card:nth-child(3){
    background-color:#9b59b6;
    
    }

.row{
    display:flex;
    justify-content:center;
    margin-top:100px;
}
</style>