import React from 'react'
import EmployeeCard from './EmployeeCard.js'

const EmployeeList = (props) => {
	return (
		<div>
			{/* take employees from json file */}
			<EmployeeCard employee={{photo: 'img.jpg', name: 'Name', position: 'Staff Member'}}/>
		</div>
	)
}

export default EmployeeList
