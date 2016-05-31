define(
	'view',
	['jquery', 'tmpl'],
	function () {
		
	
		return function View(model) {
		var self = this;

		function init() {
			var wrapper = tmpl($('#wrapper-template').html());

			$('body').append(wrapper);
			self.elements = {
				input: $('.item-value'),
				addBtn: $('.item-add'),
				listContainer: $('.item-list'),
				changeBtn: $('.item-confirm')
			};

			self.renderList(model.data);
			
		}

		self.renderList = function (data) {		
			var list = tmpl($('#list-template').html(), {data: data});
			
			self.elements.listContainer.html(list);
		};

		self.renderChoosenItem = function(indexOfActive) {
			$('.list li:nth-of-type('+(+indexOfActive+1)+')');
		};

		self.renderInputItem=function(data,index){
			if(data[index]+""=='undefined')return;
			self.elements.input.val(data[index]+"");
		};

		init();
		
	};
  }
);