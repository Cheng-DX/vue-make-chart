import './index.css'
import { NCarousel } from 'naive-ui'

const helpContent = (
  <div className="help-content-root">
    <NCarousel showArrow draggable show-dots spaceBetween={20}>
      <div>
        <h3>Drag images into input(1/2)</h3>
        <img src="../../src/assets/help1.jpg" className="helpImage" />
      </div>
      <div>
        <h3>Type code is okay too(2/2)</h3>
        <img src="../../src/assets/help2.jpg" className="helpImage" />
      </div>
    </NCarousel>
  </div>
)
export default helpContent
