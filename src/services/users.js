const knex = require('../knex');
const fs = require('fs');

const USER_TABLE = 'users';

let url = ('public/avatars/33333.png')
let buff = fs.readFileSync(url);
let b64 = buff.toString('base64');
let buff = new Buffer(data, 'base64');

try {
    fs.writeFileSync(url, buff);
    return res.send({"status":"success"});
} catch (e) {
    next(e);
}       


module.exports = {
  async getById(id) {
    const item = await knex(USER_TABLE).select('*').where({ id }).first();

    return item;
  },

  async getList() {
    const item = await knex(USER_TABLE).select('*');

    return item;
  },

  async addItem(item) {
    return knex(USER_TABLE).insert(item);
  },

  async updateItem(id, item) {
    return knex(USER_TABLE)
      .update({
        username: item.username || null,
        email: item.email || null,
        avatar: url | b64 || null,
        age: item.age || null,
        phone: item.phone || null,
      })
      .where({ id });
  },

  async patchItem(id, item) {
    return knex(USER_TABLE).update(item).where({ id });
  },

  async removeItem(id) {
    return knex(USER_TABLE).where({ id }).del();
  },
};
