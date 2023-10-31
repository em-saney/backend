const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/add', (req, res) => {
    const newTask = req.body.newTask;
    tasks.push(newTask);
    res.redirect('/');
});

app.get('/edit/:task', (req, res) => {
  const taskToEdit = req.params.task;
  res.render('edit', { taskToEdit });
});

app.post('/edit/:task', (req, res) => {
  const { task } = req.params;
  const updatedTask = req.body.updatedTask;
  const index = tasks.indexOf(decodeURIComponent(task));
  tasks[index] = updatedTask;
  res.redirect('/');
});


app.get('/delete/:task', (req, res) => {
    const taskToDelete = req.params.task;
    tasks = tasks.filter(t => t !== taskToDelete);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
