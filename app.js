(function() {

  return {
    events: {
      'app.activated':'init'
    },

    init: function() {
      this.ticketFields("priority").disable();
    }
  };

}());
