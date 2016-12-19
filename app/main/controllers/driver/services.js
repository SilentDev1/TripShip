// Just using this page as example to fill in can deleted once we have something in place
//todo: currently mock data remove for firebase

'use strict';
angular.module('main.services', [])
  .factory('Driver', function () {
    var driver = {
      id: 1,
      name: "{{ firebaseUser.displayName }}",
      plate: "29A567.89",
      brand: "Kia Morning",
      ref_code: "486969",
      rating: 4,
      balance: "580",
      balance_pending: 0
    };

    return {
      get: function () {
        return driver;
      }
    };
  })
  .factory('Jobs', function () {
    var jobs = [
      {
        id: 1,
        unique_id: "ADR-0000016-1-048",
        date: "2015-02-22 16:04:00",
        from: {
          title: "Manchester NH",
          address: "373 Harvard St",
          distance: 0.6
        },
        to: {
          title: "Concord NH",
          address: "1 main st"
        },
        customer: {
          name: "Khoa Cao",
          phone: "1234567"
        },
        payment_method: "credit"
      },
      {
        id: 2,
        unique_id: "ADR-0000016-1-048",
        date: "2015-02-22 16:04:00",
        from: {
          title: "Manchester NH",
          address: "373 Harvard St",
          distance: 0.6
        },
        to: {
          title: "Concord NH",
          address: "1 main st"
        },
        customer: {
          name: "Tommy",
          phone: "1234567"
        },
        payment_method: "credit"
      },
      {
        id: 3,
        unique_id: "ADR-0000016-1-048",
        date: "2015-02-22 16:04:00",
        from: {
          title: "Manchester NH",
          address: "373 Harvard St",
          distance: 0.6
        },
        to: {
          title: "Concord NH",
          address: "1 main st"
        },
        customer: {
          name: "Richard",
          phone: "1234567"
        },
        payment_method: "credit"
      },
      {
        id: 4,
        date: "2015-02-22 16:04:00",
        from: {
          title: "Manchester NH",
          address: "373 Harvard St",
          distance: 0.6
        },
        to: {
          title: "Concord NH",
          address: "1 main st"
        },
        customer: {
          name: "Trung",
          phone: "1234567"
        },
        payment_method: "credit"
      },
      {
        id: 5,
        unique_id: "ADR-0000016-1-048",
        date: "2015-02-22 16:04:00",
        from: {
          title: "Manchester NH",
          address: "373 Harvard St",
          distance: 0.6
        },
        to: {
          title: "Concord NH",
          address: "1 main st"
        },
        customer: {
          name: "Tommy",
          phone: "1234567"
        },
        payment_method: "credit"
      },
    ];

    return {
      all: function () {
        return jobs;
      },
      get: function(jobId) {
        for (var i = 0; i < jobs.length; i++) {
          if (jobs[i].id === parseInt(jobId)) {
            return jobs[i];
          }
        }
      }
    };
  })

  .factory('Report', function() {
    // some fake data
    var report = {
      today: 5,
      this_week: 15,
      this_month: 15,
      last_month: 10,
      this_year: 25,
      last_year: 0
    };

    return {
      all: function() {
        return report;
      }
    };
  })

  // Balance transactions
  .factory('BalanceTransactions', function() {
    // some fake data
    var trans = [
      {
        id: 1,
        unique_id: "WD-0000016-1-048",
        date: "2015-02-22 16:04:00",
        amount: 1000,
        action: "withdraw"
      },
      {
        id: 2,
        unique_id: "WD-0000016-1-048",
        date: "2015-02-22 16:04:00",
        amount: 1000,
        action: "withdraw"
      },
      {
        id: 3,
        unique_id: "WD-0000016-1-048",
        date: "2015-02-22 16:04:00",
        amount: 1000,
        action: "withdraw"
      },
      {
        id: 4,
        unique_id: "WD-0000016-1-048",
        date: "2015-02-22 16:04:00",
        amount: 1000,
        action: "withdraw"
      }
    ];

    return {
      all: function() {
        return trans;
      }
    };
  });
