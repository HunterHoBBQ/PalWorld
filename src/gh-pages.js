var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/HunterHoBBQ/PalWorld.git", // Update to point to your repository
    user: {
      name: "HunterHoBBQ", // update to use your name
      email: "HunterHoBBQ@gmail.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
