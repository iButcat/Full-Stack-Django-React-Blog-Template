# Full-Stack-Django-React-Blog-Template

<h1>App Diagram</h1>

![Diagram](https://github.com/iButcat/Full-Stack-Django-React-Blog-Template/blob/master/blog-app.png)

<h1>Installation</h1>

<h3>Mac</h3>

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


