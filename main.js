const { createApp } = Vue;

/* Vue.use(VeeValidate); */
console.log("Vee-validate", VeeValidate);


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
    getAge(birthdate) {
      let ageNow = Date.now() - birthdate.getTime();
      let ageDate = new Date(ageNow);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
    randomPass() {
      const randomString = () => {
        let string = Math.random().toString(36).slice(2);
        let result = "";
        for (let i = 0; i < 4; i++)
          result += string[Math.floor(string.length * Math.random())];
        return result;
      };

      const randomNumber = () =>
        Math.floor(
          Math.pow(10, 4 - 1) +
            Math.random() * (Math.pow(10, 4) - Math.pow(10, 4 - 1) - 1)
        );
      return `${randomString()}${randomNumber()}`;
    },
    addNewUser() {
      const checkUserName = (element) => element.userName === this.username;
      if (!this.users.some(checkUserName)) {
        this.users.push({
          name: this.name,
          lastName: this.lastname,
          fullName: `${this.name} ${this.lastname}`,
          userName: this.username,
          randomPass: this.randomPass(),
          birthDate: this.birthdate,
          age: this.getAge(new Date(this.birthdate)),
        });
      }
    },
  },
  validations() {
    return {
      name: { required },
      lastname: { required },
      username: { required },
      birthdate: { required },
    };
  },
  mounted() {
    this.randomPass(); // Working good
  },
}).mount("#root");
