export default axios => ({
  create(payload) {
    return new Promise(resolve => {
      let rs = 1;
      axios.post(`api/departments`, payload).then(res => {
        rs = res;
      });
      resolve(rs);
    });
  },

  show(id) {},

  showAll() {
    return new Promise(async resolve => {
      let rs = 1;
      await axios.get(`https://api.imgfasdalip.com/get_memes`).then(
        res => {
          rs = res;
        },
        err => {
          rs = err;
        }
      );
      resolve(rs);
    });
  },

  update(payload, id) {},

  delete(id) {}
});
