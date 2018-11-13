var app = new Vue({
  el: "#app",
  data: {
    allData: []
  },
  created() {
    this.$http.get("/getAllData").then(result => {
      if (result.body.status == 200) {
        this.allData.unshift(result.body.data);
      } else {
        alert(result.body.msg);
      }
    });
  },
  components: {
    "com-box": comBox
  }
});
var comBox = {
  template: "#temp",
  data() {
    return {
      user: "",
      comment: ""
    };
  },
  methods: {}
};
