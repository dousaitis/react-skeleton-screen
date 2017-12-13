import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import Skeleton from '../Skeleton'

describe("A <Skeleton>", () => {
  let node
  beforeEach(() => {
    node = document.createElement("div")
  })

  describe("rendered on client", () => {
  
    it("renders with width and height", () => {
      const element = (
        <Skeleton width="50%" height="40px" />
      )

      ReactDOM.render(element, node, () => {
        expect(node.firstChild.className).toMatch(/Skeleton/)
        expect(node.firstChild.style.width).toMatch(/50%/)
        expect(node.firstChild.style.height).toMatch(/40px/)
      })
    })
    
  })
  
  describe("rendered on the server", () => {
    
    it("renders with width and height", () => {
      const markup = ReactDOMServer.renderToStaticMarkup(
        <Skeleton width="50%" height="40px" />
      )

      expect(markup).toMatch(/<div class="Skeleton" style="width:50%;height:40px"><div class="Skeleton-body"><\/div><\/div>/)
    })
  })
})
