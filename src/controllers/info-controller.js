const info = (req, res) => {
  return res.json({
    success: true,
    message: "API is Live",
    error: {},
    data: {},
  });
};

module.exports = { info };
