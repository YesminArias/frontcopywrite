# [v2] Full Stack JS – CopyWrite Code Challenge - Español
DEPLOY front: https://app-palindrome-front.herokuapp.com/
DEPLOY back: https://app-palindrome.herokuapp.com/

repo back: https://github.com/YesminArias/backcopywrite
repo front: https://github.com/YesminArias/frontcopywrite

Presento una APP, a la cual se le envía un texto y responde con el mismo texto invertido. 
• Un API usando Node.js + Express 
• Un Frontend cliente usando Bootstrap/Material UI + React




<img src='./src/pagina1.PNG'/>

aqui podemos observar el resultado con el texto invertido y nos indica si es palindromo o no. 
<img src='./src/pagina2.PNG'/>

para correr la aplicacion 

clonar los repositorios, instalar las dependendias con **npm install** y para correrla con **npm start**  para front **http://localhost:3000** y para back **http://localhost:3001**

para probarlos enpoints en postman 
### GET  http://localhost:3001/?text=ELNOMBRE
retornara un JSON:
```bash
{
  "text": "ERBMONLE",
  "palindrome": false
}
```

en el caso de que el texto ingresado sea Palindrome =>

### GET http://localhost:3001/?text=ANA
retornara un JSON:
```bash
{
  "text": "ANA",
  "palindrome": true
}
```

para ejecutar los test del back correr **npm test**

