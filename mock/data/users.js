module.exports = {
  open: true,
  url: '/users',
  mock: {
    success: true,
    data: [
      { name: '成都', sex: '男' },
      { name: '绵阳', sex: '女' },
      { name: '南充', sex: '男' },
      { name: '乐山', sex: '女' },
      { name: '广元', sex: '女' },
      { name: '西昌', sex: '男' },
    ]
  },
}
