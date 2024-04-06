import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://xfunywwu:09sEevQjTbHJUFRkQvL-jkrYVCn00C0D@isilo.db.elephantsql.com/xfunywwu");
    await client.connect();
    return client;
}