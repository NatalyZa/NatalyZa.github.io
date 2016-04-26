$(function(){
 
    var html = $('#item_tmpl').html();
     
    var  dataObject = {
    members:[
    {
        name:"Захарова Наталия Сергеевна",
        photo:"img/photo.png", 
        profession:"Отчаянная домохозяйка",
        reason:"Хочу учить фронтенд, потому,что:",
        cause1:"Это интересно",
        cause2:"Я устала быть домохозяйкой",
        cause3:"Хочу перемен в жизни",
        contact:"Мой контактный телефон",
        phone:"+380222222222",
        vk:"Мой профиль в контакте",
        link:"Vk.com",
        action:"Мой фидбек:",
        feedback:"Варю вкусные супы"
 
    }]
     
    };
 
 
  var results = document.getElementById("results");
 
    results.innerHTML = tmpl("item_tmpl", dataObject);
      
 
});

$(function(){
    $('.button_show').on('click', function() {
 
        $('#results').slideToggle(2000);
    });
   
});