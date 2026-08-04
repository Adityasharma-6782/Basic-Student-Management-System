from fastapi import FastAPI, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr
from typing import Optional
import json

app = FastAPI()

class student(BaseModel):
    name: str
    age: int
    roll_no: str
    email: EmailStr
    mobile_no: int

class update_data(BaseModel):
    name: Optional[str] = None
    age: Optional[int] = None
    email: Optional[EmailStr] = None
    mobile_no: Optional[int] = None

# Load data from the JSON file
def load_data():
    with open('students.json', 'r') as f:
        return json.load(f)

# save data in the JSON file
def save_data(data):
    with open('students.json', 'w') as f:
        json.dump(data, f)

# Home page route
@app.get('/')
def home_page():
    return {'message': 'this is home page'}

# Create student data route
@app.post('/create')
def create_data(data: student):
    student_data = load_data()

    if data.roll_no in student_data:
        raise HTTPException(status_code=400, detail='Student with this roll number already exists')

    student_data[data.roll_no] = data.dict(exclude={'roll_no'})

    save_data(student_data)
    return JSONResponse(content={'message': 'Student data created successfully'}, status_code=201)

# retrieve student data route
@app.get('/students')
def students_data():
    student_data = load_data()
    return student_data

# retrieve student data by roll number route
@app.get('/student/{roll_no}')
def student_data(roll_no: str):
    student_data = load_data()

    if roll_no not in student_data:
        raise HTTPException(status_code=404, detail='Student not found')

    return student_data[roll_no]

# update student data by roll number route
@app.put('/update/{roll_no}')
def update_student(roll_no: str, data: update_data):
    student_data = load_data()

    if roll_no not in student_data:
        raise HTTPException(status_code=404, detail='Student not found')

    update_fields = data.model_dump(exclude_unset=True)

    for key, value in update_fields.items():
        student_data[roll_no][key] = value

    save_data(student_data)
    return {"message": "Item updated successfully", "data": student_data[roll_no]}

# delete student data by roll number route
@app.delete('/delete/{roll_no}')
def delete_student(roll_no: str):
    student_data = load_data()

    if roll_no not in student_data:
        raise HTTPException(status_code=404, detail='Student not found')

    del student_data[roll_no]
    save_data(student_data)
    return JSONResponse(content={'message': 'Student data deleted successfully'}, status_code=200)
