// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const questions = db.collection('questions')
  
  try {
    const result = await questions.add({
      data: event.question
    })
    return {
      code: 0,
      data: result,
      message: '题目添加成功'
    }
  } catch (err) {
    return {
      code: -1,
      message: '题目添加失败',
      error: err
    }
  }
}
