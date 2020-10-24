import app from 'next-connect'

const handler = app()
                    .get((req, res) => {
                        res.json({ hello: 'world' })
                    })
                    .post((req, res) => {
                        res.send('POst')
                    })

export default handler