(function() {
  "use strict";

  angular.module("app").controller("peopleController", function($scope) {

    $scope.people = [
                      {
                        name: "John",
                        bio: "John is a cool and hard worker.",
                        bioVisible: false
                      },
                      {
                        name: "Mary",
                        bio: "Mary is an amazing and intelligent person.",
                        bioVisible: false
                      },
                      {
                        name: "Joe",
                        bio: "Joe is lazy and uninspired.",
                        bioVisible: false
                      }
                    ]
    $scope.addPerson = function(newName, newBio) {
      var person = {
                        name: newName,
                        bio: newBio,
                        bioVisible: false
                       }
      $scope.people.push(person);
      $scope.newPersonName = null;
      $scope.newPersonBio = null;
      
    }

    $scope.toggleBio = function(person){
      person.bioVisible = !person.bioVisible;
    };

    $scope.deletePerson = function(person){
      var index = $scope.people.indexOf(person);
      $scope.people.splice(index, 1);
    };

    window.scope = $scope;
  });
}());