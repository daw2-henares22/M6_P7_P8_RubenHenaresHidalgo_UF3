import { resolve } from 'path';
import path from "path";

export default {
    //Decimos donde esta el main.js. path nos determina la raiz de nuestro proyecto
    root: path.resolve(__dirname, "src"),
    build: {
        outDir: path.resolve(__dirname, "dist"),
        rollupOptions: {
            //decir que archivo y donde esta lo que se motra por pantalla 
            input: {
                index: path.resolve(__dirname, "src/index.html"),
               
            },
        },
    },
    base: './'
};