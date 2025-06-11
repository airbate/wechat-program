Page({
  data: {
    types: ['选择题', '填空题'],
    typeIndex: 0,
    options: ['', '']
  },

  onLoad() {
    // 初始化页面
  },

  // 添加选项
  addOption() {
    this.setData({
      options: [...this.data.options, '']
    })
  },

  // 提交题目
  submitQuestion(e) {
    const formData = e.detail.value
    const question = {
      content: formData.content,
      type: this.data.types[this.data.typeIndex],
      solution: formData.solution,
      answer: formData.answer,
      createTime: new Date()
    }

    // 如果是选择题，添加选项
    if (question.type === '选择题') {
      question.options = this.data.options
        .map((_, i) => formData[`option${i}`])
        .filter(opt => opt)
    }

    // 上传到云数据库
    wx.cloud.callFunction({
      name: 'addQuestion',
      data: {
        question
      },
      success: res => {
        wx.showToast({
          title: '题目上传成功',
          icon: 'success'
        })
        this.setData({
          options: ['', ''],
          typeIndex: 0
        })
      },
      fail: err => {
        console.error('上传失败:', err)
        wx.showToast({
          title: '上传失败',
          icon: 'none'
        })
      }
    })
  }
})
