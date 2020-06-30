const nfetch = require("node-fetch");
const fetch = (id) => {
  return nfetch(`https://www.instagram.com/${id}/`)
    .then((res) => {
      return res.text();
    })
    .then((res) => {
      var url = res
        .split("profile_pic_url_hd")[1]
        .split("requested_by_viewer")[0]
        .split('"')[2]
        .split("\\");

      var hd_image_url =
        url[0] +
        "&" +
        url[1].substr(5) +
        "&" +
        url[2].substr(5) +
        "&" +
        url[3].substr(5);

      var title = res.split("<title>")[1].split("</title>")[0];
      var name = title.split("(")[0];
      var meta = res.split("<meta content=")[1].split(' name="description"')[0];
      var followers = meta.split("Followers")[0].substr(1);
      var following = meta.split("Following")[0].split(" ")[2];
      var posts = meta.split("Posts")[0].split(" ")[4];
	  var bio = res.split('"biography":"')[1].split('","blocked_')[0];
      return { name, hd_image_url, followers, following, posts,bio };
    });
};
module.exports = {
  fetch,
};
