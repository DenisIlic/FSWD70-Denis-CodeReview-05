$(document).ready(function(){

	var film = $('.movie');

	var sort = $('.sort');

	function check(a,b){

		if(a.value < b.value){

			return 1;

		}else{

			if(a.value > b.value){

				return -1;

			}else{

				return 0;
				
					}
			}

	}
	
	arrObj.sort(check);
	newOrder(arrObj);

	function newOrder(a,b){

		for(let i = 0; i < film.length; i++){
			$(film[i]).html(`

			 <div class="row">              
			    <div class="col-lg-4 col-md-6 mx-auto "> 
			        <img class="filmImg " src="${a[i].pic}" alt="${a[i].name}">
			    </div>
			        <div class="col-lg-8 pl-5">
			              
			            <h1 class="movieTitle ml-lg-1 mx-md-auto text-white">${a[i].name}</h1>
			            <p class="fdescrition filmImg mb-md-3 mb-sm-3 pl-1 text-white"> 
			                  ${a[i].bio} 
			            </p>
			                                                
			            <div class="mt-md-5 mt-sm-5 text-success">
			                  <span class="i_like_it"><i class="fas fa-thumbs-up"></i> 
			                 	 <span class="likesNumber">${a[i].value}</span>
			                  </span>
			           </div>
			           <div class="mt-md-5 mt-sm-5 text-danger">
			                  <span class="i_dislike_it"><i class="fas fa-thumbs-down"></i> 
			                 	 <span class="dislikesNumber">${a[i].value1}</span>
			                  </span>
			           </div>
			        </div>
			  </div>

			`);

		}

		var like = $(".i_like_it");
		var increasedLikes = $(".likesNumber");
		var dislike = $(".i_dislike_it");
		var decreasedLikes = $(".dislikesNumber");

		for(let i = 0; i < film.length; i++){

			$(like[i]).on('click', function(){

					++arrObj[i].value;

					$(increasedLikes[i]).text(arrObj[i].value);

					$('.sort').on('click' ,function(){
						
						arrObj.sort(check);
						newOrder(arrObj);
						
					})


			});

					$(dislike[i]).on('click', function(){

					--arrObj[i].value1;

					$(decreasedLikes[i]).text(arrObj[i].value1);
			});

		}

	}

});

