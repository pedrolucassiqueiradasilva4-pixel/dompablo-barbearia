[vercel.json](https://github.com/user-attachments/files/22992172/vercel.json)
{
  "version": 2,
  "builds": [
    { "src": "frontend/package.json", "use": "@vercel/static-build" }
  ],
  "rootDirectory": "frontend",
  "buildCommand": "npm install && npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_API_URL": "https://dompablo-barbearia.onrender.com"
  }
}
