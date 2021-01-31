<template>
  <div>
    <VPopupWrapper v-if="editItem"
                   @close="closePopup"
    >
      <VEdit @save="saveEdit"
             :initial-value="editItem[editKey]"
             :placeholder="gridColumns[editKey].caption"
      />
    </VPopupWrapper>
    <VTable
        :heroes="rows"
        :columns="gridColumns"
    />

  </div>
</template>

<script>

export default {
  data() {
    return {
      editItem: null,
      editKey: null,
      multiEdit: [],
      gridColumns: {
        number: {
          caption: '№',
        },
        name: {
          caption: 'Name',
          action: (e, row, key, selected) => {
            console.log(e)
            this.editItem = row;
            this.editKey = key;
          }
        },
        date: {
          caption: 'Date',
        },
        status: {
          caption: 'Status',
          action: (e, row, key, selected) => {
            this.multiEdit = selected;

            this.editItem = row;
            this.editKey = key;
          }
        }
      },
    }
  },
  computed: {
    rows() {
      return this.$store.state.table.rows;
    }
  },
  methods: {
    saveEdit(value) {
      if(this.multiEdit.length) {
        console.log('m',this.multiEdit)
        for(let i = 0; i < this.multiEdit.length; i++)
          this.$store.dispatch('table/update', {number: this.multiEdit[i], [this.editKey]: value});
        this.multiEdit = null;

      } else {
        this.$store.dispatch('table/update', {number: this.editItem.number, [this.editKey]: value});
      }
      this.editItem = null;
    },
    closePopup() {
      this.editItem = null;
    }
  },
  components: {
    VTable: () => import('../components/ui/VTable.vue'),
    VEdit: () => import('../components/ui/VEdit.vue'),
    VPopupWrapper: () => import('../components/ui/VPopupWrapper.vue')
  }
}
</script>