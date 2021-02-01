<template>
  <table class="table">
    <thead>
    <tr>
      <th>
        <input type="checkbox"
               v-model="allCheckbox"
               @change="onChangeAllCheckbox"
        >
      </th>
      <th v-for="({caption}, key) in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey == key }"
      >
        {{ caption }}
        <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="row in rows" :class="{'not-select': selected.length && selected.indexOf(row.number) == -1}">
      <td>
        <input type="checkbox"
               :value="row.number"
               v-model="selected"
               @change="onChange"
        >
      </td>
      <td v-for="(value, key) in columns"
          @click="e => value.action && value.action(e, row, key, selected)"
      >
        {{row[key]}}
      </td>
    </tr>
    </tbody>
  </table>
</template>



<script>
export default {
  props: {
    heroes: Array,
    columns: Object,
    filterKey: String
  },
  data: function() {
    const sortOrders = {};

    Object.keys(this.columns).forEach(key => {
      sortOrders[key] = 1;
    });

    return {
      sortKey: "",
      sortOrders: sortOrders,
      selected: [],
    };
  },
  computed: {
    allCheckbox: {
      get() {
        console.log(this.selected,this.heroes)
        return this.selected.length === this.heroes.length;
      },
      set() {} //Fix computed v-model, property is set in this.onChangeAllCheckbox()
    },
    rows() {
      const {heroes, sortKey, sortOrders} = this;
      const order = sortOrders[sortKey];

      return sortKey
          ? heroes.slice().sort((a, b) =>  String(a[sortKey]).localeCompare(String(b[sortKey])) * order)
          : heroes;
    }
  },
  methods: {
    sortBy: function(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    onChange(e) {
      console.log(this.selected)
    },
    onChangeAllCheckbox(e) {
      this.selected = e.target.checked ? [...this.heroes.keys()] : [];
      console.log(this.selected)
    },
    click() {

    }
  }
}
</script>



<style scoped>
  .table {
    border: 1px solid #5acafd;
    border-radius: 5px;
    background-color: #fff;
  }

  .table th {
    background-color: #5acafd;
    color: #fff;
    cursor: pointer;
    user-select: none;
  }

  .table td {
    background-color: #f9f9f9;
  }

  .table th,
  .table td {
    padding: 10px 20px;
  }

  .table th.active .arrow {
    opacity: 1;
  }

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }


  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }

  .not-select td:not(:first-child) {
    opacity: .5;
    user-select: none;
    pointer-events: none;
  }
</style>