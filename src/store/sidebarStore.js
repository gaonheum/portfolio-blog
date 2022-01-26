
const sidebarStore = {
  namespaced: true,
  state: {      // vue의 Data 기능
    mainMenu: [
      { title: "Home", to: '/' },
      { title: "Blog", to: '/blog' },
      { title: "Portfolios", to: '/portfolios' },
      { title: "Tags", to: '/tags'  },
      { title: "Archives", to: '/archives'  },
      { title: "About", to: '/about'  },
    ]
  },
  getters: {    // vue의 computed 기능

  },
  mutations: {  // state를 동기적으로 수정할 때 사용, state 수정 시, mutations를 통해 수정하는 것을 권장 -> 데이터를 추적할 수 있음

  },
  actions: {    // 비동기를 사용할 때 또는, 여러 mutations를 연달아 실행할 때 사용

  },
}

export default sidebarStore;