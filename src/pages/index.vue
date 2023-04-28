<template>
  <div>
    <h2>测试用例</h2>
    <ul>
      <li @click="openDialog()">打开弹框</li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    openDialog() {
      this.confirm(
        "温馨提示",
        "确定删除这个按钮吗？",
        () => {
          console.log("点击了确定");
        },
        () => {
          console.log("点击了取消");
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
h2 {
  padding: 10px 40px;
  font-size: 20px;
  border-bottom: 1px solid rgb(209, 204, 204);
  margin-bottom: 10px;
}
ul {
  margin-left: 50px;
  & > li {
    list-style-type: disc;
    margin-bottom: 10px;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>