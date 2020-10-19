import { mapActions } from "vuex"

export default {
  methods: {
    updateAlert (isAlert, status, type, message) {
      const vm = this;
      const list = {
        isAlert: isAlert,
        status: status,
        type: type,
        message: message
      }
      console.log(list)
      vm.updateAlertStatus(list);
    },
    ...mapActions("views", ["updateAlertStatus"])
  }
}