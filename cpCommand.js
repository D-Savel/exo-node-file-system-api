const fs = require('fs')
const readlineSync = require('readline-sync')

const path = readlineSync.question("Entrer le chemin à partir duquel vous voulez copier un fichier (/home/...)?")

const list = fs.readdirSync(path).forEach(file => {
  if (file.includes(".")) { console.log(file) }
})

const file = readlineSync.question("Entrez le nom du fichier à copier ?")
const path2 = readlineSync.question(`Entrer le chemin vers lequel vous voulez copier le fichier : ${file} (/home/...)?`)

fs.copyFileSync(`${path}/${file}`, `${path2}/${file}`)
console.log(`votre fichier${file} a été copié vers ${path2}`)
