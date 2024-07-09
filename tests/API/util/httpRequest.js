const request = require('supertest');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
async function customGet(path, queryParams) {
    return await request(process.env.bahmniHost)
        .get(path)
        .query(queryParams)
        .set("Authorization", "Basic " + process.env.admin)
}

async function customPost(path, payload, queryParams) {
    return await request(process.env.bahmniHost)
        .post(path)
        .query(queryParams)
        .set("Authorization", "Basic " + process.env.admin)
        .set("Content-Type", "application/json")
        .send(payload)
}

module.exports = {
    customGet,
    customPost
};