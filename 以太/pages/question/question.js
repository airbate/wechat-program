Page({
  data: {
    currentIndex: 0,
    totalQuestions: 10,
    difficultyText: '中等',
    selectedAnswer: null,
    inputAnswer: '',
    showSolution: false,
    question: {
      id: 1,
      type: 'choice',
      content: '<div>求极限：$\\lim\\limits_{x\\to0}\\frac{\\sin x}{x}$</div>',
      options: [
        { id: 1, text: 'A. 0' },
        { id: 2, text: 'B. 1' },
        { id: 3, text: 'C. ∞' },
        { id: 4, text: 'D. 不存在' }
      ],
      solution: '<div>根据重要极限公式：$\\lim\\limits_{x\\to0}\\frac{\\sin x}{x} = 1$</div>',
      correctAnswer: 2
    }
  },

  onAnswerChange: function(e) {
    console.log('选项变化:', e.detail.value)
    this.setData({
      selectedAnswer: e.detail.value
    }, () => {
      console.log('当前选中:', this.data.selectedAnswer)
    })
  },

  onInputAnswer: function(e) {
    this.setData({
      inputAnswer: e.detail.value
    })
  },

  submitAnswer: function() {
    if (this.data.question.type === 'choice' && !this.data.selectedAnswer) {
      wx.showToast({
        title: '请选择答案',
        icon: 'none'
      })
      return
    }

    // TODO: Submit answer to backend and verify
    this.setData({
      showSolution: true
    })
  },

  showSolution: function() {
    this.setData({
      showSolution: true
    })
  },

  onLoad: function(options) {
    // TODO: Load question data based on questionId from options
  }
})
