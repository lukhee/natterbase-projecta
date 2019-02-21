import Vue from 'vue'
import CatCard from '@/components/catCard'

describe('CatCard.vue', () => {
  it('should render correct products', () => {
      const products = [{name: 'Wa', rating: 1, price: 100}, {name: 'Ma', rating: 1, price: 100}, {name: 'Me', rating: 2, price:300}]
    const Constructor = Vue.extend(CatCard)
    const vm = new Constructor({
        propsData: {
            product: products
        }
    }).$mount()
    expect(vm.$el.querySelectorAll('.each-cat').length)
      .to.equal(3)
  })

  it('should not render any product for empty list', () => {
  const Constructor = Vue.extend(CatCard)
  const vm = new Constructor({
      propsData: {
          product: []
      }
  }).$mount()
  expect(vm.$el.querySelectorAll('.each-cat').length)
    .to.equal(0)
  })
})
