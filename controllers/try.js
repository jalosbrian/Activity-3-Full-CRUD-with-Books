const test = {
  index: async (req, res) => {
    res.render ("index", {
    title: "hello world", 
    content: "dito ako nagsimula. dito mag aasawa"
  }),
  getProduct: async (req, res) => {
    res.send("products");
  },
  showProduct: async (req, res) => {
    res.send("hello");
  }


};

export default test;