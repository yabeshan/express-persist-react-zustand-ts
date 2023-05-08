import express from "express";
import router from "./routes.js";
const app = express();
app.use(express.json());
app.use(router);
const port = process.env.PORT || 3000;
const start = async () => {
    try {
        app.listen(port, () => console.log('____start App port____', port));
    }
    catch (err) {
        console.log('____start App error____', err.message);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=index.js.map