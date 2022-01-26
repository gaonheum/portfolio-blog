import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import headerStore from '@/store/headerStore';
import sidebarStore from '@/store/sidebarStore';

// Object Dynamic property: mutations의 함수 이름을 변수로 선언하여, 다른 파일에서 사용할 수 있게 함
/*
* 여기에 작성
* "export const 상수 = 값" 형태로 작성
* */
export const hHOME      = "Home";
export const hBlOG      = "Blog";
export const hPORTFOLIO = "Portfolio";
export const hABOUT     = "About";

export const store = new Vuex.Store({
  modules: {
    // 키: 값 형태로 저장
    headerStore,
    sidebarStore,
  },
  state: {
    mobile: false,
  }
});