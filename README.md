# Integrated Management System for Professors and Researchers

## General Description
This project is a web solution comprising a user interface built with React and a backend developed using FastAPI. It is designed to assist professors and researchers in efficiently managing and organizing their personal and professional information.

## Key Features
- **Profile Management**: Enables users to keep their personal and academic information up to date, including contact details, academic qualifications, and professional experience.
- **Publications and Projects**: Facilitates the logging and tracking of scientific publications, research projects, and collaborations.
- **Intuitive Interface**: The React user interface offers a smooth and user-friendly experience, allowing users to manage their information efficiently and effortlessly.
- **Security and Privacy**: The FastAPI backend ensures data protection through modern security practices, safeguarding the confidentiality of personal and academic information.

## Technologies Used
- **Frontend**: React
- **Backend**: FastAPI
- **Database**: (In progress)

## React File Structure
```bash
[ui]
    ├── [public]
    ├── [src]
        ├── [Components]
        ├── [assets]
        ├── [pages]
            ├── [datos]
            ├── [docencia]
                ├── [Postgrado]
                ├── [Pregrado]
                └── [TesisMemorias]
            ├── [formacion]
            ├── [gestion]
                ├── [CargosAdministrativos]
                └── [Proyectos]
            ├── [investigacion]
                ├── [Patentes]
                ├── [Proyectos]
                └── [Publicaciones]
            ├── [login]
            ├── [resumen]
            └── [vinculacion]
```

## Running the Project
1. **Clone the Repository**:
```bash
In SIGPI/ui run: 
npm install
```
2. **Start the Front End**:
```bash
npm start
This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```
### Running the FastAPI Backend
1. **Navigate to the Backend Directory**:
```bash
cd SIGPI/back
```
2. **Install Dependencies**:
```bash
pip install -r requirements.txt
```
3. **Start the Backend Server**:
```bash
The FastAPI server will start on [http://localhost:8000](http://localhost:8000) by default.
uvicorn main:app --reload
```



