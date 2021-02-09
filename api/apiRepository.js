import userApi from "./userApi";
import department from "./departments";

export default axios => ({
  department: department(axios),
  userApi: userApi(axios)
});
