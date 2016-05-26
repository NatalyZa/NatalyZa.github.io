"use strict";


let contentQuestions = [
	{text: 'Как назначается переменная?',
	answers: [' var',' for',' if'],
	answerValue: [true, false, false]},
	{text: 'Сколько в js существует типов данных?',
	answers: [' 3',' 6',' 5'],
	answerValue: [false, true, false]},
	{text: 'Чему равен NaN?',
	answers: [' false',' true',' не равно ничему, включая себя'],
	answerValue: [false, false, true]}
];

$( function() {
	localStorage.setItem('question', JSON.stringify(contentQuestions)); /*записываем в localStorage*/
	let questions = localStorage.getItem('question');  /*извлекаем из localStorage*/
	questions = JSON.parse(questions);


let html = $('#item_tmpl').html(); /*берем шаблон из html*/

let content = tmpl(html, {data:questions});  /*шаблонизируем*/

$('.wrapper').append(content);  /*вставляем на страницу*/


let trueAnsvers = 0;
let wrongAnsvers = 0;
let count = 0;
let answerResult = [];

$('#button').on('click', function(){   /*проверяем правильные ответы*/
	for (let i =  0; i < questions.length; i++) {

            for (let j =  0; j < questions[i].answers.length; j++) {

                if (($('#radio-' + i + '_' + j).prop('checked')) && (questions[i].answerValue[j] === true)) { 
                	
                    answerResult[count] = '<p class="modal_content">' +'Ответ ' + (i + 1) + '.' + (j + 1) + ' верный' + '</p>';
                    count++;
                    trueAnsvers++;

                } else if (($('#radio-' + i + '_' + j).prop('checked')) && (questions[i].answerValue[j] === false)) {
              
                        answerResult[count] = '<p class="modal_content">' + 'Ответ ' + (i + 1) + '.' + (j + 1) + ' не верный'+ '</p>';
                        count++;
                        wrongAnsvers++;
                        }
                
            }  

	}


	$('.modal_background').fadeIn('slowly'); /*показываем модальное окно*/
	$('.modal_wrapper').append(answerResult);  /*вставляем результат подсчета*/

   if (trueAnsvers == questions.length) {   /*генерируем подсказки*/
             $('.modal_wrapper').append('<p class="modal-window__output">' + 'Поздравляю! Вы ответили правильно на все вопросы!' + '</p>');
        } else if ((trueAnsvers >= 1) && (trueAnsvers < questions.length)) {
            $('.modal_wrapper').append('<p class="modal-window__output">' + 'Вы ответили правильно не на все вопросы!' + '</p>');
        } else if ((trueAnsvers == 0) && (wrongAnsvers ==0))  {
            $('.modal_wrapper').append('<p class="modal-window__output">' + 'Вы не выбрали ни одного ответа!' + '</p>');
        } else if ((wrongAnsvers > 0) && (trueAnsvers == 0))  {
            $('.modal_wrapper').append('<p class="modal-window__output">' + 'Все ответы неверные!' + '</p>'); 
        };

       /*вставляем кнопку retry*/
	$('.modal_wrapper').append('<input class="button_retry" type="button" value="Попробовать еще раз">'); 

	$('.button_retry').on('click', function() {
            window.location.reload();          /*перезагружаем страницу при нажатии на кнопку*/
        });

	});


});