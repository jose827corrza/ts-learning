type userId = string | number;
let user: userId;

user= 'a001';
user= 23;
/**
 * Con la libreria ts-node nos va a permitir correr archivos TS en node, perfecto para dev en backend
 * -> npx ts-node src/demo.ts
 *
 * Es recomendable usarlo pero para proyectos pequenos, por cuestion de rendimiento
 */
