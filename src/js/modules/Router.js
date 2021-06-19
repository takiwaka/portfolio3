import 'slick-carousel';
import modal from '../pages/modal'
import toggle from '../pages/toggle'
import footer from '../pages/footer'
import load from '../pages/load'
import scroll from '../pages/scroll'

export default class Router {
  constructor() {
    this.model = {
      pathName: location.pathname,
    }
    this.initRouting()
  }

  initRouting() {
    const pathName = this.model.pathName
    switch (pathName) {
      case '/modal':
        new modal()
        break
      case '/toggle':
        new toggle()
        break
      case '/footer':
        new footer()
        break
      case '/load':
        new load()
        break
      case '/scroll':
        new scroll()
        break
      default:
        break
    }
  }
}
