$(document).ready(
		function() {

			var $lastClicked;
			var meu_login = "seu@email.com";
			var server = "http://livro-capitulo07.herokuapp.com";

			$(".tarefa-delete").click(onTarefaDeleteClick);
			$(".tarefa-item").click(onTarefaItemClick);
			$("#tarefa").keydown(onTarefaKeydown);
			loadTarefas();

			// delete a task
			function onTarefaDeleteClick() {
				console.log ("onTarefaDeleteClick")
				console.log (this.className)
				
				// disable click event
				$(this).parent(".tarefa-item").off("click");
				
				// call hide event
				$(this).parent(".tarefa-item").hide("slow", function() {
					$this = $(this);
					console.log ($this.attr('class'));
					
					// call AJAX request
					$.post(server + "/tarefa", {usuario: meu_login, tarefa_id: $this.children(".tarefa-id").text(),
						_method: "DELETE"});				
					
					// remove element at DOM
					$(this).remove();
				});
			}

			function onTarefaItemClick() {

				if (!$(this).is($lastClicked)) {
					if ($lastClicked !== undefined) {
						savePendingEdition($lastClicked);
					}

					$lastClicked = $(this);

					var text = $(this).children(".tarefa-texto").text();
					var id = $lastClicked.children('.tarefa-id').text();
					console.log("onTarefaItemClick: ", id);

					var content = "<div class='tarefa-id'>" + id + "</div>" + 
								  "<input type='text' class='tarefa-edit' value='" + text + "'>";

					// here the DOM structure is edited
					$($lastClicked).html(content);
					$(".tarefa-edit").keydown(onTarefaEditKeydown);
				}
			}

			function onTarefaEditKeydown() {
				if (event.which === 13) {
					savePendingEdition($lastClicked);
					$lastClicked = undefined;
				}
			}

			function savePendingEdition($tarefa) {

				var text = $tarefa.children('.tarefa-edit').val();
				var id = $tarefa.children('.tarefa-id').text();

				$tarefa.empty();
				
				$tarefa.append("<div class='tarefa-texto'>" + text + "</div>")
						.append("<div class='tarefa-id'>" + id + "</div>")
						.append("<div class='tarefa-delete'></div>")
						.append("<div class='clear'></div>");

				updateTarefa(text, id);

				$(".tarefa-delete").click(onTarefaDeleteClick);
				$tarefa.click(onTarefaItemClick);

				console.log("the task was saved");
			}

			function onTarefaKeydown(event) {

				if (event.which === 13) {
					addTarefa($("#tarefa").val());
					$("#tarefa").val("");
				}
			}

			function addTarefa(text, id) {

				id = id || 0;
				
				var $tarefa = $("<div />").addClass("tarefa-item")
				.append($("<div />").addClass("tarefa-id").text(id))
				.append($("<div />").addClass("tarefa-texto").text(text))
				.append($("<div />").addClass("tarefa-delete"))
				.append($("<div />").addClass("clear"));

				$("#tarefa-list").append($tarefa);
				
				$(".tarefa-item").click(onTarefaItemClick);
				$(".tarefa-delete").click(onTarefaDeleteClick);
				
				//new task
				if (id === 0){
					var $div = $($tarefa.children(".tarefa.id"));
					console.log("id: ", $div);
					newTarefa(text, $div);
				}
			}

			function loadTarefas() {
				// ?
				$("#tarefa").empty();

				$.getJSON(server + "/tarefas", {usuario : meu_login} ).done( function(data) {
																			 console.log("data: ", data);
																				for (var tarefa = 0; tarefa < data.length; tarefa++) {
																					addTarefa(data[tarefa].texto, data[tarefa].id);
																			}
																			});
			}

			function updateTarefa(text, id) {
				console.log("updateTarefa -> text: '"+text+"' id: '"+id+"'");
				$.post(server + "/tarefa", {tarefa_id : id, texto : text});
			}
			
			function newTarefa(text, $div){
				$.post(server + "/tarefa", {usuario: meu_login, texto: text, _method: "PUT"}).done(function (data){
					$div.text(data.id);
				});
			}

		});
