export default axios => ({
  create(payload) {
    axios.post(`api/user`, payload).then(res => {
      return res;
    });
  },

  show(id) {},

  getAll() {},

  update(payload, id) {},

  delete(id) {}
});
