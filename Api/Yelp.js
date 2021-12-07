import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
      Authorization:  "Bearer ttkYwcnoHGJCkCtMi-2ZcAW2mlj3MBx_I-4SZJE8IIVkMOW_VaeVo5-VryqC8Mngw9gOQoVyAeMpskxS597A8ZUK2pjhl2EffQHpGpEgY15-1d5grj1kEpO7RemnYXYx"
    }

});