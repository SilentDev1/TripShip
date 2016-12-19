'use strict';
// Just using this page as example to fill in can deleted once we have something in place
//todo: currently mock data remove for firebase
angular.module('main.services', [])

.factory('Places', function () {
  var places = [
    {
      name: "Example1",
      address: "Manchester NH",
      distance: 1
    },
    {
      name: "Example2 - France hospital",
      address: "Nashua, NH",
      distance: 1.2
    },
    {
      name: "Example3",
      address: "Concord, NH",
      distance: 1.3
    },
    {
      name: "Example4",
      address: "Bow, NH",
      distance: 1.4
    },
    {
      name: "Example5",
      address: "Boston, MA",
      distance: 1.5
    }
  ];

  var recent = [
    {
      name: "Example6",
      address: "Cambridge, MA",
      distance: 1.4
    },
    {
      name: "Example7",
      address: "Manchester, NH",
      distance: 1.5
    }
  ];

  return {
    all: function () {
      return places;
    },
    remove: function (post) {
      places.splice(places.indexOf(post), 1);
    },
    get: function (postId) {
      for (var i = 0; i < places.length; i++) {
        if (places[i].id === parseInt(postId)) {
          return places[i];
        }
      }
      return null;
    },
    recent: function () {
      return recent;
    }
  };
})

.factory('Drivers', function () {
  var drivers = [
    {
      id: 1,
      name: "Hung Cao",
      plate: "29A578.89",
      brand: "Kia Morning",
      distance: 0.6,
      status: "Bidding"
    },
    {
      id: 2,
      name: "Richard Fisher",
      plate: "29A578.89",
      brand: "Kia Morning",
      distance: 0.6,
      status: "Contacting"
    },
    {
      id: 3,
      name: "Khoa Cao",
      plate: "29A578.89",
      brand: "Kia Morning",
      distance: 0.6,
      status: "Contacting"
    },
    {
      id: 4,
      name: "Tommy Parnell",
      plate: "29A578.89",
      brand: "Kia Morning",
      distance: 0.6,
      status: "Contacting"
    },
  ];

  return {
    all: function () {
      return drivers;
    },
    remove: function (driver) {
      drivers.splice(drivers.indexOf(driver), 1);
    },
    get: function (driverId) {
      for (var i = 0; i < drivers.length; i++) {
        if (drivers[i].id === parseInt(driverId)) {
          return drivers[i];
        }
      }
      return null;
    }
  };
})

.factory('Trips', function() {
    var trips = [
      {
        id: 1,
        from: 'Manchester, NH',
        to: 'Nashua, NH',
        time: '2016-01-02'
      },
      {
        id: 2,
        from: 'Nashua, NH',
        to: 'Boston, MA',
        time: '2015-12-11'
      },
      {
        id: 3,
        from: 'Manchester, NH',
        to: 'Boston, MA',
        time: '2015-11-10'
      },
      {
        id: 4,
        from: 'Boston, MA',
        to: 'Concord, NH',
        time: '2015-11-10'
      }
    ];

    return {
      all: function () {
        return trips;
      }
    };
})

.factory('Notifications', function () {
  var notifications = [
    {
      id: 1,
      title: "Example Notifications",
      content: "Will need to hook up with live push",
      createdAt: "2016-02-14 12:00:00",
      read: true
    },
    {
      id: 2,
      title: "Driver is here",
      content: "",
      createdAt: "2016-02-13 12:00:00",
      read: false
    },
    {
      id: 3,
      title: "Package delivered",
      content: "",
      createdAt: "2016-02-12 12:00:00",
      read: false
    }
  ];

  return {
    all: function () {
      return notifications;
    },
    remove: function (notification) {
      notifications.splice(notifications.indexOf(notification), 1);
    },
    get: function (notificationId) {
      for (var i = 0; i < notifications.length; i++) {
        if (notifications[i].id === parseInt(notificationId)) {
          return notifications[i];
        }
      }
      return null;
    }
  };
});
