import React, {useEffect, useState} from "react";

function CreateLoginForm() {

    const [name, setName] = useState("Guest");
    const [password, setPassword] = useState("Insert Password");
    const [email, setEmail] = useState("Insert Email");
    const [selectOption, setSelectOption] = useState("Select Option");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSelectOptionChange(event) {
        setSelectOption(event.target.value);
    }

    return (<div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name} </p>
            <input value={password} onChange={handlePasswordChange}/>
            <p>Password: {password}</p>
            <input value={email} onChange={handleEmailChange}/>
            <p>Email: {email}</p>
            <input value={selectOption} onChange={handleSelectOptionChange}/>
        </div>

    );
}

export default CreateLoginForm;

function Car(){

    const[car, setCar] = useState({year: 2016,
        make:"Ford",
        model:"Mondeo"});

    function handleYearChange(event) {
        setCar( c=>({...c, year: event.target.value}));
    }

    function handleMakeChange(event) {
        setCar(c =>({...c, make: event.target.value}));
    }
    function handleModelChange(event) {
        setCar(c=>({...c, model: event.target.value}));
    }

    return (
        <div>

            <p>Your favorite Car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
    );
}

export default Car;


import {useState} from "react";
function Car(){

    const[foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f=>[...f,newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=> i !== index))
    }

    return (
        <div>
            <h2>List of Food </h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={()=>handleRemoveFood(index)}>{food.toUpperCase()}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default Car;

import React, {useState} from "react";

function Car() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");


    function handleAddCar(index) {
        const newCar={
            year: carYear,
            carMake: carMake,
            model: carModel
        };

        setCars(c => [...c,newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <div>
            <h2>List of car object</h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/>
            <input type="text" value={carMake} onChange={handleMakeChange}
                   placeholder="Enter car model"/><br/>
            <input type="text" value={carModel} onChange={handleModelChange}
                   placeholder="Enter car model"/><br/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default Car;


function Car() {

    const [task, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk a dog"]);
    const [newTask, setNewTask] = useState("");

    function hendleInputChange(event) {
        setNewTask(event.target.value);
    }

    function AddTask(index) {
        if (newTask.trim() !== "") {
            setTasks(t => [...task, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = task.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < task.length -1) {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div className="add-task">
                <input type="text" placeholder="Enter a task" value={newTask}
                       onChange={hendleInputChange}/>
                <button className="add-button" onClick={AddTask}>Add Task</button>
            </div>
            <ol>
                {task.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default Car;


function Car() {

    const [time, setTime] = useState(new Date());
    // const [radio, setRadio] = useState(new radio);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}: ${padZero(minutes)}: ${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number) {
        return (number < 10? "0" :"") + number;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default Car;