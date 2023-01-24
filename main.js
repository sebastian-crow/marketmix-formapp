const { createApp } = Vue;

createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      username: "",
      birthdate: "",
      users: [],
    };
  },
  methods: {
    randomPass() {
      console.log(Math.random().toString(36).slice(2));
    },
    addNewUser() {
      const checkUserName = (element) => element.userName === this.username;
      if (!this.users.some(checkUserName)) {
        this.users.push({
          name: this.name,
          lastName: this.lastname,
          fullName: `${this.name} ${this.lastname}`,
          userName: this.username,
          birthDate: this.birthdate,
        });
      }
      this.randomPass();
    },
  },
  mounted() {
    this.randomPass();
  },
}).mount("#root");
