import { Knex } from 'knex';
import client from './client';
import { User } from '../types';

export default class Database {
  client: Knex;
  constructor() {
    this.client = client;
  }
  async getAllUsers(): Promise<User[]> {
    const users = await this.client('users').select();
    return users as User[];
  }
}
