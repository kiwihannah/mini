module.exports = {
    up: (queryInterface, Sequelize) => {
  
      let datas = [];
      for(let i = 0; i < 10; i++){
        let obj = {
          useremail: "test" + i + "@example.com",
          name: "testUser" + i,
          password: "1234",
        }
        datas.push(obj)
      }
  
      return queryInterface.bulkInsert('users', datas, {});
    },
  
    down: (queryInterface, Sequelize) => {
  
    }
  };