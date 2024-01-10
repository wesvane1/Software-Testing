const savannaRoute = (req, res) => {
  res.send("Savanna Boston");
}

const peachesRoute = (req, res) => {
  res.send("Peaches");
}

module.exports = {
  savannaRoute,
  peachesRoute
};