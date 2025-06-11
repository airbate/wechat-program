Page({
  data: {
    isCorrect: true,
    question: {
      content: '<div>求极限：$\\lim\\limits_{x\\to0}\\frac{\\sin x}{x}$</div>',
      solution: '<div>根据重要极限公式：$\\lim\\limits_{x\\to0}\\frac{\\sin x}{x} = 1$</div>'
    },
    knowledgePoints: [
      {
        id: 1,
        name: '重要极限',
        description: '掌握两个重要极限的形式和应用场景'
      },
      {
        id: 2,
        name: '洛必达法则',
        description: '理解洛必达法则的使用条件和应用方法'
      }
    ],
    recommendedQuestions: [
      {
        id: 101,
        title: '求极限：$\\lim\\limits_{x\\to0}\\frac{1-\\cos x}{x^2}$',
        difficulty: '中等'
      },
      {
        id: 102,
        title: '求极限：$\\lim\\limits_{x\\to\\infty}(1+\\frac{1}{x})^x$',
        difficulty: '基础'
      }
    ]
  },

  navigateToQuestion: function(e) {
    const questionId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/question/question?id=${questionId}`
    })
  },

  onLoad: function(options) {
    // TODO: Load analysis data based on questionId from options
    // TODO: Set isCorrect based on user's answer
  }
})
