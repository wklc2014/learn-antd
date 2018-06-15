module.exports = {
  open: true,
  api: '/example',
  mock: (req, res) => {
    res.end('OK');
  },
}
