'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', [{
      name: '에스프레소',
      price: 1500,
      image: '1.png',
      createdAt: '2022-09-14 13:12',
      updatedAt: '2022-09-14 13:12'
    }], {});
    await queryInterface.bulkInsert('items', [{
      name: '흑당카페라떼',
      price: 3800,
      image: '2.png',
      createdAt: '2022-09-14 13:12',
      updatedAt: '2022-09-14 13:12'
    }], {});
    await queryInterface.bulkInsert('items', [{
      name: '카페라떼',
      price: 2500,
      image: '3.png',
      createdAt: '2022-09-14 13:12',
      updatedAt: '2022-09-14 13:12'
    }], {});
    await queryInterface.bulkInsert('items', [{
      name: '카푸치노',
      price: 2500,
      image: '4.png',
      createdAt: '2022-09-14 13:12',
      updatedAt: '2022-09-14 13:12'
    }], {});
    await queryInterface.bulkInsert('items', [{
      name: '바닐라라떼',
      price: 2800,
      image: '5.png',
      createdAt: '2022-09-14 13:12',
      updatedAt: '2022-09-14 13:12'
    }], {});
    await queryInterface.bulkInsert('items', [{
      name: '헤이즐넛라떼',
      price: 2800,
      image: '6.png',
      createdAt: '2022-09-14 13:12',
      updatedAt: '2022-09-14 13:12'
    }], {});
    await queryInterface.bulkInsert('items', [{
      name: '카라멜마끼야또',
      price: 3000,
      image: '7.png',
      createdAt: '2022-09-14 13:12',
      updatedAt: '2022-09-14 13:12'
    }], {});
    await queryInterface.bulkInsert('items', [{
      name: '카페모카',
      price: 3000,
      image: '8.png',
      createdAt: '2022-09-14 13:12',
      updatedAt: '2022-09-14 13:12'
    }], {});
    await queryInterface.bulkInsert('items', [{
      name: '돌체라떼',
      price: 3500,
      image: '9.png',
      createdAt: '2022-09-14 13:12',
      updatedAt: '2022-09-14 13:12'
    }], {});
    await queryInterface.bulkInsert('items', [{
      name: '아인슈페너라떼',
      price: 3900,
      image: '10.png',
      createdAt: '2022-09-14 13:12',
      updatedAt: '2022-09-14 13:12'
    }], {});
    await queryInterface.bulkInsert('items', [{
      name: '아메리카노',
      price: 1500,
      image: '11.png',
      createdAt: '2022-09-14 13:12',
      updatedAt: '2022-09-14 13:12'
    }], {});
    await queryInterface.bulkInsert('items', [{
      name: '커피밀크쉐이크',
      price: 3900,
      image: '12.png',
      createdAt: '2022-09-14 13:12',
      updatedAt: '2022-09-14 13:12'
    }], {});
    await queryInterface.bulkInsert('items', [{
      name: '모카자바칩라떼',
      price: 4400,
      image: '13.png',
      createdAt: '2022-09-14 13:12',
      updatedAt: '2022-09-14 13:12'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items', null, {});
  }
};
