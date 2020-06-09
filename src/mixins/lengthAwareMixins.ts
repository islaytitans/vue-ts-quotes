export const lengthAwareMixin = {
  computed: {
    count(): string {
      return this.text + " " + this.text.length;
    },
  },
};
