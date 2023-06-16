'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users_to_groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      groupId: {
        field: 'group_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'groups',
          key: 'id'
        }
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('users_to_groups', {
      fields: ['user_id', 'group_id'],
      type: 'unique',
      name: 'unique_pair_constraint'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users_to_groups');
  }
};
