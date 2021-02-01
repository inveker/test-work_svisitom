<template>
  <div>
    <VPopupWrapper v-if="editItem"
                   @close="closePopup"
    >
      <VEdit @save="saveEdit"
             :legend="editLegend"
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
      multiEditItems: [],
      gridColumns: {
        number: {
          caption: '№',
        },
        name: {
          caption: 'Name',
          action: (e, row, key) => {
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
            this.editItem = row;
            this.editKey = key;
            this.multiEditItems = selected;
          }
        }
      },
    }
  },
  computed: {
    rows() {
      return this.$store.state.table.rows;
    },
    editLegend() {
      const {multiEditItems, editItem} = this;
      const len = multiEditItems.length;

      return 'Edit' + (len > 1 ? ' ('+len+' items)' : ' item №' + editItem.number)
    }
  },
  methods: {
    saveEdit(value) {
      const {editItem, editKey, multiEditItems} = this;

      if(multiEditItems.length) {
        for(let i = 0; i < multiEditItems.length; i++)
          this.$store.dispatch('table/update', {number: multiEditItems[i], [editKey]: value});

      } else
        this.$store.dispatch('table/update', {number: editItem.number, [editKey]: value});

      this.closePopup();
    },
    closePopup() {
      this.editItem = null;
      this.editKey = null;
      this.multiEditItems = [];

    }
  },
  components: {
    VTable: () => import('../components/VTable.vue'),
    VEdit: () => import('../components/VEdit.vue'),
    VPopupWrapper: () => import('../components/VPopupWrapper.vue')
  }
}
</script>