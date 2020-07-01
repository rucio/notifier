const router = require("./auth");
const { listRules } = require("../APIs/rules");

router.post("/getallrules", async (req, res) => {
  const accounts = req.body.accounts;
  const certlocation = req.body.certlocation;
  const accountRules = [];

  for (let i = 0; i < accounts.length; i++) {
    await listRules(
      certlocation,
      accounts[i].server.hostURL,
      accounts[i].token.token
    )
      .then((response) => {
        accountRules.push({
          [accounts[i].server.name]: response.data.trim().split("\n"),
        });
      })
      .catch((err) => console.log(err));
  }

  res.json(accountRules);
});

module.exports = router;
