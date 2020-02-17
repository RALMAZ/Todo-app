import Vue from 'vue'
import MyComponent from '@/component/MyComponent'
// jest

describe('MyComponent.vue', () => {
  initVue(Vue)

  it('is myComponent render?', () => {
    const wrapper = mount(MyComponent)

    expect(wrapper.find('.my-component').exist()).to.be.true
  })
  
})


