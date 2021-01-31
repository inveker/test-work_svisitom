<template>
  <VTable
      :heroes="rows"
      :columns="gridColumns"
  />
</template>

<script>
import VTable from "../components/ui/VTable.vue";

export default {
  data() {
    return {
      gridColumns: {
        number: {
          caption: '№',
          action: (selected) => console.log(selected)
        },
        name: {
          caption: 'Name',
          action: () => console.log('a')
        },
        date: {
          caption: 'Date',
          action: () => console.log('a')
        },
        status: {
          caption: 'Status',
          action: () => console.log('a')
        }
      },
    }
  },
  computed: {
    rows() {
      return this.$store.state.table.rows;
    }
  },
  components: {
    VTable
  }
}
</script>

<style scoped>

</style>