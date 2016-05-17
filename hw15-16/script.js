//Первая часть задания
$(function(){
	$('.search_form').on('submit', function search(){
		var searchText = $('#text_search').val();

		$.ajax({
            url: "http://api.riffsy.com/v1/search?tag=" + searchText + "&limit=10",
            success: function(data, textStatus) {
			var ul = document.createElement('ul');
                 if (data.results.length == 0) {
				var li = document.createElement("li");
				li.classList.add('output-items');         
            	li.innerHTML =  '<p>Ой! Чего-то не нахожу!</p>';
                ul.appendChild(li);
            	}

            		$.each(data.results, function(i, val) {
                    var li = document.createElement('li');
                    li.classList.add('output-items');
                    li.innerHTML = 'Result №'+ (i+1) + ': ' +'<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+ '</br>' +'<img class="image-output" src="'+val.url+'">'+"</a>";
                    ul.appendChild(li);    
					});

			$('.wrapper').css({
				top: '0px',
				left: '0px',
				margin: '20px',
				});

			$('.add_results').html(ul);
			}

		});
		return false;
	});

});

//Вторая часть задания

function Human() {        //создаем конструктор класса Human
	this.name = 'Vasia';
	this.age = '25';
	this.sex = 'male';
	this.height = '170';
	this.weight = '70';
}
var newHuman = new Human;   //создаем объект класса Human

function Worker(){           //создаем конструктор класса Worker
	this.workplace ='factory';
	this.salory = '2000';
	this.work = function(){
		console.log('carve detail');
	};
}

Worker.prototype = newHuman;

var newWorker = new Worker;  //создаем объект класса Worker

function Student() {          //создаем конструктор класса Student
	this.studyplace = 'university';
	this.scholarship = '500';
	this.watchTvShow = function(){
		console.log('the game of thrones');
	};
}

Student.prototype = newHuman;

var newStudent = new Student; //создаем объект класса Student

var firstWorker = new Worker;
console.log('firstWorker', firstWorker.name);
console.log('firstWorker', firstWorker.age);
console.log('firstWorker', firstWorker.sex);



var firstStudent = new Student;
console.log('firstStudent', firstStudent.name);
console.log('firstStudent', firstStudent.age);
console.log('firstStudent', firstStudent.sex);
console.log('firstStudent', firstStudent.height);
console.log('firstStudent', firstStudent.weight);

var secondWorker = new Worker;
console.log('secondWorker', secondWorker.name);
console.log('secondWorker', secondWorker.age);
console.log('secondWorker', secondWorker.sex);



var secondStudent = new Student;
console.log('secondStudent', secondStudent.name);
console.log('secondStudent', secondStudent.age);
console.log('secondStudent', secondStudent.sex);
console.log('secondStudent', secondStudent.height);
console.log('secondStudent', secondStudent.weight);




