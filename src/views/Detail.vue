<template>
    <h1>Show Details</h1>
    <p>{{selectedShow?.name}}</p>
</template>

<script>
export default {
  name: "Detail",
  props:{
    id:String
  },
  mounted(){
    this.$store.dispatch("fetchShow",this.id)
  },
  computed:{
    selectedShow(){
      return this.$store.getters.getSelectedShow;
    }
  }
};
</script>
