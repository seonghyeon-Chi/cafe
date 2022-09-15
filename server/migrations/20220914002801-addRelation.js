'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("orders", "user_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("orders", {
      fields: ["user_id"],
      type: "foreign key",
      name: "user_id_order_fk",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addColumn("order_details", "item_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("order_details", {
      fields: ["item_id"],
      type: "foreign key",
      name: "item_id_order_detail_fk",
      references: {
        table: "items",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addColumn("order_details", "order_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("order_details", {
      fields: ["order_id"],
      type: "foreign key",
      name: "order_id_fk",
      references: {
        table: "orders",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addColumn("payments", "user_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("payments", {
      fields: ["user_id"],
      type: "foreign key",
      name: "user_id_payment_fk",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addColumn("payment_details", "item_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("payment_details", {
      fields: ["item_id"],
      type: "foreign key",
      name: "item_id_payment_detail_fk",
      references: {
        table: "items",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addColumn("payment_details", "payment_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("payment_details", {
      fields: ["payment_id"],
      type: "foreign key",
      name: "payment_id_fk",
      references: {
        table: "payments",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("orders", "user_id");
    await queryInterface.removeColumn("order_details", "item_id");
    await queryInterface.removeColumn("order_details", "order_id");

    await queryInterface.removeColumn("payments", "user_id");
    await queryInterface.removeColumn("payment_details", "item_id");
    await queryInterface.removeColumn("payment_details", "payment_id");
  },
};
