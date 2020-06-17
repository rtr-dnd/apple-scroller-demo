const appleScroller = require('apple-scroller')
require('apple-scroller/style.css')

import imgs from './render/*.png'

let container1 = document.getElementById('scroll1') 
let appleScroll1 = new appleScroller(container1, imgs, '300vh')
document.getElementById('redraw').addEventListener('click', ()=>{appleScroll1.redraw(appleScroll1)})

let container2 = document.getElementById('scroll2')
let appleScroll2 = new appleScroller(container2, imgs, '1000vh')