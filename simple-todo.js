Tasks = new Mongo.Collection('tasks'); // creates a collection called tasks

if (Meteor.isClient) { // this code runs in the client
 
  
  angular.module('simple-todos',['angular-meteor']); // inject angular-meteor service
 
  angular.module('simple-todos').controller('TodosListCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {
 
      $scope.tasks = $meteor.collection(Tasks); // this grabs the collection using $meteor service
      
      $scope.addTask = function(newTask){
          
          $scope.tasks.push({
              text: newTask,
              createdAt: new Date()
          })
      }
  }]);
  
}
