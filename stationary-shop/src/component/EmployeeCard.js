import React from 'react'
import '../style/EmployeeCard.css'

const EmployeeCard = (props) => {
	return (
		<div className='employee-card'>
			<img src={props.employee.photo} />
			<h2 className='employee-name'>{props.employee.name}</h2>
			<h3 className='employee-position'>{props.employee.position}</h3>
		</div>
	)
}

export default EmployeeCard