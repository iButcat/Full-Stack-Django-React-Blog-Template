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

<h1>Application port</h1>

```
Django is running on http://127.0.0.1:8000
```
```
React is running on http://127.0.0.1:3000
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

<h3>Frontend</h3>

Follow the instruction provided in the frontend folder

<h1>Credits</h1>

The design is not from me. I simply implemented this <a href="https://github.com/StartBootstrap/startbootstrap-clean-blog">Template</a> with React and Django.

 


