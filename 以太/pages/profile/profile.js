Page({
  data: {
    userInfo: {
      avatarUrl: '/images/default-avatar.png',
      nickName: '数学学习者',
      level: 3
    },
    stats: {
      totalQuestions: 156,
      accuracy: 82,
      consecutiveDays: 7
    },
    achievements: [
      {
        id: 1,
        name: '初学乍练',
        icon: '/images/badge-1.png',
        unlocked: true
      },
      {
        id: 2,
        name: '小有所成',
        icon: '/images/badge-2.png',
        unlocked: true
      },
      {
        id: 3,
        name: '登堂入室',
        icon: '/images/badge-3.png',
        unlocked: false
      }
    ],
    studyHistory: [
      { date: '2025/6/9', count: 12 },
      { date: '2025/6/8', count: 8 },
      { date: '2025/6/7', count: 15 },
      { date: '2025/6/6', count: 10 }
    ]
  },

  onLoad: function() {
    // TODO: Fetch user info from backend
    // TODO: Fetch user stats and achievements
  }
})
