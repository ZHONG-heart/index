// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('viewpager',{
		url:'/viewpager',
		templateUrl:'components/viewpager.html',
		 link:function($scope,element,attrs){
      $scope.renderFinish = function(){
          var mySwiper1 = new Swiper('.swiper-container',{
            direction: 'vertical',
            slidesPerView: 5,
            centeredSlides: true
        })
      }
    },
		controller:'viewpager'
	})
	$urlRouterProvider.otherwise('/viewpager')
})
.controller('viewpager',function($scope){
	
	$scope.slideHasChanged=function(i){
		var idslide0=document.getElementById('slide0')
		var idslide1=document.getElementById('slide1')
	  var idslide2=document.getElementById('slide2')
		console.log(idslide1)
		
		function slide0(){
			idslide0.style.display='block';
			idslide1.style.display="none";
			idslide2.style.display='none'
		}
		function slide1(){
			idslide0.style.display='none';
			idslide1.style.display="block";		
			idslide2.style.display='none'
		}
		function slide2(){
			idslide0.style.display='none';
			idslide1.style.display="none";		
			idslide2.style.display='block'
		}
		switch (i){
			case 0:slide0();
				break;
			case 1:slide1();
				break;
			case 2:slide2()
				break;
			default:slide0();
				break;
		}
	}

})
