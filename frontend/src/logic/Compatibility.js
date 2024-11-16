import React, { useState, useEffect } from 'react';
import '../StyleSheets/Compatibility.css';

export default function Compatibility() {
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  
  const [departmentInput1, setDepartmentInput1] = useState('');
  const [departmentInput2, setDepartmentInput2] = useState('');
  const [employeeInput1, setEmployeeInput1] = useState('');
  const [employeeInput2, setEmployeeInput2] = useState('');

  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [filteredEmployees1, setFilteredEmployees1] = useState([]);
  const [filteredEmployees2, setFilteredEmployees2] = useState([]);
  
  useEffect(() => {
    fetch('http://tikvenniesemechki.ru/api/v1/departments')
      .then((response) => response.json())
      .then((data) => setDepartments(data))
      .catch((error) => console.error('Ошибка загрузки отделов:', error));
  }, []);

  useEffect(() => {
    fetch('http://tikvenniesemechki.ru/api/v1/user')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Ошибка загрузки сотрудников:', error));
  }, []);
  
  const handleDepartmentInput = (input, setFiltered, setInput) => {
    setInput(input);
    const filtered = departments.filter((dept) =>
      dept.name.toLowerCase().includes(input.toLowerCase())
    );
    setFiltered(filtered);
  };

  const handleEmployeeInput = (input, department, setFiltered, setInput) => {
    setInput(input);
    const filtered = employees
      .filter((emp) => emp.department === department.id)
      .filter((emp) => emp.name.toLowerCase().includes(input.toLowerCase()));
    setFiltered(filtered);
  };
  
  const getEmployeesByDepartment = (department) =>
    employees.filter((emp) => emp.department === department);
	
  const checkCompatibility = () => {
	  fetch('http://tikvenniesemechki.ru/api/v1/compatibilitycheck',{
			body: JSON.stringify({employee1: employeeInput1, employee2: employeeInput2}),
			headers: {
	  'Content-Type': 'application/json'}})
  .then();}//tbd

  return (
    <div className="compatibility-container">
      <div className="compatibility-results">
        <h1>Результаты совместимости</h1>
        <p>Выберите двух сотрудников справа, чтобы увидеть их совместимость.</p>
      </div>
      <div className="compatibility-forms">
        <h2>Выберите сотрудников</h2>

        <div>
          <h3>Сотрудник 1</h3>
          <label>
            Отдел:
            <input
              type="text"
              value={departmentInput1}
              onChange={(e) =>
                handleDepartmentInput(e.target.value, setFilteredDepartments, setDepartmentInput1)
              }
              placeholder="Введите или выберите отдел"
              list="departments1"
            />
            <datalist id="departments1">
              {filteredDepartments.map((dept) => (
                <option key={dept.id} value={dept.name} />
              ))}
            </datalist>
          </label>
          <label>
            ФИО:
            <input
              type="text"
              value={employeeInput1}
              onChange={(e) =>
                handleEmployeeInput(
                  e.target.value,
                  departmentInput1,
                  setFilteredEmployees1,
                  setEmployeeInput1
                )
              }
              placeholder="Введите или выберите сотрудника"
              list="employees1"
            />
            <datalist id="employees1">
              {filteredEmployees1.map((emp) => (
                <option key={emp.id} value={emp.name} />
              ))}
            </datalist>
          </label>
        </div>

        <div>
          <h3>Сотрудник 2</h3>
          <label>
            Отдел:
            <input
              type="text"
              value={departmentInput2}
              onChange={(e) =>
                handleDepartmentInput(e.target.value, setFilteredDepartments, setDepartmentInput2)
              }
              placeholder="Введите или выберите отдел"
              list="departments2"
            />
            <datalist id="departments2">
              {filteredDepartments.map((dept) => (
                <option key={dept.id} value={dept.name} />
              ))}
            </datalist>
          </label>
          <label>
            ФИО:
            <input
              type="text"
              value={employeeInput2}
              onChange={(e) =>
                handleEmployeeInput(
                  e.target.value,
                  departmentInput2,
                  setFilteredEmployees2,
                  setEmployeeInput2
                )
              }
              placeholder="Введите или выберите сотрудника"
              list="employees2"
            />
            <datalist id="employees2">
              {filteredEmployees2.map((emp) => (
                <option key={emp.id} value={emp.name} />
              ))}
            </datalist>
          </label>
        </div>
      </div>
    </div>
  );
}