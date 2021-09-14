import './src/index.css'

document.querySelector('#app').innerHTML = `
  <h1 class="text-5xl text-gray-700 mb-8">Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  
  <div class="container mx-auto mb-24">
  <ul class="flex justify-between gap-5 list-none">
    <li></li>
  </ul>
</div>

  `
  const list = document.querySelector('ul')

const render = (id)=>{
  axios.get('https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=kgHxk4eMFbAd')
      .then(function (res) {
        // console.log(res.data);
        const dataList = res.data
        let str = ''
        dataList.forEach((item)=>{
          str+=`
          <li class="cursor-pointer p-4" data-id="${item.LineID}"><a href=${item.LineURL} target="_blank">${item.LineName_Zh_tw}</a></li>
          `
        })
        list.innerHTML = str
      })
      .catch(function (err) {
        console.log(err)
      })
}
render();

list.addEventListener('click',(e)=>{
  // console.log('click',e.target)

  render(e.target.dataset.id);
})