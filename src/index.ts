/*
*  开发文档: https://code.vipkid.com.cn/xyz/docs
* */
import {App} from './store'
import scenes from './scene'
import assets from './assets'
import global from './global'
import components from './component/index'
import {IVFTemplate, LoadMode, ScaleMode} from "../types/IVFTemplate";
const Main: IVFTemplate = {
    assets,
    global,
    scenes,
    components,
    name: App.name,
    width: App.width,
    height: App.height,
    version: App.version,
    baseUrl: App.baseUrl,
    loadMode: LoadMode.ALL,
    conversion: App.conversion,
    scaleMode: ScaleMode.SHOW_ALL,
}

export default Main;
