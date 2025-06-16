const btn = document.querySelector('.btn');
const leftDiv = document.querySelector('.left');
const rightDiv = document.querySelector('.right');
const panDiv = document.querySelector('.pan');
const caption = document.querySelector('.caption')
let index = 0;
const images = [{path:'/athlete/images/pan1.jpg',text:'泳池里的博尔特与全能泳王: 潘展乐'},
                {path:'/athlete/images/pan2.jpg',text:'水花消失术与跳水天才: 全红婵'},
                {path:'/athlete/images/pan3.jpg',text:'小魔王与人间止藤片: 孙颖莎'},
                {path:'/athlete/images/pan4.jpg',text:'天才射手与大心脏少女神枪手: 黄玉婷'},
   
];

//更新图片与文字
function updateDisplay(){
      panDiv.style.backgroundImage =  `url(${images[index].path})`;
      caption.textContent = images[index].text;
}

btn.addEventListener('click',function(){
      const enrollDiv = document.querySelector('.enroll');
      enrollDiv.style.display = 'none';
      document.body.classList.add('hide-mask');
})
//左箭头点击事件
leftDiv.addEventListener('click',function(){
   index = (index - 1 + images.length) % images.length;
   updateDisplay();
});
//右箭头点击事件
rightDiv.addEventListener('click',function(){
   index = (index + 1) % images.length;
   updateDisplay()
});


updateDisplay();