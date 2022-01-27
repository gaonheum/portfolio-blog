import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import headerStore from '@/store/headerStore';
import sidebarStore from '@/store/sidebarStore';

export const store = new Vuex.Store({
  modules: {
    // 키: 값 형태로 저장
    headerStore,
    sidebarStore,
  },
  state: {
    // screen width
    width: 0,
    mobile: false,

    // sidebar
    sidebar: true,

    // Table of contents
    tableOfContents: true,
  },
  getters: {
    width_MD(state) {
      return state.width < 768;
    },
  },
  mutations: {
    /*
    * 화면을 로드했을 때, width
    * */
    curView(state) {
      this.width = window.innerWidth;
      if (state.width <= 1536) {
        state.sidebar = false;
      }
    },
    /*
    * 화면 크기를 변경했을 때, width
    * */
    mobileView(state) {
      state.width = window.innerWidth;
      if (state.width <= 1024) { /* mobile */
        state.mobile = true;
        state.sidebar = false;
        state.tableOfContents = false;
      } else if (1024 < state.width && state.width <= 1536) {
        state.mobile = false;
        state.sidebar = false;
        state.tableOfContents = true;
      } else {
        state.mobile = false;
        state.sidebar = true;
        state.tableOfContents = true;
      }
    },
    /*
    * 사이드바 펼치기/접기
    * */
    toggleSidebar(state) {
      state.sidebar = !state.sidebar;
    }
  },
});