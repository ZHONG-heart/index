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
	.state('tabs',{
		url:'/tab',
		templateUrl:'html/tabs.html'
		//底部导航
	})
	.state('tabs.home',{
		url:'/home',
		views:{
			'home-tab':{
				templateUrl:'html/home.html'
			}
		}		
		//首页内容
	})
	.state('tabs.classify',{
		url:'/classify',
		views:{
			'classify-tab':{
				templateUrl:'html/classify.html',
				controller:'classify'
			}
		}	
		//分类内容
	})
	.state('tabs.details',{
		url:'/details/:id',
		views:{
			'classify-tab':{
			templateUrl:'html/details.html',
			controller:'details'
			}
		}
	})
	.state('tabs.about',{
		url:'/about',
		views:{
			'about-tab':{
				templateUrl:'html/about.html',
				controller:'about'
			}
		}		
		//关于内容
	})
	.state('tabs.set',{
		url:'/set',
		views:{
			'set-tab':{
				templateUrl:'html/set.html',
				controller:'set'
			}
		}		
		//设置
	})
	.state('tabs.list',{
		url:'/list/:id',
		views:{
			'home-tab':{
				templateUrl:'html/list.html',
				controller:'list'
			}
		}
	})
	.state('login',{
		url:'/login',
		templateUrl:'html/login.html',
		controller:'login'
	})
	.state('register',{
		url:'/register',
	
		templateUrl:'html/register.html',
		controller:'register'
			
		
	})
	
	
	$urlRouterProvider.otherwise('/login')
})
//.controller('list',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
//	
//}])
//.controller('side',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
//	$http({
//		url:'http://datainfo.duapp.com/shopdata/getGoods.php?callback=',
////		params:{callback:''}
//	}).then(function(data){
//		$scope.list=eval(data.data)
//	
//	})
//}])
.controller('classify',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
	$http({
		url:'http://datainfo.duapp.com/shopdata/getGoods.php?callback=',
//		params:{callback:''}
	}).then(function(data){
		$scope.classify=eval(data.data)
		console.log($scope.classify)
	})
	var i=0
	 $scope.doRefresh = function() {
	 	i++;
	 	$http({
		url:'http://datainfo.duapp.com/shopdata/getGoods.php',
		params:{callback:''}
			}).then(function(data){
			$scope.classify=eval(data.data)
			 console.log($scope.classify)
			  $scope.$broadcast('scroll.refreshComplete');
		})
	 }
	
	
}])

.controller('details',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
	$http({
		url:'http://datainfo.duapp.com/shopdata/getGoods.php',
		params:{goodsID:$stateParams.id,callback:''}
	}).then(function(data){
		$scope.det=eval(data.data)[0]
		console.log($scope.det)	
	});
	
	$scope.detail=function(){
		var username=localStorage.getItem('ID')
		console.log(username)
		$http({
			url:'http://datainfo.duapp.com/shopdata/updatecar.php',
			params:{userID:username,goodsID:$stateParams.id,number:1,callback:''}
		}).success(function(data){
			console.log(data)
		})
	}
	
}])
.controller('register',['$scope','$http','$stateParams','$location',function($scope,$http,$stateParams,$location){
	$scope.data={};
	$scope.register=function(){
		console.log('s',$scope.data.register1)
		$http({
			url:'http://datainfo.duapp.com/shopdata/userinfo.php',
			params:{status:'register',userID:$scope.data.register1,password:$scope.data.register2}
		})
		.success(function(data){
			console.log(data);
			if(data==0){
				alert('用户名重名')
			}
			if(data==2){
				alert('数据库报错')
			}else{
				alert('注册成功');
				$location.path('/login')
			}
		})
	}
	
}])
.controller('login',['$scope','$http','$stateParams','$location',function($scope,$http,$stateParams,$location){
	$scope.data={}
	$scope.login=function(){
		console.log($scope.data.login1)
		$http({
			url:'http://datainfo.duapp.com/shopdata/userinfo.php',
			params:{status:'login',userID:$scope.data.login1,password:$scope.data.login2,callback:''}
		})
		.success(function(data){
			console.log(data)
			if(data==0){
				alert('用户名不存在')
			};
			if(data==2){
				alert('用户名和密码不符')
			}else{
				localStorage.setItem('ID',data.userID)
				$location.path('/tab/classify')
			}
		})
	}
}])
.controller('about',['$scope','$http','$stateParams','$location',function($scope,$http,$stateParams,$location){
	
	var username=localStorage.getItem('ID')
	$scope.data={}
	
	$http({
		url:'http://datainfo.duapp.com/shopdata/getCar.php',
		params:{userID:username,callback:''}
	})
	.success(function(data){
		console.log(eval(data))
		var shop=eval(data)
		$scope.shop=shop
		var num=document.getElementById('number');
		var price=document.getElementById('price');
		
		var n=0,p=0;
		
		for(item in shop){
			n+=Number(shop[item].number);
			p+=Number(shop[item].price)*Number(shop[item].number)
		}
		console.log(n,p)
		$scope.n=n;
		$scope.p=p;
//		console.log($scope.n,$scope.p)
		
		$scope.min=function(id){			
			console.log(id)
			for(item in shop){
				if(id==shop[item].goodsID){
					shop[item].number-=1
					
					$http({
						url:'http://datainfo.duapp.com/shopdata/updatecar.php',
						params:{userID:username,goodsID:id,number:Number(shop[item].number)-1,callback:''}
					}).success(function(){
						$scope.shop=shop
						n=0,p=0;
						for(item in shop){
					n+=Number(shop[item].number);
					p+=Number(shop[item].price)*Number(shop[item].number)
					console.log(Number(shop[item].price),Number(shop[item].number))
					}
					
					$scope.n=n;
					$scope.p=p;
					})
				}
			}		
		}
		$scope.add=function(id){
			console.log(id)
			for(item in shop){
				if(id==shop[item].goodsID){
					shop[item].number=Number(shop[item].number)+1
					console.log(shop[item].number)
					$http({
						url:'http://datainfo.duapp.com/shopdata/updatecar.php',
						params:{userID:username,goodsID:id,number:Number(shop[item].number)+1,callback:''}
					}).success(function(data){
						console.log(data)
						$scope.shop=shop
						n=0,p=0;
						for(item in shop){
							n+=Number(shop[item].number);
							p+=Number(shop[item].price)*Number(shop[item].number)
							console.log(Number(shop[item].price),Number(shop[item].number))
						}
						console.log(n,p)
						$scope.n=n;
						$scope.p=p;
						
						
						
						
					})
				}
			}		
		}
	})
}])
.controller('set',['$scope','$http','$stateParams','$location',function($scope,$http,$stateParams,$location){
	$scope.name=localStorage.getItem('ID')
	$scope.leave=function(){
		$location.path('/login')
		localStorage.removeItem('ID')
	}
}])
