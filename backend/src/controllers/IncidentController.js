const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const [count] = await connection('INCIDENTS').count();
        const { page = 1 } = request.query;

        const incidents = await connection('INCIDENTS')
        .join('ONGS', 'ong_id', '=', 'INCIDENTS.ong_id')
        .limit(5)
        .offset((page - 1) * 5).
        select([
            'INCIDENTS.*',
            'ONGS.name',
            'ONGS.email',
            'ONGS.whatsapp',
            'ONGS.city',
            'ONGS.uf'
        ]);

        response.header('X-Total-Count', count['count']);

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        await connection('INCIDENTS').insert({
            title,
            description,
            value,
            ong_id
        });

        const [id] = await connection('INCIDENTS').max('id as id')

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('INCIDENTS')
        .where('id', id).select('ong_id').first();

        if(incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' })
        }

        await connection('INCIDENTS').where('id', id).delete();
        return response.status(204).send();
    }
}