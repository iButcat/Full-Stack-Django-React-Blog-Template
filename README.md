# Full-Stack-Django-React-Blog-Template

<h1>App Diagram</h1>

![Diagram](https://github.com/iButcat/Full-Stack-Django-React-Blog-Template/blob/master/blog-app.png)

<h1>Tech/framework used</h1>

Frontend => Javascript and React
Rest Api => Django rest framework
Backend => Django
Design => Bootstrap

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

<h1>General Design</h1>

The design is not from me. I simply implemented the template bellow with React and Django.
<a href="https://github.com/StartBootstrap/startbootstrap-clean-blog">Template used</a>
 


