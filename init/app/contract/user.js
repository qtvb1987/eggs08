// eslint-disable-next-line strict
module.exports = {
  createUserRequest: {
    mobile: { type: 'string', required: true, description: '手机号', example: '13671839764', format: /^1[34578]\d{9}$/ },
    password: { type: 'string', required: true, description: '密码', example: '111111' },
    realName: { type: 'string', required: true, description: '姓名', example: 'Tom' },
  },
};
