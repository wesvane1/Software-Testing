// This is where all logic will lie. AKA business logic
const savannaRoute = (req, res) => {
  res.send("Savanna Boston");
}

const peachesRoute = (req, res) => {
  res.send("Peaches");
}

const brotherRoute = (req, res) => {
  res.send("Lucas Vane");
}

module.exports = {
  savannaRoute,
  peachesRoute,
  brotherRoute
};