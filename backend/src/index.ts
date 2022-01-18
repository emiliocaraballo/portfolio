require('dotenv').config();
import app from './app'
import { general } from './config/general';
const main = async (): Promise<void> => {
    app.listen(app.get("port"));
    console.log("SERVER "+app.get("port"));
}
main();