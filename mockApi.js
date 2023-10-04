// api 호출하기 
// 'GET', https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock
// 호출한 값을 담아서, html에 담아주세요~

$.get('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock').done(function (data) {
    data.forEach((a, i) => {
        let template = `<div id="name">
                            <p>${data[i].name}</p>
                        </div>
                        <div id="id">
                            <p>${data[i].id}</p>
                        </div>
    <div class="clear"></div>`;
        document.getElementById('callApi').insertAdjacentHTML('beforeend', template)
    });
})

