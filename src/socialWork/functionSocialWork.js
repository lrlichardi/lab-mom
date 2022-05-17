import { post, get , remove} from "../services/apiService";

const getSocialWork = async () => {
  const { data } = await get("/socialWork");
  return data;
};

const newSocialWork = async (inputSocialWork) => {
  if (inputSocialWork) {
    const { data, error } = await post("/socialWork", {
      obrasocial: inputSocialWork?.toUpperCase(),
    });

    return [data, error];
  }
};

const deleteSocialWork = async(id) => {
  const {data} = await remove(`/socialWork/${id}` , id)
  return data
}

export { getSocialWork, newSocialWork , deleteSocialWork };
