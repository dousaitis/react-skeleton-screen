import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import Skeleton from '../Skeleton'

describe('A <Skeleton>', () => {
  let node
  beforeEach(() => {
    node = document.createElement('div')
  })

  describe('rendered on client', () => {
  
    it('renders with width and height', () => {
      const element = (
        <Skeleton width="50%" height="40px" />
      )

      ReactDOM.render(element, node, () => {
        expect(node.firstChild.className).toMatch(/Skeleton/)
        expect(node.firstChild.style.width).toMatch(/50%/)
        expect(node.firstChild.style.height).toMatch(/40px/)
      })
    })

    it('renders with marginTop, marginRight, marginBottom and marginLeft', () => {
      const element = (
        <Skeleton marginTop="10px" marginRight="20px" marginBottom="30px" marginLeft="40px" />
      )

      ReactDOM.render(element, node, () => {
        expect(node.firstChild.style.marginTop).toMatch(/10px/)
        expect(node.firstChild.style.marginRight).toMatch(/20px/)
        expect(node.firstChild.style.marginBottom).toMatch(/30px/)
        expect(node.firstChild.style.marginLeft).toMatch(/40px/)
      })
    })
    
  })
  
  describe('rendered on the server', () => {
    
    it('renders with width and height', () => {
      const markup = ReactDOMServer.renderToStaticMarkup(
        <Skeleton width="50%" height="40px" />
      )

      expect(markup).toMatch(/<div class="Skeleton" style="width:50%;height:40px"><div class="Skeleton-body"><\/div><\/div>/)
    })

    it("renders with marginTop, marginRight, marginBottom and marginLeft", () => {
      const markup = ReactDOMServer.renderToStaticMarkup(
        <Skeleton marginTop="10px" marginRight="20px" marginBottom="30px" marginLeft="40px" />
      )
      expect(markup).toMatch(/<div class="Skeleton" style="width:100%;height:100%;margin-top:10px;margin-right:20px;margin-bottom:30px;margin-left:40px"><div class="Skeleton-body"><\/div><\/div>/)
    })
  })
})
