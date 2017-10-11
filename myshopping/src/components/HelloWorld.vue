<template>
  <div class="shopping">
    <div class="container" style="min-height:300px;" id="goshop">

       <table1 @fn="get"> </table1>

      <template v-if="items.length">

        <div id="message">
          <label>收件人：</label>
          <input type="text"  v-model="name"/>
          <label>地址：</label>
          <input type="text" v-model="address"/>
        </div>
        <div >
          <h3>清单</h3>
          <ul>
            <li><font color='red'>总计：</font><span>{{total | currency}}</span></li>
            <li>收件人：<span>{{name}}</span></li>
            <li>收件地址：<span>{{ address }}</span></li>
          </ul>
        </div>
      </template>
      <template v-else>
        hello world
      </template>
    </div>
  </div>
</template>

<script>
  import table from './table.vue'
export default {
  name: 'shopping',
  components:{table1:table},
  data(){
      return{
          items:'',
        name:'',
        address:'',
      }
  },
  computed:{//计算属性  相当于属性的一个实时计算，如果实时计算里关联了对象，那么当对象的某个值改变的时候，同时会出发实时计算
    total:function(){
      var total = 0;
      for(var i in this.items){
        total += this.items[i].price * this.items[i].num;
      }
      return total;
    }
  },
  filters: {
    currency: function (value) {
      return '￥' + value;
    }
  },
  methods: {
      get:function (x) {
        this.items=x;
      },
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

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .table{
    border: 1px solid blueviolet;
  }


</style>
