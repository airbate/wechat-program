Page({
  data: {
    recommendQuestions: [
      { id: 1, title: '极限计算题' },
      { id: 2, title: '微分方程求解' },
      { id: 3, title: '矩阵运算' }
    ],
    stats: {
      consecutiveDays: 5,
      accuracy: 78
    }
  },

  navigateToQuestion: function(e) {
    const questionId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/question/question?id=${questionId}`
    })
  },

  onLoad: function() {
    // TODO: Fetch user stats and recommended questions from backend
  }
})
