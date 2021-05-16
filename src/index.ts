import fastify from 'fastify'
import fs from 'fs';
import path from 'path';

const server = fastify()

server.get('/', async (request, reply) => {
    const stream = fs.createReadStream(path.resolve(__dirname, '../public/index.html'))
    reply.type('text/html').send(stream)
    return stream;
})

server.listen(4800, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})