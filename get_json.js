Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        jumbotron: {},
        about: {},
        articles: [],
        project: [],
        judul: {}
      };
    },
    methods: {
      getJumbotron() {
        axios
          .get(
            "https://raw.githubusercontent.com/rohadaisy/tekweb2022/main/contents/jumbotron.json"
          )
          .then((res) => {
            this.jumbotron = res.data;
            this.getArticles()
            this.getAbout()
            this.getPorject()
            this.getJudul()
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getAbout() {
        axios
          .get(
            "https://raw.githubusercontent.com/rohadaisy/tekweb2022/main/contents/about.json"
          )
          .then((res) => {
            this.about = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getArticles() {
        axios
          .get(
            "https://raw.githubusercontent.com/rohadaisy/tekweb2022/main/contents/articles.json"
          )
          .then((res) => {
            this.articles = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getJudul() {
        axios
          .get(
            "https://raw.githubusercontent.com/rohadaisy/tekweb2022/main/contents/judul.json"
          )
          .then((res) => {
            this.judul = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    beforeMount() {
      this.getJumbotron()
    },
  }).mount("#app");
