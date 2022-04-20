import * as express from 'express'

class App {
    public application : express.Application;

    constructor () {
        this.application = express();
    }
}

const app = new App().application;

app.listen(3000, () => {
    console.log('[ web & socket server ] listening on 3000');
});