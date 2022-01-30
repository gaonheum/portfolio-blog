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
    nav: false,

    // Table of contents
    tableOfContents: true,
  },
  getters: {

  },
  mutations: {
    /*
    * 화면을 로드했을 때, width
    * 현재 화면이 1280보다 클 경우, nav 고정
    * */
    curWidth(state) {
      state.width = window.innerWidth;
      state.nav = state.width > 1280;
    },
    /*
    * 화면 크기를 변경했을 때, width
    * */
    isMobile(state) {
      state.width = window.innerWidth;

      if (state.width <= 1024) { /* mobile */
        state.mobile = true;
        state.nav = false;
        state.tableOfContents = false;
      } else if (1024 < state.width && state.width <= 1280) {
        state.mobile = false;
        state.nav = false;
        state.tableOfContents = true;
      } else if (1280 < state.width && state.width <= 1536) {
        state.mobile = false;
        state.nav = true;
        state.tableOfContents = true;
      } else {
        state.mobile = false;
        state.nav = true;
        state.tableOfContents = true;
      }
    },
    /*
    * 사이드바 펼치기/접기
    * */
    toggleNav(state) {
      state.nav = !state.nav;
    }
  },
});