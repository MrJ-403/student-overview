import { useState } from 'react'
import './App.css'

const students = [
  { name: "Aiden Carter", level: 1, averageScore: 88 },
  { name: "Bella Thompson", level: 2, averageScore: 91 },
  { name: "Caleb Johnson", level: 3, averageScore: 84 },
  { name: "Daisy Nguyen", level: 3, averageScore: 93 },
  { name: "Ethan Wright", level: 1, averageScore: 76 },
  { name: "Fiona Lopez", level: 3, averageScore: 89 },
  { name: "Gavin Smith", level: 2, averageScore: 82 },
  { name: "Hannah Patel", level: 3, averageScore: 95 },
  { name: "Isaac Chen", level: 1, averageScore: 79 },
  { name: "Jasmine Rivera", level: 2, averageScore: 87 }
];

function App() {
  const [filter, setFilter] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Students Overview</h1>
        <label htmlFor="filter">Filter by level:</label>
        <select name="filter" id="filter" onChange={(e) => setFilter(parseInt(e.target.value))}>
          <option value="0">All Levels</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Average Score</th>
            </tr>
          </thead>
          <tbody>
            {students.filter((student) => filter===0 ? true : student.level === filter)
                     .map((student) => (
                        <tr key={student.name}>
                          <td>{student.name}</td>
                          <td>{student.level}</td>
                          <td>{student.averageScore}</td>
                        </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App