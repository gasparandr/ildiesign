
import ProjectsController from "./controllers/ProjectsController";
import PageController from "./controllers/PageController";

require( "dotenv" ).config();

import * as compression from "compression";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from "cors";
import * as hbs from "express-handlebars";



const publicPath = __dirname.substr( 0, __dirname.indexOf( "build" ) ) + "public";






class Server {

    public app: express.Application;





    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.errors();
        this.error404();
    }



    public config() {

        this.app.engine( "hbs", hbs({
            extname: "hbs",
            defaultLayout: "layout",
            layoutsDir: __dirname + "/../views/layouts",
            partialsDir: __dirname + "/../views/partials"
        }));

        this.app.set( "view engine", "hbs" );

        this.app.use( "*/public", express.static( publicPath ) );
        this.app.use( "/favicon.ico", express.static( publicPath + "/images/favicon.ico" ) );

        this.app.use( bodyParser.urlencoded( { extended: true } ) );
        this.app.use( bodyParser.json() );
        this.app.use( compression() );
        this.app.use( cors() );


    }



    public routes() {

        this.app.use( '/', PageController );
        this.app.use( '/projects', ProjectsController );

    }



    public errors() {
        this.app.use( (err, req, res, next) => {
            res.status( 422 ).json( { success: false, message: err.message, code: err.statusCode } );
        });
    }



    public error404() {
        this.app.use( '*', (req, res, next) => {
            res.render( "404", { title: "ildiesign | Page Not Found" } );
        });
    }

}



export default new Server().app;