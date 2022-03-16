# Getting Started with project

# React Training

## **Technology used:**

- **[PHP: v8.1](https://www.php.net)**
- **[MySQL: v8.0](https://www.mysql.com)**
- **[Laravel: v9.2](https://laravel.com)**
- **[Node: v16.13.1](https://nodejs.org/en/)**
- **[Docker](https://www.docker.com/)**
- **[Nginx: v1.8](https://www.nginx.com/)**
- **[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**
- **[Html: v5](https://www.w3schools.com/html/)**
- **[SCSS](https://sass-lang.com)**


## **Setup environment on local**

Download [git-scm](https://git-scm.com/downloads) and install

Download https://www.docker.com and install

Download https://nodejs.org/en/ and install

**Clone Github source**

```JS
Run: git@github.com:duypham90/react-training.git
Run: cd react-training
Run: git fetch --all
Run: git pull -r
Run: git checkout develop || git checkout main
```

### **Notes:**
- Branch **main**: Use for deploy to production
- Branch **develop**: Use for develop

## **Setup server:**

**Front-End**
```JS
Run: cd front-end
Run: cp .env.development.example .env.development
```

**Back-end**
```JS
Run: cd back-end
Run: cp .env.example .env
```

**Build docker.**

```JS
Run: cd react-training
Run: docker-compose build
Run: docker-compose up -d
```

```
**Migrate database:**
```JS

Run: docker exec -it react_back_end bash
Run: composer install
Run: php artisan migrate:fresh --seed

```
**Database information:**
```PHP
DB_HOST=localhost
DB_PORT=44336
DB_DATABASE=react_training_db
DB_USERNAME=admin
DB_PASSWORD=123123
```

**Setup Front-end:**

- Run: npm install --global yarn
- Run: yarn install
- Run: yarn start (Build SCSS run on develop)
- Run: yarn build (Build SCSS deploy to production)


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
