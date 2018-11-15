var combox = {
  template: "#temp",
  data() {
    return {
      user: "",
      comment: ""
    };
  },
  methods: {
    submit() {
      this.$http
        .post(
          "/handlePostData",
          {
            user: this.user,
            comment: this.comment
          },
          { emulateJSON: true }
        )
        .then(result => {
          if (result.status == 200) {
            this.$emit("fulldata");
            this.user = this.comment = "";
          }
        });
    }
  }
};

var app = new Vue({
  el: "#app",
  data: {
    allData: []
  },
  created() {
    //调用函数getAllData
    this.getAllData();
  },
  methods: {
    getAllData() {
      this.$http.get("/getAllData").then(result => {
        if (result.body.status == 200) {
          this.allData = result.body.data;
        } else {
          alert(result.body.msg);
        }
      });
    }
  },
  components: {
    combox
  }
});
