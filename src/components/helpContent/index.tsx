import './index.css'
import { NCarousel } from 'naive-ui'

const helpContent = (
  <div className="help-content-root">
    <NCarousel showArrow draggable show-dots spaceBetween={20}>
      <div>
        <h3>Drag images into input(1/2)</h3>
        <img src="https://s1.ax1x.com/2022/05/22/Ozvx5F.jpg" className="helpImage" />
      </div>
      <div>
        <h3>Type code is okay too(2/2)</h3>
        <img src="https://s1.ax1x.com/2022/05/22/OzxCvR.jpg" className="helpImage" />
      </div>
    </NCarousel>
  </div>
)
export default helpContent
