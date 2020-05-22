<template>
  <!-- <StackLayout orientation="vertical" androidELevation="60" :class="'card ' + variant"> -->
    <GridLayout verticalAlignment="center" columns="2*, 5*" rows="auto" androidELevation="60" :class="'card ' + variant">
      <StackLayout orientation="vertical" col="0" row="0" class="card-header" height="100%">
        <slot name="header"></slot>
      </StackLayout>
      <GridLayout horizontalAlignment="center"  rows="*, *" columns="*" col="1" row="0" class="card-content" height="100%">
        <slot name="content"></slot>
      </GridLayout>
    </GridLayout>
  <!-- </StackLayout> -->
</template>

<script>

export default {
  name: 'card',
  created() {
    console.log('card created');
    this.variant = this.score > 0 && this.score < 50 ? 'bg-danger' : 'bg-dark';
  },
  props: {
    variant: {
      type: String,
      default: 'bg-dark'
    },
    score: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style scoped>
.card {
  font-family: "Open Sans", sans-serif;
  width: 90%;
  height: 120;
  /* margin-left: 20; */
  /* margin-right: 20; */
  margin: 10;
  color: white;
  border-radius: 18;
  padding: 10 20;
  /* display: flex; */
  /* flex-direction: column; */
}
</style>