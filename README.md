# wechat-program
一款基于微信平台的小程序，是一款线上做题平台程序的模板，还未开发完全

微信小程序部署指南
1. 准备工作
注册微信小程序开发者账号 (https://mp.weixin.qq.com/)
在微信公众平台获取AppID
2. 配置项目
修改project.config.json文件，添加获取的AppID：
{
  "appid": "你的小程序AppID",
  ...
}
确保所有图片资源已按IMAGE_SPECS.md要求准备就绪
3. 使用微信开发者工具
下载并安装微信开发者工具

导入项目：

打开开发者工具
选择"导入项目"
选择本项目目录
输入AppID
点击"确定"
4. 测试与调试
在开发者工具中：
检查控制台是否有错误
测试所有页面功能
使用预览功能在手机端测试
5. 上传代码
点击开发者工具右上角的"上传"按钮
填写版本号和项目备注
点击"上传"
6. 提交审核
登录微信公众平台
进入"开发管理" → "开发版本"
选择上传的版本，点击"提交审核"
填写审核信息并提交
注意事项
确保所有功能符合微信小程序规范
测试所有数学公式渲染正常
检查用户隐私政策合规性
审核通常需要1-7个工作日