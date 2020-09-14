# Full-Stack-Django-React-Blog-Template

<h5>Please, leave a ⭐ if you are using this project!</h5>

<h1>App Diagram</h1>

![Diagram](https://github.com/iButcat/Full-Stack-Django-React-Blog-Template/blob/master/blog-app.png)

<h1>Tech/framework used</h1>

Frontend: Javascript and React <br/>
Rest Api: Django rest framework <br/>
Backend: Django <br/>
Design: Bootstrap <br/>

<h1>Features</h1>

- Minimal full-stack application <br/>
- Easy to personalized <br/>
- Almost ready to deploy blog application! <br/>
- Add article and see contact from django admin interface <br/>
- Receive Contact <br/>
- Dynamically add articles <br/>
- React monopage with React router <br/>
- Docker Container <br/>
- Frontend/Api/backend divided and easier to maintain! <br/>

<h1>Endpoint</h1>

```
Article: http://127.0.0.1:8000/api/article
```

```
Contact: http://127.0.0.1:8000/api/contact
```

<h1>Installation</h1>

<h3>Mac</h3>

<h3>Backend</h3>

Change directory to blog_backend and setup a virtual environment:

```
python3 -m venv venv 
```

and activate it:

```
source venv/bin/activate
```

Install the dependencies using pip:

```
pip3 install -r requirements.txt
```

Then migrate and create a super user: 

```
python3 manage.py makemigrations 
python3 manage.py migrate
python3 manage.py createsuperuser
```

Finally you should be able to start your server by running:

```
python3 manage.py runserver
```

the backend is now running on http://127.0.0.1:8000 ! 

<h3>Frontend</h3>

Install node modules:
```
yarn install 
or
npm install
```

Run frontend:
```
yarn start
or
npm start
```

Production build: 

```
yarn build
or
npm build
```

<h1>Using Docker</h1>

    docker-compose build
    docker-compose up
    There should now be two servers running:

    http://127.0.0.1:8000 is the Django app
    http://127.0.0.1:3000 is the React app
  
<h1>Using docker-compose run to issue one-off commands</h1>

If you want to run a one-off command, like installing dependencies, you can use the docker-compose run <service_name> <cmd>.

For example, to install a Javascript dependency and save that information to package.json we could run: docker-compose run --rm frontend yarn install --save axios

If you want to be on a shell for one of the Docker services, you can do something like: docker-compose run --rm frontend bash

<h1>Credits</h1>

The design is not from me. I simply implemented this <a href="https://github.com/StartBootstrap/startbootstrap-clean-blog">Template</a> with React and Django.

 


