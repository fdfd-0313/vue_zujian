<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ intro }}</p>
    <button @click="subFn">砍一元</button>
  </div>
</template>

<script>
import eventBus from '../EventBus'
export default {
  props: ['index', 'title', 'price', 'intro'],
  methods: {
    subFn () {
      // //错误：
      // //子组件改传入的数据不通知父亲，数据的不一致性
      // // vue规定props "本身" 只读（不允许重新赋值）
      // // this.price = this.price - 1;

      // // 2. this.$emit()规定方法 -- 主动触发事件
      // // 值 1 是传入函数中的price，代表要砍掉的价格
      // this.$emit("subprice", this.index, 1)
      eventBus.$emit("send", this.index, 1)

    }
  }
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>