import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
  state: {      // vue의 Data 기능

  },
  getters: {    // vue의 computed 기능

  },
  mutations: {  // state를 동기적으로 수정할 때 사용, state 수정 시, mutations를 통해 수정하는 것을 권장 -> 데이터를 추적할 수 있음

  },
  actions: {    // 비동기를 사용할 때 또는, 여러 mutations를 연달아 실행할 때 사용

  },

});