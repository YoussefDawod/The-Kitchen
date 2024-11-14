# The Kitchen

*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background: linear-gradient(
      to right bottom,
      rgba(255, 255, 130, 0.5),
      rgba(249, 33, 33, 0.462)
    ),
    url(./Images/header-background-2.jpg) no-repeat center center/cover;
  display: grid;
  height: 100vh;
  color: #fff;
  gap: 1em;
  padding: 1em;
}
nav{
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
}
.nav-bar {
  display: flex;
  align-items: center;
  
  gap: .05em;
}
.logo-nav {
  width: 600px;
}
.a-nav {
  margin: 1em;
}
.a-nav:hover {
  background-color: #ff58585e;
  border-radius: 5px;
}
h1,
.p-header {
  font-size: 200%;
}
a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5em;
  padding: 5px;
}
#about {
  background: url("./Images/header-background.avif") no-repeat center center/cover;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: left;
  align-items: flex-end;
}
.p-about {
  width: 80%;
  height: 100%;
  padding: 1em;
  box-shadow: 50px 0px 50px #ff000085;
  background-color: #ff7777b0;
  color: #fff;
  font-size: xx-large;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#menu {
  background: linear-gradient(to right bottom, #ff000033, #ff7777),
    url(./Images/menu-hintergrund.png) no-repeat center center/cover;
}
#drinks {
  background: linear-gradient(to right bottom, #003cff63, #ffeb77),
    url(./Images/drinks-hinterground.jpg) no-repeat center center/cover;
}
#menu,
#drinks {
  display: grid;
}
.info-speisen,
.info-drinks {
  margin: 5em;
  font-size: 1.5em;
  color: #fff;
}
.speise-sorten,
.drinks-sorten {
  width: 90%;
  height: 500px;
  margin: 1em auto;
  border: 1px solid rgba(255, 228, 196, 0.514);
  border-radius: 10px;
  background-color: rgba(255, 228, 196, 0.514);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
  justify-content: space-around;
  gap: 1em;
}
.a-sorte {
  color: #333;

  border-radius: 10px;
  text-align: center;
  margin: 1em auto;
  height: 100px;
  width: 100px;
  display: grid;
  place-items: center;
}
.fleisch {
  background-color: rgba(255, 0, 0, 0.699);
  box-shadow: red 10px 10px 5px;
  border: 1px solid rgb(255, 0, 0);
}
.burger {
  background-color: rgba(255, 123, 0, 0.699);
  box-shadow: rgb(255, 145, 0) 10px 10px 5px;
  border: 1px solid rgb(255, 136, 0);
}
.pizza {
  background-color: rgba(255, 255, 0, 0.699);
  box-shadow: rgb(255, 255, 0) 10px 10px 5px;
  border: 1px solid rgb(255, 255, 0);
}
.pasta {
  background-color: rgba(0, 255, 0, 0.699);
  box-shadow: rgb(0, 255, 0) 10px 10px 5px;
  border: 1px solid rgb(0, 255, 0);
}
.beilagen {
  background-color: rgba(0, 255, 255, 0.699);
  box-shadow: rgb(0, 255, 255) 10px 10px 5px;
  border: 1px solid rgb(0, 255, 255);
}
.desserts {
  background-color: rgba(0, 0, 255, 0.699);
  box-shadow: rgb(0, 0, 255) 10px 10px 5px;
  border: 1px solid rgb(0, 0, 255);
}
.wasser {
  background-color: rgba(0, 162, 255, 0.699);
  box-shadow: rgb(0, 174, 255) 10px 10px 5px;
  border: 1px solid rgb(0, 217, 255);
}
.softdrinks {
  background-color: rgba(0, 255, 255, 0.699);
  box-shadow: rgb(0, 255, 255) 10px 10px 5px;
  border: 1px solid rgb(0, 255, 255);
}
.hotdrinks {
  background-color: rgba(0, 255, 0, 0.699);
  box-shadow: rgb(0, 255, 0) 10px 10px 5px;
  border: 1px solid rgb;
}
.bier {
  background-color: rgba(255, 255, 0, 0.699);
  box-shadow: rgb(255, 255, 0) 10px 10px 5px;
  border: 1px solid rgb(255, 255, 0);
}
.cocktails {
  background-color: rgba(255, 123, 0, 0.699);
  box-shadow: rgb(255, 145, 0) 10px 10px 5px;
  border: 1px solid rgb(255, 136, 0);
}
.virgin-cocktails {
  background-color: rgba(255, 0, 0, 0.699);
  box-shadow: red 10px 10px 5px;
  border: 1px solid rgb(255, 0, 0);
}
section {
  height: 100vh;
}
#reservation{
  background: linear-gradient(to right bottom, #00ff2a38, #77f6ffa2),
    url(./Images/Reservirung.avif) no-repeat center center/cover;
    margin: 0 auto;
}
#contact{
  display: flex;
  flex-direction: column;
  background-color: #333;
  color: #fff;
}
.contact{
  padding: 5em;
}
ul {
  list-style-type:none;
  margin-left: 20px;
}
li {
  margin: 10px;
}
form label {
  display: block;
  padding: 20px;
  font-size: 1.5em;
}
.reservation{
  padding: 5em;
}

form input[type="text"],
form input[type="date"],
form input[type="time"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
}

button[type="submit"] {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
.fab {
  color: #ff4141;
  font-size: xx-large;
  margin: 15px;
}
footer {
  align-self:flex-end;
  bottom: 0;
  height: 400px;
  background-color: #333;
  color: #fff;
  padding: 5px;
  text-align: center;
}

footer .logo {
  width: 15%;
}
.startseite {
  background-color: #333;
  color: #fff;
  text-align: center;
  width: 20%;
  padding: 15px;
  margin: 20px;
  border-radius: 6px;
}
