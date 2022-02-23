const dev = process.env.NODE_ENV !== 'production'

export const server = dev
  ? 'http://localhost:3000'
  : 'https://eurobuilding.vercel.app' // Cambiará dependiendo de la variable de entorno NODE_ENV
