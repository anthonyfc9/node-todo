window.onload = function() {
    console.log('script loaded');
    function packUpForm(){
        const tass = document.querySelector('.task-task-input').value,
        details = document.querySelector('.task-details-input').value,
        image = document.querySelector('.task-image-input').value,
        iscompleted = document.querySelector('.task-iscompleted-input').value;
        const data = {task:tass, details:details, image:image, iscompleted};
        return data;
    }
    
function createTask(){


    fetch('/api/task', {
                method: 'post',
                body:    JSON.stringify(packUpForm()),
                headers: { 'Content-Type': 'application/json' }
        })
      .then(res => {return res.json();
    })
    .then(data =>{window.location.replace('/task/' + data.id);})
     .catch(err => console.error("fetch error: ", err));
}

if(document.getElementById('submit')){
    document.getElementById('submit').addEventListener('click', createTask)
}


function deleteTask(){
    const id = document.getElementById("delete-task").value;
    fetch('/api/task/' + id, {
        method:'delete',
        body:JSON.stringify({id:id}),
        headers:{ 'Content-Type': 'application/json' }
    })
      .then(response => {
        // After the database confirms that something was deleted, we're sending the user back to the list of all pokemon
            window.location.replace('/task/');
        })
        .catch(err => console.error("delete fetch error: ", err));
}

if(document.getElementById('delete-task')){
    document.getElementById('delete-task').addEventListener('click', deleteTask)

}


}