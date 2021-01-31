<template>
  <VTable
      :heroes="gridData"
      :columns="gridColumns"
  />
</template>

<script>
import VTable from "../components/ui/VTable.vue";

export default {
  data() {
    return {
      gridColumns: {
        number: '№',
        name: 'Name',
        date: 'Date',
        status: 'Status'
      },
      gridData: [
        {number: 0, name: 'Name1', date: '2021', status: 'on'},
        {number: 1, name: 'Name2', date: '2021', status: 'of'},
        {number: 2, name: 'Name3', date: '2021', status: 'of'},
        {number: 3, name: 'Name4', date: '2021', status: 'on'},
        {number: 4, name: 'Name5', date: '2021', status: 'on'},
      ]
    }
  },
  components: {
    VTable
  }
}
</script>

<style scoped>

</style>