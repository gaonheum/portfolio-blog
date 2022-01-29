// export const SET_MENU = 'SET_MENU';
// export const SET_PAGE = 'SET_PAGE';

const sidebarStore = {
  namespaced: true,
  state: {
    mainMenu: [
      { title: "Home", to: '/', icon: '' },
      { title: "Blog", to: '/blog', icon: '' },
      { title: "Portfolio", to: '/portfolio', icon: '' },
      { title: "About", to: '/about', icon: ''  },
    ],
    blogTracking: [
      { title: "Tag", to: '/tag', icon: ''  },
      { title: "Archive", to: '/archive', icon: ''  },
    ],
    blogCategory: [

    ],

    curMenu: "Home",
    curCategory: "",
    curPage: "",
  },
  getters: {
    MAIN_MENU: (state) => state.mainMenu,
    BLOG_TRACKING: (state) => state.blogTracking,
    BLOG_CATEGORY: (state) => state.blogCategory,

    CUR_MENU: (state) => state.curMenu,
    CUR_CATEGORY: (state) => state.curCategory,
    CUR_PAGE: (state) => state.curPage,
  },
  mutations: {
    SET_MENU: function (state, payload) {
      state.curMenu = payload.title;
      console.log(state.curMenu);
    },
    SET_CATEGORY: function (state, payload) {
      state.curCategory = payload.title;
      console.log(state.curCategory);
    },
    SET_PAGE: function (state, payload) {
      state.curPage = payload.title;
      console.log(state.curPage);
    },
  },
  actions: {

  },
}

export default sidebarStore;