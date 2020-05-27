export const lengthAwareMixin = {
  computed: {
    count() {
      return this.text + " " + this.text.length;
    },
  },
};
