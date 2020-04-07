<template>
<StackLayout  :class="'card ' + variant">

  <slot name='header'></slot> 

  <slot name='content' ></slot>
    
</StackLayout>
</template>

<script>


export default {
  name: 'card',
  created () {
      console.log('card created');
      this.variant = this.score > 0 && this.score < 50? 'bg-danger': 'bg-primary';
  },
  props: {
    variant: {
      type: String,
      default: 'bg-primary'
    },
    score: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style scoped>

.card{
    font-family: 'Open Sans', sans-serif;
    width:90%;
    height:10%;
    
    margin-left:20;
    margin-right:20;

    margin: 7;

    color: white;

    border-radius: 10;
    
    display:flex;
    flex-direction:column;
    
    }

</style>