// eslint-disable-next-line strict
const { Controller } = require('egg');

/**
 * @Controller 用户管理
 */
class UserController extends Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor(ctx) {
    super(ctx);
  }

  /**
   * @summary 创建用户
   * @description 创建用户 记录用户账户信息
   * @router post /api/user
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const { ctx } = this;
     
    const res={abc:123}
    //设置响应内容
    ctx.helper.success({ctx,res})
  }
}
module.exports = UserController;
