module.exports = {
  token: process.env.GITHUB_COM_TOKEN,

  extends: [
    "config:best-practices"
  ],

  repositories: [
    "mongrelion/github-actions-lab",
    "mongrelion/throwaway"
  ]
};
