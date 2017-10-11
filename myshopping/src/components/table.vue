<template>
  <div class="nav2">
    <template v-if="items.length">
      <table class="table table-striped table-hover  table-contered">

        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>操作</th>

        <tr v-for="(item, index) in items">
          <td>{{item.name}}</td>
          <td>{{item.price | currency}}</td>
          <td><span><button @click="reduce(index)"   >  -  </button></span> {{item.num}}  <span><button @click="append(index)"  >+</button></span></td>
          <td> <button @click="rm(index)" class="btn btn-danger" >移除</button></td>
        </tr>
      </table>
    </template>

  </div>
</template>

<script>
  export default {
    name: 'nav2',
    data(){
      return {
        items: [{'name': '小米5', 'price': '2400', 'nums': '3', 'num': '1'},
          {'name': 'iphone', 'price': '3800', 'nums': '5', 'num': '1'},
          {'name': '荣耀8', 'price': '2500', 'nums': '7', 'num': '1'}]
      }

    },
    filters: {
      currency: function (value) {
        return '￥' + value;
      }
    },
    methods: {
      reduce: function (index) {
        var item = this.items[index];
        if (item.num == 1) {
          return false;
        }
        item.num--;
      },
      append: function (index) {
        var item = this.items[index];
        if (item.num < item.nums) {
          item.num++;
        }
      },
      rm: function (index) {
        this.items.splice(index, 1);
//		        this.items.$remove(index,1);

      },
      send:function () {
        this.$emit("fn",this.items);
      }
    },
    mounted(){
        this.send();
    }
  }

</script>


<style>
  .table{
    border: 1px solid blueviolet;
  }
</style>
