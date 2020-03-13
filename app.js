new Vue({
  el: "#vue-app",
  data: {
    health: 100,
    ended: 0
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = 1;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = 0;
    }
  },
  computed: {}
});
